const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");
const execSync = require("./libs/execSync");

async function run() {
  const list = await execSync(`npm view @arcgis/core versions`);
  core.notice(list);
}

run();
