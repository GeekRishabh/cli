const { get } = require("lodash");
const commonJs = require("./common.conf");

let confJs = {};

confJs.filename = "browserstack-android.conf.js";

confJs.path = "conf";

confJs.content = answers => {
  const _commonPartial = commonJs.content(answers);
  
  return `exports.config = {
  user: "${get(answers, "browserStack.user", "")}",
  key: "${get(answers, "browserStack.key", "")}",

  updateJob: false,
  
  specs: [
    './src/test/login-test.js',
    './src/test/form-test.js',
    './src/test/signUp-test.js',
    './src/test/changeTab-test.js'
  ],

  capabilities: [{
    device: \`\${process.env.ANDROID_BS_DEVICE}\`,
    name: \`\${process.env.ANDROID_BS_NAME}\`,
    app: \`\${process.env.ANDROID_BS_APPURL}\`,
    'browserstack.debug': true,
    gpsEnabled: true,
    autoGrantPermissions: true
  }],

  ${_commonPartial}
}`;
};
module.exports = confJs;
