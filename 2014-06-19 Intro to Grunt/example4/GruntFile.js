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
				ignores: ['js/jquery.js']
			}
		},
		concat: {
			app: {
				src: ['js/jquery.js', 'js/app.js'],
				dest: 'dist/built.js'
			}
		},
		uglify: {
			app: {
				src: 'dist/built.js',
				dest: 'dist/built.min.js'
			}
		},
		watch: {
			app: {
				files: ['js/**/*.js'],
				tasks: ['jshint', 'concat', 'uglify']
			}
		}
	});

	// Load each plugin you `npm install`
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Register a default task that runs when calling `grunt`
	grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'watch']);
};