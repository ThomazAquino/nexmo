//const mozjpeg = require('imagemin-mozjpeg');
module.exports = function (grunt) {

	//config
	grunt.initConfig({
		//options
		concat: {
			js: {
				src: ['src/scripts.js'],
				dest: 'dist/built.js',
			},
		},
		sass: {                              // Task
			dist: { 
				files: {                         // Dictionary of files
					"dist/css/login.css": "src/styles/login.scss",
					"dist/css/equipment.css": "src/styles/equipment.scss",
					"dist/css/process-list.css": "src/styles/process-list.scss",
					"dist/css/scroll-view.css": "src/styles/scroll-view.scss"      // "destination": "source"
				},
			},
		},
	
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'src/images',
					src: ['**/*.{png,jpg}'],
					dest: 'dist/images/'
				}]
			}
		},
	
		watch: {
			scripts: {
				files: ['**/*.js'],
				tasks: ['concat'],
				options: {
					spawn: false,
				},
			},
			css: {
				files: ['src/styles/**/*'],
				tasks: ['sass'],
				options: {
					spawn: false,
				},
			},
		},
	});

	//load plugins
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');


	 // Default task(s).
	 grunt.registerTask('default', ['concat', 'sass', 'imagemin', 'watch']);
}