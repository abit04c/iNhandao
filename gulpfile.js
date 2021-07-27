'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    var stream = gulp
        .src('assets/css/*.scss')
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(sass({ errLogToConsole: true }))
        .pipe(sourcemaps.write(undefined, { sourceRoot: null }))
        .pipe(gulp.dest('assets/css/'))
        .pipe(browserSync.stream());
    return stream;
});

gulp.task('watch', function() {
    gulp.watch(`assets/css/*.scss`, gulp.series('sass'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('watch-bs', gulp.parallel('browser-sync', 'watch'));