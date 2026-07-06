const path = require("path");
const { test } = require("@playwright/test");
const allure = require("allure-js-commons");
const { ContentType } = require("allure-js-commons");
const { setup, assertStep } = require("../allureHelpers");

const res = (name) => path.join(__dirname, "..", "resources", name);
const maybe = () => Math.random() < 0.5;

test("Sending 3 Mb attachments or something like that _001", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _002", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _003", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _004", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _005", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _006", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _007", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _008", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _009", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _010", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _011", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _012", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _013", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _014", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _015", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _016", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _017", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _018", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _019", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _020", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _021", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _022", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _023", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _024", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _025", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _026", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _027", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _028", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _029", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _030", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _031", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _032", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _033", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _034", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _035", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _036", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _037", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _038", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _039", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _040", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _041", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _042", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _043", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _044", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _045", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _046", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _047", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _048", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _049", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _050", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _051", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _052", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _053", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _054", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _055", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _056", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _057", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _058", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _059", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _060", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _061", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _062", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _063", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _064", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _065", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _066", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _067", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _068", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _069", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _070", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _071", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _072", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _073", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _074", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _075", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _076", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _077", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _078", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _079", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _080", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _081", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _082", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _083", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _084", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _085", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _086", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _087", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _088", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _089", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _090", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _091", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _092", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _093", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _094", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _095", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _096", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _097", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _098", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _099", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

test("Sending 3 Mb attachments or something like that _100", async () => {
  await setup({ layer: "web" });
  await allure.feature("Sending medium attachments");
  await allure.story("Attach 'em mid");
  if (maybe()) {
    await allure.step("Sending medium 3 megabytes JPG attach", async () => {
      await allure.attachmentPath("3 Mb JPG example", res("medium-image.jpg"), ContentType.JPEG);
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
      await allure.attachment("CSV example", "first,second,third\none,two,three", ContentType.CSV);
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

