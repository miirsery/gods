<template>
  <div class="slider">
    <div class="slider__content container">
      <swiper
          :slidesPerView="1"
          :loopFillGroupWithBlank="true"
          :pagination="{
            el: '.main-slider__fractions',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
              return `<span>${current}</span>` + '|' + `<span>${(total)}</span>`
             }
            }"
          :navigation="{
          nextEl: '.main-slider__arrow-next',
          prevEl: '.main-slider__arrow-prev'
        }"
          class="main-slider swiper"
      >
        <swiper-slide class="main-slider__slide fd-column">
          <div class="main-slider__slide-text">Название бога</div>
          <div class="main-slider__slide-video">
          <span>
            Video
          </span>
            <img src="../assets/images/slide-1.jpg" alt="mugik">
          </div>
        </swiper-slide>
        <swiper-slide class="main-slider__slide d-flex ai-center jc-between">
          <div class="main-slider__slide-info">
            <div class="swiper-slider__slide-text-italic">
              Один Всеотец - <br> правитель Асгарда.
            </div>
            <div class="swiper-slider__slide-title">
            <span>
              Óðinn
            </span>
              <br>
              Один является королем Эзиров, но Тор, пожалуй, самый почитаемый. Есть много интересных историй  о приключениях Тора, в то время как Один в основном изображается как странник в поисках мудрости и знаний.
            </div>
          </div>
          <div class="main-slider__slide-video-small">
            <img src="../assets/images/video-2.jpg" alt="strong mugik">
          </div>
        </swiper-slide>

      </swiper>
      <div class="main-slider__arrows">
        <div class="main-slider__arrow-next"><span>Далее</span></div>
        <div class="main-slider__arrow-prev"><span>Назад</span></div>
      </div>
      <div class="main-slider__fractions"></div>
    </div>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);
</script>
<style lang="scss">
.slider {
  height: 100%;

  &__content {
    position: relative;
    height: 100%;
  }

  .swiper-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding-bottom: 60px;
  }
}
.main-slider {
  &__slide {
    width: 100%;
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;

    &-text {
      font-size: 40px;
      line-height: 130%;
      letter-spacing: 0.05em;
      color: #FFFFFF;
      margin-bottom: 40px;
    }

    &-video {
      max-width: 954px;
      height: 650px;

      @media screen and (max-height: 670px) {
        height: 400px;
      }

      span {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
      }

      img {
        width: 100%;
        height: 100%;
        border-radius: 32px;
        object-fit: cover;
      }
    }

    &-video-small {
      img {
        width: 100%;
        height: 100%;
        border-radius: 32px;
        object-fit: cover;
      }
    }
  }

  &__arrow-prev,
  &__arrow-next {
    cursor: pointer;
    position: relative;
    z-index: 999;
    span {
      font-weight: 400;
      display: inline-block;
      position: relative;
      font-size: 20px;
      line-height: 130%;
      letter-spacing: 0.05em;
      color: #FEFEFE;
    }
  }

  &__arrow-prev{
    right: 15%;
    position: absolute;
    bottom: 5%;

    span {
      left: 35px;
      top: -6px;
    }

    &::after {
      content: '';
      position: absolute;
      width: 25px;
      height: 16px;
      left: 0;
      pointer-events: none;
      background: center/ cover no-repeat url('../assets/images/arrow.svg');
      transform: rotate(180deg);
    }
  }

  &__arrow-next {
    position: absolute;
    bottom: 5%;
    right: 0;

    span {
      left: -37px;
      top: -6px;
    }

    &::after {
      content: '';
      position: absolute;
      width: 25px;
      height: 16px;
      right: 0;
      pointer-events: none;
      background: center/ cover no-repeat url('../assets/images/arrow.svg');
    }
  }

  &__fractions {
    position: absolute;
    display: inline-flex;
    justify-content: center;
    left: 50%;
    top: 15px;
    font-size: 24px;
    line-height: 130%;
    letter-spacing: 0.05em;
    color: #FEFEFE;
    transform: translateX(-50%);

    span {
      display: inline-block;

      &:first-child {
        margin-right: 5px;
      }

      &:last-child {
        margin-left: 5px;
      }
    }
  }
}
</style>
