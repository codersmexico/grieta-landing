'use strict'
// We use this to read flags in the command line
const argv = require('yargs').argv
// Add your conditions here 💅
const production = argv.prod || argv.production

module.exports = {
  directories: {
    src: {
      base: 'src',

      markup: 'src/pug',
      fonts: 'src/assets/fonts',
      icons: 'src/assets/icons',
      images: 'src/assets/images',
      scripts: 'src/assets/js',
      styles: 'src/assets/styles'
    },
    dist: {
      base: 'dist',
      markup: 'dist',
      fonts: 'dist/assets/fonts',
      icons: 'dist/assets/icons',
      images: 'dist/assets/images',
      scripts: 'dist/assets/js',
      styles: 'dist/assets/css'
    }
  },
  project: {
    cssMainFile: 'src/assets/styles/main.scss',
    scriptFiles: [
      'src/assets/js/*.js'
    ],
    fontFiles: [
      'src/assets/fonts/**/*'

    ]
  },
  vendor: {
    scssDirectories: [
      './node_modules/modularscale-sass/stylesheets',
      './node_modules/manila-mixins/src',
      './node_modules/bootstrap/scss',
      './node_modules/slick-carousel/slick',
      './node_modules/magnific-popup/src/css'
    ],
    scriptFiles: [
      'svg4everybody',
      'jquery',
      'bootstrap',
      'tether',
      'webfontloader'
    ]
  },
  onError: function (error) {
    console.log(error.toString())
    this.emit('end')
  },
  production: !!production,
  // Stuff for PurifyCss
  purify: ['./dist/**/*.js', './dist/**/*.html']
}
