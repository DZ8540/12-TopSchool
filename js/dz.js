$(document).ready(function () {
    $('#pagepiling').pagepiling({
      anchors: ['section1', 'section2', 'section3', 'section4'],
      navigation: {
        'position': 'right',
        'tooltips': ['01', '02', '03', '04'],
      },
      afterRender: function () {
        $('#pp-nav').addClass('custom');
      },
      afterLoad: function (anchorLink, index) {
        if (index > 1) {
          $('#pp-nav').removeClass('custom');
        } else {
          $('#pp-nav').addClass('custom');
        }
      }
    });


    /*
     * Internal use of the demo website
     */
    $('#showExamples').click(function (e) {
      e.stopPropagation();
      e.preventDefault();
      $('#examplesList').toggle();
    });

    $('html').click(function () {
      $('#examplesList').hide();
    });
    $(".navigation__top-mmenu").on("click", function(){
      $(".navigation__top-search").toggleClass("active");
      $(".navigation__top-user").toggleClass("active");
    });
  });