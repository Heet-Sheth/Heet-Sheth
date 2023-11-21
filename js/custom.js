$(document).ready(function () {
    $(".features-box-spacing").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow:
        '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });


  // $(document).ready(function(){
  //   $('.daily-plan-slider').slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     dots: true,
  //     autoplay: true,
  //     autoplaySpeed: 2000,
  //     responsive: [
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //           infinite: true,
  //           dots: true
  //         }
  //       },
  //       Add more responsive settings as needed
  //     ]
  //   });
  // });
  $(document).ready(function(){
    $('.daily-plan-flex').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000, // Set the autoplay speed in milliseconds
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });

  $(document).ready(function(){
    $('.app-images-flex').slick({
      slidesToShow: 5, // Number of slides to show at a time
      slidesToScroll: 1, // Number of slides to scroll
      autoplay: true, // Auto-play the slider
      autoplaySpeed: 2000, // Auto-play speed in milliseconds
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768, // Breakpoint for smaller screens
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 576, // Breakpoint for even smaller screens
          settings: {
            slidesToShow: 4,
          }
        }
      ]
    });
  });
  

  // $(document).ready(function(){
  //   $('.slick-carousel').slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     autoplay: true,
  //     autoplaySpeed: 2000,
  //     responsive: [
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //           infinite: true,
  //           dots: true
  //         }
  //       }

  //     ]
  //   });
  // });

  $(document).ready(function(){
    $('.problems').slick({
      infinite: true,
      slidesToShow: 3, // Adjust the number of slides shown
      slidesToScroll: 1,
      autoplay: true,
     autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });
