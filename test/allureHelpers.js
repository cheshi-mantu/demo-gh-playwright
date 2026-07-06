// Shared helpers that replicate the pytest "etalon" project logic
// (gh-py-pytest-allurectl-watch) for driving test pass / fail / broken
// results through the TESTS_SUCCESS environment variable.
//
//   TESTS_SUCCESS=always  -> every test passes
//   TESTS_SUCCESS=never   -> every test fails (assertion -> Allure "failed")
//   TESTS_SUCCESS=broken  -> every test is broken (thrown Error -> Allure "broken")
//   TESTS_SUCCESS=random  -> ~10% of assertions fail (default when unset)
//
// In Allure the status is derived from the error kind: an expect() failure
// carries a `matcherResult` and becomes "failed", while a plain thrown Error
// becomes "broken" — the same distinction pytest makes between AssertionError
// and RuntimeError.

const os = require("os");
const { expect, test } = require("@playwright/test");
const allure = require("allure-js-commons");

// Mirrors the 0.1 probability used in the per-suite conftest._should_fail().
const FAIL_PROBABILITY = 0.1;

// Mirrors conftest._should_fail(): returns true when the current step should fail.
function shouldFail() {
  const mode = process.env.TESTS_SUCCESS || "random";
  if (mode === "always") return false;
  if (mode === "never") return true;
  return Math.random() < FAIL_PROBABILITY;
}

// Mirrors the OS label set by the root conftest gate (TESTS_OS overrides).
function osLabel() {
  const map = { darwin: "macos", win32: "windows", linux: "linux" };
  return process.env.TESTS_OS || map[os.platform()] || os.platform();
}

// Mirrors the autouse root conftest._tests_success_gate fixture: always tags the
// OS, and turns every test "broken" when TESTS_SUCCESS=broken. Call from beforeEach.
async function applyGate() {
  await allure.label("os", osLabel());
  if ((process.env.TESTS_SUCCESS || "random") === "broken") {
    // allure-playwright derives the test status from Playwright's own result and
    // maps only `timedOut` to Allure "broken" — a thrown Error becomes "failed".
    // To reproduce the pytest RuntimeError -> BROKEN behaviour we force a timeout.
    test.setTimeout(1);
    await new Promise((resolve) => setTimeout(resolve, 50));
  }
}

// Mirrors: `with allure.step(name): assert not _should_fail(), "Failure due to reason X"`
// A failing expect() produces an assertion error -> Allure "failed".
async function assertStep(name, reason = "ODD") {
  await allure.step(name, async () => {
    expect(shouldFail(), `Failure due to reason ${reason}`).toBe(false);
  });
}

// Per-test setup, called at the START of each test body. This replaces the
// pytest autouse fixtures. NOTE: allure metadata must be set from inside the
// test body — calling these functions from a Playwright `beforeEach` hook makes
// allure-playwright drop the metadata, so we deliberately avoid hooks here.
async function setup({ layer, owner } = {}) {
  await applyGate(); // os label + broken-mode gate (mirrors root conftest)
  if (layer) await allure.layer(layer);
  if (layer === "api") await allure.epic("BE tests");
  if (layer === "e2e") await allure.epic("FE tests");
  if (layer === "web") await allure.epic("FE tests");
  if (owner) await allure.owner(owner);
}

// Zero-padded counter, e.g. pad(7, 3) -> "007".
const pad = (n, width = 3) => String(n).padStart(width, "0");

module.exports = {
  FAIL_PROBABILITY,
  shouldFail,
  osLabel,
  applyGate,
  setup,
  assertStep,
  pad,
};
