$(document).ready(function () {

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  << Functions Executed on Window scroll >>  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

    //Variables
    var shiftSkill1 = 0;
    var shiftSkill2 = 0;
    var shiftScrollNav = 0;
    $(window).scroll(function () {

        //Scroll Top Windows
        var scrollTopWindow = $(window).scrollTop();

        //Make navber fixed           
        if ((scrollTopWindow > 100) && (shiftScrollNav == 0)) {
            $("#navbar").css({
                "background-color": "#151515",
                "opacity": 0.98,
                "position": "fixed",
                "top": "-50px",
                "left": "0px",
                "right": "0px"
            });
            $("#navbar").animate({
                top: "0px"
            }, 300, "linear");
            shiftScrollNav = 1;
        }
        if ((scrollTopWindow <= 100) && (shiftScrollNav == 1)) {
            $("#navbar").css({
                "background-color": "transparent",
                "position": "absolute",
                // "top": "0px",
                "left": "0px",
                "right": "0px"
            });
            shiftScrollNav = 0;
        }

        //Hide responsive nav
        $("#navbar .responsive-nav").slideUp("slow");
        $("#navbar").css("padding-bottom", "30px");

        //Scrol Spy
        var sections = $(".section");
        sections.each(function () {
            var This = $(this);
            var dataIndex = This.data("index");
            var height = This.height();
            var top = This.offset().top - $(window).scrollTop();
            var bottom = top + height;
            if ((top < 55) && (bottom > 100)) {
                var thisTag = $("#navbar .container ul li[data-index='" + dataIndex + "'] a")
                addRemoveActive($("#navbar .container ul li .active"), thisTag);
            }
        });

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

            if (((elemTop1 - 650) < scrollTopWindow && shiftSkill1 == 0)) {
                var width1 = 30;
                setInterval(function () {
                    if (width1 <= skillElemPercent1) {
                        width1 += 1;
                    }
                    skillElem1.find(".rating").css("width", "" + width1 + "%");

                }, 10);
                shiftSkill1 = 1;
            }
        }


        //Elem 2
        var skillElem2 = $("#skills .content .col-md-6[data-index=" + 2 + "]");
        var elemTop2 = skillElem2.offset().top;
        var skillElemPercent2 = skillElem2.find(".rating span").text();

        if (((elemTop2 - 650) < scrollTopWindow && shiftSkill2 == 0)) {
            var width2 = 30;
            setInterval(function () {
                if (width2 <= skillElemPercent2) {
                    width2 += 1;
                }
                skillElem2.find(".rating").css("width", "" + width2 + "%");

            }, 10);
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
    //~~~~~~~~~~ << New Function : Adding&Removing active class to element >> ~~~~~~~~~~//

    function addRemoveActive(elem, This) {
        elem.removeClass("active");
        This.addClass("active");
    }

    //~~~~~~~~~~ << End of Function : Adding&Removing active class to element >> ~~~~~~~~~~//

    //Adding active class to clicked tab
    $("#navbar .container .right-nav ul li a").click(function (e) {
        e.preventDefault();
        var This = $(this);
        var parentIndex = This.parent().data("index");
        var section = $(".section[data-index='" + parentIndex + "']");
        addRemoveActive($("#navbar .container ul li .active"), This);

        $('html, body').animate({
            scrollTop: section.offset().top
        }, 1000);
    });

    $("#navbar .container .responsive-nav ul li a").click(function (e) {
        e.preventDefault();
        var This = $(this);
        var parentIndex = This.parent().data("index");
        var section = $(".section[data-index='" + parentIndex + "']");
        addRemoveActive($("#navbar .container ul li .active"), This);

        $('html, body').animate({
            scrollTop: section.offset().top
        }, 1000);
    })

    //Adding active class to clicked tab i Portfolio section
    $("#portfolio .container .menu ul li a").click(function (e) {
        e.preventDefault();
        var This = $(this);
        addRemoveActive($("#portfolio .container .menu ul li .active"), This);
    });

    //Scroll to Contact info
    $("#intro .intro-text .cv ul li.contactInfo a").click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#contacts").offset().top
        }, 500);
    });



    //Display&Hide responsive nav Click    
    $("#navbar .right-nav .menuContainer").click(function () {
        $("#navbar .responsive-nav").slideToggle("slow");
        $("#navbar").css("padding-bottom", "30px");
    })


    //Show portfolio works by category #IzotopByMe

    var category, elemPort;
    $("#portfolio .container .menu ul li a").click(function () {
        var This = $(this);
        category = This.parent().data("cat");
        elemPort = $("#portfolio .container .items");
        elemPortCat = $("#portfolio .container .items[data-cat='" + category + "']");
        // alert(category);

        // if (category == 0) {
        //     $("#portfolio .container .items").addClass("hide");
        //     var inter = setInterval(function () {
        //         $("#portfolio .container .items").removeClass("hide");
        //     }, 500);
        //     // clearInterval(inter);
        // } else {
        //     $("#portfolio .container .items").addClass("hide");
        //     setInterval(function () {
        //         $("#portfolio .container .items[data-cat='" + category + "']").removeClass("hide");
        //     }, 500);

        //     // $("#portfolio .container .items[data-cat='" + category + "']").show("slow");
        // }


        if (category == 0) {

            elemPort.animate({
                opacity: '0',
                width: '0px'
            }, 500, function () {
                elemPort.css({
                    "display": "block"
                });
            });
            elemPort.animate({
                opacity: '1',
                width: '100%'
            }, 500);
        } else {
            elemPort.animate({
                opacity: '0',
                width: '0px'
            }, 500, function () {
                elemPort.css({
                    "display": "none"
                });
                elemPortCat.css({
                    "display": "block"
                });
            });
            elemPortCat.animate({
                opacity: '1',
                width: '100%'
            }, 500);
        }

        // if (category == 0) {
        //     $("#portfolio .container .items").show("slow");
        // } else {
        //     $("#portfolio .container .items[data-cat='" + category + "']").show("slow");
        // }
        // $("#portfolio .container .itemsCover .items").css({"width":"0px"});

    })










    //Create scrollTop button
    // function scrollToTop(e) {
    //     var step;
    //     var posOne = window.pageYOffset;

    //     if (posOne < 1500) {
    //         step = 10;
    //     } else {
    //         step = 40;
    //     }

    //     var scrollToTopInt = setInterval(function () {
    //         var pos = window.pageYOffset;
    //         if (pos > 0) {
    //             window.scrollTo(0, pos - step);
    //         } else {
    //             window.clearInterval(scrollToTopInt);
    //         }
    //     }, 0.2);
    // }

    // function showScrollToTop() {
    //     var scrollToTop = document.getElementsByClassName("scrollToTop")[0];
    //     var viewPortHeight = document.documentElement.clientHeight;
    //     var windowTopPos = window.pageYOffset;
    //     if (windowTopPos > (viewPortHeight - 500)) {
    //         scrollToTop.style.opacity = "1";
    //         scrollToTop.style.cursor = "pointer";

    //     }
    //     if (windowTopPos < (viewPortHeight - 300)) {
    //         scrollToTop.style.opacity = "0";
    //         scrollToTop.style.cursor = "default";
    //     }
    // }
    // window.addEventListener("scroll", showScrollToTop);
});