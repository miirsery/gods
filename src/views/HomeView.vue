<template>
  <div class="home">
    <div class="home__wrapper container">
      <div class="home__content" v-if="!isSlider">
        <div class="home__left">
          <div class="home__title">13 богов <br> Скандинавской мифологии</div>
          <p class="home__text">Вначале были только леса и пустыни. Эзиры очищали места для проживания, как для себя, так и для людей. Они назвали дом человека Мидгардом, потому что он расположен посредине мира. И в середине Вселенной боги построили себе место – Асгард, чтобы люди не чувствовали себя одинокими и покинутыми.</p>
          <button class="home__button" @click="handleStep"><span>На следующий шаг</span></button>
        </div>
        <div
            v-if="winnerWidth >= 550"
            class="home__right"
        >
          <img src="../assets/images/horse.jpg" alt="horse">
        </div>
      </div>
      <slider @returnToHome="handleStep" v-else />
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import Slider from '@/components/Slider'
const isSlider = ref(false)
const winnerWidth = ref(window.innerWidth)

const handleStep = () => {
  isSlider.value = !isSlider.value
}

onMounted(() => {
  window.addEventListener('resize', () => {
    winnerWidth.value = window.innerWidth
  })
})
</script>

<style lang="scss">
.home {
  height: 100vh;

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  &__content {
    display: flex;
    align-content: center;
    justify-content: space-between;
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 15px;
    width: 100%;
  }

  &__left {
    max-width: 710px;

    @media screen and (max-width: 500px) {
      font-size: clamp(14px, 4vw, 18px);
      max-width: 90%;
    }
  }

  &__title {
    margin-bottom: 35px;
    font-weight: 600;
    font-size: 48px;
    line-height: 130%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #FEFEFE;

    @media screen and (max-width: 500px) {
      font-size: clamp(18px, 4vw, 36px);
    }
  }

  &__text {
    font-size: 24px;
    line-height: 130%;
    letter-spacing: 0.05em;
    color: #FEFEFE;
    margin-bottom: 55px;

    @media screen and (max-width: 500px) {
      font-size: clamp(14px, 4vw, 18px);
      max-width: 90%;
    }
  }

  &__button {
    cursor: pointer;
    font-weight: 700;
    font-size: 26px;
    line-height: 130%;
    letter-spacing: 0.05em;
    color: #FEFEFE;
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 467px;
    height: 100px;
    justify-content: space-around;
    align-items: center;
    align-content: center;

    @media screen and (max-width: 500px) {
      font-size: clamp(14px, 4vw, 18px);
      width: 200px;
    }

    span {
      display: inline-block;
      left: -10px;
      position: relative;

      @media screen and (max-width: 500px) {
        left: -6px;
        bottom: 28px;
      }
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      width: 96%;
      height: 99%;
      bottom: 0;
      background: center/ cover no-repeat url('../assets/images/frame.svg');

      @media screen and (max-width: 500px) {
        width: 200px;
        height: 44px;
      }
    }
  }

  &__right {
    max-width: 590px;
    max-height: 650px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
