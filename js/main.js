document.addEventListener('DOMContentLoaded', () => {
    // инициализация слайдера
    new ItcSimpleSlider('.itcss', {
      loop: true,
      autoplay: true,
      interval: 5000,
      swipe: false,
    });
  });
  
  //header hover
  (function () {
    const header = document.querySelector(".header");
    window.onscroll = () => {
      if (window.pageYOffset > 50) {
        header.classList.add("header_active");
      } else {
        header.classList.remove("header_active");
      }
    };
  })();
  
  //burger

  
  // Scroll to anchors
  (function () {
    const smoothScroll = function (targetEl, duration) {
      const headerElHeight = document.querySelector(".header").clientHeight;
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top - headerElHeight+3;
      let startPosition = window.pageYOffset;
      let startTime = null;
  
      const ease = function (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };
  
      const animation = function (currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);
    };
  
    const scrollTo = function () {
      const links = document.querySelectorAll(".js-scroll");
      links.forEach((each) => {
        each.addEventListener("click", function () {
          const currentTarget = this.getAttribute("href");
          smoothScroll(currentTarget, 1000);
        });
      });
    };
    scrollTo();
  })();
  