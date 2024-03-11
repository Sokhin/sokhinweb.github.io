var x = $(document);
x.ready(function () {
  $(".nav-down").hide();
  $("#xmark").hide();
  $(".fa-bars").click(function () {
    $(".nav-down").slideDown("fast");
    $(".fa-bars").hide();
    $("#xmark").show();
  });
});
x.ready(function () {
  $("#xmark").click(function () {
    $(".nav-down").slideUp("fast");
    $(".fa-bars").show();
    $("#xmark").hide();
  });
});
x.ready(function () {
  $(".nav-down").click(function () {
    $(".nav-down").hide();
    $(".fa-bars").show();
    $("#xmark").hide();
  });
});
var myButton1 = document.getElementById("a1");

myButton1.addEventListener("click", function () {
  alert("You clicked the button!");
});
