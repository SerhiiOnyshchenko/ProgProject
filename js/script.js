$(document).ready(function () {
   $(".one").click(function (event) {
      if (!$(".one").hasClass('active-2')) {
         $(".one").addClass("active-2");
         $(".two").removeClass("active-2");
         $(".three").removeClass("active-2");
         $(".one-2").addClass("active");
         $(".two-2").removeClass("active");
         $(".three-2").removeClass("active");
      }
     
  });
});
$(document).ready(function () {
   $(".two").click(function (event) {
      if (!$(".two").hasClass('active-2')) {
         $(".two").addClass("active-2");
         $(".one").removeClass("active-2");
         $(".three").removeClass("active-2");
         $(".two-2").addClass("active");
         $(".one-2").removeClass("active");
         $(".three-2").removeClass("active");
      }
      
  });
});
$(document).ready(function () {
   $(".three").click(function (event) {
       if (!$(".three").hasClass('active-2'))
      {
         $(".three").addClass("active-2");
         $(".one").removeClass("active-2");
          $(".two").removeClass("active-2");
          $(".three-2").addClass("active");
         $(".two-2").removeClass("active");
         $(".one-2").removeClass("active");
      }
  });
});