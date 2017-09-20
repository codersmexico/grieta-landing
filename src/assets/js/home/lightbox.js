import $ from 'jquery'
import 'magnific-popup'

$('.video-toggle').magnificPopup({
  type: 'iframe',
  preloader: false,
  fixedContentPos: false,
  mainClass: 'mfp-fade',
  removalDelay: 160
})
