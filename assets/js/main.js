var header = $('.navbar');

$(window).on('scroll', function() {
  if ($(window).scrollTop() > 100) { // Change 100 to your desired scroll position
    header.addClass('sticky');
  } else {
    header.removeClass('sticky');
  }
});

// Back To Top

var btn = $(".go-to-top");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// Detect mobile device (Do not remove!!!)
var isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini/i.test(
    navigator.userAgent
  )
    ? true
    : false;
// if (isMobile) {
//   $("body").addClass("is-mobile");
// }

gsap.to(".expertise-vertical", {
  ease: "none",
  yPercent: -80,
  scrollTrigger: {
    trigger: ".expertise",
    start: "top center",
    end: "bottom bottom",
    scrub: 1,
  },
});

// =================
// Page transitions
// =================

if ($("body").hasClass("tt-transition")) {
  // Wait until the whole page is loaded.
  $(window).on("load", function () {
    setTimeout(function () {
      HideLoad(); // call out animations.
    }, 0);
  });

  // Transitions In (when "ptr-overlay" slides in).
  // =================
  function RevealLoad() {
    var tl_transitIn = gsap.timeline({
      defaults: { duration: 1, ease: Expo.easeInOut },
    });
    tl_transitIn.set("#page-transition", { autoAlpha: 1 });
    tl_transitIn.to(
      ".ptr-overlay",
      { scaleY: 1, transformOrigin: "center bottom" },
      0
    );
    tl_transitIn.to("#content-wrap", { y: -80, autoAlpha: 0 }, 0);
    tl_transitIn.to("#tt-header", { y: -20, autoAlpha: 0 }, 0);
    tl_transitIn.to(".ptr-preloader", { autoAlpha: 1 }, 0.4);
  }

// Check if it's a touch device
const isTouchDevice = 'ontouchstart' in window;
const createCursorFollower = () => {
  const $el = document.querySelector('.hero-btn a');
  const container = document.querySelector(".hero-btn"); // Use document.querySelector instead of $ for plain JavaScript
  container.addEventListener('mousemove', (e) => {
    const { target, offsetX: x, offsetY: y } = e; // Use offsetX and offsetY for mouse position relative to the container
    gsap.to($el, {
      x: x - 120,
      y: y -120,
      scale:.8,
      duration: .1,
    });
  });
  // Hiding the cursor element when the mouse cursor
  // is moved out of the page
  container.addEventListener('mouseleave', (e) => {
    gsap.to($el, {
      x: 0,
      y: 0,
      scale:1,
      duration: .1
    });
  });
};
const getInTouch = () => {
  // const $el = document.querySelector('.get-in-touch-link .footer-arrow-link');
  // const container = document.querySelector(".get-in-touch-link"); // Use document.querySelector instead of $ for plain JavaScript
  // container.addEventListener('mousemove', (e) => {
  //   const { target, offsetX: x, offsetY: y } = e; // Use offsetX and offsetY for mouse position relative to the container
  //   gsap.to($el, {
  //     x: x,
  //     y: y - 200,
  //     duration:1,
  //   });
  // });

  $('.get-in-touch-link').on("mouseenter", function () {
    $ball.append('<div class="ball-view"><img src="assets/img/arrow-white.png" alt="" /></div>');
    $(".ball-view").append($(this).attr("data-cursor"));
    gsap.to(ball, {
      duration: 0.3,
      yPercent: -75,
      width: 65,
      height: 65,
      opacity: 1,
      borderWidth: 0,
      backgroundColor: "#F45D2C",
    });
    gsap.to(".ball-view", { duration: 0.3, scale: 1, autoAlpha: 1 });
  })
  $('.get-in-touch-link').on("mouseleave", function () {
    gsap.to(ball, {
      duration: 0.3,
      yPercent: -50,
      width: $ballWidth,
      height: $ballHeight,
      opacity: $ballOpacity,
      borderWidth: $ballBorderWidth,
      backgroundColor: "transparent",
    });
    gsap.to(".ball-view", {
      duration: 0.3,
      scale: 0,
      autoAlpha: 0,
      clearProps: "all",
    });
    $ball.find(".ball-view").remove();
  });
};

// Only invoke the function if isn't a touch device
if (!isTouchDevice) {
  createCursorFollower();
  getInTouch()
}

  // Transitions Out (when "ptr-overlay" slides out)
  // ================
  function HideLoad() {
    var tl_transitOut = gsap.timeline();
    tl_transitOut.to(".ptr-preloader", {
      duration: 1,
      autoAlpha: 0,
      ease: Expo.easeInOut,
    });
    tl_transitOut.to(
      ".ptr-overlay",
      {
        duration: 1,
        scaleY: 0,
        transformOrigin: "center top",
        ease: Expo.easeInOut,
      },
      0.3
    );

    // tt-Header appear
    tl_transitOut.from(
      "#tt-header",
      {
        duration: 1,
        y: 20,
        autoAlpha: 0,
        ease: Expo.easeInOut,
        clearProps: "all",
      },
      0.6
    );

    // Page header image appear
    if ($(".ph-image").length) {
      if ($("#page-header").hasClass("ph-bg-image")) {
        tl_transitOut.from(
          ".ph-image img, .ph-video",
          {
            duration: 1.5,
            y: 80,
            autoAlpha: 0,
            stagger: 0.3,
            ease: Expo.easeOut,
            clearProps: "all",
          },
          0.8
        );
      } else {
        tl_transitOut.from(
          ".ph-image",
          {
            duration: 1.5,
            y: 80,
            autoAlpha: 0,
            stagger: 0.3,
            ease: Expo.easeOut,
            clearProps: "all",
          },
          1.2
        );
      }
    }

    // Page header elements appear (elements with class "ph-appear")
    if ($(".ph-appear").length) {
      tl_transitOut.from(
        ".ph-appear",
        {
          duration: 1.5,
          y: 60,
          autoAlpha: 0,
          stagger: 0.3,
          ease: Expo.easeOut,
          clearProps: "all",
        },
        1.5
      );
    }

    // Page header elements appear (project info list)
    if ($("#page-header .project-info-list").length) {
      if ($("#page-header").hasClass("ph-inline")) {
        tl_transitOut.from(
          "#page-header .project-info-list > ul > li",
          {
            duration: 1.5,
            y: 80,
            autoAlpha: 0,
            stagger: 0.15,
            ease: Expo.easeOut,
            clearProps: "all",
          },
          2.2
        );
      } else {
        tl_transitOut.from(
          "#page-header .project-info-list > ul",
          {
            duration: 1.5,
            y: 80,
            autoAlpha: 0,
            ease: Expo.easeOut,
            clearProps: "all",
          },
          2.2
        );
      }
    }

    // Portfolio slider elements appear (full heigth slider)
    if ($(".tt-psc-elem").length) {
      $(".tt-psc-elem").wrap('<div class="tt-ps-appear"></div>');
      tl_transitOut.from(
        ".tt-ps-appear",
        {
          duration: 1.5,
          y: 80,
          autoAlpha: 0,
          stagger: 0.3,
          ease: Expo.easeOut,
          clearProps: "all",
        },
        1.4
      );
    }

    // Portfolio carousel elements appear
    if ($(".tt-pci-title").length) {
      tl_transitOut.from(
        ".tt-pci-title",
        {
          duration: 1.5,
          x: 80,
          autoAlpha: 0,
          skewX: "-10deg",
          ease: Expo.easeOut,
          clearProps: "all",
        },
        1.4
      );
    }
    if ($(".tt-pci-category").length) {
      tl_transitOut.from(
        ".tt-pci-category",
        {
          duration: 1.5,
          x: 80,
          autoAlpha: 0,
          ease: Expo.easeOut,
          clearProps: "all",
        },
        1.5
      );
    }

    // Page other elements appear
    tl_transitOut.from(
      "#page-content",
      {
        duration: 1.5,
        autoAlpha: 0,
        y: 80,
        ease: Expo.easeOut,
        clearProps: "all",
      },
      0.8
    );
    tl_transitOut.set("#page-transition", {
      duration: 1,
      autoAlpha: 0,
      ease: Expo.easeInOut,
    });
  }

  // Force page a reload when browser "Back" button click.
  // =====================================================
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };

  // On link click
  // ==============
  $("a")
    .not('[target="_blank"]') // omit from selection
    .not('[href^="#"]') // omit from selection
    .not('[href^="mailto"]') // omit from selection
    .not('[href^="tel"]') // omit from selection
    .not(".lg-trigger") // omit from selection
    .not(".tt-btn-disabled a") // omit from selection
    .not(".no-transition") // omit from selection
    .on("click", function (e) {
      e.preventDefault();

      setTimeout(
        function (url) {
          window.location = url;
        },
        1000,
        this.href
      );

      RevealLoad(); // call in animations.
    });
}

