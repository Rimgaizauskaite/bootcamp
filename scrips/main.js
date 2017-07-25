$(document).ready(function(){
    
$(".burger-nav").on("click",function(){
    
$(".lets-try nav ul").toggleClass("open");
});  
    
});

$(document).ready(function(){
    
$(".burger-nav-2").on("click",function(){
    
$("nav ul").toggleClass("open");
});  
    
});$(document).ready(function(){
    
$(".burger-nav-3").on("click",function(){
    
$(".theend-body nav ul").toggleClass("open");
});  
    
});

$(document).ready(function() {
  
  var scrollLink = $('.scroll');

  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
});