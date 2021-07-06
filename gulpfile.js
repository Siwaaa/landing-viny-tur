const {src, dest, series, parallel, watch} = require('gulp')
const sass = require('gulp-sass')
const csso = require('gulp-csso')
const htmlmin = require('gulp-htmlmin')
const include = require('gulp-file-include')
const babel = require('gulp-babel')
const replace = require('gulp-replace')
const del = require('del')
const sync = require('browser-sync')
const imagemin = require('gulp-imagemin')
const autoPrefixer = require('gulp-autoprefixer')

// HTML

function html() {
  return src('src/*.html')
    .pipe(include({
      prefix: '@'
    }))
    .pipe(htmlmin({
      removeComments: true,
      collapseWhitespace: true
    }))
    .pipe(dest('build'))
    .pipe(sync.stream())
}

// STYLES

function styles() {
  return src('src/css/*.css')
    .pipe(autoPrefixer({
      overrideBrowserslist: ['last 5 versions'],
      cascade: false
    }))
    .pipe(csso())
    .pipe(dest('build/css/'))
    .pipe(sync.stream())
}

// SCRIPTS

function scripts() {
  return src('src/js/*.js')
    .pipe(babel())
    .pipe(dest('build/js/'))
    .pipe(sync.stream())
}

// IMG MIN

function imgmin() {
  return src('src/img/*')
    .pipe(imagemin())
    .pipe(dest('build/img/'))
}

// FONTS

function fonts() {
  return src('src/fonts/*')
    .pipe(dest('build/fonts/'))
}

function clean() {
  return del('build')
}

function serve() {
  sync.init({
    server: './build'
  })

  watch(['src/*.html', 'src/blocks/*.html'], html)
  watch('src/css/*.css', styles)
  watch('src/js/*.js', scripts)
}

// ** EXPORTS **
exports.build = series(
  clean,
  parallel(html, styles, scripts, imgmin, fonts)
)

exports.serve = series(
  clean,
  parallel(html, styles, scripts),
  serve
)