$(".industries").each(function () {
  let tl_StretchInUp = gsap.timeline({
    scrollTrigger: {
      trigger: this,
      start: "top bottom",
      markers: false,
    },
  });

  tl_StretchInUp.from(
    this,
    {
      duration: 1,
      autoAlpha: 0,
      y: 100,
      scale: 1.1,
      clearProps: "all",
    }
  );
});
/**********Scroll-Animations************/

// fade in-up
$(".anim-fadeinup").each(function () {
  let tl_FadeInUp = gsap.timeline({
    scrollTrigger: {
      trigger: this,
      start: "top bottom",
      markers: false,
    },
  });

  tl_FadeInUp.from(
    this,
    {
      duration: 2.5,
      autoAlpha: 0,
      y: 100,
      ease: Expo.easeOut,
      clearProps: "all",
    },
    "+=0.3"
  );
});

// Scale in-up
$(".anim-skewinup").each(function () {
  let tl_SkewInUp = gsap.timeline({
    scrollTrigger: {
      trigger: this,
      start: "top bottom",
      markers: false,
    },
  });

  tl_SkewInUp.from(
    this,
    {
      duration: 2,
      scaleX: 1.4,
      transformOrigin: "left top",
      autoAlpha: 0,
      y: 100,
      ease: Expo.easeOut,
      clearProps: "all",
    },
    "+=0.3"
  );
});
// skew in-up
$(".anim-skewinup").each(function () {
  let tl_SkewInUp = gsap.timeline({
    scrollTrigger: {
      trigger: this,
      start: "top bottom",
      markers: false,
    },
  });

  tl_SkewInUp.from(
    this,
    {
      duration: 2,
      skewY: 5,
      transformOrigin: "left top",
      autoAlpha: 0,
      y: 100,
      ease: Expo.easeOut,
      clearProps: "all",
    },
    "+=0.3"
  );
});

