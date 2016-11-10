const connect = require('gulp-connect');
const gulp = require('gulp');
const ssg = require('metal-ssg');
const sass = require('gulp-sass');

ssg.registerTasks({
	gulp: gulp
});

// CSS -------------------------------------------------------------------------

gulp.task('css', () => {
	return gulp.src('src/styles/**/*.scss')
		.pipe(sass({includePaths: ['node_modules']}))
		.pipe(gulp.dest('dist/styles'));
});

// Fonts -----------------------------------------------------------------------

gulp.task('fonts', () => {
	return gulp.src('node_modules/westyle/build/fonts/**')
		.pipe(gulp.dest('dist/fonts'));
});

// Server ----------------------------------------------------------------------

gulp.task('server', () => {
	connect.server({
		root: 'dist',
		port: 8888
	});
});

// Watch -----------------------------------------------------------------------

gulp.task('watch', () => {
	gulp.watch('src/styles/**/*.scss', ['css']);
	gulp.watch('src/**/*.html', ['html']);
});

// Build -----------------------------------------------------------------------

gulp.task('default', ['generate', 'css', 'html', 'server']);