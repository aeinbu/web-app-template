var gulp = require('gulp');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var babel = require('gulp-babel');
// var qunit = require('node-qunit-phantomjs');
var qunit = require('gulp-qunit');

gulp.task('clean-tests', function () {
	return gulp.src(['./tests/transpiled-*/**/*.*'])
		.pipe(vinylPaths(del));
});

gulp.task('transpile-source', function () {
	return gulp.src('lib/**/*.js')
		.pipe(babel({modules: 'common'}))
		.pipe(gulp.dest('tests/lib'));
});

// gulp.task('qunit', function () {
// 	qunit('tests/testrunner.html', { verbose: false });
// });

gulp.task('qunit', function() {
    return gulp.src('tests/testrunner.html')
        .pipe(qunit());
});

gulp.task('tests', ['clean-tests', 'transpile-source', 'qunit']);