// skew in-right
$(".anim-skewinright").each(function () {
  let tl_SkewinRight = gsap.timeline({
    scrollTrigger: {
      trigger: this,
      start: "top bottom",
      markers: false,
    },
  });

  tl_SkewinRight.from(
    this,
    {
      duration: 2,
      skewX: 5,
      transformOrigin: "left top",
      autoAlpha: 0,
      x: 100,
      ease: Expo.easeOut,
      clearProps: "all",
    },
    "+=0.3"
  );
});

// stretch in-right
$(".anim-stretchinright").each(function () {
  let tl_StretchInUp = gsap.timeline({
    scrollTrigger: {
      trigger: this,
      start: "top bottom",
      markers: false,
    },
  });

  tl_StretchInUp.from(
    this,
    {
      duration: 2,
      autoAlpha: 0,
      x: 100,
      scaleX: 1.4,
      transformOrigin: "left top",
      ease: Expo.easeOut,
      clearProps: "all",
    },
    "+=0.2"
  );
});

// stretch in-up
$(".anim-stretchinup").each(function () {
  let tl_StretchInUp = gsap.timeline({
    scrollTrigger: {
      trigger: this,
      start: "top bottom",
      markers: false,
    },
  });

  tl_StretchInUp.from(
    this,
    {
      duration: 2,
      autoAlpha: 0,
      y: 100,
      scaleY: 1.4,
      transformOrigin: "top",
      ease: Expo.easeOut,
      clearProps: "all",
    },
    "+=0.2"
  );
});

