$(document).ready(function () {

    //Functions Executed on window resize
    
    $(window).resize(function () {
        //Hide responsive nav
        $("#navbar .responsive-nav").removeClass("active-nav");
        $("#navbar").css("padding-bottom", "30px");
        
    });


    // Navbar section
    //Adding active class to clicked tab
    $("#navbar .container ul li a").click(function (e) {
        e.preventDefault();
        $("#navbar .container ul li .active").removeClass("active");
        $(this).addClass("active");
    })

    //Display&Hide responsive nav
    $("#navbar .right-nav .menuContainer").click(function () {
        $("#navbar .responsive-nav").toggleClass("active-nav");
        $("#navbar").css("padding-bottom","10px");
    })
});