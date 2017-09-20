'use strict'
const gulp = require('gulp')
const config = require('../config')
const $ = require('gulp-load-plugins')()
const when = require('gulp-if')
const production = config.production

// Hey don't touch these unless you know what you're doing
// with Love Mike ❤️
const devLocals = {
  base: '',
  extension: '',
  productionMode: false
}
const prodLocals = {
  base: '/0000/0000',
  extension: '.html',
  productionMode: true
}

gulp.task('main:markup', function () {
  return gulp.src(config.directories.src.markup + '/*.pug')

    .pipe(when(!production, $.pug({
      pretty: true,
      baseDir: config.directories.src.markup,
      locals: devLocals
    }))).on('error', config.onError)
    .pipe(when(production, $.pug({
      baseDir: config.directories.src.markup,
      locals: prodLocals
    }))).on('error', config.onError)

    .pipe(gulp.dest(config.directories.dist.markup))
})
