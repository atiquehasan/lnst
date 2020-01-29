$(document).ready(function() {
  "use strict";
  $('.main-nav').headroom();

  // Smooth Scroll to Section
  $('a.scroll-to').on('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - 100)
    }, 700);
    event.preventDefault();
    if (screen.width < 992) {
      $('.navbar-toggler').click();
    }
  });

  // Match Height
  $('.feature-item').matchHeight({
    byRow: 0
  });

  // Testimonial Slider
  $('.testimonial-slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    speed: 500,
    nextArrow:"<button type='button' class='slick-next pull-left'><svg width=\"10\" height=\"18\" viewBox=\"0 0 10 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1.25 1.5L8.75 9l-7.5 7.5\" stroke=\"#FF6142\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></button>",
    prevArrow:"<button type='button' class='slick-prev pull-right'><svg width=\"10\" height=\"18\" viewBox=\"0 0 10 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M8.75 16.5L1.25 9l7.5-7.5\" stroke=\"#FF6142\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg></button>"
  });

  // AOS initialize
  AOS.init();

});

var heroTl = new TimelineMax({
  delay: 0.7
});

var heroRightHalf = $('.hero-illustration .right-half');
var heroBottomHalf = $('.hero-illustration .bottom-half');
var heroCircle = $('.hero-illustration .circle');
var heroSquare = $('.hero-illustration .square');

heroTl
  .fromTo(heroRightHalf, 2, { scale: 0, rotation: "-270" }, { scale: 1, rotation: "0", x: "0%", y: "50%", transformOrigin:"left center", ease:Power4.easeOut })
  .fromTo(heroBottomHalf, 1.5, { scale: 0, rotation: "-270" }, { scale: 1, rotation: "0", x: "50%", y: "50%", transformOrigin:"center center", ease:Power4.easeOut, delay: -1.5 })
  .fromTo(heroCircle, 1.5, { scale: 0 }, { scale: 1, rotation: "0", x: "50%", y: "50%", transformOrigin:"center center", ease:Power4.easeOut, delay: -1.5 })
  .fromTo(heroSquare, 1.5, { scale: 0 }, { scale: 1, x: "50%", y: "50%", transformOrigin:"center center", ease:Power4.easeOut, delay: -1.5 })
  .to(heroBottomHalf, .5, { y: "70px", delay: -0.5, ease: Power4.easeOut}).to(heroBottomHalf, 0.3, { y: "0", ease: Power4.easeIn})
  .to(heroCircle, .5, {y:"-190px", ease: Power4.easeOut})
  .to(heroSquare, .7, {y:"-205px", ease: Power4.easeOut, delay: -0.5})
  .to(heroBottomHalf, .5, {y: "-162px", delay: -0.3, ease: Power4.easeOut})
  .to(heroRightHalf, .5, { rotation: "90", x: "-5px", delay: -0.5, ease: Power4.easeOut })
  .to(heroCircle, .3, {y: "-162px", delay: -0.5, ease:Bounce.easeOut})
  .to(heroSquare, .4, {y: "-162px", delay: -0.5, ease:Bounce.easeOut})
  .to(heroRightHalf, .8, {x: 0, rotation: "0", ease: Power4.easeOut})
  .to(heroBottomHalf, .5, { y: 0, delay: -0.5, ease: Power4.easeOut})
  .to(heroCircle, .7, { y: 0, delay: -0.5, ease:Bounce.easeOut})
  .to(heroSquare, 1.2, { y: 0, delay: -0.5, ease:Bounce.easeOut});


var controller = new ScrollMagic.Controller();

var storyTl = new TimelineMax({
  delay: 0.2
});

storySquare = $('.story-illustration .square');
storyRightCircle = $('.story-illustration .right-circle');
storyTopCircle = $('.story-illustration .top-circle');

