import $ from "jquery";
import "jquery-mousewheel";
import "malihu-custom-scrollbar-plugin";
export const jqueryFuntion = () => {
  const timeoutIds = [];
  const schedule = (callback, delay) => {
    const id = window.setTimeout(callback, delay);
    timeoutIds.push(id);
  };

  const resetEntranceAnimations = () => {
    const animatedTargets = $(
      ".header-inner, .home .home-kicker, .home>div>div h1 span span, .home>div>div .intro, .home .home-target, .home p, .home ul, .home ul + div, .home .cta"
    );
    animatedTargets.removeClass("animated fadeInUp fadeInDown fadeInLeft fadeInRight");
  };

  const runBootSequence = () => {
    /* ----------------------------------------------------------- */
    /*  PAGE PRELOADER
    /* ----------------------------------------------------------- */

    var preloader = $("#preloader");
    resetEntranceAnimations();

    schedule(function () {
      preloader.addClass("preloaded");
    }, 800);
    if ($(window).width() > 1024) {
      schedule(function () {
        $(".header-inner").addClass("animated fadeInDown");
      }, 1500);
      schedule(function () {
        $(".home .home-kicker").addClass("animated fadeInUp");
        $(".home>div>div h1 span span").addClass("animated fadeInUp");
        $(".home>div>div .intro").addClass("animated fadeInUp");
        $(".home .home-target").addClass("animated fadeInUp");
        $(".home p").not(".home-target").addClass("animated fadeInUp");
        $(".home ul, .home ul + div").addClass("animated fadeInUp");
        $(".home .cta").addClass("animated fadeInUp");
      }, 2200);
    } else {
      schedule(function () {
        $(".header-inner").addClass("animated fadeInDown");
      }, 1100);
      schedule(function () {
        $(".home .home-kicker").addClass("animated fadeInUp");
        $(".home>div>div h1 span span").addClass("animated fadeInUp");
        $(".home>div>div .intro").addClass("animated fadeInUp");
        $(".home .home-target").addClass("animated fadeInUp");
        $(".home p").not(".home-target").addClass("animated fadeInUp");
        $(".home ul, .home ul + div").addClass("animated fadeInUp");
        $(".home .cta").addClass("animated fadeInUp");
      }, 1800);
    }

    /* ----------------------------------------------------------- */
    /*  SET ACTIVE MENU ITEM ON SCROLL
    /* ----------------------------------------------------------- */

    var homewidth = $(".home").width() - 10;
    var aboutwidth = homewidth + $(".about").width() + $(".facts").width() - 10;
    var portfoliowidth =
      aboutwidth +
      $(".portfolio .single-item .main-content").width() +
      $(".portfolio .single-item .details").width() +
      250 +
      65 +
      300 +
      $(".clients").width() -
      10;
    var contactwidth =
      portfoliowidth + $(".contact").width() + $(".testimonials").width() - 10;
    var blogwidth =
      contactwidth + $(".blog").width() + $(".copyright").width() - 10;

    /* ----------------------------------------------------------- */
    /*  HORIZONTAL SCROLL & REVEAL ANIMATIONS
    /* ----------------------------------------------------------- */

    function animateContent() {
      var divWidth = $("#wrapper").width() - $(window).width() / 2 + 270;
      var animated = $(".animated-layer");
      animated.each(function () {
        var anim = $(this);
        var offset = $(this).offset().left;
        if (offset < divWidth) {
          // Image Reveal Animation
          if (anim.hasClass("image-animation")) {
            anim.addClass("animated");
          }
          // Fade In Up Animation
          else if (anim.hasClass("fade-in-up-animation")) {
            anim.addClass("animated fadeInUp");
          }
          // Fade In Animation
          else if (anim.hasClass("fade-in-animation")) {
            anim.addClass("animated fadeIn");
          }
          // Fade In Down Animation
          else if (anim.hasClass("fade-in-down-animation")) {
            anim.addClass("animated fadeInDown");
          }
          // Fade In Right Animation
          else if (anim.hasClass("fade-in-right-animation")) {
            anim.addClass("animated fadeInRight");
          }
          // Fade In Right Animation
          else if (anim.hasClass("fade-in-left-animation")) {
            anim.addClass("animated fadeInLeft");
          }
        }
      });
    }

    function checkScroll() {
      if (
        Math.abs(parseInt($(".mCSB_container").css("left"), 10)) > homewidth &&
        Math.abs(parseInt($(".mCSB_container").css("left"), 10)) < aboutwidth
      ) {
        $(".menu ul li span").removeClass("active");
        $("#about-link").addClass("active");
      } else if (
        Math.abs(parseInt($(".mCSB_container").css("left"), 10)) > aboutwidth &&
        Math.abs(parseInt($(".mCSB_container").css("left"), 10)) < portfoliowidth
      ) {
        $(".menu ul li span").removeClass("active");
        $("#portfolio-link").addClass("active");
      } else if (
        Math.abs(parseInt($(".mCSB_container").css("left"), 10)) > portfoliowidth &&
        Math.abs(parseInt($(".mCSB_container").css("left"), 10)) < contactwidth
      ) {
        $(".menu ul li span").removeClass("active");
        $("#contact-link").addClass("active");
      } else if (
        Math.abs(parseInt($(".mCSB_container").css("left"), 10)) > contactwidth &&
        Math.abs(parseInt($(".mCSB_container").css("left"), 10)) < blogwidth
      ) {
        $(".menu ul li span").removeClass("active");
        $("#blog-link").addClass("active");
      } else {
        $(".menu ul li span").removeClass("active");
        $("#home-link").addClass("active");
      }
    }

    // Initialize WOW.js for all screen sizes to handle wow classes
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();

    if ($("#wrapper").length) {
      if ($(window).width() > 1024) {
        $("#wrapper").mCustomScrollbar({
          axis: "x",
          theme: "dark-3",
          keyboard: { enable: true, scrollType: "stepless" },
          advanced: {
            autoExpandHorizontalScroll: true,
          },
          scrollInertia: 520,
          mouseWheel: {
            deltaFactor: 36,
            scrollAmount: 70,
          },
          callbacks: {
            whileScrolling: function () {
              animateContent();
              checkScroll();
            },
          },
        });
      }
    }
  };

  runBootSequence();

  $(document).ready(function () {
    /* ----------------------------------------------------------- */
    /*  SAFARI BROWSER FIXES
    /* ----------------------------------------------------------- */

    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari) {
      $("body").addClass("body-safari");
    }

    /* ----------------------------------------------------------- */
    /*  REMOVE # FROM URL
    /* ----------------------------------------------------------- */

    $("a[href='#']").off("click.portfolio").on("click.portfolio", function (e) {
      e.preventDefault();
    });

    function removeHash() {
      history.replaceState(
        "",
        document.title,
        window.location.origin +
          window.location.pathname +
          window.location.search
      );
    }

    $("#menu li a").off("click.portfolioHash").on("click.portfolioHash", function () {
      setTimeout(() => {
        removeHash();
      }, 5);
    });

    /* ----------------------------------------------------------- */
    /*  REMOVE ANIMATIONS CLASSES IN DESKTOP
    /* ----------------------------------------------------------- */

    if ($(window).width() > 1024) {
      $(".fadeIn").removeClass("fadeIn");
      $(".fadeInUp").removeClass("fadeInUp");
      $(".fadeInDown").removeClass("fadeInDown");
      $(".fadeInRight").removeClass("fadeInRight");
      $(".fadeInLeft").removeClass("fadeInLeft");
    }

    /* ----------------------------------------------------------- */
    /*  MENU LINKS
    /* ----------------------------------------------------------- */

    $(".menu ul li span").off("click.portfolioActive").on("click.portfolioActive", function () {
      setTimeout(function () {
        $(this).toggleClass("active");
      }, 1600);
    });

    $("#home-link").off("click.portfolioNav").on("click.portfolioNav", function () {
      $("#wrapper").mCustomScrollbar("scrollTo", "#home", {
        scrollInertia: 1500,
      });
    });

    $("#about-link").off("click.portfolioNav").on("click.portfolioNav", function () {
      $("#wrapper").mCustomScrollbar("scrollTo", "#about", {
        scrollInertia: 1500,
      });
    });

    $("#portfolio-link").off("click.portfolioNav").on("click.portfolioNav", function () {
      $("#wrapper").mCustomScrollbar("scrollTo", "#portfolio", {
        scrollInertia: 1500,
      });
    });

    $("#contact-link").off("click.portfolioNav").on("click.portfolioNav", function () {
      $("#wrapper").mCustomScrollbar("scrollTo", "#contact", {
        scrollInertia: 1500,
      });
    });

    $("#blog-link").off("click.portfolioNav").on("click.portfolioNav", function () {
      $("#wrapper").mCustomScrollbar("scrollTo", "#blog", {
        scrollInertia: 1500,
      });
    });

    $("#menu li a").off("click.portfolioMenu").on("click.portfolioMenu", function () {
      $("#checkboxmenu").trigger("click");
      $("body").toggleClass("overflow-hidden");
    });

    $("#menuToggle").off("click.portfolioToggle").on("click.portfolioToggle", function () {
      $("body").toggleClass("overflow-hidden");
    });

    /* ----------------------------------------------------------- */
    /*  CALL TO ACTION HOME
    /* ----------------------------------------------------------- */

    $("#cta").off("click.portfolioCta").on("click.portfolioCta", function () {
      if ($(window).width() > 1024) {
        $("#wrapper").mCustomScrollbar("scrollTo", "#about", {
          scrollInertia: 1500,
        });
      } else {
        $("html, body").animate({
          scrollTop: $("#my-photo").offset().top,
        });
      }
    });

    $(".portfolio .single-item .details")
      .off("wheel.portfolioDetails mousewheel.portfolioDetails")
      .on("wheel.portfolioDetails mousewheel.portfolioDetails", function (event) {
        const element = this;
        const scrollHeight = element.scrollHeight;
        const clientHeight = element.clientHeight;
        const scrollTop = element.scrollTop;
        const nativeEvent = event.originalEvent || event;
        const deltaY =
          nativeEvent.deltaY || (nativeEvent.wheelDelta ? -nativeEvent.wheelDelta : 0);

        if (scrollHeight <= clientHeight) {
          return;
        }

        const scrollingUp = deltaY < 0;
        const scrollingDown = deltaY > 0;
        const atTop = scrollTop <= 0;
        const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

        if ((scrollingUp && atTop) || (scrollingDown && atBottom)) {
          return;
        }

        event.stopPropagation();
      });
  });

  return () => {
    timeoutIds.forEach((id) => window.clearTimeout(id));
    $(window).off("load.portfolio");
    $("a[href='#']").off("click.portfolio");
    $("#menu li a").off("click.portfolioHash click.portfolioMenu");
    $(".menu ul li span").off("click.portfolioActive");
    $("#home-link, #about-link, #portfolio-link, #contact-link, #blog-link").off(
      "click.portfolioNav"
    );
    $("#menuToggle").off("click.portfolioToggle");
    $("#cta").off("click.portfolioCta");
    $(".portfolio .single-item .details").off(
      "wheel.portfolioDetails mousewheel.portfolioDetails"
    );
  };
};
