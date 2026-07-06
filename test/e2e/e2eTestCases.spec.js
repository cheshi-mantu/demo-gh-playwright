const { expect, test } = require("@playwright/test");
const allure = require("allure-js-commons");

const {
  attachJiraIssue,
  attachWrikeIssue,
  attachMicroservice,
  authorize,
  createNewEntity,
  deleteNewEntity,
  updateEntity,
} = require("../utils");


test.beforeEach(async () => {
  console.log("beforeEach");
  await allure.attachment("text attachment", "some data added to each test", "text/plain");
});

test("Test Case name cannot be longer than 255 characters @allure.id:14662", async () => {
  await allure.epic("Test Cases");
  await allure.feature("Managing test cases");
  await allure.story("Creation of test cases");
  await allure.tags("regress");
  await attachJiraIssue("AD-7");
  await attachJiraIssue("AD-9");
  await attachWrikeIssue("1730120186");
  await attachWrikeIssue("1730120188");
  await allure.layer("e2e");
  await allure.owner("bugsbunny");
  await authorize();
  const longName = "a".repeat(256);
  await createNewEntity("test-case");
});