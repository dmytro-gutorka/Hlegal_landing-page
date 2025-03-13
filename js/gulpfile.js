const {src, dest, watch} = require('gulp');

const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;

function scripts(){
    return src('hlegal/js/scripts')
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(dest('hlegal/js'))
}

function watching(){
    watch(['hlegal/scss/style.scss'], styles)
    watch(['hlegal/js/scripts.scss'], scripts)
}

function styles(){
    return src('hlegal/scss/style.scss')
        .pipe(concat('style.min.scss'))
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(dest('app/css'))
}

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
