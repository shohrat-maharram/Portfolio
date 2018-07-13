$(document).ready(function () {


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  << Functions Executed on Window load >>  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

    $(function () {
        $(window).on("load", function () {

            var width = $(window).width();
            var height = $(window).height();

        });
    });
    //~~~~~~~~~~~~~~~~~~~~  << End of Window load >>  ~~~~~~~~~~~~~~~~~~~~//


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  << Functions Executed on Window scroll >>  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

    //Variables
    // var shiftSkill = {};
    // for (var i = 1; i <= $("#skills .content .col-md-6").length; i++) {
    //     shiftSkill[i] = 0;
    // }
    var shiftSkill1 = 0;
    var shiftSkill2 = 0;
    var shiftSkill3 = 0;
    var shiftSkill4 = 0;
    var shiftSkill5 = 0;
    var shiftSkill6 = 0;
    var shiftSkill7 = 0;
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
        // var skillElements;
        // var skillElem = {};
        // var elemTop = {};
        // var skillElemPercent = {};
        // skillElements = $("#skills .content .col-md-6");
        // for (var i = 1; i <= skillElements.length; i++) {
        //     skillElem[i] = $("#skills .content .col-md-6[data-index=" + i + "]");
        //     elemTop[i] = skillElem[i].offset().top;
        //     skillElemPercent[i] = skillElem[i].find(".rating span").text();
        //     // shiftSkill[4] = 1;

        //     if (((elemTop[i] - 650) < scrollTopWindow && shiftSkill[i] == 0)) {
        //         console.log(skillElem[i]);

        //         // var width = {};
        //         // width[i] = 30;
        //         // setInterval(function () {
        //         //     if (width[i] <= skillElemPercent[i]) {
        //         //         width[i] += 1;
        //         //     }
        //         //     $("#skills .content .col-md-6[data-index=" + i + "]").find(".rating").css("width", "" + width[i] + "%");

        //         // }, 10);
        //         // shiftSkill[i] = 1;
        //     }
        // }


        //Elem 1

        var skillElem1 = $("#skills .content .col-md-6[data-index=" + 1 + "]");
        var elemTop1 = skillElem1.offset().top;
        var skillElemPercent1 = skillElem1.find(".rating span").text();

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

        //Slide Up Languages
        $("#navbar .row .lang ul").slideUp("slow");
        shift = 0;

        //Margins of slider
        var imageHeight = $("#slideCover .slideContainer .active").height();
        var elemAdj = $("#slideCover .slideContainer")
        adjElemTop(elemAdj, imageHeight, height);

        //Margins of slider
        var buttonHeight = $("#slideCover .angleBoth").height();
        var buttonAdj = $("#slideCover .angleBoth")
        adjElemTop(buttonAdj, buttonHeight, height);


        //Max-Width and max-height of Slider
        $("#slideCover .slideContainer .item").css({
            "maxWidth": "" + (width * 70) / 100 + "px",
            "maxHeight": "" + (height * 70) / 100 + "px"
        });

    });
    //~~~~~~~~~~~~~~~~~~~~  << End of Window resize >>  ~~~~~~~~~~~~~~~~~~~~//


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  << Functions Executed by Mouse clicked position >>  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    var pageX, pageY;
    $(document).click(function (event) {
        pageX = event.pageX;
        pageY = event.pageY;

        //Slide up Language
        elemPositions($("#navbar .row .lang"), 105, 150);
        if (!((pageX > elemLeft) && (pageX < elemRight) && (pageY > elemTop) && (pageY < elemBottom))) {
            $("#navbar .row .lang ul").slideUp("slow");
            shift = 0;
        }



        // elemPositions($("#navbar .row .lang"), 105, 150, "lang", $("#navbar .row .lang ul").slideUp("slow"));

        // //Close Slide Image
        // if ($("#slideCover.active").length > 0) {
        //     var elemImage = $("#slideCover .slideContainer img");
        //     var elemImageWidth = $("#slideCover .slideContainer img").width();
        //     var elemImageHeight = $("#slideCover .slideContainer img").height();

        //     elemPositions(elemImage, elemImageWidth, elemImageHeight, "slide");
        //     if (!((pageX > elemLeft) && (pageX < elemRight) && (pageY > elemTop) && (pageY < elemBottom))) {
        //         $("#slideCover").css("display", "none");
        //     }
        // }
    });
    //~~~~~~~~~~~~~~~~~~~~  << End of Mouse clicked position >>  ~~~~~~~~~~~~~~~~~~~~//


    //~~~~~~~~~~ << New Function : Language position settings >> ~~~~~~~~~~//
    // var elemLeft = {},
    //     elemRight = {},
    //     elemTop = {},
    //     elemBottom = {},
    //     elemPos = {};

    // function elemPositions(elem, Width, Height, dif, func) {
    //     if (elem && Width > 0 && Height > 0) {
    //         elemPos[dif] = elem.offset();
    //         elemTop[dif] = elemPos[dif].top;
    //         elemLeft[dif] = elemPos[dif].left;
    //         elemRight[dif] = (elemLeft[dif] + Width);
    //         elemBottom[dif] = (elemTop[dif] + Height);
    //     }

    //     if (!((pageX > elemLeft[dif]) && (pageX < elemRight[dif]) && (pageY > elemTop[dif]) && (pageY < elemBottom[dif]))) {
    //         func;
    //         shift = 0;
    //     }
    // }


    var elemLeft, elemRight, elemTop, elemBottom, elemPos;

    function elemPositions(elem, Width, Height) {
        if (elem && Width > 0 && Height > 0) {
            elemPos = elem.offset();
            elemTop = elemPos.top;
            elemLeft = elemPos.left;
            elemRight = (elemLeft + Width);
            elemBottom = (elemTop + Height);
        }
    }
    //~~~~~~~~~~ << End of Function : Language position settings >> ~~~~~~~~~~//


    //~~~~~~~~~~ << New Function : Adjust top of Slider >> ~~~~~~~~~~//
    function adjElemTop(elemAdj, elemHeight, windowHeight) {
        elemAdj.css("top", "" + (windowHeight - elemHeight) / 2 + "px");
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
    })

    //Slider of portfolio section

    var slideImgIcon = $("#portfolio .itemsCover .items .item .overlay .slideImgIcon");
    slideImgIcon.click(function () {
        var This = $(this);
        var slideImgIconIndex = This.data("index");
        $("#slideCover").css("display", "flex").addClass("active");

        //Margins of slider
        var imageHeight = $("#slideCover .slideContainer img").height();
        var elemAdj = $("#slideCover .slideContainer")
        adjElemTop(elemAdj, imageHeight, $(window).height());

        //Margins of angles
        var buttonHeight = $("#slideCover .angleBoth").height();
        var buttonAdj = $("#slideCover .angleBoth")
        adjElemTop(buttonAdj, buttonHeight, $(window).height());
    });

    //Closing slider
    $("#slideCover .closeSlide").click(function () {
        $("#slideCover").css("display", "none").removeClass("active");
        $("#slideCover .slideContainer video")[0].pause();
    });

    //Changing slider to next one
    $("#slideCover .angleBoth").click(function () {
        var dirName = $(this).data("name");
        changeSlide(dirName);
        $("#slideCover .slideContainer video")[0].pause();
    });

    function changeSlide(direction) {
        var slidesCount = $("#slideCover .slideContainer .item").length;
        var firstImage = $("#slideCover .slideContainer .item[data-pos=1]");
        var lastImage = $("#slideCover .slideContainer .item[data-pos=" + slidesCount + "]");
        var next = $("#slideCover .slideContainer .active").next();
        var prev = $("#slideCover .slideContainer .active").prev();
        var activeImage = $("#slideCover .slideContainer .active");
        var activeImagePosition = activeImage.data("pos");
        var width = $(window).width();
        var height = $(window).height();

        if (direction == "next") {
            if (activeImagePosition == slidesCount) {
                activeImage.removeClass("active");
                firstImage.addClass("active");
            } else {
                activeImage.removeClass("active");
                next.addClass("active");
            }
        } else if (direction == "prev") {
            if (activeImagePosition == 1) {
                activeImage.removeClass("active");
                lastImage.addClass("active");
            } else {
                activeImage.removeClass("active");
                prev.addClass("active");
            }
        }

        //Margins of slider
        var imageHeight = $("#slideCover .slideContainer .active").height();
        var elemAdj = $("#slideCover .slideContainer")
        adjElemTop(elemAdj, imageHeight, height);

        //Margins of slider
        var buttonHeight = $("#slideCover .angleBoth").height();
        var buttonAdj = $("#slideCover .angleBoth")
        adjElemTop(buttonAdj, buttonHeight, height);

        //Max-Width and max-height of Slider
        $("#slideCover .slideContainer .active").css({
            "maxWidth": "" + (width * 70) / 100 + "px",
            "maxHeight": "" + (height * 70) / 100 + "px"
        });
    }












    // Create scrollTop button
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