const execSync = require("./execSync");
const fs = require("fs");

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

  readPackageJson() {
    console.log(__dirname);
  }
}

module.exports = DepsBot;
