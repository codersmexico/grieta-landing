'use strict'

var gulp = require('gulp')
var config = require('../config')
var ghPages = require('gulp-gh-pages')

gulp.task('ghPages', () => {
  return gulp.src(`${config.directories.dist.base}/**/*`)
  .pipe(ghPages())
})
