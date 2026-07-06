#!/usr/bin/env node
// generate-tests.js
// Produces individual test() declarations in separate files under test/,
// mirroring the pytest etalon file structure exactly.
// Run: node generate-tests.js

const fs = require("fs");
const path = require("path");

const TEST_DIR = path.join(__dirname, "test");
const pad = (n, w = 3) => String(n).padStart(w, "0");

function mkdir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

// ─── POCO ─────────────────────────────────────────────────────────────────────
// Exact per-test metadata extracted from tests/poco/test_always_passing_assert_001.py
// Format: [layer, tracker | null, steps]
// steps: 'complex' (test 001 only) | [reason1, reason2]
const POCO_META = [
  ["api", "AD-1",  "complex"],       // 001
  ["e2e", "AD-2",  ["EVEN","EVEN"]], // 002
  ["e2e", "AD-3",  ["ODD","ODD"]],   // 003
  ["e2e", "AD-4",  ["ODD","EVEN"]],  // 004
  ["e2e", "AD-5",  ["ODD","EVEN"]],  // 005
  ["e2e", "AD-6",  ["ODD","ODD"]],   // 006
  ["e2e",  null,   ["ODD","ODD"]],   // 007
  ["e2e", "AD-7",  ["ODD","ODD"]],   // 008
  ["e2e", "AD-9",  ["ODD","ODD"]],   // 009
  ["e2e", "AD-10", ["ODD","ODD"]],   // 010
  ["e2e", "AD-11", ["ODD","ODD"]],   // 011
  ["e2e", "AD-1",  ["ODD","ODD"]],   // 012
  ["e2e", "AD-2",  ["ODD","ODD"]],   // 013
  ["e2e", "AD-3",  ["ODD","ODD"]],   // 014
  ["e2e",  null,   ["ODD","ODD"]],   // 015
  ["e2e", "AD-4",  ["ODD","ODD"]],   // 016
  ["e2e", "AD-5",  ["ODD","ODD"]],   // 017
  ["e2e", "AD-6",  ["ODD","ODD"]],   // 018
  ["e2e", "AD-7",  ["ODD","ODD"]],   // 019
  ["e2e", "AD-9",  ["ODD","ODD"]],   // 020
  ["e2e", "AD-10", ["ODD","ODD"]],   // 021
  ["e2e", "AD-11", ["ODD","ODD"]],   // 022
  ["e2e",  null,   ["ODD","ODD"]],   // 023
  ["e2e", "AD-1",  ["ODD","ODD"]],   // 024
  ["e2e", "AD-2",  ["ODD","ODD"]],   // 025
  ["e2e", "AD-3",  ["ODD","ODD"]],   // 026
  ["e2e", "AD-4",  ["ODD","ODD"]],   // 027
  ["e2e", "AD-5",  ["ODD","ODD"]],   // 028
  ["e2e", "AD-6",  ["ODD","ODD"]],   // 029
  ["e2e", "AD-7",  ["ODD","ODD"]],   // 030
  ["e2e",  null,   ["ODD","ODD"]],   // 031
  ["e2e", "AD-9",  ["ODD","ODD"]],   // 032
  ["e2e", "AD-10", ["ODD","ODD"]],   // 033
  ["e2e", "AD-11", ["ODD","ODD"]],   // 034
  ["e2e", "AD-1",  ["EVEN","EVEN"]], // 035
  ["e2e", "AD-2",  ["ODD","ODD"]],   // 036
  ["e2e", "AD-3",  ["EVEN","EVEN"]], // 037
  ["e2e", "AD-4",  ["ODD","ODD"]],   // 038
  ["e2e", "AD-5",  ["ODD","ODD"]],   // 039
  ["e2e", "AD-6",  ["ODD","ODD"]],   // 040
  ["api", "AD-7",  ["ODD","ODD"]],   // 041
  ["api", "AD-9",  ["ODD","ODD"]],   // 042
  ["api", "AD-10", ["ODD","ODD"]],   // 043
  ["api", "AD-11", ["ODD","ODD"]],   // 044
  ["api", "AD-1",  ["ODD","ODD"]],   // 045
  ["api", "AD-2",  ["ODD","ODD"]],   // 046
  ["api", "AD-3",  ["ODD","ODD"]],   // 047
  ["api", "AD-4",  ["ODD","ODD"]],   // 048
  ["api", "AD-5",  ["ODD","ODD"]],   // 049
  ["api", "AD-6",  ["ODD","ODD"]],   // 050
  ["api", "AD-7",  ["ODD","ODD"]],   // 051
  ["api", "AD-9",  ["ODD","ODD"]],   // 052
  ["api", "AD-10", ["ODD","ODD"]],   // 053
  ["api", "AD-11", ["ODD","ODD"]],   // 054
  ["api", "AD-1",  ["ODD","ODD"]],   // 055
  ["api", "AD-2",  ["ODD","ODD"]],   // 056
  ["api", "AD-3",  ["ODD","ODD"]],   // 057
  ["api", "AD-4",  ["ODD","ODD"]],   // 058
  ["api", "AD-5",  ["ODD","ODD"]],   // 059
  ["api", "AD-6",  ["ODD","ODD"]],   // 060
  ["api", "AD-7",  ["ODD","ODD"]],   // 061
  ["api", "AD-9",  ["ODD","ODD"]],   // 062
  ["api", "AD-10", ["ODD","ODD"]],   // 063
  ["api", "AD-11", ["ODD","ODD"]],   // 064
  ["api", "AD-1",  ["ODD","ODD"]],   // 065
  ["api", "AD-2",  ["ODD","ODD"]],   // 066
  ["api", "AD-3",  ["ODD","ODD"]],   // 067
  ["api", "AD-4",  ["ODD","ODD"]],   // 068
  ["api", "AD-5",  ["ODD","ODD"]],   // 069
  ["api", "AD-6",  ["ODD","ODD"]],   // 070
  ["api", "AD-7",  ["ODD","ODD"]],   // 071
  ["api", "AD-9",  ["ODD","ODD"]],   // 072
  ["api", "AD-10", ["ODD","ODD"]],   // 073
  ["api", "AD-11", ["ODD","ODD"]],   // 074
  ["api", "AD-1",  ["ODD","ODD"]],   // 075
  ["api", "AD-2",  ["ODD","ODD"]],   // 076
  ["api", "AD-3",  ["ODD","ODD"]],   // 077
  ["api", "AD-4",  ["ODD","ODD"]],   // 078
  ["api", "AD-5",  ["ODD","ODD"]],   // 079
  ["api", "AD-6",  ["ODD","ODD"]],   // 080
  ["api", "AD-7",  ["ODD","ODD"]],   // 081
  ["api", "AD-9",  ["ODD","ODD"]],   // 082
  ["api", "AD-10", ["ODD","ODD"]],   // 083
  ["api", "AD-11", ["ODD","ODD"]],   // 084
  ["api", "AD-1",  ["ODD","ODD"]],   // 085
  ["api", "AD-2",  ["ODD","ODD"]],   // 086
  ["api", "AD-3",  ["ODD","ODD"]],   // 087
  ["api", "AD-4",  ["ODD","ODD"]],   // 088
  ["api", "AD-5",  ["ODD","ODD"]],   // 089
  ["api", "AD-6",  ["ODD","ODD"]],   // 090
  ["api", "AD-7",  ["ODD","ODD"]],   // 091
  ["api", "AD-9",  ["ODD","ODD"]],   // 092
  ["api", "AD-10", ["ODD","ODD"]],   // 093
  ["api", "AD-11", ["ODD","ODD"]],   // 094
  ["api", "AD-1",  ["ODD","ODD"]],   // 095
  ["api", "AD-2",  ["ODD","ODD"]],   // 096
  ["api",  null,   ["ODD","ODD"]],   // 097
  ["api",  null,   ["ODD","ODD"]],   // 098
  ["api",  null,   ["ODD","ODD"]],   // 099
  ["e2e",  null,   ["ODD","ODD"]],   // 100
];

