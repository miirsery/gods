<template>
  <div class="result-view">
    <div class="result-view">
      <div class="h-50 d-flex fd-column ai-center border-bottom pb-resp-80" v-if="$store.state.isPassedTest">
        <div class="result-view__container w-100 ta-center">
            <div class="result-view__title mt-resp-80">
              Результаты опроса
            </div>
            <div class="result-view__total">
              <span>{{$store.state.numberOfCorrectAnswers}}</span> | {{$store.state.totalCountQuestions}}
            </div>
            <div class="result-view__congratulations">
              Поздравляю! <br> Вы прошли курс о Богах скандинавской мифологии <br> Ваш рейтинг: <span>{{position[$store.state.numberOfCorrectAnswers]}}</span>
            </div>
          </div>
        </div>
      <div v-else class="result-view__error">
        <h1 class="result-view__title">Вы ещё не прошли тест &#128579;</h1>
      </div>
      <div class="h-50 d-flex fd-column ai-center ta-center mt-resp-80 ">
        <div class="result-view__container w-100">
          <div class="result-view__title">
            Над проектом работали:
          </div>
          <div
              class="d-flex ai-center jc-between w-100"
              :class="winnerWidth <= 500 ? 'fd-column' : ''"
          >
            <div class="d-flex fd-column ai-center ta-center"
             :class="winnerWidth <= 500 ? 'pb-12 bb-1 mb-12' : ''"
            >
              <div class="result-view__member-name">
                Андрей Падерин
              </div>
              <div class="d-flex ai-center">
                <a class="result-view__social" href="https://vk.com/s1vemod" target="_blank">
                  <img src="../assets/icons/vk.svg" alt="image">
                </a>
                <a class="result-view__social" href="https://t.me/s1veme" target="_blank">
                  <img src="../assets/icons/telegram.svg" alt="image">
                </a>
                <a class="result-view__social" href="https://github.com/s1veme/" target="_blank">
                  <img src="../assets/icons/github.svg" alt="image">
                </a>
              </div>
            </div>
            <div class="d-flex fd-column ai-center ta-center"
             :class="winnerWidth <= 500 ? 'pb-12 bb-1 mb-12' : ''"
            >
              <p class="result-view__member-name">
                Александр Малеев
              </p>
              <div class="d-flex ai-center">
                <a class="result-view__social" href="https://vk.com/id548065126" target="_blank">
                  <img src="../assets/icons/vk.svg" alt="image">
                </a>
              </div>
            </div>
            <div class="d-flex fd-column ai-center ta-center"
             :class="winnerWidth <= 500 ? 'pb-12 bb-1 mb-12' : ''"
            >
              <p class="result-view__member-name">
                Дмитрий Матюхин
              </p>
              <div class="d-flex ai-center">
                <a class="result-view__social" href="https://vk.com/dddead_inssside" target="_blank">
                  <img src="../assets/icons/vk.svg" alt="image">
                </a>
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
        8: "Вы Один - всеотец. Легенды не лгали, перед нами настоящий мудрец",
        7: "Вы Тор - бог грома. Почесть надо заслужить, за отличное прохождение теста, вы заслужили её",
        6: "Вы Тюр - бог войны. Решать исход битв у вас получается куда лучше, чем проходить тесты",
        5: "Вы Вали - бог мести. Только не мстите нам за тест, он не такой уж и трудный",
        4: "Вы Фригга - королева Асгарда. Вы и вправду обладаете силой пророчества, вы же как-то набрали половину баллов",
        3: "Вы Фрейр - бог плодородия. Солнце всегда светит над вами, но с тестом вы справились посредственно",
        2: "Вы Ньерд - бог моря. Видимо, кроме моряков вам никто и ничто не нужно",
        1: "Вы Форсети - бог справедливости. О вас мало, что известно, но вы существуете",
        0: "Это фиаско...",
      },
      winnerWidth: window.innerWidth
    }
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
    display: block;
    width: 30px;
    height: 30px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
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
