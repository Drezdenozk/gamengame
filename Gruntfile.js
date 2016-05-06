module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		watch: {
			scripts: {
				files: ['assets/js/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false,
					livereload: true,
				},
			},
			css: {
				files: ['assets/less/*.less'],
				tasks: ['less'],
				options: {
					spawn: false,
					livereload: true,
				}
			},
			html: {
				files: ['index.html'],
				options: {
					livereload: true
				}
			}
		},
		
		jshint: {
			beforeconcat: ['assets/js/*.js'],
			afterconcat: ['assets/js/build/production.js']
		},
		
        concat: {
            // 2. Настройка для объединения файлов находится тутconcat: {
			dist: {
				src: [
					'assets/js/*.js',
				],
				dest: 'assets/js/build/production.js',
			},
		},
		
		uglify: {
			build: {
				src: 'assets/js/build/production.js',
				dest: 'js/production.min.js'
			}
		},
		
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'assets/img',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'img/'
				}]
			}
		},
		
		less: {
		  development: {
			options: {
			  paths: ['less'],
			  compress: true,
			  syncImport: true,
			},
			files: {
			  'css/taiga.css': 'assets/less/taiga.less'
			}
		  },
		},
	
	});
		
		// 3. Тут мы указываем Grunt, что хотим использовать этот плагин
		grunt.loadNpmTasks('grunt-contrib-concat');
		grunt.loadNpmTasks('grunt-contrib-uglify');
		grunt.loadNpmTasks('grunt-contrib-imagemin');
		grunt.loadNpmTasks('grunt-contrib-less');
		grunt.loadNpmTasks('grunt-contrib-jshint');
		grunt.loadNpmTasks('grunt-contrib-watch');

		// 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
		grunt.registerTask('default', ['less', 'concat', 'concat', 'uglify', 'imagemin', 'watch']);

};