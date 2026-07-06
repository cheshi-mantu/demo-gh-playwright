const path = require("path");
const { test } = require("@playwright/test");
const allure = require("allure-js-commons");
const { ContentType } = require("allure-js-commons");
const { setup, assertStep } = require("../allureHelpers");

const res = (name) => path.join(__dirname, "..", "resources", name);
const maybe = () => Math.random() < 0.5;

test("Sending tiny mp4 attachments _001", async () => {
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

test("Sending tiny mp4 attachments _002", async () => {
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

test("Sending tiny mp4 attachments _003", async () => {
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

test("Sending tiny mp4 attachments _004", async () => {
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

test("Sending tiny mp4 attachments _005", async () => {
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

test("Sending tiny mp4 attachments _006", async () => {
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

test("Sending tiny mp4 attachments _007", async () => {
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

test("Sending tiny mp4 attachments _008", async () => {
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

test("Sending tiny mp4 attachments _009", async () => {
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

test("Sending tiny mp4 attachments _010", async () => {
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

test("Sending tiny mp4 attachments _011", async () => {
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

test("Sending tiny mp4 attachments _012", async () => {
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

test("Sending tiny mp4 attachments _013", async () => {
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

test("Sending tiny mp4 attachments _014", async () => {
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

test("Sending tiny mp4 attachments _015", async () => {
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

test("Sending tiny mp4 attachments _016", async () => {
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

test("Sending tiny mp4 attachments _017", async () => {
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

test("Sending tiny mp4 attachments _018", async () => {
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

test("Sending tiny mp4 attachments _019", async () => {
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

test("Sending tiny mp4 attachments _020", async () => {
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

test("Sending tiny mp4 attachments _021", async () => {
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

test("Sending tiny mp4 attachments _022", async () => {
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

test("Sending tiny mp4 attachments _023", async () => {
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

test("Sending tiny mp4 attachments _024", async () => {
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

test("Sending tiny mp4 attachments _025", async () => {
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

test("Sending tiny mp4 attachments _026", async () => {
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

test("Sending tiny mp4 attachments _027", async () => {
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

test("Sending tiny mp4 attachments _028", async () => {
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

test("Sending tiny mp4 attachments _029", async () => {
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

test("Sending tiny mp4 attachments _030", async () => {
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

test("Sending tiny mp4 attachments _031", async () => {
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

test("Sending tiny mp4 attachments _032", async () => {
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

test("Sending tiny mp4 attachments _033", async () => {
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

test("Sending tiny mp4 attachments _034", async () => {
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

test("Sending tiny mp4 attachments _035", async () => {
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

test("Sending tiny mp4 attachments _036", async () => {
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

test("Sending tiny mp4 attachments _037", async () => {
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

test("Sending tiny mp4 attachments _038", async () => {
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

test("Sending tiny mp4 attachments _039", async () => {
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

test("Sending tiny mp4 attachments _040", async () => {
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

test("Sending tiny mp4 attachments _041", async () => {
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

test("Sending tiny mp4 attachments _042", async () => {
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

test("Sending tiny mp4 attachments _043", async () => {
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

test("Sending tiny mp4 attachments _044", async () => {
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

test("Sending tiny mp4 attachments _045", async () => {
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

test("Sending tiny mp4 attachments _046", async () => {
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

test("Sending tiny mp4 attachments _047", async () => {
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

test("Sending tiny mp4 attachments _048", async () => {
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

test("Sending tiny mp4 attachments _049", async () => {
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

test("Sending tiny mp4 attachments _050", async () => {
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

test("Sending tiny mp4 attachments _051", async () => {
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

test("Sending tiny mp4 attachments _052", async () => {
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

test("Sending tiny mp4 attachments _053", async () => {
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

test("Sending tiny mp4 attachments _054", async () => {
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

test("Sending tiny mp4 attachments _055", async () => {
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

test("Sending tiny mp4 attachments _056", async () => {
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

test("Sending tiny mp4 attachments _057", async () => {
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

test("Sending tiny mp4 attachments _058", async () => {
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

test("Sending tiny mp4 attachments _059", async () => {
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

test("Sending tiny mp4 attachments _060", async () => {
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

test("Sending tiny mp4 attachments _061", async () => {
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

test("Sending tiny mp4 attachments _062", async () => {
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

test("Sending tiny mp4 attachments _063", async () => {
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

test("Sending tiny mp4 attachments _064", async () => {
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

test("Sending tiny mp4 attachments _065", async () => {
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

test("Sending tiny mp4 attachments _066", async () => {
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

test("Sending tiny mp4 attachments _067", async () => {
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

test("Sending tiny mp4 attachments _068", async () => {
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

test("Sending tiny mp4 attachments _069", async () => {
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

test("Sending tiny mp4 attachments _070", async () => {
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

test("Sending tiny mp4 attachments _071", async () => {
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

test("Sending tiny mp4 attachments _072", async () => {
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

test("Sending tiny mp4 attachments _073", async () => {
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

test("Sending tiny mp4 attachments _074", async () => {
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

test("Sending tiny mp4 attachments _075", async () => {
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

test("Sending tiny mp4 attachments _076", async () => {
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

test("Sending tiny mp4 attachments _077", async () => {
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

test("Sending tiny mp4 attachments _078", async () => {
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

test("Sending tiny mp4 attachments _079", async () => {
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

test("Sending tiny mp4 attachments _080", async () => {
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

test("Sending tiny mp4 attachments _081", async () => {
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

test("Sending tiny mp4 attachments _082", async () => {
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

test("Sending tiny mp4 attachments _083", async () => {
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

test("Sending tiny mp4 attachments _084", async () => {
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

test("Sending tiny mp4 attachments _085", async () => {
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

test("Sending tiny mp4 attachments _086", async () => {
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

test("Sending tiny mp4 attachments _087", async () => {
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

test("Sending tiny mp4 attachments _088", async () => {
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

test("Sending tiny mp4 attachments _089", async () => {
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

test("Sending tiny mp4 attachments _090", async () => {
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

test("Sending tiny mp4 attachments _091", async () => {
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

test("Sending tiny mp4 attachments _092", async () => {
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

test("Sending tiny mp4 attachments _093", async () => {
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

test("Sending tiny mp4 attachments _094", async () => {
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

test("Sending tiny mp4 attachments _095", async () => {
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

test("Sending tiny mp4 attachments _096", async () => {
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

test("Sending tiny mp4 attachments _097", async () => {
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

test("Sending tiny mp4 attachments _098", async () => {
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

test("Sending tiny mp4 attachments _099", async () => {
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

test("Sending tiny mp4 attachments _100", async () => {
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

