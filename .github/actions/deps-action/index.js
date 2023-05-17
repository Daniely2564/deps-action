const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");
const DepsBot = require("./libs/DepsBot");

async function run() {
  const depsBot = new DepsBot();
  const list = await depsBot.getVersionsList("@arcgis/core");
  core.notice(`echo '${__dirname}'`);
}

run();
