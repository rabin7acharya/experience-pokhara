$(document).ready(function () {
  // $("button").click(function () {
  //   alert("jQuery is working!");
  // });
  $(".fa-bars").click(function () {
    $(".ham-menu").slideToggle();
  });

  $(".fa-xmark").click(function () {
    $(".ham-menu").slideToggle();
  });

  $(".item-card").click(function () {
    window.location.href = "service.html";
  });

  //tabbed pane
  $(".tab").click(function () {
    $(".tab").removeClass("active");
    $(this).addClass("active");

    var tabIndex = $(this).index();
    $(".content").removeClass("active");
    $(".content:eq(" + tabIndex + ")").addClass("active");
  });

  // Set the initial active tab and content
  $(".tab:first").addClass("active");
  $(".content:first").addClass("active");
});