function pocoTest(num, layer, tracker, steps) {
  const n = pad(num);
  const story =
    layer === "api"
      ? "un poco de api tests to this project"
      : "un poco de e2e tests to this project";
  const trackerLine = tracker
    ? `  await allure.label("tracker", "${tracker}");\n`
    : "";

  let body;
  if (steps === "complex") {
    body = `\
  await allure.step("Arrange some stuff before we get crakin'", async () => {});
  await allure.step("Arrange some more stuff before we get crakin'", async () => {
    expect(shouldFail(), "Failure due to reason EVEN").toBe(false);
    await allure.step("Arrange some more substep stuff before we get crakin'", async () => {
      expect(shouldFail(), "Failure due to reason ODD").toBe(false);
    });
  });
  await allure.step("Assert 123 versus 223", async () => {
    expect(shouldFail(), "Failure due to reason EVEN").toBe(false);
  });
  await allure.step("Assert 123 versus 223", async () => {
    expect(shouldFail(), "Failure due to reason ODD").toBe(false);
    await allure.step("Assert 123 versus 223", async () => {
      expect(shouldFail(), "Failure due to reason ODD").toBe(false);
    });
  });`;
  } else {
    body = `\
  await assertStep("Assert 123 versus 123", "${steps[0]}");
  await assertStep("Assert 123 versus 123", "${steps[1]}");`;
  }

  return `\
test("Assert a tuple poco ${n} 001", async () => {
  await setup({ layer: "${layer}", owner: "bugsbunny" });
  await allure.feature("load testing test results processing");
  await allure.story("${story}");
${trackerLine}\
${body}
});
`;
}

