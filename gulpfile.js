'use strict';

const gulp       = require('gulp'),
	  connect    = require('gulp-connect'),
	  pkg        = require('./package.json'),
	  sass       = require('gulp-sass');

gulp.task('connect', function() {
	return connect.server({
		root: './source/',
		livereload: true
	});
});

gulp.task('html', function() {
	gulp.src('./source/index.html')
    	.pipe(connect.reload());
});

/*gulp.task('css', function(){
	gulp.src('./source/css/style.css')
    	.pipe(connect.reload());
});*/

gulp.task('sass', function () {
	return gulp.src('./source/sass/*.scss')
    	.pipe(sass().on('error', sass.logError))
    	.pipe(gulp.dest('./source/css'))
    	.pipe(connect.reload());
});

gulp.task('js', function() {
	gulp.src('./source/js/*')
    	.pipe(connect.reload());
});

gulp.task('watch', function() {
	gulp.watch('./source/index.html', ['html']);
	gulp.watch('./source/sass/*.scss', ['sass']);
	//gulp.watch('./source/css/style.css', ['css']);
	gulp.watch('./source/js/*', ['js']);
});

gulp.task('default', ['connect', 'watch']);