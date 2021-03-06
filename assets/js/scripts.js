// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
if (typeof jQuery === 'undefined') {
  console.warn('jQuery hasn\'t loaded');
} else {
  console.log('jQuery has loaded');
}
// Place any jQuery/helper plugins in here.

//Owl settings
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    autoplay:false,
    loop:true,
    navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    nav: true
  });

});


$(document).ready(function(){
  $(".owl-carousel-teacher").owlCarousel({
    items:1,
  });

});

//Teacher modal
$('.modal_teacher').hide();
$('.t_inner_wrap').on('click', function(event) {
  $('.modal_teacher').fadeIn('400', function() {

  });
});
$('.close_teacher').on('click', function(event) {
  event.preventDefault();
  $('.modal_teacher').fadeOut('400', function() {

  });
});