// stretch in-up
$(".img_reveal").each(function () {
  let tl_StretchInUp = gsap.timeline({
    scrollTrigger: {
      trigger: this,
      start: "top bottom",
      markers: false,
    },
  });

  tl_StretchInUp.from(
    this,
    {
      duration: 2,
      autoAlpha: 0,
      y: 100,
      scaleY: 1,
      transformOrigin: "top",
      ease: Expo.easeOut,
      clearProps: "all",
    },
    "+=0.2"
  );
});
// zoom in
$(".anim-zoomin").each(function () {
  // Add wrap <div>.
  $(this).wrap('<div class="anim-zoomin-wrap"></div>');

  // Add overflow hidden.
  $(".anim-zoomin-wrap").css({ overflow: "hidden" });

  var $this = $(this);
  var $asiWrap = $this.parents(".anim-zoomin-wrap");

  let tl_ZoomIn = gsap.timeline({
    scrollTrigger: {
      trigger: $asiWrap,
      start: "top 90%",
      markers: false,
      onEnter: () => animZoomInRefresh(),
    },
  });
  tl_ZoomIn.from($this, {
    duration: 1.5,
    autoAlpha: 0,
    scale: 1.2,
    ease: Power2.easeOut,
    clearProps: "all",
  });

  // Refresh start/end positions on enter.
  function animZoomInRefresh() {
    ScrollTrigger.refresh();
  }
});

gsap.registerPlugin(ScrollTrigger);

const tlHero = gsap.timeline({
  ease: "none",
});

tlHero.to(".hero-row", {scale: 0.9,opacity: 0.5,duration: 1});
tlHero.from(".hero-row", {scale: 1,opacity: 1,duration: 1,transformOrigin: "top center",});
ScrollTrigger.create({
  trigger: ".hero",
  start: "top top",
  end: "+=200%",
  pin: true,
  animation: tlHero,
  scrub: 0.78,
  pinSpacing: false,
});
const tlHeroVideo = gsap.timeline({
  ease: "none",
});
tlHeroVideo.to(".hero-bg", {opacity: 0.2,duration: 1,});
tlHeroVideo.from(".hero-bg", {opacity: 1,duration: 1});
ScrollTrigger.create({
  trigger: ".hero-bg",
  start: "top top",
  end: "+=200%",
  pin: true,
  animation: tlHeroVideo,
  scrub: 0.78,
  pinSpacing: false,
});



// const tlScrollSection = gsap.timeline({
//   ease: "none",
// });
// tlScrollSection.from(".industries", {scale: 1,opacity: 1,duration: 1});
// tlScrollSection.to(".industries", {scale: 1,opacity: 0.5,duration: 1});
// ScrollTrigger.create({
//   trigger: ".industries",
//   start: "top center",
//   pin: true,
//   animation: tlScrollSection,
//   scrub: 0.78,
//   pinSpacing: false,
// });

const tlReveal = gsap.timeline({
  ease: "none",
});
// Page header elements scrolling effects:

let tlPhParallax = gsap.timeline({
  scrollTrigger: {
    trigger: "#page-header",
    start: "top top",
    end: "bottom top",
    scrub: 2,
    markers: false,
  },
});

tlPhParallax.to(".ph-image-inner", { yPercent: 30, scale: 0.8 }, 0);
tlPhParallax.to(".showcase-img", { yPercent: -30, scale: 1 }, 0);

let tlTextSlide = gsap.timeline({
  scrollTrigger: {
    trigger: "#page-header",
    start: "top top",
    endTrigger: "footer",
    end: "+=2500",
    scrub: 1,
    markers: false,
  },
});
tlTextSlide.to(".moveleft", { xPercent: -30, scale: 1 }, 0);
tlTextSlide.to(".moveright", { xPercent: 30, scale: 1 }, 0);

