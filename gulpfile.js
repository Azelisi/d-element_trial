const { src, dest, watch, parallel, series } = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');
const gulppug = require('gulp-pug');



function scripts() {
    return src([
        'app/js/main.js'
    ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream());
}

function styles() {
    return src('app/scss/style.scss')
        .pipe(autoprefixer({ overrideBrowserlist: ['last 10 version'] }))
        .pipe(concat('style.min.css'))
        .pipe(scss({ outputStyle: 'compressed' }))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream());
}

function images() {
    return src('app/images/**/*')
        .pipe(imagemin())
        .pipe(dest('dist/images'));
}

function pug() {
    return src('app/pug/**/*.pug')
        .pipe(gulppug())
        .pipe(dest('app/pug/base'))
        .pipe(browserSync.stream());
}


function watching() {
    watch(['app/scss/style.scss'], styles);
    watch(['app/js/main.js'], scripts);
    watch(['app/pug/*.pug'], pug);
    watch(['app/*.html']).on('change', browserSync.reload);
}

function browsersync() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        }
    });
}

function cleanDist() {
    return src('dist')
        .pipe(clean());
}

function building() {
    return src([
        'app/css/style.min.css',
        'app/js/main.min.js',
        'app/**/*.html'
    ], { base: 'app' })
        .pipe(dest('dist'));
}

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.browsersync = browsersync;
exports.pug = pug;

exports.build = series(cleanDist, parallel(images, pug, styles, scripts,), building);
exports.default = parallel(styles, pug, scripts, browsersync, watching);