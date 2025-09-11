import Swiper from 'swiper';
import 'swiper/css/bundle';

const storyLeftArrow = document.getElementById('storyLeftArrow');
const storyRightArrow = document.getElementById('storyRightArrow');

let storySwiper;

storySwiper = new Swiper('.story-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 60,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1440: {
      slidesPerView: 3,
      grabCursor: false,
      allowTouchMove: false,
      spaceBetween: 0,
    },
  },
  on: {
    init: () => {
      document.querySelector('.story-swiper-container').classList.add('show');
    },
    slideChange: function () {
      updateStoryArrows(this);
    },
  },
});

updateStoryArrows(storySwiper);

function updateStoryArrows(swiper) {
  storyLeftArrow.disabled = swiper.isBeginning;
  storyRightArrow.disabled = swiper.isEnd;
}

storyLeftArrow.addEventListener('click', () => {
  storySwiper.slidePrev();
});

storyRightArrow.addEventListener('click', () => {
  storySwiper.slideNext();
});
const storyBtns = document.querySelectorAll('.story-slide-top-text-btn');
storyBtns.forEach(btn => btn.addEventListener('click', onBtnClick));

function onBtnClick(e) {
  const storyTop = e.currentTarget;
  const storyContainer = storyTop.closest('.story-list-item');
  const bottomText = storyContainer.querySelector(
    '.story-slide-bottom-wrapper'
  );

  document.querySelectorAll('.story-list-item').forEach(item => {
    if (item !== storyContainer) {
      item.classList.remove('story-open');
      item
        .querySelector('.story-slide-bottom-wrapper')
        .classList.remove('is-visible');
    }
  });

  bottomText.classList.toggle('is-visible');

  if (bottomText.classList.contains('is-visible')) {
    storyContainer.classList.add('story-open');
  } else {
    storyContainer.classList.remove('story-open');
  }
}
