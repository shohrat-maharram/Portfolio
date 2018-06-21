$(document).ready(function () {
    // Navbar section
    //Adding active class to clicked tab
    $("#navbar .container ul li a").click(function (e) {
        e.preventDefault();
        $("#navbar .container ul li .active").removeClass("active");
        $(this).addClass("active");
    })
});