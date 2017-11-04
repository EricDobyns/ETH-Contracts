'use strict'

const gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    minifycss = require('gulp-minify-css'),
    browserSync = require('browser-sync'),
    del = require('del'),
    runSequence = require('run-sequence');


gulp.task('browser-sync', function() {
    browserSync({
        server: {
          baseDir: "app/dist"
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('images', function() {
    gulp.src('app/src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images/'));
});

gulp.task('views', function() {
    gulp.src('app/src/index.html')
    .pipe(gulp.dest('app/dist'))

    gulp.src('app/src/views/**/*.html')
    .pipe(gulp.dest('app/dist/views'))
});

gulp.task('styles', function() {
    gulp.src(['app/src/styles/**/*.css'])
        .pipe(plumber({
            errorHandler: function (error) {
            console.log(error.message);
            this.emit('end');
        }}))
        .pipe(concat('styles.css'))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('app/dist/styles/'))
        .pipe(browserSync.reload({stream:true}))
});

gulp.task('scripts', function() {
    gulp.src('build/contracts/SkeletonCoin.json')
    .pipe(gulp.dest('app/dist/contracts'))
    gulp.src('build/contracts/SkeletonCoinCrowdsale.json')
    .pipe(gulp.dest('app/dist/contracts'))    
    gulp.src('app/src/scripts/truffle-contract.min.js')
    .pipe(gulp.dest('app/dist/scripts'))
    return gulp.src(['app/src/scripts/**/*.js', '!app/src/scripts/truffle-contract.min.js'])
        .pipe(plumber({
            errorHandler: function (error) {
            console.log(error.message);
            this.emit('end');
        }}))
        .pipe(concat('scripts.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('app/dist/scripts/'))
        .pipe(browserSync.reload({stream:true}))
});

gulp.task('build', function(completion) {
    runSequence('images', 'views', 'styles', 'scripts', completion);
});

// gulp.task('build', ['images', 'views', 'styles', 'scripts']);

gulp.task('clean', function() {
    return del(['app/dist/**'], {force:true});
});

gulp.task('default', function() {
    runSequence('clean', 'build', 'browser-sync', function() {
        gulp.watch("app/src/views/**/*.html", ['views']);
        gulp.watch("app/src/styles/**/*.css", ['styles']);
        gulp.watch("app/src/scripts/**/*.js", ['scripts']);
        gulp.watch("app/*.html", ['bs-reload']);
    });
});