# Generated tests — commands & behaviour

Playwright replica of the pytest etalon (`gh-py-pytest-allurectl-watch`).

| Folder | Files | Tests | Notes |
|--------|------:|------:|-------|
| `test/poco/` | 1 | 100 | rich per-test metadata (feature/story/layer/tracker), nested steps |
| `test/unit/` | 10 | 1 000 | 2 asserting steps each |
| `test/unit-many/` | 10 | 10 000 | 2 asserting steps each |
| `test/attachments/` | 7 | 1 300 | small/big/medium/normal images, mp4, csv, text |

Shared logic: `test/allureHelpers.js`. Attachment files: `test/resources/`.

## TESTS_SUCCESS behaviour

Controls pass/fail/broken, exactly like the pytest `conftest.py` gate:

- `always` — all tests pass
- `never` — all tests fail (assertion → Allure **failed**)
- `broken` — all tests broken (Allure **broken**)
- `random` or not set — ~10% probability of failure in asserts

## Run by set (trailing slash required to avoid `unit` matching `unit-many`)

```shell
TESTS_SUCCESS=always npx playwright test test/poco/
TESTS_SUCCESS=always npx playwright test test/unit/
TESTS_SUCCESS=always npx playwright test test/unit-many/
TESTS_SUCCESS=always npx playwright test test/attachments/
```

## Run all sets

```shell
TESTS_SUCCESS=always  npx playwright test test/poco/ test/unit/ test/unit-many/ test/attachments/
TESTS_SUCCESS=never   npx playwright test test/poco/ test/unit/ test/unit-many/ test/attachments/
TESTS_SUCCESS=broken  npx playwright test test/poco/ test/unit/ test/unit-many/ test/attachments/
TESTS_SUCCESS=random  npx playwright test test/poco/ test/unit/ test/unit-many/ test/attachments/
```

## Run one test (grep by title)

```shell
TESTS_SUCCESS=always npx playwright test test/poco/ --grep "Assert a tuple poco 001"
TESTS_SUCCESS=always npx playwright test test/attachments/ --grep "small CSV attachment _001"
```

## Override OS label

```shell
TESTS_OS=linux TESTS_SUCCESS=random npx playwright test test/unit/
```

## Allure report

```shell
npx allure serve allure-results
# or
npx allure generate allure-results --clean -o allure-report && npx allure open allure-report
```

## Notes

- **Trailing slash is required** for `test/unit/` — without it Playwright matches both `test/unit/` and `test/unit-many/` (substring filter on file paths).
- **"broken" status** is produced via a forced 1 ms timeout. `allure-playwright` maps only `timedOut` → broken; a thrown `Error` gives `failed`.
- **Setup runs at the top of each test body, not in `beforeEach`.** Allure metadata called from `beforeEach` is silently dropped by `allure-playwright`.
