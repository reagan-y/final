$(document).ready(function() {
  $(window).scroll(function() {
      if ($(document).scrollTop() > 450) {
        $("body").addClass("changeColor");
        console.log("scroll");
      
        $(".projects").addClass("projectsdarkmode");
        console.log("scroll")
       
        
      } else {
        $("body").removeClass("changeColor");
        
        $(".projects").removeClass("projectsdarkmode");
        console.log("scroll");
      }
    });
 });





 $(".menu-btn").click(
  function(){
      $(".nav").toggleClass("active");
      $(".menu-btn").toggleClass("active");
      
}
);




$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });

 
