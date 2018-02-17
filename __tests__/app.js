"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-jekyllized:app", () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ someAnswer: true });
  });

  it("creates essential files", () => {
    assert.file([".editorconfig", ".gitattributes", ".gitignore", "README.md"]);
  });
});
