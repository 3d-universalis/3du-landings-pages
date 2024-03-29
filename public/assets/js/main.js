"use strict";
$(document).ready(function () {
    /* All Active Js Here */

    /*==================================
    	10. Bg Color
    ===================================*/

    var $bgcolor = $('.bg-color');
    $bgcolor.each(function () {
        var $this = $(this),
            $color = $this.data('bg-color');
        $this.css('background-color', $color);
    });

    var body_event = $("body");

    body_event.on("click", ".color-1", function () {
        var link = $("<link />", {
            rel: "stylesheet",
            type: "text/css",
            href: "assets/css/color/color-1.css"
        });

        $('#color').html(link);
        $('#color-admin').html(link);
        return false;
    });

    body_event.on("click", ".color-2", function () {
        var link = $("<link />", {
            rel: "stylesheet",
            type: "text/css",
            href: "assets/css/color/color-2.css"
        });
        $('#color').html(link);
        $('#color-admin').html(link);
        return false;
    });

    body_event.on("click", ".color-3", function () {
        var link = $("<link />", {
            rel: "stylesheet",
            type: "text/css",
            href: "assets/css/color/color-3.css"
        });
        $('#color').html(link);
        $('#color-admin').html(link);
        return false;
    });

    $('.color-picker').animate({
        right: '-190px'
    });
    body_event.on("click", ".color-picker a.handle", function (e) {
        e.preventDefault();
        var div = $('.color-picker');
        if (div.css('right') === '-190px') {
            $('.color-picker').animate({
                right: '0px'
            });
        } else {
            $('.color-picker').animate({
                right: '-190px'
            });
        }
    });


    /*-----------------------------
    	Menu Stick
    ---------------------------------*/
    if ($(".sticker")[0]) {
        $('.sticker');
        $(window).scroll(function () {
            var wind_scr = $(window).scrollTop();
            var window_width = $(window).width();
            var head_w = $('.sticker').height();
            if (window_width >= 10) {
                if (wind_scr < 400) {
                    if ($('.sticker').data('stick') === true) {
                        $('.sticker').data('stick', false);
                        $('.sticker').stop(true).animate({
                            opacity: 0
                        }, 300, function () {
                            $('.sticker').removeClass('stick slideDown');
                            $('.sticker').stop(true).animate({
                                opacity: 1
                            }, 300);
                        });
                    }
                } else {
                    if ($('.sticker').data('stick') === false || typeof $('.sticker').data('stick') === 'undefined') {
                        $('.sticker').data('stick', true);
                        $('.sticker').stop(true).animate({
                            opacity: 0
                        }, 300, function () {
                            $('.sticker').addClass('stick slideDown');
                            $('.sticker.stick').stop(true).animate({
                                opacity: 1
                            }, 300);
                        });
                    }
                }
            }
        });
    };




    /*--------------------------------
    	One Page Nav
    -----------------------------------*/
    var top_offset = $('.mainmenu-wrapper').height() - -60;
    $('.mainmenu-wrapper nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });



    /*----------------------------------------
     GO to Home
    ----------------------------------------*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500) {
            $('.tap-top').fadeIn();
        } else {
            $('.tap-top').fadeOut();
        }
    });
    $('.tap-top').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });





    /*----------------------------
        jQuery MeanMenu
    ------------------------------ */
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "990",
        meanMenuContainer: ".mobile-menu",
        onePage: true,
    });

//  Megatron contact button, scroll to position.
$(".goToContact").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contact-us").offset().top - 175
    }, 1000);
  });
  
  // CONTACT US FORM 
  var formButton = document.querySelector("#contact-form-submit");

  function sendData() {
    var XHR = new XMLHttpRequest();

    // Bind the FormData object and the form element
    var FD = new FormData(form);

    // Transform formdata to an Array
    var formObject = { name: FD.get("name"), phone: FD.get("phone"), email: FD.get("email"), message: FD.get("message"), origin: "LandingPages" };

    var alertField = document.getElementById("contact-status");

    // Define what happens on successful data submission
    XHR.addEventListener("load", function(event) {    
      var responseJSON = JSON.parse(event.target.response)
      if(responseJSON && responseJSON.status == "success"){
        alertField.className = "alert alert-success";
        alertField.innerHTML = responseJSON.message;
        alertField.style.display = "block"
      }else{
        displayErrorAlert();
      }
      formButton.removeAttribute("disabled");
    });

    // Define what happens in case of error
    XHR.addEventListener("error", function(event) {
      displayErrorAlert();
      formButton.removeAttribute("disabled");
    });

    function displayErrorAlert(){
      alertField.className = "alert alert-warning";
      alertField.innerHTML = "Oups, something went wrong.</br> Contact us by email : <a href='mailto:info@3duniversalis'>info@3duniversalis.com</a> ";
      alertField.style.display = "block"
    }

    XHR.open("POST", "https://2boulh6ez0.execute-api.us-east-1.amazonaws.com/prod");
    XHR.send(JSON.stringify(formObject));
  }
 
  // Access the form element...
  var form = document.getElementById("contact-form");

  // ...and take over its submit event.
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    formButton.setAttribute("disabled", "disabled");
    sendData();
    dataLayer.push({'event': 'contacted-us'});
  });
  // End Contact Us Form
});