storyTl
  .fromTo(storySquare, 1, { scale: 0 }, {scale: 1, ease: Power4.easeOut, transformOrigin: "center center", x: "50%", y: "50%"})
  .fromTo(storyRightCircle, 1, { scale: 0, rotation: "90" }, { scale: 1, rotation: "0", delay: -0.8, ease: Power4.easeOut, transformOrigin: "left center", x: "0", y: "50%" } )
  .fromTo(storyTopCircle, 1, { opacity: 0, y: "20px" }, { opacity: 1, y: "0", ease: Power4.easeOut, delay: -0.6})
  .to(storySquare, 0.7, { scaleY: 0.5, ease: Power4.easeOut, transformOrigin: "bottom center" })
  .to(storyTopCircle, 1, { y: "61px", delay: -0.7, ease: Bounce.easeOut })
  .to(storyRightCircle, 0.7, { rotation: "-90", ease: Power4.easeOut, delay: -0.7, transformOrigin: "center center" })
  .to(storyTopCircle, 0.5, { x: "61px" })
  .to(storyRightCircle, 0.5, { rotation: "0", ease: Power4.easeIn, transformOrigin: "center center" })
  .to(storyTopCircle, 1.5, { y: "-150px", x: 0, ease: Power4.easeOut, delay: -0.15 })
  .to(storySquare, 0.5, { scaleY: 1, ease: Power4.easeOut, delay: -1 })
  .to(storyTopCircle, 1, { y: "0", delay: -1, ease: Bounce.easeOut })
  ;


var scene = new ScrollMagic.Scene({
  triggerElement : ".story",
  offset: 200,
  reverse: false
})
.setTween(storyTl)
// .addIndicators()
.addTo(controller);

var hiwTl = new TimelineMax({
  delay: 0.2
});

hiwCicleOne = $('.hiw-illustration .circle-one');
hiwCicleTwo = $('.hiw-illustration .circle-two');

hiwTl
  .from(hiwCicleOne, 1, { scale: 0, y: "50%", transformOrigin: "50% 50%", ease: Power4.easeOut})
  .from(hiwCicleTwo, 1, { scale: 0, y: "-20%", delay: -0.5, transformOrigin: "50% 50%", ease: Power4.easeOut})
  .to(hiwCicleOne, 1, { y: "70%", delay: -0.7, ease: Power4.easeOut })
  .to(hiwCicleTwo, 1, { y: "-70%", delay: -1, ease: Power4.easeOut })
  ;

var scene2 = new ScrollMagic.Scene({
  triggerElement : ".hiw",
  offset: 200,
  reverse: false
})
.setTween(hiwTl)
// .addIndicators()
.addTo(controller);

var tffTl = new TimelineMax({
  delay: 0.2
});

var tffBottomHalf = $('.tff-illustration .bottom-half');
var tffTopHalf = $('.tff-illustration .top-half');
var tffCircle = $('.tff-illustration .circle');

tffTl
  .from(tffBottomHalf, 1, { scale: 0, rotation: "180", transformOrigin:"50% 50%", ease:Power4.easeOut })
  .from(tffTopHalf, 1, { scale: 0, rotation: "-180", transformOrigin:"50% 50%", ease:Power4.easeOut, delay: -0.5 })
  .from(tffCircle, 0.7, { scale: 0, transformOrigin:"50% 50%", ease:Power4.easeOut, delay: -1 })
  .to(tffBottomHalf, 0.8, { rotation: "-90", delay: -0.8, x: "50%", y: "0%", ease: Power4.easeIn })
  .to(tffTopHalf, 0.8, { y: "180", delay: -0.5, ease: Power4.easeIn })
  .to(tffCircle, 0.8, { y: "180", delay: -0.5, ease: Power4.easeIn })
  .to(tffTopHalf, 1.5, { y: "-150", rotation: "360", x: "0%", delay: -0.3, ease: Power4.easeOut })
  .to(tffCircle, 1.2, { y: "-200", delay: -1.3, ease: Power4.easeOut })
  .to(tffBottomHalf, 1.7, { rotation: "0", delay: -1.6, x: "0%", y: "0%", ease: Power4.easeOut })
  .to(tffTopHalf, 1, { y: "0", delay: -0.6, ease: Power4.easeOut })
  .to(tffCircle, 1, { y: "0", delay: -1, ease: Bounce.easeOut })
  ;

var scene3 = new ScrollMagic.Scene({
  triggerElement : ".tff",
  offset: 200,
  reverse: false
})
.setTween(tffTl)
// .addIndicators()
.addTo(controller);

