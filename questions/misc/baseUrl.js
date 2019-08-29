module.exports = {
  type: 'input',
  name: 'baseUrl',
  message: "Web app's base url?",
  default: 'https://builderx.io',
  when: _answers => ['web', 'api'].includes(_answers.arch)
};
