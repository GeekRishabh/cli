const { createFolder, createFileWithContent } = require('../helpers/designer');

const { loginJS, loginPageJS } = require('../../stubs/react/components');

let components = {};

// Folders paths...
components.structure = {
  directories: ['BaseApi']
};

// Create project...
components.init = async _appName => await createFolder(`${_appName}`);

// Generates baseApi folder...
components.generateFolders = async _appName => {
  let promises = [];
  components.structure.directories.forEach(folder => {
    promises.push(createFolder(`${_appName}/${folder}`));
  });

  await Promise.all(promises);
};

// Create conf file and write content...
components.generateFiles = async _answers => {
  // Create .env file...
  await createFileWithContent(`./${_answers.appName}`, '.env', '');

  // Create commons files...
  await createFileWithContent(
    `./${_answers.appName}/${loginJS.path}`,
    loginJS.filename,
    loginJS.content
  );

  // Create xpath files...
  await createFileWithContent(
    `./${_answers.appName}/${loginPathJSON.path}`,
    loginPathJSON.filename,
    loginPathJSON.content
  );
};

module.exports = components;
