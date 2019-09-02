// Importing libraries...
const colors = require('colors');
const inquirer = require('inquirer');

const { drawLine, showInfo } = require('../helpers/terminal');
const { arch } = require('../../questions');
const react = require('./reactInit');
const wdio = require('./wdioInit');

const create = async (options, cmd) => {
  drawLine();

  // Start the CLI communication...
  inquirer.prompt([arch]).then(answers => {
    console.log(answers, 'answers');
    switch (answers.type) {
      case 'wdio':
        return wdio.initWdio();
      case 'react':
        return react.initReact();
      default:
        return react.initReact();
    }
  });
};

module.exports = {
  create
};
