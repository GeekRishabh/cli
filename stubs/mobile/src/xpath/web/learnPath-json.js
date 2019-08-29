let learnPathJSON = {};

learnPathJSON.path = "src/xpath/web";
learnPathJSON.filename = "learnPath.json";
learnPathJSON.content = `{
	"learnLink": "//div[contains(text(),'Learn')]",
	"designer": "//a[contains(text(),'Designer')]",
	"developer": "//a[contains(text(),'Developer')]"
}`;

module.exports = learnPathJSON;
