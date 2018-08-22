const gulp         = require('gulp');
const sass         = require('gulp-sass');
const sourcemaps   = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync  = require('browser-sync');
const plumber      = require('gulp-plumber');


gulp.task('browser-sync', () => {
    'use strict';
    browserSync.init({
        server: {
            baseDir: 'public',
            // index: './index.html'
        },
        open: false,
        notify: false,
        logLevel: 'debug'
    });

    gulp.watch('src/sass/**/*.scss', ['sass']);
    gulp.watch('src/js/**/*.*', ['js']);
    gulp.watch(['./src/html/**/*.html'], ['html'])
        .on('change', browserSync.reload);
});

gulp.task('sass', () => {
    return gulp.src('./src/sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('js', () => {
    const dst = 'public/js/';

    return gulp.src('./src/js/app.js')
        .pipe(plumber())
        .pipe(gulp.dest(dst))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('html', () => {
    gulp.src(['src/html/*.html'], {
        base: 'src/html/'
    })
    .pipe(plumber())
    .pipe(gulp.dest('./public/'));
});

gulp.task('img', () => {
    gulp.src(['src/img/*.png'], {
        base: 'src/img/'
    })
    .pipe(plumber())
    .pipe(gulp.dest('./public/img/'));
});


gulp.task('default', ['sass', 'js', 'img', 'html', 'browser-sync',]);
