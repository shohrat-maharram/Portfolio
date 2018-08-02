$(document).ready(function () {

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  << Functions Executed on Window scroll >>  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    //Variables    
    //New Function which create dynamic variables
    function createDynamicVariable(Variable, count) {
        this["" + Variable + "" + count] = 0;
    }

    var skillsCount = $("#skills .content .col-md-6").length;
    var shiftSkill = "shiftSkill";
    var skillElem = "skillElem";
    var elemTop = "elemTop";
    var skillElemPercent = "skillElemPercent";
    for (var i = 1; i <= skillsCount; i++) {
        createDynamicVariable(shiftSkill, i);
        createDynamicVariable(skillElem, i);
        createDynamicVariable(elemTop, i);
        createDynamicVariable(skillElemPercent, i);
    }

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
        //~~~~~~~~~~ << New Function : Animating Skills width >> ~~~~~~~~~~//
        function skillsAnimate(skillElem, elemTop, skillElemPercent, shiftSkill, count) {
            if (((elemTop - 650) < scrollTopWindow && shiftSkill == 0)) {
                var width = 10;
                setInterval(function () {
                    if (width <= skillElemPercent) {
                        width += 1;
                    }
                    skillElem.find(".rating").css("width", "" + width + "%");
                }, 5);

                this["shiftSkill" + count] = 1;
            }
        }
        //~~~~~~~~~~ << End of Function : Animating Skills width >> ~~~~~~~~~~//       

        for (var i = 1; i <= skillsCount; i++) {
            this["skillElem" + i] = $("#skills .content .col-md-6[data-index=" + i + "]");
            this["elemTop" + i] = this["skillElem" + i].offset().top;
            this["skillElemPercent" + i] = this["skillElem" + i].find(".rating span").text();
            skillsAnimate(this["skillElem" + i], this["elemTop" + i], this["skillElemPercent" + i], this["shiftSkill" + i], i);
        }

        //Show scroll to top element
        showScrollToTop();
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
    });
    //~~~~~~~~~~~~~~~~~~~~  << End of Mouse clicked position >>  ~~~~~~~~~~~~~~~~~~~~//


    //~~~~~~~~~~ << New Function : Element position settings >> ~~~~~~~~~~//
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
    //~~~~~~~~~~ << End of Function : Element position settings >> ~~~~~~~~~~//
    
    //~~~~~~~~~~ << New Function : Adjust top of Slider >> ~~~~~~~~~~//
    function adjElemTop(elemAdj, elemHeight, windowHeight) {
        if (((windowHeight - elemHeight) / 2) <= 0) {
            elemAdj.css("top", "" + 30 + "px");
        } else {
            elemAdj.css("top", "" + (windowHeight - elemHeight) / 2 + "px");
        }
    }
    //~~~~~~~~~~ << End of Function : Adjust top of Slider >> ~~~~~~~~~~//


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

    // Navbar section
    //~~~~~~~~~~ << New Function : Adding&Removing active class to element >> ~~~~~~~~~~//
    function addRemoveActive(elem, This) {
        elem.removeClass("active");
        This.addClass("active");
    }
    //~~~~~~~~~~ << End of Function : Adding&Removing active class to element >> ~~~~~~~~~~//

    //Adding active class to clicked tab to Scroll that section
    $("#navbar .container .right-nav ul li a").click(function (e) {
        e.preventDefault();
        var This = $(this);
        var parentIndex = This.parent().data("index");
        var section = $(".section[data-index='" + parentIndex + "']");
        addRemoveActive($("#navbar .container ul li .active"), This);

        $('html, body').animate({
            scrollTop: section.offset().top
        }, 1500);
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

    //Show portfolio works by category #IsotopeByMe
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
        
        var portfolioId = $(this).data("index");
        var slides = $("#slideCover .slideContainer .slides");
        slides.empty();
        var imageHeightAjax;       
        
        $.ajax({
            type: "get",
            url: "/home/portfolioMedia/" + portfolioId,
            dataType: "json",
            success: function (response) {
                for (var i = 0; i < response.length; i++) {
                    var mediaFormat = response[i].split(".")[1];

                    if (mediaFormat == "mp4") {
                        var video = $("<video class='item " + ((i == 0) ? 'active' : '') + "' controls data-pos='" + (i + 1) + "'></video>");
                        var source = $("<source src='/Public/img/" + response[i] + "' type='video/mp4'>");
                        video.append(source);
                        slides.append(video);
                    } else {
                        var img = $("<img class='item " + ((i == 0) ? 'active' : '') + "' src='/Public/img/" + response[i] + "' data-pos='" + (i + 1) + "'>");
                        slides.append(img);
                        imageHeightAjax = img[0];
                    };                           
                }                

                //Window width and height
                var width = $(window).width();
                var height = $(window).height();

                //Max-Width and max-height of Slider
                $("#slideCover .slideContainer .item").css({
                    "maxWidth": "" + (width * 70) / 100 + "px",
                    "maxHeight": "" + (height * 70) / 100 + "px"
                });

                //Margins of slider
                var imageHeight = $("#slideCover .slideContainer .active").height();
                var elemAdj = $("#slideCover .slideContainer")
                adjElemTop(elemAdj, imageHeight, height);

                //Margins of slider
                var buttonHeight = $("#slideCover .angleBoth").height();
                var buttonAdj = $("#slideCover .angleBoth")
                adjElemTop(buttonAdj, buttonHeight, height); 


                //Number of Image
                var imageCount = 1;
                $("#slideCover .slideContainer .countSlide").empty();
                $("#slideCover .slideContainer .countSlide").text(imageCount + " / " + response.length);

                $("#slideCover .angleBoth").click(function () {
                    if ($(this).hasClass("angleRight")) {
                        imageCount++;
                    } else if ($(this).hasClass("angleLeft")) {
                        imageCount--;
                    }
                    if (imageCount > response.length){
                        imageCount = 1;
                    }
                    if (imageCount <= 0) {
                        imageCount = response.length;
                    }

                    $("#slideCover .slideContainer .countSlide").text(imageCount + " / " + response.length);
                });
            }
        });
    });    

    //Closing slider
    $("#slideCover .closeSlide").click(function () {
        $("#slideCover").css("display", "none").removeClass("active");
        if ($("#slideCover .slideContainer video").length > 0) {
            $("#slideCover .slideContainer video")[0].pause();
        } 
    });

    //Changing slider to next one
    $("#slideCover .angleBoth").click(function () {
        var directionName = $(this).data("name");
        changeSlide(directionName);
        if ($("#slideCover .slideContainer video").length>0){
            $("#slideCover .slideContainer video")[0].pause();
        }        
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

        //console.log("Image height: " + imageHeight + " Container top: " + (height - imageHeight) / 2);
    }

    //Send message button
    $("#contacts .form .submit button").mouseenter(function () {
        $(this).removeClass("back").removeClass("hoverB").addClass("hoverR");
    });

    $("#contacts .form .submit button").mouseout(function () {
        $(this).removeClass("hoverR").addClass("hoverB");
    });

    // Create scrollTop button part
    //Scroll to top function
    function scrollToTop() {
        var step;
        var windowTopPos = $(window).scrollTop();

        if (windowTopPos < 1500) {
            step = 40;
        } else {
            step = 80;
        }

        var scrollToTopInt = setInterval(function () {
            var windowTopPos = $(window).scrollTop();
            if (windowTopPos > 0) {
                window.scrollTo(0, windowTopPos - step);
            } else {
                window.clearInterval(scrollToTopInt);
            }
        }, 0.2);
    }

    $("#footer .scrollToTop").click(function () {
        scrollToTop();
    });

    //Show Scroll to top function 
    function showScrollToTop() {
        var scrollToTopPos = $("#footer .scrollToTop");
        var windowTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (windowTop > (windowHeight - 500)) {
            scrollToTopPos.css({
                "opacity": "1",
                "cursor": "pointer"
            });
        }
        if (windowTop < (windowHeight - 300)) {
            scrollToTopPos.css({
                "opacity": "0",
                "cursor": "default"
            });
        }
    }

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  << Functions Execute AJAX codes >>  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
    //Sending message with Ajax
    $("#sendMessageForm .myButton").click(function (e) {
        e.preventDefault();
        var data = $("#sendMessageForm").serialize();

        $.ajax({

            type: "POST",
            url: "/home/SendMessage",
            data: data,
            success: function (response) {
                //console.log(response);
                if (response.result == true) {
                    $("#contacts .container .form .submit .message-error").css({ "display": "none" });
                    $("#contacts .container .form .submit .message-success").css({ "display": "block" });
                    $("#sendMessageForm .input").val('');
                } else {
                    $("#contacts .container .form .submit .message-success").css({ "display": "none" });
                    $("#contacts .container .form .submit .message-error").css({ "display": "block" });
                }
            }

        })
    });    
    //~~~~~~~~~~~~~~~~~~~~  << End of AJAX codes >>  ~~~~~~~~~~~~~~~~~~~~//
});