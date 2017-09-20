'use strict'

const gulp = require('gulp')
const config = require('../config')
const $ = require('gulp-load-plugins')()
const when = require('gulp-if')
const production = config.production
const destination = config.directories.dist.scripts
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const buffer = require('vinyl-buffer')
const babel = require('babelify')
const transform = [ babel ]
const vendors = config.vendor.scriptFiles

gulp.task('vendor:scripts', () => {
  const b = browserify({
    debug: !production
  })

  // require all libs specified in vendors array
  vendors.forEach(lib => {
    b.require(lib)
  })

  return b.bundle()
  .pipe(source('vendor.js'))
  .pipe(buffer())
  .pipe(when(!production, $.sourcemaps.init({ loadMaps: true })))
  .pipe(when(!production, $.sourcemaps.write('./')))
  .pipe(gulp.dest(destination))
  // All production stuff here
  // Rename file to .min and uglify that stuff
  .pipe(when(production, $.rename({suffix: '.min'})))
  .pipe(when(production, $.uglify())).on('error', config.onError)
  .pipe(when(production, gulp.dest(destination)))
})

gulp.task('main:scripts', () => {
  return browserify({
    entries: './src/assets/js/index.js',
    debug: !production
  })
  .external(vendors)
  .transform(transform)
  .bundle().on('error', config.onError)
  .pipe(source('main.js'))
  .pipe(buffer())
  .pipe(when(!production, $.sourcemaps.init({ loadMaps: true })))
  .pipe(when(!production, $.sourcemaps.write('./')))
  .pipe(gulp.dest(destination))
  // All production stuff here
  // Rename file to .min and uglify that stuff
  .pipe(when(production, $.rename({suffix: '.min'})))
  .pipe(when(production, $.uglify())).on('error', config.onError)
  .pipe(when(production, gulp.dest(destination)))
})

gulp.task('scripts', gulp.parallel('vendor:scripts', 'main:scripts'))
