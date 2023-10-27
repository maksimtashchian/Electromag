/* БУРГЕР МЕНЮ, на телефоне, позволяет открыть меню */
document
  .querySelector(".header__burger")
  .addEventListener("click", function () {
    document.querySelector(".header__burger").classList.toggle("active");
    document.querySelector(".header__burger-block").classList.toggle("active");
    document.querySelector("body").classList.toggle("lock");
  });

/* Слайдер, позволяет перелистывать изображения swiper js */
new Swiper(".projects__slider", {
  slidesPerView: 5,
  slidesPerColumn: 1,
  loop: true,
  spaceBetween: 30,
  slidesPerColumnFill: "row",
  speed: 1500,
  autoplay: true,
  autoplay: {
    enabled: true,
    delay: 1,
  },
  breakpoints: {
    1100: {
      slidesPerView: 5,
      slidesPerColumn: 1,
    },
    960: {
      slidesPerView: 4,
      slidesPerColumn: 1,
    },
    767: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
    200: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },
  },
});

/* Находим все кнопки с классом btn popup и вешаем с помощью for
 на каждую кнопку событие, при котром открывается загрузка а затем попап */
const btnPop = document.querySelectorAll(".btn-popup");
for (let i = 0; i < btnPop.length; i++) {
  btnPop[i].addEventListener("click", () => {
    document.querySelector(".loader__block").classList.add("active");
    setTimeout(() => {
      document.querySelector(".popup").classList.add("active");
    }, 1000);
  });
}
/* Закрываем поп-ап а затем загрузку */
document.querySelector(".popup__close").addEventListener("click", () => {
  document.querySelector(".popup").classList.remove("active");
  setTimeout(() => {
    document.querySelector(".loader__block").classList.remove("active");
  }, 1000);
});

/* Код анимаций взял с интернета */
const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}

/* Кнопка которая октрывает список картинок */

document.querySelector(".team__btn").addEventListener("click", () => {
  document.querySelector(".team__show-items").classList.add("active");
  document.querySelector(".team__btn").classList.add("active");
});
