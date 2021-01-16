$(document).ready(function() {
  $('body').onPageLoad();
});
(function($) {
  $.fn.onPageLoad = function() {	
	
    $('#example').dataTable( {
      "bPaginate": false,
      "bInfo": false,
      "aaSorting": [[ 0, "desc" ]], 
      "bFilter": true, // Search
        language: {
          searchPlaceholder: "Filtre"
        }
      } );  
 //Anchor links
  $('#xf_nav_menu li a').click(function(e) {
        var $anchorId = $(this).attr("href");
        $('#fullpage').animate({
            scrollTop: ($($anchorId).offset().top - 0)
        }, 600, 'swing');
        return false;
        });//Hamburger Menu
  var $hamburger = $(".hamburger");
  var $nav = $(".center-navigation");
    $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    $nav.toggleClass("is-active");
  });

   //xfmenu Menu
  var $menu = $(".menu_trigger");
  var $header = $(".site-header");
  var $lang = $("#lang_types");
  var $down = $(".download__section");
    $menu.on("click", function(e) {
    $menu.toggleClass("is-active");
    $header.toggleClass("is-active");
    $lang.toggleClass("is-hidden");
    $down.toggleClass("is-hidden");
  });
  