$(function (){
  $(".js-button").on("click",function(){
    $(".l-menu,.menu-button__close,.menu-background").toggleClass("is-open");
    $("body").toggleClass("is-open"); /*bodyがスクロールできなくなる用*/
  });
});