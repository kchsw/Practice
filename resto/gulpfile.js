var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    pump = require('pump'),
    cleanCSS = require('gulp-clean-css');

gulp.task('autocss', function(cb) {
	pump([
		gulp.src('./src/css/*.css'),
		postcss([autoprefixer({
			browsers: ['last 2 versions'],
			cascade: true
		})]),
		cleanCSS({compatibility: 'ie8'}),
		gulp.dest('./dist/css')
	], cb)
});



gulp.task('default', gulp.series('autocss'));