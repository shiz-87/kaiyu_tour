// ハンバーガーメニューの開閉

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

// introductionセクションのアニメーション
$(function () {
  $("#introduction .tour1 .btn").on("click", function () {
    $(this).hide();
    $("#introduction .tour1 .description").css({
      height: "auto",
      overflow: "visible",
    });
  });

  $("#introduction .tour2 .btn").on("click", function () {
    $(this).hide();
    $("#introduction .tour2 .description").css({
      height: "auto",
      overflow: "visible",
    });
  });
});
