<template>
  <div class="result-view">
    <div class="result-view">
      <div class="h-50 d-flex fd-column ai-center border-bottom pb-resp-80" v-if="$store.state.isPassedTest">
        <div class="result-view__container w-100 ta-center">
            <div class="result-view__title mt-resp-80">
              Результаты опроса
            </div>
            <div class="result-view__total">
              <span>{{result}}%</span> | 100%
            </div>
            <div class="result-view__congratulations">
              Поздравляю! <br> Вы прошли курс о Богах скандинавской мифологии <br> Ваш рейтинг: <span>{{whoAreYou}}</span>
            </div>
          </div>
        </div>
      <div v-else class="result-view__error">
        <h1 class="result-view__title">Вы ещё не прошли тест &#128579;</h1>
      </div>
      <div class="h-50 d-flex fd-column ai-center ta-center mt-resp-80 ">
        <div class="result-view__container w-100">
          <div class="result-view__title">
            Над сайтом работали:
          </div>
          <div
              class="d-flex ai-center jc-between w-100"
              :class="winnerWidth <= 500 ? 'fd-column' : ''"
          >
            <div class="d-flex fd-column ai-center ta-center"
             :class="winnerWidth <= 500 ? 'pb-12 bb-1 mb-12' : ''"
            >
             <p class="result-view__work">Back-end</p>
              <div class="result-view__member-name">
                Андрей Голубев
              </div>
              <div class="d-flex ai-center">
                <div class="result-view__social">
                  <img src="../assets/icons/instagram.svg" alt="image">
                </div>
                <div class="result-view__social">
                  <img src="../assets/icons/telegram.svg" alt="image">
                </div>
                <div class="result-view__social">
                  <img src="../assets/icons/github.svg" alt="image">
                </div>
              </div>
            </div>
            <div class="d-flex fd-column ai-center ta-center"
             :class="winnerWidth <= 500 ? 'pb-12 bb-1 mb-12' : ''"
            >
              <p class="result-view__work">Front-end</p>
              <p class="result-view__member-name">
                Александр Никифоров
              </p>
              <div class="d-flex ai-center">
                <div class="result-view__social">
                  <img src="../assets/icons/instagram.svg" alt="image">
                </div>
                <div class="result-view__social">
                  <img src="../assets/icons/telegram.svg" alt="image">
                </div>
                <div class="result-view__social">
                  <img src="../assets/icons/github.svg" alt="image">
                </div>
              </div>
            </div>
            <div class="d-flex fd-column ai-center ta-center"
             :class="winnerWidth <= 500 ? 'pb-12 bb-1 mb-12' : ''"
            >
              <p class="result-view__work">Designer</p>
              <p class="result-view__member-name">
                Евгений Голуб
              </p>
              <div class="d-flex ai-center">
                <div class="result-view__social">
                  <img src="../assets/icons/instagram.svg" alt="image">
                </div>
                <div class="result-view__social">
                  <img src="../assets/icons/telegram.svg" alt="image">
                </div>
                <div class="result-view__social">
                  <img src="../assets/icons/behance.svg" alt="image">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "results",

  data() {
    return {
      position: {
        100: "vue-разработчик",
        90: "Лучший(-ая)",
        80: "Хорошо",
        70: "Почти хорошо",
        60: "Пойдёт",
        50: "Не очень",
        0: "Ты старался :)"
      },
      winnerWidth: null
    }
  },

  computed: {
    result() {
      return Math.ceil((this.$store.state.numberOfCorrectAnswers / this.$store.state.totalCountQuestions) * 100)
    },
    whoAreYou() {
      return this.position[Math.ceil(this.result / 10) * 10]
    },
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.winnerWidth = window.innerWidth
    })
  }
}
</script>

<style scoped lang="scss">
.result-view {
  position: relative;

  &__container {
    max-width: 1200px;
    margin: 0 auto;
  }

  &__error {
    text-align: center;
    margin-top: 100px;
    margin-bottom: 300px;
  }

  &__title {
    font-weight: 600;
    font-size: 42px;
    line-height: 130%;
    letter-spacing: 0.05em;
    color: #FFFFFF;

    &:first-child {
      margin-bottom: 58px;
    }
    &:last-child {
      margin-bottom: 48px;
    }
  }

  &__total {
    font-family: 'Rubik', sans-serif;
    font-weight: 600;
    font-size: 48px;
    line-height: 130%;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #FEFEFE;
    margin-bottom: 50px;

    span {
      color: #6FCF97;
    }
  }

  &__congratulations {
    font-weight: 700;
    font-size: 26px;
    line-height: 130%;
    text-align: center;
    letter-spacing: 0.05em;
    color: #FEFEFE;

    span {
      color: #6FCF97;
    }
  }

  &__member {
    text-align: center;
    display: flex;

    &-image {
      width: 180px;
      height: 220px;
      margin-bottom: 28px;

      img {
        border-radius: 16px;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &-name {
      font-weight: 700;
      font-size: 26px;
      line-height: 130%;
      letter-spacing: 0.05em;
      color: #F2C94C;
      margin-bottom: 30px;

      @media screen and (max-width: 500px) {
        font-size: 18px;
      }
    }
  }

  &__social {
    &:not(:last-child) {
      margin-right: 36px;
    }
  }

  &__work {
    font-size: 24px;
    line-height: 130%;
    letter-spacing: 0.05em;
    color: #FEFEFE;
    margin-bottom: 25px;

    @media screen and (max-width: 500px) {
      font-size: 18px;
      line-height: 1.1;
    }
  }
}
</style>
