$(document).ready(function () {

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  << Functions Executed on Window scroll >>  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

    //Variables
    var shiftSkill1 = 0;
    var shiftSkill2 = 0;
    $(window).scroll(function () {

        //Make navber fixed
        var scrollTopWindow = $(window).scrollTop();
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
        // var skillElem, skillElemTop, skillElemPercent;

        // function animateSkills(skillIndex) {
        //     skillElem = $("#skills .content .col-md-6[data-index=" + skillIndex + "]");
        //     skillElemTop = skillElem.offset().top;
        //     skillElemPercent = skillElem.find(".rating span").text();

        //     if (((skillElemTop - 550) < scrollTopWindow) && shiftSkill == 0) {
        //         var width = 0;
        //         setInterval(function () {
        //             if (width <= skillElemPercent) {
        //                 width += 1;
        //             }
        //             skillElem.find(".rating").css("width", "" + width + "%");

        //         }, 10);
        //         skillElem.attr('data-before', '60%');
        //         shiftSkill = 1;

        //         // skillElem.find(".rating").animate({
        //         //     width: "50%"
        //         // }, 800, "linear");

        //     }
        // }
        // for (var i = 1; i < 5; i++) {
        //     animateSkills(i);
        // }

        // animateSkills(2);
        // animateSkills(5);

        //Elem 1
        for (var i = 1; i < 7; i++) {
            var skillElem1 = $("#skills .content .col-md-6[data-index=" + 1 + "]");
            var elemTop1 = skillElem1.offset().top;
            var skillElemPercent1 = skillElem1.find(".rating span").text();

            skillElem1.find(".rating:before").css("BackgrounColor", "blue");;

            if (((elemTop1 - 550) < scrollTopWindow && shiftSkill1 == 0)) {
                var width1 = 30;
                setInterval(function () {
                    if (width1 <= skillElemPercent1) {
                        width1 += 1;
                    }
                    skillElem1.find(".rating").css("width", "" + width1 + "%");

                }, 5);
                shiftSkill1 = 1;
            }
        }


        //Elem 2
        var skillElem2 = $("#skills .content .col-md-6[data-index=" + 2 + "]");
        var elemTop2 = skillElem2.offset().top;
        var skillElemPercent2 = skillElem2.find(".rating span").text();

        if (((elemTop2 - 550) < scrollTopWindow && shiftSkill2 == 0)) {
            var width2 = 30;
            setInterval(function () {
                if (width2 <= skillElemPercent2) {
                    width2 += 1;
                }
                skillElem2.find(".rating").css("width", "" + width2 + "%");

            }, 5);
            shiftSkill2 = 1;
        }

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