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

// mapセクションのアクティビティ表示
$(function () {
  $("#map .spot1 .spot-btn")
    .mouseover(function () {
      $("#map .spot1 .spot-img").show();
    })
    .mouseout(function () {
      $("#map .spot1 .spot-img").hide();
    });

  $("#map .spot2 .spot-btn")
    .mouseover(function () {
      $("#map .spot2 .spot-img").show();
    })
    .mouseout(function () {
      $("#map .spot2 .spot-img").hide();
    });

  $("#map .spot3 .spot-btn")
    .mouseover(function () {
      $("#map .spot3 .spot-img").show();
    })
    .mouseout(function () {
      $("#map .spot3 .spot-img").hide();
    });

  $("#map .spot4 .spot-btn")
    .mouseover(function () {
      $("#map .spot4 .spot-img").show();
    })
    .mouseout(function () {
      $("#map .spot4 .spot-img").hide();
    });

  $("#map .spot5 .spot-btn")
    .mouseover(function () {
      $("#map .spot5 .spot-img").show();
    })
    .mouseout(function () {
      $("#map .spot5 .spot-img").hide();
    });
});
