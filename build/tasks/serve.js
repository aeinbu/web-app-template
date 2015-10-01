var gulp = require('gulp');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var del = require('del');
var vinylPaths = require('vinyl-paths');

function reportChange(event) {
	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('watch', ['serve'], function () {
	gulp.watch("index.html", browserSync.reload).on('change', reportChange);
});

gulp.task('serve', function (done) {
	browserSync({
		open: false,
		port: 9000,
		files: ['styles/main.css'],
		server: {
			baseDir: ['.'],
			middleware: function (req, res, next) {
				res.setHeader('Access-Control-Allow-Origin', '*');
				next();
			}
		}
	}, done);
});

gulp.task('build', ['clean'], function () {
	return gulp.src('./src/**/*.*')
		.pipe(plumber())
	// .pipe(changed(paths.output, {extension: '.js'}))
	// .pipe(sourcemaps.init({loadMaps: true}))
	// .pipe(to5(assign({}, compilerOptions, {modules:'system'})))
	// .pipe(sourcemaps.write({includeContent: false, sourceRoot: paths.sourceMapRelativePath }))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('clean', function () {
	return gulp.src(['./dist/**/*.*'])
		.pipe(vinylPaths(del));
});