// =======================================================================================
// Magic cursor (no effect on small screens!)
// https://codepen.io/Sahil89/pen/MQbdNR
// https://greensock.com/forums/topic/17490-follow-button-effect/?tab=comments#comment-81107
// =======================================================================================
if (!isMobile) {
  var $mouse = { x: 0, y: 0 }; // Cursor position
  var $pos = { x: 0, y: 0 }; // Cursor position
  var $ratio = 0.15; // delay follow cursor
  var $active = false;
  var $ball = $("#ball");

  var $ballWidth = 34; // Ball default width
  var $ballHeight = 34; // Ball default height
  var $ballScale = 1; // Ball default scale
  var $ballOpacity = 0.5; // Ball default opacity
  var $ballBorderWidth = 2; // Ball default border width

  gsap.set($ball, {
    // scale from middle and style ball
    xPercent: -50,
    yPercent: -50,
    width: $ballWidth,
    height: $ballHeight,
    borderWidth: $ballBorderWidth,
    opacity: $ballOpacity,
  });

  document.addEventListener("mousemove", mouseMove);

  function mouseMove(e) {
    $mouse.x = e.clientX;
    $mouse.y = e.clientY;
  }

  gsap.ticker.add(updatePosition);

  function updatePosition() {
    if (!$active) {
      $pos.x += ($mouse.x - $pos.x) * $ratio;
      $pos.y += ($mouse.y - $pos.y) * $ratio;

      gsap.set($ball, { x: $pos.x, y: $pos.y });
    }
  }

  // Cursor view on hover (data attribute "data-cursor="...").
  $("[data-cursor]").each(function () {
    $(this)
      .on("mouseenter", function () {
        $ball.append('<div class="ball-view"></div>');
        $(".ball-view").append($(this).attr("data-cursor"));
        gsap.to(ball, {
          duration: 0.3,
          yPercent: -75,
          width: 65,
          height: 65,
          opacity: 1,
          borderWidth: 0,
          backgroundColor: "#F45D2C",
        });
        gsap.to(".ball-view", { duration: 0.3, scale: 1, autoAlpha: 1 });
      })
      .on("mouseleave", function () {
        gsap.to(ball, {
          duration: 0.3,
          yPercent: -50,
          width: $ballWidth,
          height: $ballHeight,
          opacity: $ballOpacity,
          borderWidth: $ballBorderWidth,
          backgroundColor: "transparent",
        });
        gsap.to(".ball-view", {
          duration: 0.3,
          scale: 0,
          autoAlpha: 0,
          clearProps: "all",
        });
        $ball.find(".ball-view").remove();
      });
    $(this).addClass("not-hide-cursor");
  });

  // Show/hide magic cursor
  // =======================

  // Hide on hover.
  $(
    "button, .tt-btn, .tt-form-control, .tt-form-radio, .tt-form-check, .hide-cursor"
  ) // class "hide-cursor" is for global use.
    .not(".not-hide-cursor") // omit from selection (class "not-hide-cursor" is for global use).
    .not(".cursor-alter") // omit from selection
    .not(".tt-main-menu-list > li > a") // omit from selection
    .not(".tt-main-menu-list > li > .tt-submenu-trigger > a") // omit from selection
    .not(".overlay")
    .on("mouseenter", function () {
      gsap.to($ball, { duration: 0.3, scale: 0, opacity: 0 });
    })
    .on("mouseleave", function () {
      gsap.to($ball, {
        duration: 0.3,
        scale: $ballScale,
        opacity: $ballOpacity,
      });
    });

  // Hide on click.
  $("a")
    .not('[target="_blank"]') // omit from selection.
    .not('[href^="#"]') // omit from selection.
    .not('[href^="mailto"]') // omit from selection.
    .not('[href^="tel"]') // omit from selection.
    .not(".lg-trigger") // omit from selection.
    .not(".tt-btn-disabled a") // omit from selection.
    .on("click", function () {
      gsap.to($ball, { duration: 0.3, scale: 1.3, autoAlpha: 0 });
    });
}

