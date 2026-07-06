const path = require("path");
const { test } = require("@playwright/test");
const allure = require("allure-js-commons");
const { ContentType } = require("allure-js-commons");
const { setup, assertStep } = require("../allureHelpers");

const res = (name) => path.join(__dirname, "..", "resources", name);
const maybe = () => Math.random() < 0.5;

test("Sending small CSV attachment _001", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _002", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _003", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _004", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _005", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _006", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _007", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _008", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _009", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _010", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _011", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _012", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _013", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _014", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _015", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _016", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _017", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _018", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _019", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _020", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _021", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _022", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _023", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _024", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _025", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _026", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _027", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _028", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _029", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _030", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _031", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _032", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _033", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _034", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _035", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _036", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _037", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _038", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _039", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _040", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _041", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _042", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _043", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _044", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _045", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _046", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _047", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _048", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _049", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _050", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _051", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _052", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _053", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _054", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _055", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _056", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _057", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _058", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _059", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _060", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _061", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _062", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _063", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _064", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _065", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _066", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _067", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _068", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _069", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _070", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _071", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _072", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _073", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _074", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _075", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _076", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _077", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _078", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _079", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _080", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _081", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _082", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _083", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _084", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _085", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _086", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _087", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _088", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _089", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _090", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _091", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _092", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _093", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _094", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _095", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _096", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _097", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _098", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _099", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small CSV attachment _100", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("10 kbytes csv example", res("small-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _001", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _002", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _003", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _004", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _005", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _006", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _007", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _008", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _009", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _010", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _011", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _012", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _013", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _014", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _015", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _016", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _017", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _018", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _019", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _020", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _021", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _022", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _023", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _024", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _025", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _026", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _027", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _028", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _029", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _030", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _031", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _032", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _033", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _034", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _035", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _036", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _037", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _038", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _039", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _040", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _041", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _042", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _043", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _044", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _045", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _046", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _047", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _048", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _049", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _050", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _051", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _052", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _053", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _054", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _055", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _056", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _057", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _058", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _059", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _060", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _061", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _062", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _063", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _064", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _065", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _066", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _067", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _068", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _069", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _070", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _071", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _072", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _073", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _074", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _075", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _076", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _077", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _078", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _079", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _080", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _081", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _082", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _083", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _084", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _085", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _086", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _087", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _088", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _089", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _090", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _091", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _092", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _093", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _094", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _095", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _096", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _097", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _098", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _099", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal CSV attachment _100", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("200 kbytes csv example", res("normal-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _001", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _002", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _003", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _004", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _005", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _006", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _007", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _008", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _009", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _010", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _011", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _012", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _013", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _014", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _015", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _016", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _017", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _018", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _019", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _020", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _021", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _022", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _023", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _024", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _025", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _026", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _027", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _028", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _029", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _030", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _031", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _032", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _033", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _034", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _035", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _036", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _037", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _038", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _039", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _040", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _041", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _042", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _043", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _044", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _045", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _046", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _047", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _048", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _049", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _050", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _051", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _052", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _053", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _054", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _055", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _056", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _057", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _058", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _059", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _060", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _061", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _062", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _063", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _064", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _065", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _066", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _067", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _068", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _069", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _070", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _071", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _072", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _073", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _074", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _075", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _076", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _077", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _078", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _079", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _080", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _081", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _082", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _083", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _084", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _085", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _086", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _087", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _088", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _089", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _090", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _091", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _092", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _093", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _094", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _095", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _096", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _097", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _098", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _099", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium CSV attachment _100", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("3Mb csv example", res("medium-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _001", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _002", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _003", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _004", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _005", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _006", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _007", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _008", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _009", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _010", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _011", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _012", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _013", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _014", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _015", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _016", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _017", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _018", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _019", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _020", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _021", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _022", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _023", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _024", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _025", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _026", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _027", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _028", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _029", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _030", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _031", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _032", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _033", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _034", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _035", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _036", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _037", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _038", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _039", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _040", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _041", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _042", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _043", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _044", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _045", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _046", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _047", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _048", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _049", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _050", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _051", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _052", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _053", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _054", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _055", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _056", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _057", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _058", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _059", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _060", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _061", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _062", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _063", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _064", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _065", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _066", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _067", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _068", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _069", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _070", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _071", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _072", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _073", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _074", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _075", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _076", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _077", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _078", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _079", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _080", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _081", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _082", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _083", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _084", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _085", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _086", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _087", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _088", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _089", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _090", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _091", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _092", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _093", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _094", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _095", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _096", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _097", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _098", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _099", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big CSV attachment _100", async () => {
  await setup({ layer: "web" });
  await allure.suite("cloud instance");
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9Mb csv example", res("big-table.csv"), ContentType.CSV);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

