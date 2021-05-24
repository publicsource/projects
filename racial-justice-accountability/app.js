(function(){
var _$hamburger_2 = {};
var hamburger = document.getElementById('nav-burger');
var linx = document.getElementById('main-nav-links');
hamburger.addEventListener('click', function (e) {
  if (linx.classList.contains('show')) {
    linx.classList.remove('show');
  } else {
    linx.classList.add('show');
  }
});

function myFunction() {}

var _$colourFade_1 = {};
$(window).scroll(function () {
  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel'); // Change 33% earlier than scroll position so colour is there when you arrive.

  var scroll = $window.scrollTop() + $window.height() / 3;
  $panel.each(function () {
    var $this = $(this); // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.

    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
      }); // Add class of currently active div

      $body.addClass('color-' + $(this).data('color'));
    }
  });
}).scroll();

var _$main_3 = {};
// require("./lib/pym");
_$hamburger_2;

_$colourFade_1; // aos on scroll (animate on scroll) library init


AOS.init();

}());
//# sourceMappingURL=app.js.map
