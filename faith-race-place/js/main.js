//@codekit-prepend "./vendor/jQuery.min.js"
//@codekit-prepend "./vendor/fittext.js"
//@codekit-prepend "./vendor/colour-fade.js"
//@codekit-prepend "./vendor/imagesLoaded.js"
//@codekit-prepend "./vendor/isotope.js"
//@codekit-prepend "plugins.js"

jQuery(document).ready(function($) {

//Animate on scroll library
AOS.init({
})

// init Isotope
  var $grid = $(".home-stories__grid").isotope({
    itemSelector: ".grid-item",
    //percentPosition: true,
    masonry: {
      // columnWidth: 400
    }
  });
  // layout Isotope after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
  });

  // Inititalize FitText for homepage headline
  $("[data-format='fittext']").fitText(0.8);


});
