<template>
  <div class="slider">
    <div class="slider__content container">
      <swiper
          :slidesPerView="1"
          :spaceBetween="40"
          :loopFillGroupWithBlank="true"
          :pagination="{
            el: '.main-slider__fractions',
            type: 'custom',
            renderCustom: renderFraction
            }"
          :navigation="{
          nextEl: '.main-slider__arrow-next',
          prevEl: '.main-slider__arrow-prev'
        }"
          class="main-slider swiper"
      >

        <swiper-slide class="main-slider__slide d-flex ai-center jc-between">
          <div class="main-slider__slide-info">
            <div class="main-slider__slide-text-italic">
              Один Всеотец - <br> правитель Асгарда.
            </div>
            <div class="main-slider__slide-title">
            <span>
              Óðinn
            </span>
              <br>
              Один является королем Эзиров, но Тор, пожалуй, самый почитаемый. Есть много интересных историй о приключениях Тора, в то время как Один в основном изображается как странник в поисках мудрости и знаний.
            </div>
          </div>
          <div class="main-slider__slide-video-small">
            <img src="../assets/images/goods/odin.png" alt="strong mugik">
          </div>
        </swiper-slide>

        <swiper-slide class="main-slider__slide d-flex ai-center jc-between">
          <div class="main-slider__slide-info">
            <div class="main-slider__slide-text-italic">
              Тор - <br> младший сын Одина.
            </div>
            <div class="main-slider__slide-title">
            <span>
              Þórr
            </span>
              <br>
              Тор - младший сын Одина и второй самый могущественный бог. Он бог грома, хозяин погоды и самый сильный воин.
            </div>
          </div>
          <div class="main-slider__slide-video-small">
            <img src="../assets/images/goods/tor.png" alt="strong mugik">
          </div>
        </swiper-slide>

        <swiper-slide class="main-slider__slide d-flex ai-center jc-between">
          <div class="main-slider__slide-info">
            <div class="main-slider__slide-text-italic">
              Бальдар - <br> бог, который ассоциируется со светом.
            </div>
            <div class="main-slider__slide-title">
            <span>
              Baldr
            </span>
              <br>
              Бальдар – бог, который ассоциируется со светом, красотой, любовью и счастьем.
            </div>
          </div>
          <div class="main-slider__slide-video-small">
            <img src="../assets/images/goods/baldar.png" alt="strong mugik">
          </div>
        </swiper-slide>

        <swiper-slide class="main-slider__slide d-flex ai-center jc-between">
          <div class="main-slider__slide-info">
            <div class="main-slider__slide-text-italic">
              Видар - <br> сын Одина.
            </div>
            <div class="main-slider__slide-title">
            <span>
              Víðarr
            </span>
              <br>
              Видар - сын Одина и великанши Грид, бог мщения и безмолвия.
            </div>
          </div>
          <div class="main-slider__slide-video-small">
            <img src="../assets/images/goods/vidar.png" alt="strong mugik">
          </div>
        </swiper-slide>

        <swiper-slide class="main-slider__slide d-flex ai-center jc-between">
          <div class="main-slider__slide-info">
            <div class="main-slider__slide-text-italic">
              Вали - <br> сын Одина.
            </div>
            <div class="main-slider__slide-title">
            <span>
              Váli
            </span>
              <br>
              Вали – сын Одина и великанши Ринд, бог мести. Еще будучи ребенком он в возрасте одного дня отомстил Хёду за убийство Бальдра.
            </div>
          </div>
          <div class="main-slider__slide-video-small">
            <img src="../assets/images/goods/vali.png" alt="strong mugik">
          </div>
        </swiper-slide>

        <swiper-slide class="main-slider__slide d-flex ai-center jc-between">
          <div class="main-slider__slide-info">
            <div class="main-slider__slide-text-italic">
              Браги - <br> бог-скальд.
            </div>
            <div class="main-slider__slide-title">
            <span>
              Brage
            </span>
              <br>
              Браги – бог-скальд, очень мудрый и красноречивый, является богом поэзии и прозы.
            </div>
          </div>
          <div class="main-slider__slide-video-small">
            <img src="../assets/images/goods/bragi.png" alt="strong mugik">
          </div>
        </swiper-slide>

        <swiper-slide class="main-slider__slide d-flex ai-center jc-between">
          <div class="main-slider__slide-info">
            <div class="main-slider__slide-text-italic">
              Хеймдалль - <br> хранитель Биврёста.
            </div>
            <div class="main-slider__slide-title">
            <span>
              Heimdallr
            </span>
              <br>
              Хеймдалль - является хранителем Биврёста, который является главной дорогой в небесное царство.
            </div>
          </div>
          <div class="main-slider__slide-video-small">
            <img src="../assets/images/video-2.jpg" alt="strong mugik">
          </div>
        </swiper-slide>

        <swiper-slide class="main-slider__slide d-flex ai-center jc-between">
          <div class="main-slider__slide-info">
            <div class="main-slider__slide-text-italic">
              Тюр - <br> бог войны.
            </div>
            <div class="main-slider__slide-title">
            <span>
              Tyr
            </span>
              <br>
              Тюр - бог войны и только он решает, кто победит в битвах.
            </div>
          </div>
          <div class="main-slider__slide-video-small">
            <img src="../assets/images/goods/tur.jpg" alt="strong mugik">
          </div>
        </swiper-slide>

        <swiper-slide class="main-slider__slide d-flex ai-center jc-between">
          <div class="main-slider__slide-info">
            <div class="main-slider__slide-text-italic">
              Ньёрд
            </div>
            <div class="main-slider__slide-title">
            <span>
              Njorðr
            </span>
              <br>
              Ньёрд - бог моря и моряков.
            </div>
          </div>
          <div class="main-slider__slide-video-small">
            <img src="../assets/images/goods/nyrd.png" alt="strong mugik">
          </div>
        </swiper-slide>

        <swiper-slide class="main-slider__slide d-flex ai-center jc-between">
          <div class="main-slider__slide-info">
            <div class="main-slider__slide-text-italic">
              Фрейр - <br> бог плодородия.
            </div>
            <div class="main-slider__slide-title">
            <span>
              Freyr
            </span>
              <br>
              Фрейр - бог плодородия. Фрей ассоциируется с мужественностью и процветанием, с солнечным светом и хорошей погодой.
            </div>
          </div>
          <div class="main-slider__slide-video-small">
            <img src="../assets/images/goods/freir.png" alt="strong mugik">
          </div>
        </swiper-slide>

        <swiper-slide class="main-slider__slide d-flex ai-center jc-between">
          <div class="main-slider__slide-info">
            <div class="main-slider__slide-text-italic">
              Улль - <br> сын Сив и пасынок Тора.
            </div>
            <div class="main-slider__slide-title">
            <span>
              Ullr
            </span>
              <br>
              Улль - сын Сив и пасынок Тора. «Улль» означает «почетный», и он был лучшим из всех лучников и лыжников..
            </div>
          </div>
          <div class="main-slider__slide-video-small">
            <img src="../assets/images/goods/yll.jpg" alt="strong mugik">
          </div>
        </swiper-slide>

        <swiper-slide class="main-slider__slide d-flex ai-center jc-between">
          <div class="main-slider__slide-info">
            <div class="main-slider__slide-text-italic">
              Форсети
            </div>
            <div class="main-slider__slide-title">
            <span>
              Forseti
            </span>
              <br>
              Форсети - бог справедливости.
            </div>
          </div>
          <div class="main-slider__slide-video-small">
            <img src="../assets/images/goods/forsety.png" alt="strong mugik">
          </div>
        </swiper-slide>

        <swiper-slide class="main-slider__slide d-flex ai-center jc-between">
          <div class="main-slider__slide-info">
            <div class="main-slider__slide-text-italic">
              Фригг - <br> жена Одина.
            </div>
            <div class="main-slider__slide-title">
            <span>
              Frigga
            </span>
              <br>
              Фригг - жена Одина, чрезвычайно красивая, самая главная из богинь и королева Асгарда. Богиня любви и судьбы, описываемая как имеющая силу пророчества, но она не раскрывает того, что она знает.
            </div>
          </div>
          <div class="main-slider__slide-video-small">
            <img src="../assets/images/goods/frigg.png" alt="strong mugik">
          </div>
        </swiper-slide>
      </swiper>
      <div class="main-slider__arrows">
        <router-link to="/questions" class="main-slider__questions" v-show="currentSlide === lastSlide">К викторине</router-link>
        <div class="main-slider__arrow-next" v-show="currentSlide !== lastSlide"><span>Далее</span></div>
        <div class="main-slider__arrow-prev" v-show="currentSlide !== 1"><span>Назад</span></div>
        <button
            v-show="currentSlide === 1"
            class="main-slider__arrow-prev"
            type="button"
            @click="handleReturnToHome"
        >
          <span>
            Назад
          </span>
        </button>
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
import {ref} from "vue";

