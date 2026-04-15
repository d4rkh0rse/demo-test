const templatefeature = new Swiper('[swiper="st-feature"]', {
  // loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  effect: "fade",
  // autoplay: {
  //   delay: 5000,
  //  disableOnInteraction: false,
  //  },
  navigation: {
    nextEl: '[swiper-next="st-feature"]',
    prevEl: '[swiper-prev="st-feature"]',
  },
  mousewheel: {
    forceToAxis: true,
  },
});

// Slide change class toggle on `.sec_st-feature`
templatefeature.on("slideChange", function () {
  var currentSlideIndex = templatefeature.realIndex;
  var sliderWrap = document.querySelector("[feature-template]");

  if (!sliderWrap) return;

  // Remove old active classes
  sliderWrap.classList.remove(
    "is-active-01",
    "is-active-02",
    "is-active-03",
    "is-active-04",
    "is-active-05"
  );

  // Add new class based on current index
  if (currentSlideIndex === 0) {
    sliderWrap.classList.add("is-active-01");
  } else if (currentSlideIndex === 1) {
    sliderWrap.classList.add("is-active-02");
  } else if (currentSlideIndex === 2) {
    sliderWrap.classList.add("is-active-03");
  } else if (currentSlideIndex === 3) {
    sliderWrap.classList.add("is-active-04");
  } else if (currentSlideIndex === 4) {
    sliderWrap.classList.add("is-active-05");
  }
});

const featureTtiles = document.querySelectorAll("[feature-title]");

featureTtiles.forEach((featureTtile, i) => {
  featureTtile.addEventListener("click", () => {
    templatefeature.slideTo(i); // Jump to that slide
  });
});
