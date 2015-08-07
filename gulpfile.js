'use strict';

var gulp       = require('gulp'),
	connect    = require('gulp-connect'),
	pkg        = require('./package.json');

gulp.task('connect', function(){
	return connect.server({
		root: './source/',
		livereload: true
	});
});

gulp.task('html', function(){
	gulp.src('./source/index.html')
    	.pipe(connect.reload());
});

gulp.task('css', function(){
	gulp.src('./source/css/style.css')
    	.pipe(connect.reload());
});

gulp.task('watch', function(){
	gulp.watch('./source/index.html', ['html']);
	gulp.watch('./source/css/style.css', ['css']);
});

gulp.task('default', ['connect', 'watch']);