function generatePoco() {
  const dir = path.join(TEST_DIR, "poco");
  mkdir(dir);
  let out = `const { test, expect } = require("@playwright/test");
const allure = require("allure-js-commons");
const { setup, assertStep, shouldFail } = require("../allureHelpers");

`;
  POCO_META.forEach(([layer, tracker, steps], idx) => {
    out += pocoTest(idx + 1, layer, tracker, steps) + "\n";
  });
  fs.writeFileSync(path.join(dir, "poco.spec.js"), out);
  console.log("wrote test/poco/poco.spec.js (100 tests)");
}

// ─── UNIT ─────────────────────────────────────────────────────────────────────
// 10 files × 100 tests. Title: "Assert a tuple unit {testNum:03d} {fileNum:03d}"
// Mirrors: tests/unit/test_always_passing_assert_001.py … _010.py

function unitTest(testNum, fileNum) {
  return `\
test("Assert a tuple unit ${pad(testNum)} ${pad(fileNum)}", async () => {
  await setup({ layer: "unit" });
  await allure.feature("test results processing");
  await allure.story("unit tests");
  await assertStep("Assert 123 versus 123", "ODD");
  await assertStep("Assert 123 versus 123", "ODD");
});
`;
}

function generateUnit() {
  const dir = path.join(TEST_DIR, "unit");
  mkdir(dir);
  for (let f = 1; f <= 10; f++) {
    let out = `const { test } = require("@playwright/test");
const allure = require("allure-js-commons");
const { setup, assertStep } = require("../allureHelpers");

`;
    for (let t = 1; t <= 100; t++) {
      out += unitTest(t, f) + "\n";
    }
    const fname = `unit-${pad(f)}.spec.js`;
    fs.writeFileSync(path.join(dir, fname), out);
  }
  console.log("wrote test/unit/unit-001..010.spec.js (10 × 100 = 1 000 tests)");
}

// ─── UNIT-MANY ────────────────────────────────────────────────────────────────
// 10 files × 1000 tests. Title: "Assert a tuple unit-many {testNum:03d} {fileNum:03d}"
// Test numbering starts at 000, matching the pytest etalon.
// Mirrors: tests/unit-many/test_always_passing_assert_001.py … _010.py

function unitManyTest(testNum, fileNum) {
  return `\
test("Assert a tuple unit-many ${pad(testNum)} ${pad(fileNum)}", async () => {
  await setup({ layer: "unit" });
  await allure.feature("test results processing");
  await allure.story("many unit tests");
  await assertStep("Assert 123 versus 123", "ODD");
  await assertStep("Assert 123 versus 123", "ODD");
});
`;
}

function generateUnitMany() {
  const dir = path.join(TEST_DIR, "unit-many");
  mkdir(dir);
  for (let f = 1; f <= 10; f++) {
    let out = `const { test } = require("@playwright/test");
const allure = require("allure-js-commons");
const { setup, assertStep } = require("../allureHelpers");

`;
    for (let t = 0; t <= 999; t++) {
      out += unitManyTest(t, f) + "\n";
    }
    const fname = `unit-many-${pad(f)}.spec.js`;
    fs.writeFileSync(path.join(dir, fname), out);
  }
  console.log("wrote test/unit-many/unit-many-001..010.spec.js (10 × 1 000 = 10 000 tests)");
}

