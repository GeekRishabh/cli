const { exec } = require('child_process');

const { createFolder, createFileWithContent } = require('../helpers/designer');

let app = {};

// Create project...
app.init = async _appName => {
  exec(`create-react-app ${_appName}`, (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      console.error(err);
    } else {
      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
  });
};

module.exports = app;
