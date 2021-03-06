// Install Gulp
var gulp = require('gulp');

// Install Plugins
var = uglify = require('gulp-uglify');
var = sass = require('gulp-sass');
var = bitters = require('node-refills').includePaths;
var = plumber = require('gulp-plumber');
// autoprefixer = require('gulp-autoprefixer');

// Scripts task
// Uglifies
gulp.task('scripts', function() {
  gulp.src('assets/js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));  
});

// Styles task
// Drugs
gulp.task('sass', function() {
  gulp.src('assets/scss/**/**/**/*.scss')
    .pipe(plumber())
    // .pipe(autoprefixer({
    //     browsers: ['last 2 versions'],
    //     cascade: false
    // }))
    .pipe(sass({
      style: 'nested',
      lineNumbers: true
}))
  .pipe(gulp.dest('assets/css/'));
});

// Watch task
// Watches JS
gulp.task('watch', function() {
    gulp.watch('assets/js/*.js', ['scripts']);
    gulp.watch('assets/scss/**/**/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'scripts', 'watch']);

