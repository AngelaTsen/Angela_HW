

//   $(document).ready(function() {
//     $('.owl-carousel .owl-p1').owlCarousel({
//       loop: true,
//       margin: 0,
//       nav: false,
//       dots: true,
//       autoHeight:true,
//       items:1,
//       autoplayTimeout: 3000,
//       autoplayHoverPause: true,
//     })
//   })
  
//   AutoHeight.Defaults = {
//     autoHeight: false,
//     autoHeightClass: 'owl-height'
// };

// $('.owl-carousel .owl-p2').owlCarousel({
// items: 5,
// loop: true,
// margin: 10,
// nav: true,
// dots: false,
// autoplay: true,
// autoplayTimeout: 3000,
// autoplayHoverPause: true,
// responsive: {
//     0: {
//     items: 1
//     },
//     576: {
//     items: 2
//     },
//     768: {
//     items: 3
//     },
//     992: {
//     items: 4
//     },
//     1200: {
//     items: 5
//     }
// }
// });

$(document).ready(function(){
    $('.slider1').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
      
    });
    $('.slider2').owlCarousel({
      items: 5,
      margin: 10,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 3
        },
        1200: {
        items: 5
        }
      }
    });
  });