/*ховер поста на главной*/
$(document).on('mouseenter','.project-description', function(){
  $(this).css("opacity","1");
});

$(document).on('mouseleave','.project-description', function(){
  $(this).css("opacity","0");
});
/*ховер меню*/
$(document).on('click','li.burger', function(){
  $(this).toggleClass("show");
  $(".main-menu, .close, .lang").toggleClass("show");
  $(".main-menu").hasClass("show") ? $(".navbar-inner").addClass("big-nav") : $(".navbar-inner").removeClass("big-nav");
});