var companyTl = new TimelineMax({
  delay: 0.2
});

var companyTopCircle = $('.company-illustration .top-circle');
var companyLeftCircle = $('.company-illustration .left-circle');
var companyBottomCircle = $('.company-illustration .bottom-circle');
var companySquare = $('.company-illustration .square');
var companyEllipse = $('.company-illustration .ellipse');

companyTl
  .from(companyTopCircle, 1, { scale: 0, rotation: "-180", transformOrigin: "50% 50%", ease: Power4.easeOut })
  .from(companyBottomCircle, 1, { scale: 0, rotation: "-360", delay: -1, transformOrigin: "50% 50%", ease: Power4.easeOut })
  .from(companyLeftCircle, 1, { scale: 0, rotation: "-90", delay: -1, transformOrigin: "50% 50%", ease: Power4.easeOut })
  .from(companyEllipse, 1, { scale: 0, delay: -1, transformOrigin: "50% 50%", ease: Power4.easeOut })
  .from(companySquare, 1, { autoAlpha: 0, transformOrigin:"50% 50%", delay: -1, ease: Power4.easeOut })
  .to(companyBottomCircle, 0.5, { y: "80", ease: Power4.easeOut }).to(companyBottomCircle, 0.5, { y: "0", ease: Power4.easeIn, delay: -0.3 })
  .to(companyLeftCircle, .3, { rotation: "-45", delay: 0 , ease: Power4.easeOut})
  .to(companyEllipse, 0.5, { y: "-100", delay: -0.3, ease: Power4.easeOut })
  .to(companySquare, 0.5, { scaleY: 0, transformOrigin: "50% 0%", delay: -0.5, ease: Power4.easeOut })
  .to(companyTopCircle, 0.5, { rotation: "90", transformOrigin: "0 0", delay: -0.5, ease: Power4.easeOut })
  .to(companyLeftCircle, 2, { rotation: "-360" , delay: -0.5, ease: Power4.easeOut})
  .to(companyEllipse, 1, { y: "-300" , delay: -1.8, ease: Power4.easeOut})
  .to(companyEllipse, 1.2, { y: "0" , delay: -1.2, ease: Bounce.easeOut})
  .to(companyTopCircle, .3, { rotation: "0", delay: -1.2 , ease: Power4.easeOut})
  .to(companySquare, 0.8, { scaleY: 1, transformOrigin: "0 0%", delay: -1.2, ease: Power4.easeOut })
  ;

var scene4 = new ScrollMagic.Scene({
  triggerElement : ".company",
  offset: 200,
  reverse: false
})
.setTween(companyTl)
// .addIndicators()
.addTo(controller);

var faqTl = new TimelineMax({
  delay: 0.2
});

var faqRightHalf = $('.faq-illustration .right-half');
var faqRightBar = $('.faq-illustration .right-bar');
var faqLeftHalf = $('.faq-illustration .left-half');
var faqLeftBar = $('.faq-illustration .left-bar');

