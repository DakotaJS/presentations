// TODO: Ignore vendor files from jshint
// TODO: Fix the concat order of js

module.exports = function(grunt) {
	grunt.initConfig({
		jshint: {
			app: ['js/**/*.js'],
			options: {
				force: true, // Continue on errors
				undef: true, // Check for missing vars
				devel: true, // Allows console.log
				browser: true, // Allows use of things like window.
				globals: {
					"App": true,
					"Ember": true
				},
				ignores: ["js/jquery.js"]
			}
		},
		concat: {
			app: {
				src: ['js/jquery.js', 'js/app.js'],
				dest: 'dist/built.js'
			}
		}
	});

	// Load each plugin you `npm install`
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');

	// Register a default task that runs when calling `grunt`
	grunt.registerTask('default', ['jshint', 'concat']);
};