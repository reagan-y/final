$(document).ready(function() {
  $(window).scroll(function() {
      if ($(document).scrollTop() > 450) {
        $("body").addClass("changeColor");
        console.log("scroll");
        $(".about-btn").addClass("btndarkmode");
        console.log("scroll");
        $(".work-btn").addClass("btndarkmode");
        console.log("scroll")
        $(".projects").addClass("projectsdarkmode");
        console.log("scroll")
       
        
      } else {
        $("body").removeClass("changeColor");
        $(".about-btn").removeClass("btndarkmode");
        console.log("scroll");
        $(".work-btn").removeClass("btndarkmode");
        console.log("scroll");
        $(".projects").removeClass("projectsdarkmode");
        console.log("scroll");
      }
    });
 });

 $('.carousel').flickity({
  arrowShape: 'm31.96,80.77l1.92-1.92L7.87,52.84c-3.33-3.33-5.16-7.75-5.16-12.46s1.83-9.13,5.16-12.46L33.88,1.92l-1.92-1.92L5.95,26.01C2.11,29.85,0,34.95,0,40.38s2.11,10.53,5.95,14.37l26.01,26.01Z'
});


$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });

 
