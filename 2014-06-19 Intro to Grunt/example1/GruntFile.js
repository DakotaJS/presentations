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
				}
			}
		}
	});

	// Load each plugin you `npm install`
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// Register a default task that runs when calling `grunt`
	grunt.registerTask('default', ['jshint']);
};