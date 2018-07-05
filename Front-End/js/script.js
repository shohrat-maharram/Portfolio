$(document).ready(function () {

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  << Functions Executed on Window scroll >>  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

    //Variables
    var shiftSkill = 0;
    $(window).scroll(function () {

        //Make navber fixed
        var scrollTopWindow = $(window).scrollTop();
        // console.log(scrollTopWindow);
        if (scrollTopWindow >= 100) {
            $("#navbar").css({
                "background-color": "#222",
                "position": "fixed",
                "top": "-50px",
                "left": "0px",
                "right": "0px"
            });
            $("#navbar").animate({
                top: "0px"
            }, 300, "linear");

        }

        if (scrollTopWindow < 100) {
            $("#navbar").css({
                "background-color": "transparent",
                "position": "absolute",
                // "top": "0px",
                "left": "0px",
                "right": "0px"
            });
        }

        //Slide Up Lang
        $("#navbar .row .lang ul").slideUp("slow");
        shift = 0;

        //Animating skills percent
        var skillElem, skillElemTop, skillElemPercent;

        function animateSkills(skillIndex) {
            skillElem = $("#skills .content .col-md-6[data-index=" + skillIndex + "]");
            skillElemTop = skillElem.offset().top;

            if (((skillElemTop - 550) < scrollTopWindow) && shiftSkill == 0) {
                // $("#skills .content .col-md-6[data-index=" + skillIndex + "]:nth-child(2):nth-child(1)").css("width", "50%");
                skillElemPercent = skillElem.find(".rating span").text();
                var width = 0;
                setInterval(function () {
                    if (width <= skillElemPercent) {
                        width += 1;
                    }
                    skillElem.find(".rating").css("width", "" + width + "%");
                    skillElem.attr('data-before', '60%');
                }, 10);
                shiftSkill = 1;

                // skillElem.find(".rating").animate({
                //     width: "50%"
                // }, 800, "linear");

            }
        }

        animateSkills(5);
        console.log(skillElemPercent);
    })
    //~~~~~~~~~~~~~~~~~~~~  << End of Window scroll >>  ~~~~~~~~~~~~~~~~~~~~//


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  << Functions Executed on Window resize >>  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

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

        //Slide Up Lang
        $("#navbar .row .lang ul").slideUp("slow");
        shift = 0;
    });
    //~~~~~~~~~~~~~~~~~~~~  << End of Window resize >>  ~~~~~~~~~~~~~~~~~~~~//


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  << Functions Executed by Mouse clicked position >>  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    var pageX, pageY;
    $(document).click(function (event) {
        pageX = event.pageX;
        pageY = event.pageY;

        //Slude up Language
        langPositions($("#navbar .row .lang"), 105, 150);
        if (!((pageX > elemLeft) && (pageX < elemRight) && (pageY > elemTop) && (pageY < elemBottom))) {
            $("#navbar .row .lang ul").slideUp("slow");
            shift = 0;
        }
    });
    //~~~~~~~~~~~~~~~~~~~~  << End of Mouse clicked position >>  ~~~~~~~~~~~~~~~~~~~~//


    //~~~~~~~~~~ << New Function : Language position settings >> ~~~~~~~~~~//
    var elemLeft, elemRight, elemTop, elemBottom, elemPos;

    function langPositions(elem, Width, Height) {
        if (elem && Width > 0 && Height > 0) {
            elemPos = elem.offset();
            elemTop = elemPos.top;
            elemLeft = elemPos.left;
            elemRight = (elemLeft + Width);
            elemBottom = (elemTop + Height);
        }
    }
    //~~~~~~~~~~ << End of Function : Language position settings >> ~~~~~~~~~~//


    //Language Slide down&up
    var shift = 0;
    $("#navbar .row .lang p").click(function () {
        if (shift == 0) {
            $("#navbar .row .lang ul").slideDown("slow");
            shift = 1;
        } else {
            $("#navbar .row .lang ul").slideUp("slow");
            shift = 0;
        }
    });
    $("#navbar .row .lang ul li a").click(function (e) {
        e.preventDefault();
    });

    // Navbar section
    //Adding active class to clicked tab
    $("#navbar .container .right-nav ul li a").click(function (e) {
        e.preventDefault();
        $("#navbar .container ul li .active").removeClass("active");
        $(this).addClass("active");
    });

    $("#navbar .container .responsive-nav ul li a").click(function (e) {
        e.preventDefault();
        $("#navbar .container ul li .active").removeClass("active");
        $(this).addClass("active");
    })

    //Display&Hide responsive nav Click    
    $("#navbar .right-nav .menuContainer").click(function () {
        $("#navbar .responsive-nav").slideToggle("slow");
        $("#navbar").css("padding-bottom", "30px");
    })
});