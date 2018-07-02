$(document).ready(function () {

    //Functions Executed on window resize

    $(window).resize(function () {

        //Window width and height
        var width = $(window).width();
        var height = $(window).height();
        //Hide responsive nav
        $("#navbar .responsive-nav").slideUp("slow");
        $("#navbar").css("padding-bottom", "30px");

        //Navbar data index
        var indexNav = $(".right-nav .active").parent().data("index");
        var indexNavR = $(".responsive-nav .active").parent().data("index");
        if (width < 768) {
            $(".responsive-nav li[data-index=" + indexNav + "] a").addClass("active");
        } else if (width > 768) {
            $(".right-nav li[data-index=" + indexNavR + "] a").addClass("active");
        }

        // console.log($(".right-nav .active").parent().data("index"));
        // console.log(text);
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
        $("#navbar .responsive-nav").slideToggle("slow");
        $("#navbar").css("padding-bottom", "30px");
    })
});