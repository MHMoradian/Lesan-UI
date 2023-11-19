const slider = function () {
    const slides = document.querySelectorAll('.slide');
    const dotContainer = document.querySelector('.dots');
  
    let currentSlide = 0;
    const maxSlide = slides.length;
  
    // Next slide
    const createDots = function () {
      slides.forEach((_, i) => {
        const html = `<button class="dots__dot" data-slide="${i}"></button>`;
        dotContainer.insertAdjacentHTML('beforeend', html);
      });
    };
  
    const activateDot = function (slide) {
      document
        .querySelectorAll('.dots__dot')
        .forEach(dot => dot.classList.remove('dots__dot--active'));
  
      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add('dots__dot--active');
    };
  
    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };
  
    const nextSlide = function () {
      if (currentSlide === maxSlide - 1) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }
  
      goToSlide(currentSlide);
      activateDot(currentSlide);
    };
  
    const prevSlide = function () {
      if (currentSlide === 0) {
        currentSlide = maxSlide - 1;
      } else {
        currentSlide--;
      }
      goToSlide(currentSlide);
      activateDot(currentSlide);
    };
  
    const init = function () {
      goToSlide(0);
      createDots();
      activateDot(0);
    };
    init();
  
  
    document.addEventListener('keydown', function (e) {
      // console.log(e);
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    });
  
    // making dots work
    dotContainer.addEventListener('click', function (e) {
      if (e.target.classList.contains('dots__dot')) {
        const slide = e.target.dataset.slide;
        goToSlide(slide);
        activateDot(slide);
      }
    });
  };
  slider();