faqTl
  .from(faqLeftHalf, 1, { scale: 0, transformOrigin: "50% 50%", rotation: "180", ease: Power4.easeOut })
  .from(faqRightHalf, 1, { scale: 0, transformOrigin: "50% 50%", delay: -1, rotation: "-180", ease: Power4.easeOut, })
  .from(faqRightBar, 1, { scale: 0, transformOrigin: "50% 50%", delay: -1, ease: Power4.easeOut })
  .from(faqLeftBar, 1, { scale: 0, transformOrigin: "50% 50%", delay: -1, ease: Power4.easeOut })
  .to(faqRightBar, 0.8, { scaleY: 0.5, ease: Power4.easeOut, transformOrigin: "bottom center" })
  .to(faqLeftBar, 0.8, { scaleY: 0.5, delay: -0.8, ease: Power4.easeOut, transformOrigin: "bottom center" })
  .to(faqRightHalf, 1, { y: "67", ease: Power4.easeIn, delay: -1 })
  .to(faqLeftHalf, 1, { y: "99", ease: Power4.easeIn, delay: -0.8 })
  .to(faqRightBar, 0.8, { scaleY: 1, ease: Power4.easeOut })
  .to(faqRightHalf, 1.2, { y: "-150", rotation: "180", delay: -0.8, ease: Power4.easeOut, transformOrigin: "left center", x: "0" })
  .to(faqLeftBar, 0.8, { scaleY: 1, delay: -1, ease: Power4.easeOut })
  .to(faqLeftHalf, 1.2, { y: "-150", rotation: "-90", delay:-1, ease: Power4.easeOut, transformOrigin: "left center", x: "50%" })
  .to(faqRightHalf, 1, { y: "67", delay: -1, ease: Bounce.easeOut })
  .to(faqLeftHalf, 1, { y: "132", delay: -1, ease: Bounce.easeOut })
  .to(faqRightBar, 1, { scaleY: 0.5, delay: -1, ease: Power4.easeOut, transformOrigin: "bottom center" })
  .to(faqLeftBar, 1, { scaleY: 0.5, delay: -0.8, ease: Power4.easeOut, transformOrigin: "bottom center" })
  .to(faqRightBar, 1, { scaleY: 1, ease: Power4.easeIn })
  .to(faqRightHalf, 1, { y: "-200", rotation: "0", delay:-0.5, ease: Power4.easeOut, transformOrigin: "left center", x: "0%" })
  .to(faqLeftBar, 0.8, { scaleY: 1, delay: -1, ease: Power4.easeIn })
  .to(faqLeftHalf, 1, { y: "-200", rotation: "0", delay:-0.7, ease: Power4.easeOut, transformOrigin: "left center", x: "0%" })
  .to(faqRightHalf, 1, { y: "0", delay: -0.8, ease: Bounce.easeOut })
  .to(faqLeftHalf, 1, { y: "0", delay: -0.8, ease: Bounce.easeOut })
  ;

var scene5 = new ScrollMagic.Scene({
  triggerElement : ".faq",
  offset: 200,
  reverse: false
})
.setTween(faqTl)
// .addIndicators()
.addTo(controller);

var testimonialTl = new TimelineMax({
  delay: 0.2
});

var testimonialHalfCircle = $('.testimonial-illustration .half-circle');
var testimonialCircle = $('.testimonial-illustration .circle');
var testimonialSquare = $('.testimonial-illustration .square');

testimonialTl
  .from(testimonialCircle, 1, { scale: 0, transformOrigin: "50% 50%", ease: Power4.easeOut })
  .from(testimonialSquare, 1, { scale: 0, transformOrigin: "50% 50%", delay: -1, ease: Power4.easeOut })
  .from(testimonialHalfCircle, 1, { scale: 0, transformOrigin: "50% 50%", rotation: "-180", delay: -1, ease: Power4.easeOut })
  .to(testimonialSquare, 0.5, { scaleY: 0.5, ease: Power4.easeOut, transformOrigin: "bottom center" })
  .to(testimonialCircle, 0.5, { y: "72px", rotation: "-135", delay: -.5, ease: Bounce.easeOut })
  .to(testimonialHalfCircle, 0.5, { y: "135px", rotation: "90", x: "-37%", delay: -.5, ease: Bounce.easeOut })
  .to(testimonialSquare, 1, { scaleY: 1, ease: Power4.easeIn, transformOrigin: "bottom center" })
  .to(testimonialCircle, 1, { y: "-72px", rotation: "-135", delay: -1, ease: Power4.easeIn })
  .to(testimonialHalfCircle, 1, { y: "-205px", rotation: "0", x: "0%", delay: -1, ease: Power4.easeIn })
  .to(testimonialCircle, 1, { y: "0", rotation: "0", ease: Bounce.easeOut })
  .to(testimonialHalfCircle, 1, { y: "0", ease: Bounce.easeOut, delay: -1 })
  ;

var scene6 = new ScrollMagic.Scene({
  triggerElement : ".testimonial",
  offset: 200,
  reverse: false
})
.setTween(testimonialTl)
// .addIndicators()
.addTo(controller);


$(window).on('scroll', function () {
  var windscroll = $(window).scrollTop();
  if (windscroll >= 100) {
    $('.main-nav').addClass('nav-bg');
  } else {
    $('.main-nav').removeClass('nav-bg');
  }
});