export const slider = function () {
    const slides = document.querySelectorAll(`.review__slider--slide`);
    const btnLeft = document.querySelector(`.slider-left`);
    const btnRight = document.querySelector(`.slider-right`);
    const squares = document.querySelectorAll(".square");
  
    let curSlide = 0;
    const maxSlide = slides.length;
  
    //functions
  
    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}vw)`)
      );
  
      updateSquares(slide);
    };
  
  
  
    const updateSquares = function (slide) {
      squares.forEach((square, i) => {
          if (i === slide) {
              square.classList.add('active-square');
          } else {
              square.classList.remove('active-square');
          }
      });
  }
  
  
    //Next Slide
  
    const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }
      goToSlide(curSlide);
    };
    
    // Previous Slide
  
    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(0);
    };
    const init = function () {
      goToSlide(0);
    };
  
    init();
  
    //Event handlers
  
    btnRight.addEventListener(`click`, nextSlide);
    btnLeft.addEventListener(`click`, prevSlide);
  
    document.addEventListener(`keydown`, function (e) {
      if (e.key === `ArrowLeft`) prevSlide();
      e.key === `ArrowRight` && nextSlide();
    });
  };