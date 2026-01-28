$(function () {
  $(".hamburger").on("click", function () {
    $(this).toggleClass("active");
    $(".navi").toggleClass("active");
  });

  $(".navi a").on("click", function () {
    $(".hamburger").removeClass("active");
    $(".navi").removeClass("active");
  });
});