SwiperCore.use([Pagination, Navigation]);
const lastSlide = ref(null)
const currentSlide = ref(null)

const emit = defineEmits([
  'returnToHome'
])

const handleReturnToHome = () => {
  emit('returnToHome')
}

const renderFraction = (swiper, current, total) => {
  lastSlide.value = total
  currentSlide.value = current
  return `<span>${current}</span>` + '|' + `<span>${(total)}</span>`
}

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
  &__return {
    right: 20%;
    position: absolute;
    bottom: 2.7%;
    z-index: 10;
    cursor: pointer;
    font-weight: 400;
    display: inline-block;
    font-size: 20px;
    line-height: 130%;
    letter-spacing: 0.05em;
    color: #FEFEFE;
  }

  .swiper-wrapper {
    padding: 0 30px;
  }

  &__questions {
    cursor: pointer;
    font-weight: 400;
    display: inline-block;
    position: absolute;
    font-size: 20px;
    line-height: 130%;
    letter-spacing: 0.05em;
    color: #FEFEFE;
    right: 5%;
    bottom: 2.6%;
    z-index: 10;
  }

  &__slide {
    width: 100%;
    height: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding: 0 90px;

    &-text {
      font-size: 40px;
      line-height: 130%;
      letter-spacing: 0.05em;
      color: #FFFFFF;
      margin-bottom: 20px;

      &-italic {
        font-style: italic;
        font-weight: 300;
        font-size: 48px;
        line-height: 130%;
        letter-spacing: 0.05em;
        color: #FFFFFF;
        margin-bottom: 50px;
      }
    }

    &-title {
      font-size: 24px;
      line-height: 31.2px;
      letter-spacing: 0.05em;
      color: #FEFEFE;

      span {
        font-weight: 600;
        font-size: 24px;
        line-height: 130%;
      }
    }

    &-info {
      max-width: 50%;
    }

    &-video {
      max-width: 954px;
      height: 650px;

      @media screen and (max-height: 840px) {
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
      @media screen and (max-height: 670px) {
        height: 400px;
      }

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
    right: 20%;
    position: absolute;
    bottom: 2%;

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
    bottom: 2%;
    right: 5%;

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
.frigga {
  height: 100%;
  overflow-y: auto;
  &__wrapper {
    position: relative;
    max-width: 70%;
    margin: 0 auto;

    @media screen and (max-height: 840px) {
      max-width: 56%;
    }

    @media screen and (max-height: 840px) and (max-width: 1440px){
      max-width: 56%;
    }

    @media screen and  (max-width: 1366px){
      max-width: 65%;
    }

  }

  &__title {
    margin-top: 60px;
    text-align: center;
    margin-bottom: 45px;
  }

  &__slide {
    height: 400px;
    @media screen and (max-height: 840px) {
      height: 300px;
    }
    img {
      height: 100%;
      object-fit: cover;
      border-radius: 38px;
    }
  }

  &-arrow-prev {
    position: absolute;
    top: 39%;
    left: -5%;
    z-index: 10;
    cursor: pointer;
    transform: rotate(180deg) translateY(-50%);
  }

  &-arrow-next {
    position: absolute;
    top: 46%;
    right: -5%;
    cursor: pointer;
    z-index: 10;
    transform: translateY(-50%);
  }
}

.frigga-text {
  font-weight: 400;
  font-size: 28px;
  line-height: 130%;
  text-align: center;
  letter-spacing: 0.05em;
  color: #FFFFFF;
}


.odin {
  &__menu {
    margin-top: 35px;
  }

  &__item {
    position: relative;
    padding-left: 30px;

    &::before {
      content: '';
      position: absolute;
      width: 12px;
      height: 12px;
      background-color: #fff;
      border-radius: 50%;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
}
</style>
