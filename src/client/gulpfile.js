var gulp = require('gulp');
var jade = require('gulp-jade');
var concat = require('gulp-concat');

var staticDir = '../server/static';
var jsDir = staticDir + '/js';

gulp.task('javascript', function() {
	gulp.src('./app/js/*.js')
	.pipe(concat('app.js'))
	.pipe(gulp.dest(jsDir));
});

gulp.task('templates', function() {
	gulp.src('./app/**/*.jade')
	.pipe(jade())
	.pipe(gulp.dest(staticDir));
});



gulp.task('default', ['templates', 'javascript']);