// ─── ATTACHMENTS ─────────────────────────────────────────────────────────────
// 7 files, 1 300 tests total.
// Mirrors: tests/attachments/test_attachments_*.py

const RES = `path.join(__dirname, "..", "resources"`;
// helper used inside generated file bodies — not a template substitution here, just a note

function attHeader() {
  return `const path = require("path");
const { test } = require("@playwright/test");
const allure = require("allure-js-commons");
const { ContentType } = require("allure-js-commons");
const { setup, assertStep } = require("../allureHelpers");

const res = (name) => path.join(__dirname, "..", "resources", name);
const maybe = () => Math.random() < 0.5;

`;
}

// ---- small / big / medium / normal (6-attachment body, 100 tests each) ----
const SIX_PACK_SETS = [
  {
    file: "attachments-small.spec.js",
    feature: "Sending small attachments",
    story: "Attach 'em small",
    title: (n) => `Sending 10 kb attachments or something like that _${pad(n)}`,
    fnName: (n) => `test_attach_smallfile_${pad(n)}`,
    imageStep: "Sending normal 10 kbytes JPG attach",
    imageFile: "small-image.jpg",
    imageName: "10 Kb JPG example",
    textSlot: { file: "chekhov.txt", name: "letter to the neighbour" },
    csvSlot:  { inline: "first,second,third\\none,two,three", name: "CSV example" },
  },
  {
    file: "attachments-big.spec.js",
    feature: "Sending big attachments",
    story: "Attach 'em big",
    title: (n) => `Sending 8 Mb attachments _${pad(n)}`,
    fnName: (n) => `test_attach_bigfile_${pad(n)}`,
    imageStep: "Sending big 8 megabytes JPG attach",
    imageFile: "big-image.jpg",
    imageName: "8Mb JPG example",
    textSlot: { inline: "Some text content", name: "TXT example" },
    csvSlot:  { file: "big-table.csv", name: "9,2 Mb CSV example" },
  },
  {
    file: "attachments-medium.spec.js",
    feature: "Sending medium attachments",
    story: "Attach 'em mid",
    title: (n) => `Sending 3 Mb attachments or something like that _${pad(n)}`,
    fnName: (n) => `test_attach_mediumfile_${pad(n)}`,
    imageStep: "Sending medium 3 megabytes JPG attach",
    imageFile: "medium-image.jpg",
    imageName: "3 Mb JPG example",
    textSlot: { inline: "Some text content", name: "TXT example" },
    csvSlot:  { inline: "first,second,third\\none,two,three", name: "CSV example" },
  },
  {
    file: "attachments-normal.spec.js",
    feature: "Sending so normal attachments that they are not even medium",
    story: "Attach 'em mid",
    title: (n) => `Sending 240+ kb attachments or something like that _${pad(n)}`,
    fnName: (n) => `test_attach_normalfile_${pad(n)}`,
    imageStep: "Sending normal 240 kbytes JPG attach",
    imageFile: "normal-image.jpg",
    imageName: "240 Kb JPG example",
    textSlot: { inline: "Some text content", name: "TXT example" },
    csvSlot:  { inline: "first,second,third\\none,two,three", name: "CSV example" },
  },
];

function sixPackBody(s) {
  const textLine = s.textSlot.file
    ? `      await allure.attachmentPath("${s.textSlot.name}", res("${s.textSlot.file}"), ContentType.TEXT);`
    : `      await allure.attachment("${s.textSlot.name}", "${s.textSlot.inline}", ContentType.TEXT);`;
  const csvLine = s.csvSlot.file
    ? `      await allure.attachmentPath("${s.csvSlot.name}", res("${s.csvSlot.file}"), ContentType.CSV);`
    : `      await allure.attachment("${s.csvSlot.name}", "${s.csvSlot.inline}", ContentType.CSV);`;
  return `\
  if (maybe()) {
    await allure.step("${s.imageStep}", async () => {
      await allure.attachmentPath("${s.imageName}", res("${s.imageFile}"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
${textLine}
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
${csvLine}
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");`;
}

