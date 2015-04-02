module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	var userConfig = require( './build.config.js' );

	var taskConfig = {
		pkg: grunt.file.readJSON("package.json"),
		meta: {
			banner:
				'/**\n' +
				' * <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
				' * <%= pkg.homepage %>\n' +
				' *\n' +
				' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
				' * Licensed <%= pkg.licenses.type %> <<%= pkg.licenses.url %>>\n' +
				' */\n'
		},
		clean: [
			'<%= build_dir %>'
		],
		concat: {
			build_css: {
				options: {
					banner: '<%= meta.banner %>'
				},
				src: [
					'<%= vendor_files.css %>',
					'<%= app_files.css %>'
				],
				dest: '<%= build_dir %>/css/<%= pkg.name %>.css'
			}
		},
		autoprefixer: {
			options: {
				browsers: ['> 1%', 'last 2 versions', 'Safari 7'],
				cascade: true,
				remove: true,
				diff: false,
				map: false,
				silent: false
			},
			single_file: {
				src: '<%= concat.build_css.dest %>',
				dest: '<%= concat.build_css.dest %>'
			}
		},
		cssmin: {
			target: {
				files: [{
					expand:true,
					src: '<%= autoprefixer.single_file.dest %>',
					ext: '.min.css'
				}]
			}
		}
	};

	grunt.initConfig( grunt.util._.extend( userConfig, taskConfig ) );

	grunt.registerTask( 'build', [
		'clean', 'concat:build_css', 'autoprefixer', 'cssmin'
	]);
};