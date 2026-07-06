const path = require("path");
const { test } = require("@playwright/test");
const allure = require("allure-js-commons");
const { ContentType } = require("allure-js-commons");
const { setup, assertStep } = require("../allureHelpers");

const res = (name) => path.join(__dirname, "..", "resources", name);
const maybe = () => Math.random() < 0.5;

test("Sending 8 Mb attachments _001", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _002", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _003", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _004", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _005", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _006", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _007", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _008", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _009", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _010", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _011", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _012", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _013", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _014", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _015", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _016", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _017", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _018", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _019", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _020", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _021", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _022", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _023", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _024", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _025", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _026", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _027", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _028", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _029", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _030", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _031", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _032", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _033", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _034", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _035", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _036", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _037", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _038", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _039", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _040", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _041", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _042", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _043", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _044", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _045", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _046", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _047", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _048", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _049", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _050", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _051", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _052", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _053", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _054", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _055", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _056", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _057", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _058", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _059", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _060", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _061", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _062", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _063", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _064", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _065", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _066", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _067", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _068", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _069", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _070", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _071", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _072", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _073", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _074", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _075", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _076", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _077", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _078", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _079", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _080", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _081", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _082", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _083", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _084", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _085", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _086", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _087", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _088", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _089", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _090", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _091", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _092", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _093", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _094", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _095", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _096", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _097", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _098", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _099", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

test("Sending 8 Mb attachments _100", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending big attachments");
  await allure.story("Attach 'em big");
  if (maybe()) {
    await allure.step("Sending big 8 megabytes JPG attach", async () => {
      await allure.attachmentPath("8Mb JPG example", res("big-image.jpg"), ContentType.JPEG);
    });
  }
  if (maybe()) {
    await allure.step("HTML attach", async () => {
      await allure.attachment("HTML example", "<h1>Example html attachment</h1>", ContentType.HTML);
    });
  }
  if (maybe()) {
    await allure.step("txt attach", async () => {
      await allure.attachment("TXT example", "Some text content", ContentType.TEXT);
    });
  }
  if (maybe()) {
    await allure.step("CSV attach", async () => {
      await allure.attachmentPath("9,2 Mb CSV example", res("big-table.csv"), ContentType.CSV);
    });
  }
  if (maybe()) {
    await allure.step("JSON attach", async () => {
      await allure.attachment("JSON example", JSON.stringify({ first: 1, second: 2 }, null, 2), ContentType.JSON);
    });
  }
  if (maybe()) {
    await allure.step("URI list attach", async () => {
      await allure.attachment("URI List example", ["https://github.com/allure-framework", "https://github.com/allure-examples"].join("\n"), ContentType.URI);
    });
  }
  await assertStep("Assert attachments were sent", "ODD");
});

