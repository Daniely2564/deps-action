const execSync = require("./execSync");
const fs = require("fs");
const yml = require("js-yaml");

class DepsBot {
  constructor() {}

  async getVersionsList(dep = "") {
    if (!dep) throw new Error("No Package provided.");
    try {
      const list = await execSync(`npm view ${dep} versions --json`);
      return JSON.parse(list);
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  readInConfig() {
    // By default the configuration is located at .github/deps-action.yml
    const configurationYML = (obj = yml.load(
      fs.readFileSync("./.github/deps-action.yml", { encoding: "utf-8" })
    ));

    return configurationYML;
  }

  readPackageJson() {}
}

module.exports = DepsBot;
