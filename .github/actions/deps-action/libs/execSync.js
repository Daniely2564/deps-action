const { exec } = require("child_process");

const execSync = (cmd = "") => {
  return new Promise((res, rej) => {
    if (!cmd) return rej("No execution command provided.");
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        console.log(`Error Encountered : ${err}`);
        return rej(err);
      }

      if (stderr) {
        console.log(`Encounted STD Error : ${stderr}`);
        return rej(stderr);
      }

      res(stdout);
    });
  });
};

module.exports = execSync;
