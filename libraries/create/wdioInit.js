// Importing libraries...
const colors = require('colors');
const inquirer = require('inquirer');

const { drawLine, showInfo } = require('../helpers/terminal');
const { perform: runNpmInstall } = require('../install');

// Load all the necessary questions...
const {
  appName,
  stack,
  browserStackUser,
  browserStackKey,
  osVersion,
  osName,
  logLevel,
  screenshotPath,
  baseUrl,
  waitTimeout,
  retryCount
} = require('../../questions');

const arch = {
  type: 'list',
  name: 'arch',
  message: 'What you are building wdio for ?',
  default: 'web',
  choices: ['web', 'api', 'mobile']
};

const initWdio = async (options, cmd) => {
  drawLine();

  // Start the CLI communication...
  inquirer
    .prompt([
      arch,
      appName,
      stack,
      browserStackUser,
      browserStackKey,
      osName,
      osVersion,
      logLevel,
      baseUrl,
      waitTimeout,
      retryCount
    ])
    .then(async answers => {
      drawLine();
      console.log(answers, '  answers.arch>>>');

      console.log('\n?'.green, 'Please wait...'.yellow);

      drawLine();

      const { init, generateFolders, generateFiles } = require('./creator')(
        answers.arch
      );

      showInfo('Creating your', answers.appName, 'directory...');
      await init(answers.appName);

      showInfo('Adding our directories into', answers.appName, 'project...');
      await generateFolders(answers.appName);

      showInfo(
        'Adding files into those directories of',
        answers.appName,
        'project...'
      );
      await generateFiles(answers);

      showInfo(
        'Installing NPM dependencies to',
        answers.appName,
        'directory...'
      );
      drawLine();

      await runNpmInstall(answers.appName);
    });
};

module.exports = {
  initWdio
};
