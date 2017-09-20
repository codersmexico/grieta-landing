import $ from 'jquery'
import 'slick-carousel'

$('.slider').slick({
  dots: false,
  mobileFirst: true,
  arrows: false,
  fade: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true
      }
    }
  ]
})
