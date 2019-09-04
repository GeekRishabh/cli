const { createFolder, createFileWithContent } = require('../helpers/designer');

const {
  packageJson,
  babelConfigJS,
  testJS,
  npmRc,
  localConfJS,
  uploadPageJS,
  formPageJS,
  openPageJS,
  loginJS,
  loginPathJSON,
  scrollPageJS,
  scrollToElementJS,
  signUpJS,
  uploadImageJS,
  signupPathJSON,
  uploadPhotoJSON,
  scrollDownJS,
  scrollTillJS,
  singleTestJS,
  loginPageJS,
  signUpPageJS,
  logoutJS
} = require('../../stubs/react/components');

let components = {};

// Folders & Sub-Folders paths...
components.structure = {
  directories: ['conf', 'src'],
  sub_directories: [
    'src/commons',
    'src/repo',
    'src/tests',
    'src/vendor',
    'src/xpaths'
  ],
  others: ['src/tests/auth', 'src/tests/profile']
};

// Create project...
components.init = async _appName => await createFolder(`${_appName}`);

// Generates all the required folders...
components.generateFolders = async _appName => {
  let promises = [];
  components.structure.directories.forEach(folder => {
    promises.push(createFolder(`${_appName}/${folder}`));
  });

  await Promise.all(promises);

  promises = [];
  components.structure.sub_directories.forEach(subFolder => {
    promises.push(createFolder(`${_appName}/${subFolder}`));
  });

  await Promise.all(promises);

  promises = [];
  components.structure.others.forEach(other => {
    promises.push(createFolder(`${_appName}/${other}`));
  });

  await Promise.all(promises);
};

// Create conf file and write content...
components.generateFiles = async _answers => {
  // Create .env file...
  await createFileWithContent(`./${_answers.appName}`, '.env', '');

  // Create package.json file...
  await createFileWithContent(
    `./${_answers.appName}`,
    packageJson.filename,
    packageJson.content
  );

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
