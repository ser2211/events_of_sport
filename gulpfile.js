'use strict';

let gulp        = require('gulp'),
    typescript  = require('typescript'),
    ts          = require('gulp-typescript'),
    browserify  = require('browserify'),
    source      = require('vinyl-source-stream'),
    del         = require('del'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;

let tsProject = ts.createProject('./tsconfig.json', {
    typescript: typescript
});

gulp.task('clean', function () {
    console.log(del.sync(['.tmp', 'web']));
});

gulp.task('scss', function () {
    return gulp.src('./assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./web/css'))
        .pipe(reload({stream: true}));
});

gulp.task('images', function () {
    gulp.src('./assets/images/**/*')
        //        .pipe(imagemin())
        .pipe(gulp.dest('./web/images'))
        .pipe(reload({stream: true}));
});

gulp.task('fonts', function () {
    gulp.src('./assets/fonts/**/*')
        .pipe(gulp.dest('./web/fonts'))
});

gulp.task('html', function () {
    return gulp
        .src(['assets/index.html'])
        .pipe(gulp.dest('web'))
        .pipe(reload({stream: true}));
});

gulp.task('compile', function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest('.tmp'));

//    let result = gulp.src("src/**/*.{ts,tsx}")
//                     .pipe(project());
//    return result.js.pipe(gulp.dest(".tmp"));
});

gulp.task('bundle', ['compile'], function () {
    return browserify('.tmp/index.js', {
        options: {
            bundleOptions: {
                debug: true
            }
        }
    }).bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('web'))
        .pipe(reload({stream: true}));
});

gulp.task('build', ['html', 'bundle', 'scss', 'images', 'fonts'], function () {
});

gulp.task('clean', function (done) {
    del(['.tmp'], done.bind(this));
});

gulp.task('live', [], function () {
    browserSync({server: './web'});
});

gulp.task('watch', ['build', 'live'], function () {
    gulp.watch('./src/**/*', ['bundle']);
    gulp.watch('./assets/*.html', ['html']);
    gulp.watch('./assets/scss/*', ['scss']);
    gulp.watch('./assets/images/*', ['images']);
});