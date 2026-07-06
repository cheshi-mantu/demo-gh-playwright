const { expect, test } = require("@playwright/test");
const allure = require("allure-js-commons");

const {
  attachJiraIssue,
  attachMicroservice,
  attachWrikeIssue,
  authorize,
  createNewEntity,
  deleteNewEntity,
  updateEntity,
} = require("../utils");


test.beforeEach(async () => {
  console.log("beforeEach");
  await allure.attachment("One small txt attachment", "some useless data", "text/plain");
});

test.afterEach(async () => {
  console.log("afterEach");
  await allure.attachment("after each we attach text", "Party is over, my dudes", "text/plain");
});

test("Login Form - Valid Credentials @allure.id:14542", async() => {
  await allure.epic("Authentication");
  await allure.tags("web", "regress", "smoke");
  await allure.feature("Built-in authentication");
  await allure.story("Login form");
  await allure.layer("e2e");
  await attachJiraIssue("AD-1");
  await attachWrikeIssue("1730118722");
  await attachMicroservice("testops");
  await allure.owner("bugsbunny");
  await allure.step("Enter valid username and password", async () => {
      await allure.step("Expected Result", async () => {
          await allure.step("User is logged in successfully", async () => {});
      });
  });
  await allure.step("Click Continue button", async () => {
      await allure.step("Expected Result", async () => {
          await allure.step("User is redirected to the dashboard.", async () => {});
      });
  });
});

test("Login Form - Invalid Credentials @allure.id:14544", async() => {
  await allure.epic("Authentication");
  await allure.feature("Built-in authentication");
  await allure.story("Login form");
  await allure.layer("e2e");
  await attachJiraIssue("AD-1");
  await attachWrikeIssue("1730118722");
  await attachMicroservice("testops");
  await allure.owner("bugsbunny");
  await allure.tags("web", "regress", "critical");
  await allure.step("Enter invalid username and password", async () => {
      await allure.step("Expected Result", async () => {
          await allure.step("User sees an error message", async () => {});
      });
  });
  await allure.step("Click Continue button", async () => {
      await allure.step("Expected Result", async () => {
          await allure.step("User remains on the login page", async () => {});
      });
  });
});

test("Login Form - Empty Fields @allure.id:14547", async() => {
  await allure.epic("Authentication");
  await allure.feature("Built-in authentication");
  await allure.story("Login form");
  await attachJiraIssue("AD-1");
  await attachWrikeIssue("1730118722");
  await allure.tags("web", "regress", "critical", "auth");
  await allure.layer("e2e");
  await allure.owner("bugsbunny");
  await attachMicroservice("testops");
  await allure.step("Leave username and password fields empty", async () => {
      await allure.step("Expected Result", async () => {
          await allure.step("User sees a validation error message", async () => {});
      });
  });
  await allure.step("Click Continue button", async () => {
      await allure.step("Expected Result", async () => {
          await allure.step("User remains on the login page", async () => {});
      });
  });
});