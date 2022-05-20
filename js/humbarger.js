$(function (){
  $(".js-button").on("click",function(){
    $(".menu-wrapper,.menu-button__close,.menu-background").toggleClass("is-open");
    $("body").toggleClass("is-open"); /*bodyがスクロールできなくなる用*/
  });
});