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
			geneva: {
				src: ['src/fonts/geneva.ttf'],
				dest: 'dist/fonts/geneva.ttf',
			},
			helvetica: {
				src: ['src/fonts/HelveticaNeue-Medium.otf'],
				dest: 'dist/fonts/HelveticaNeue-Medium.otf',
			},
		},
		sass: {                              // Task
			dist: { 
				files: {                         // Dictionary of files
					"dist/css/login.css": "src/styles/login.scss",
					"dist/css/equipment.css": "src/styles/equipment.scss",
					"dist/css/process-list.css": "src/styles/process-list.scss",
					"dist/css/wheels.css": "src/styles/wheels.scss",
					"dist/css/schaden.css": "src/styles/schaden.scss",
					"dist/css/schaden-list.css": "src/styles/schaden-list.scss",
					"dist/css/schaden-details.css": "src/styles/schaden-details.scss",
					"dist/css/schaden-check.css": "src/styles/schaden-check.scss",
					"dist/css/scroll-view.css": "src/styles/scroll-view.scss" // "destination": "source"
				},
			},
		},
	
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'src/images',
					src: ['**/*.{png,jpg,svg}'],
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