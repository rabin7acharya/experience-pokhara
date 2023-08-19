$(document).ready(function () {
  $("button").click(function () {
    alert("jQuery is working!");
  });
  $(".fa-bars").click(function () {
    $(".ham-menu").slideToggle();
  });

  $(".fa-xmark").click(function () {
    $(".ham-menu").slideToggle();
  });
});
