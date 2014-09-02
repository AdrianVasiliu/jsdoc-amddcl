module.exports = function (grunt) {
	grunt.loadTasks("tasks");
	grunt.initConfig({
		"jsdoc-amddcl": {
			"sampleframework": {
				files: [
					{
						args: [
							"-c",
							"./conf.json"
						],
						src: [
							"./sampleprojects/sampleframework",
							"./sampleprojects/sampleframework/README.md",
							"./sampleprojects/sampleframework/package.json"
						]
					},
					{
						args: [
							"-X",
							"-c",
							"./conf.json"
						],
						src: [
							"./sampleprojects/sampleframework",
							"./sampleprojects/sampleframework/README.md",
							"./sampleprojects/sampleframework/package.json"
						],
						dest: "./out/sampleframework/doclets.json"
					}
				]
			},
			"sampleproject": {
				files: [
					{
						args: [
							"-c",
							"./conf.json"
						],
						src: [
							"./sampleprojects/sampleproject",
							"./sampleprojects/sampleproject/README.md",
							"./sampleprojects/sampleproject/package.json"
						],
						paths: {
							"sampleframework": "../../sampleframework/0.1.0-dev/sampleframework"
						},
						imports: [
							"./out/sampleframework"
						]
					},
					{
						args: [
							"-X",
							"-c",
							"./conf.json"
						],
						src: [
							"./sampleprojects/sampleproject",
							"./sampleprojects/sampleproject/README.md",
							"./sampleprojects/sampleproject/package.json"
						],
						dest: "./out/sampleproject/doclets.json"
					}
				]
			}
		}
	});
	grunt.registerTask("default", ["jsdoc-amddcl"]);
};