function generateSixPackFile(s, dir) {
  let out = attHeader();
  for (let n = 1; n <= 100; n++) {
    out += `test("${s.title(n)}", async () => {
  await setup({ layer: "web" });
  await allure.feature("${s.feature}");
  await allure.story("${s.story}");
${sixPackBody(s)}
});

`;
  }
  fs.writeFileSync(path.join(dir, s.file), out);
}

// ---- mp4 (100 tests) ----
function generateMp4(dir) {
  let out = attHeader();
  for (let n = 1; n <= 100; n++) {
    out += `test("Sending tiny mp4 attachments _${pad(n)}", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending small video attachments");
  await allure.story("Attach 'em small and video");
  await allure.step("Sending small mp4 attach or not", async () => {
    if (maybe()) {
      await allure.step("Sending small mp4 attach", async () => {
        await allure.attachmentPath("mp4file", res("mp4.mp4"), ContentType.MP4);
      });
    }
  });
  await assertStep("Assert attachments were sent", "ODD");
});

`;
  }
  fs.writeFileSync(path.join(dir, "attachments-mp4-small.spec.js"), out);
}

// ---- csv (400 tests: 4 sizes × 100) ----
const CSV_SETS = [
  { size: "small",  file: "small-table.csv",  name: "10 kbytes csv example",  fnPrefix: "test_attach_small_table" },
  { size: "normal", file: "normal-table.csv", name: "200 kbytes csv example", fnPrefix: "test_attach_normal_table" },
  { size: "medium", file: "medium-table.csv", name: "3Mb csv example",        fnPrefix: "test_attach_medium_table" },
  { size: "big",    file: "big-table.csv",    name: "9Mb csv example",        fnPrefix: "test_attach_big_table" },
];

function generateCsv(dir) {
  let out = attHeader();
  for (const s of CSV_SETS) {
    for (let n = 1; n <= 100; n++) {
      out += `test("Sending ${s.size} CSV attachment _${pad(n)}", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("${s.name}", res("${s.file}"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

`;
    }
  }
  fs.writeFileSync(path.join(dir, "attachments-csv.spec.js"), out);
}

// ---- text (400 tests: 4 sizes × 100) ----
const TEXT_SETS = [
  { size: "small",  file: "chekhov.txt", name: "normal 10 kbytes txt attach",  fnPrefix: "test_attach_small_text" },
  { size: "normal", file: "blake.txt",   name: "normal 200 kbytes txt attach", fnPrefix: "test_attach_normal_text" },
  { size: "medium", file: "ktulhu.txt",  name: "normal 3 Mbytes txt attach",   fnPrefix: "test_attach_medium_text" },
  { size: "big",    file: "icona.txt",   name: "normal 10 Mbytes txt attach",  fnPrefix: "test_attach_big_text" },
];

function generateText(dir) {
  let out = attHeader();
  for (const s of TEXT_SETS) {
    for (let n = 1; n <= 100; n++) {
      out += `test("Sending ${s.size} text attach _${pad(n)}", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("${s.name}", res("${s.file}"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

`;
    }
  }
  fs.writeFileSync(path.join(dir, "attachments-text.spec.js"), out);
}

function generateAttachments() {
  const dir = path.join(TEST_DIR, "attachments");
  mkdir(dir);
  for (const s of SIX_PACK_SETS) generateSixPackFile(s, dir);
  generateMp4(dir);
  generateCsv(dir);
  generateText(dir);
  console.log("wrote test/attachments/ (7 files, 1 300 tests)");
}

// ─── Remove old flat spec files ───────────────────────────────────────────────
function removeOldFiles() {
  const old = ["poco.spec.js", "unit.spec.js", "unit-many.spec.js", "attachments.spec.js"];
  for (const f of old) {
    const p = path.join(TEST_DIR, f);
    if (fs.existsSync(p)) {
      fs.unlinkSync(p);
      console.log(`removed test/${f}`);
    }
  }
}

// ─── Run ──────────────────────────────────────────────────────────────────────
generatePoco();
generateUnit();
generateUnitMany();
generateAttachments();
removeOldFiles();
console.log("\ndone — 12 400 tests across test/poco/, test/unit/, test/unit-many/, test/attachments/");
