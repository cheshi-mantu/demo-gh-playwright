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

test("Authenticated user must be able to create a new project @allure.id:14595", async () => {
  await allure.epic("Projects");
  await allure.feature("Managing Projects");
  await allure.story("Authenticated user can manage projects");
  await allure.tags("web", "critical", "regress");
  await attachJiraIssue("AD-4");
  await attachWrikeIssue("1730120169");
  await allure.layer("e2e");
  await allure.owner("bugsbunny");
  await attachMicroservice("testops");
  await authorize();
  await createNewEntity("Project");
});

test("Authenticated and properly authorized user must be able to delete an existing project @allure.id:14596", async () => {
  await allure.epic("Projects");
  await allure.feature("Managing Projects");
  await allure.story("Authenticated user can manage projects");
  await allure.tags("web", "regress");
  await attachJiraIssue("AD-5");
  await attachWrikeIssue("1730120182");
  await attachMicroservice("testops");
  await allure.layer("e2e");
  await allure.owner("bugsbunny");
  await authorize();
  await deleteNewEntity("Project");
});

test("Authenticated and properly authorized user must be able to update an existing project @allure.id:14629", async () => {
  await allure.epic("Projects");
  await allure.feature("Managing Projects");
  await allure.story("Authenticated user can manage projects");
  await allure.tags("web", "regress");
  await attachJiraIssue("AD-6");
  await attachWrikeIssue("1730120185");
  await attachMicroservice("testops");
  await allure.layer("e2e");
  await allure.owner("bugsbunny");
  await authorize();
  await updateEntity("Project");
});

test("Project name cannot be longer than 255 characters @allure.id:14701", async () => {
  await allure.epic("Projects");
  await allure.feature("Managing Projects");
  await allure.story("Validation of project name length");
  await allure.tags("regress");
  await attachJiraIssue("AD-4");
  await attachWrikeIssue("1730120169");
  await allure.layer("e2e");
  await allure.owner("bugsbunny");
  await authorize();
  const longName = "a".repeat(256);
  await createNewEntity("Project");
});