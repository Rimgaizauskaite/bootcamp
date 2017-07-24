$(document).ready(function(){
    
$(".burger-nav").on("click",function(){
    
$(".lets-try nav ul").toggleClass("open");
});  
    
});

$(document).ready(function(){
    
$(".burger-nav-2").on("click",function(){
    
$("nav ul").toggleClass("open");
});  
    
});

//$(document).ready(function() {
//   function filter(string) {
//      return string
//         .replace(/^\//,'')
//         .replace(/(index|default)\.[a-zA-Z]{3,4}$/,'')
//         .replace(/\/$/,'')
//   }
//   $('a[href*=#]').each(function() {
//      if (filter(location.pathname) == filter(this.pathname)
//         && location.hostname == this.hostname
//	 && this.hash.replace(/#/,'') ) {
//	    var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
//	    var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
//	    if ($target) {
//	       var targetOffset = $target.offset().top;
//	       $(this).click(function() {
//	          $('html, body').animate({scrollTop: targetOffset}, 400);
//	          return false;
//	        });
//            }
//         }
//      });
//   });
