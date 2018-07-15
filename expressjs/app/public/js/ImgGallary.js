/*$(document).ready(function(){*/

var slideIndex = 1;
var imgName;
var TOTALIMAGE = 20;
var ISLASTIMAGE;
var CurrCatagory;
var Firsttime;
var currSlide; 

    function getSelImage(cnt) {
        var count = cnt;
        //   $( ".mySlides").children().each(function(cnt){ 
        CurrCatagory.children().each(function (cnt) {
            if (count === cnt) {
                imgName = $(this).attr('src');
            }
            console.log(cnt + ": " + name);
            console.log(cnt + ": " + $(this).attr('src'));

        });
    }

    function createDom(catname) {

    }

    function showSlide(index) {

        //get the images

        /* var slides1=document.getElementsByClassName('mySlides');*/

    }

    function closeModal() {
        /* document.getElementById('myModel').style.display="none";*/
        $('#myModel').css({
            "display": "none"
        });
        slideIndex = 0;
        ISLASTIMAGE = 'N';
    }


    function openModal1(cat, num) {
        var i = 0;
        CurrCatagory = cat;
        var images = [];
        // start
        var items = [];

        for (i = 1; i < TOTALIMAGE; i++) {
            items.push("Images/innercover/" + cat + "/" + num + "/" + i + ".jpg");
        }

        $.each(items, function (index, value) {
            images.push('<img src="' + value + '" width=150 height=150 onclick="currentSlide(' + index + ')" class="hover-shadow">')
        });

        $('<div/>', {
            id: cat + num,
            class: "mySlides activeSlides",
            html: images.join(''),
        }).appendTo($('#myModelContent'));

        var vcat = '#' + CurrCatagory + num
        CurrCatagory = $(vcat);
        Firsttime = 'Y'
        //end
        $('#myModel').css({
            "display": "block"
        });
    }


    function plusSlides(n) {
        console.log(slideIndex);
        if ((slideIndex === TOTALIMAGE) && (n == 1)) /* Last Image -next image*/ {
            $('.next').css({
                'background-color': 'lightgrey'
            });
            $('.prev').css({
                'background-color': 'rgba(0, 0, 0, 0.8)'
            });
            ISLASTIMAGE = 'Y';
            return;
        }
        if ((slideIndex === 1) && (n == -1)) /* Last image-prev image*/ {
            {
                $('.prev').css({
                    'background-color': 'lightgrey'
                });
                $('.next').css({
                    'background-color': 'rgba(0, 0, 0, 0.8)'
                });
                ISLASTIMAGE = 'Y';
                return;
            }
        }
        ISLASTIMAGE = 'N';
        slideIndex += n; /* slideindex= slideindex + n */
        currentSlide(slideIndex);
    }

    function currentSlide(n, eName) {

        slideIndex = n;
        var modalcontent = $('.activeImg');
        var ntxt = $('.numbertext');
        if (Firsttime === 'Y') {
            getSelImage(0);
            Firsttime = 'N';
            slideIndex = 0;
        } else {
            getSelImage(slideIndex);
        }
        $('.activeImg').attr("src", imgName);
        $('.model .txtbanner strong').text(eName)
        ntxt.text(slideIndex + " / " + TOTALIMAGE);
    }

    function openGallery(catagory) {
        var vcat = '#' + catagory
        var catname = $(vcat);
        $(".activeGallery").removeClass("activeGallery").addClass('inactiveGallery');
        catname.removeClass("inactiveGallery");
        catname.addClass("activeGallery");
        //   $('#mySidebar').removeClass('in');
        //  $('.galleryPanel button').addClass('collapsed');
        // console.log(catname); 
        // console.log($("#babyshower")); 
        //  $('#mySidebar .collapse').collapse();

    }

   
    //toggle the sidenav button whrn the size is 1025px
    function sidecollapse() {

        var x = $('.sidenav a');

        if (x.css("display") === "none") {
            x.css({
                "display": "inline-block"
            });
            $('.gallery-body').addClass('wrapper-is-open');
            $('.gallery-body').addClass('wrapper');
        } else {
            x.css({
                "display": "none"
            });
            $('.gallery-body').removeClass('wrapper-is-open');
            $('.gallery-body').removeClass('wrapper');
        }

    }
    //
    function labelwrap(objImg1) {
        var nextelm = $(objImg1).next();
        // $('label:first').css({"opacity":"1"});
        nextelm.next().css({
            "opacity": "1"
        });
    }

    function normalImg(objImg2) {

        // $('label:first').css({"opacity":"0"});
        var nextelm = $(objImg2).next();
        // $('label:first').css({"opacity":"1"});
        nextelm.next().css({
            "opacity": "0"
        });
    }


    $(document).ready(function () {
        $(".sidenav a").on('click', function (event) {
            $(".activemenu").removeClass("activemenu");
            $(this).addClass('activemenu');

        });


        $(".next,.prev").hover(function () {
            if (slideIndex === 1) /* Last Image -next image*/ {
                $('.prev').css("background-color", "lightgrey");
            } else if (slideIndex == TOTALIMAGE) {
                $('.next').css("background-color", "lightgrey");
            } else {
                $(this).css({
                    'background-color': 'rgba(0, 0, 0, 0.8)'
                });
            }
        }, function () {
            $(this).css("background-color", "white");

        });


    });

    /* }); */
