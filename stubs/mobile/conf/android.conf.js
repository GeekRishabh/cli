const { get } = require("lodash");
const commonJs = require("./common.conf");

let confJs = {};

confJs.filename = "android.conf.js";

confJs.path = "conf";

confJs.content = answers => {
	const _commonPartial = commonJs.content(answers);

	return `exports.config = {
	
	specs: [
		"./src/test/login-test.js",
		"./src/test/form-test.js",
		"./src/test/signUp-test.js",
		"./src/test/changeTab-test.js"
	],

	services: ["appium"],
	
	appium: {
		logPath: \`${get(answers, "logPath", "./store/")}\${process.env.GA_SESSION_ID}/\`,
	},

	port: 4723,

	capabilities: [{
		maxInstances: 1,
		appPackage: \`\${process.env.ANDROID_APPPACKAGE}\`,
		appActivity: \`\${process.env.ANDROID_APPACTIVITY}\`,
		deviceName: \`\${process.env.ANDROID_DEVICENAME}\`,
		platformName: \`\${process.env.ANDROID_PLATFORMNAME}\`,
		app: \`\${process.env.ANDROID_APPID}\`,
	}],

	${_commonPartial}
}`;
};

module.exports = confJs;
