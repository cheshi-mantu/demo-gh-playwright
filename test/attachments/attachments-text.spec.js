const path = require("path");
const { test } = require("@playwright/test");
const allure = require("allure-js-commons");
const { ContentType } = require("allure-js-commons");
const { setup, assertStep } = require("../allureHelpers");

const res = (name) => path.join(__dirname, "..", "resources", name);
const maybe = () => Math.random() < 0.5;

test("Sending small text attach _001", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _002", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _003", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _004", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _005", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _006", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _007", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _008", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _009", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _010", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _011", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _012", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _013", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _014", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _015", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _016", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _017", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _018", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _019", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _020", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _021", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _022", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _023", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _024", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _025", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _026", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _027", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _028", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _029", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _030", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _031", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _032", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _033", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _034", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _035", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _036", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _037", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _038", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _039", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _040", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _041", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _042", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _043", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _044", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _045", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _046", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _047", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _048", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _049", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _050", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _051", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _052", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _053", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _054", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _055", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _056", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _057", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _058", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _059", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _060", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _061", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _062", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _063", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _064", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _065", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _066", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _067", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _068", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _069", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _070", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _071", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _072", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _073", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _074", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _075", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _076", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _077", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _078", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _079", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _080", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _081", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _082", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _083", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _084", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _085", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _086", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _087", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _088", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _089", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _090", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _091", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _092", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _093", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _094", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _095", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _096", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _097", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _098", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _099", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending small text attach _100", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 kbytes txt attach", res("chekhov.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _001", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _002", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _003", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _004", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _005", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _006", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _007", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _008", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _009", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _010", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _011", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _012", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _013", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _014", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _015", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _016", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _017", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _018", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _019", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _020", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _021", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _022", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _023", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _024", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _025", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _026", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _027", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _028", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _029", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _030", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _031", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _032", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _033", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _034", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _035", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _036", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _037", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _038", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _039", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _040", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _041", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _042", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _043", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _044", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _045", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _046", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _047", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _048", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _049", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _050", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _051", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _052", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _053", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _054", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _055", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _056", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _057", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _058", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _059", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _060", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _061", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _062", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _063", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _064", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _065", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _066", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _067", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _068", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _069", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _070", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _071", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _072", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _073", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _074", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _075", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _076", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _077", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _078", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _079", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _080", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _081", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _082", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _083", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _084", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _085", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _086", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _087", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _088", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _089", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _090", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _091", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _092", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _093", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _094", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _095", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _096", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _097", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _098", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _099", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending normal text attach _100", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 200 kbytes txt attach", res("blake.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _001", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _002", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _003", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _004", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _005", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _006", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _007", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _008", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _009", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _010", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _011", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _012", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _013", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _014", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _015", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _016", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _017", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _018", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _019", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _020", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _021", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _022", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _023", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _024", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _025", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _026", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _027", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _028", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _029", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _030", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _031", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _032", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _033", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _034", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _035", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _036", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _037", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _038", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _039", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _040", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _041", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _042", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _043", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _044", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _045", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _046", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _047", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _048", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _049", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _050", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _051", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _052", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _053", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _054", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _055", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _056", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _057", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _058", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _059", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _060", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _061", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _062", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _063", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _064", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _065", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _066", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _067", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _068", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _069", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _070", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _071", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _072", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _073", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _074", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _075", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _076", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _077", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _078", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _079", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _080", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _081", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _082", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _083", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _084", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _085", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _086", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _087", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _088", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _089", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _090", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _091", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _092", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _093", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _094", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _095", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _096", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _097", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _098", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _099", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending medium text attach _100", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 3 Mbytes txt attach", res("ktulhu.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _001", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _002", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _003", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _004", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _005", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _006", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _007", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _008", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _009", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _010", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _011", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _012", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _013", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _014", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _015", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _016", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _017", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _018", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _019", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _020", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _021", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _022", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _023", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _024", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _025", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _026", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _027", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _028", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _029", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _030", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _031", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _032", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _033", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _034", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _035", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _036", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _037", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _038", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _039", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _040", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _041", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _042", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _043", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _044", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _045", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _046", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _047", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _048", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _049", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _050", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _051", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _052", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _053", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _054", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _055", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _056", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _057", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _058", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _059", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _060", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _061", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _062", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _063", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _064", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _065", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _066", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _067", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _068", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _069", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _070", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _071", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _072", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _073", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _074", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _075", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _076", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _077", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _078", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _079", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _080", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _081", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _082", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _083", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _084", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _085", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _086", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _087", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _088", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _089", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _090", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _091", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _092", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _093", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _094", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _095", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _096", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _097", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _098", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _099", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending big text attach _100", async () => {
  await setup({ layer: "web" });
  await allure.story("smoking pytest");
  await allure.feature("sending attachments");
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachmentPath("normal 10 Mbytes txt attach", res("icona.txt"), ContentType.TEXT);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

