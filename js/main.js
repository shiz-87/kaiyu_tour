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

// activityセクションのSlider
$(function () {
  $("#activity .slider").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    slidesToShow: 3,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
