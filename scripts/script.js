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
});