/*********Swiper Initializations ***********/

var swiper = new Swiper(".testimonial-swipper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".clientSwiper", {
  spaceBetween: 40,
  grabCursor: true,
  a11y: false,
  freeMode: true,
  speed: 5000,
  loop: true,
  slidesPerView: 8,
  autoplay: {
    delay: 0.5,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      spaceBetween: 40,
      slidesPerView: 3,
    },
    992: {
      spaceBetween: 40,
      slidesPerView: 4,
    },
    1300: {
      spaceBetween: 40,
      slidesPerView: 9,
    },
  },
});

var swiper = new Swiper(".industries-swiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  freeMode: true,
  breakpoints: {
    0: {
      spaceBetween: 30,
      slidesPerView: 1,
      centeredSlides: false,
    },
    500: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    992: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
    1300: {
      spaceBetween: 40,
      slidesPerView: 4,
    },
    1500: {
      spaceBetween: 40,
      slidesPerView: 5,
    },
  },
});

var swiper = new Swiper(".team-swiper", {
  slidesPerView: 5,
  spaceBetween: 15,
  centeredSlides: true,
  loop: true,
  freeMode: true,
  breakpoints: {
    0: {
      spaceBetween: 30,
      slidesPerView: 1,
      centeredSlides: false,
    },
    500: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    992: {
      spaceBetween: 20,
      slidesPerView: 3,
    },
    1300: {
      spaceBetween: 40,
      slidesPerView: 5,
    },
  },
});

var swiper2 = new Swiper(".testimonialImgSwiper", {
  effect: "fade",
  allowTouchMove: false,
});
var testimonialSwiper = new Swiper(".testimonialSwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  thumbs: {
    swiper: swiper2,
  },
});
/*********Swiper Initializations End ***********/

$(".card-header").click(function (e) {
  e.preventDefault();

  // Get the data-image attribute value
  var imageId = $(this).data("image");

  // Hide all images
  $(".services-img-wrapper img").hide();

  // Show the selected image with animation
  $("#" + imageId).fadeIn(1000);
});

/**************Header***********/

$("#toggle").click(function () {
  $(this).toggleClass("active");
  $("#overlay").toggleClass("open");
  $(".header-main").toggleClass("open");
});

$(".lt_btn").click(function () {
  $(this).toggleClass("active");
  $(".form-wrapper").toggleClass("active");
});
$(".form-close-btn").click(function () {
  $(".form-wrapper").removeClass("active");
});

/********* Reveal Img On Title Hover ******** */

if (!isMobile) {
  const cursor = document.querySelector(".cursor");
  const cursorMedias = document.querySelectorAll(".cursor__media");
  const navLinks = document.querySelectorAll(".hover_item");

  gsap.set(cursor, {
    xPercent: -50,
    yPercent: -50,
    scale: 0,
  });

  const setCursorX = gsap.quickTo(cursor, "x", {
    duration: 0.6,
    ease: "expo",
  });

  const setCursorY = gsap.quickTo(cursor, "y", {
    duration: 0.6,
    ease: "expo",
  });
  const hover_wrapper = document.querySelector(".mouse-over");
  hover_wrapper.addEventListener("mousemove", (e) => {
    setCursorX(e.x);
    setCursorY(e.y);
  });

  const tl = gsap.timeline({
    paused: true,
  });

  tl.to(cursor, {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: "expo.inOut",
  });

  navLinks.forEach((navLink, i) => {
    navLink.addEventListener("mouseover", () => {
      cursorMedias[i].classList.add("active");
      tl.play();
    });
  });

  navLinks.forEach((navLink, i) => {
    navLink.addEventListener("mouseout", () => {
      tl.reverse();
      cursorMedias[i].classList.remove("active");
    });
  });
}
