<template>
  <div class="questions">
    <quest @choiceAnswerHandler="choiceAnswerHandler" :dataQuestion="questions[currentSlide]" :countQuestions="questions.length"/>
    <button v-if="currentSlide + 1 === questions.length" class="questions__button" @click="handlerResults">
      <router-link style="color: #FFFFFF;" to="/results">Сдать работу</router-link>
    </button>
    <button v-else class="questions__button" @click="handleToggleSlide">Продолжить</button>
  </div>
</template>

<script>
import {defineAsyncComponent, defineComponent, reactive, ref} from "vue";
import { useStore } from 'vuex'

export default defineComponent({
  components: {
    quest: defineAsyncComponent(() => import(`@/components/questions/Quest.vue`)),
  },

  setup() {
    const questions = [
      {
        id: 1,
        title: 'Как звали самого почитаемого Бога?',
        asks: [
          {
            id: 1,
            value: 'Тор',
            correct: true,
          },
          {
            id: 2,
            value: 'Один',
            correct: false,
          },
          {
            id: 3,
            value: 'Хеймдалль',
            correct: false,
          },
          {
            id: 4,
            value: 'Видар',
            correct: false,
          }
        ]
      },
      {
        id: 2,
        title: 'Кого изображают, как странника и мудреца?',
        asks: [
          {
            id: 1,
            value: 'Вали',
            correct: false,
          },
          {
            id: 2,
            value: 'Бальдар',
            correct: false,
          },
          {
            id: 3,
            value: 'Тюр',
            correct: false,
          },
          {
            id: 4,
            value: 'Один',
            correct: true,
          }
        ]
      },
      {
        id: 3,
        title: 'Как называлась дорога в небесное царство, хранителем которой является Хеймдалль?',
        asks: [
          {
            id: 1,
            value: 'Пфубист',
            correct: false,
          },
          {
            id: 2,
            value: 'Биврест',
            correct: true,
          },
          {
            id: 3,
            value: 'Кенгхен',
            correct: false,
          },
          {
            id: 4,
            value: 'Лгеност',
            correct: false,
          }
        ]
      },
      {
        id: 4,
        title: 'Посейдон или же аквамен, только в скандинавии...',
        asks: [
          {
            id: 1,
            value: 'Фригга',
            correct: false,
          },
          {
            id: 2,
            value: 'Фрейр',
            correct: false,
          },
          {
            id: 3,
            value: 'Ньерд',
            correct: true,
          },
          {
            id: 4,
            value: 'Браги',
            correct: false,
          }
        ]
      },
      {
        id: 5,
        title: 'Королева Асгарда и просто красивая женщина...',
        asks: [
          {
            id: 1,
            value: 'Фемида',
            correct: false,
          },
          {
            id: 2,
            value: 'Артемида',
            correct: false,
          },
          {
            id: 3,
            value: 'Фригга',
            correct: true,
          },
          {
            id: 4,
            value: 'Афина',
            correct: false,
          }
        ]
      },
      {
        id: 6,
        title: 'Кто так любил лыжи и стрелять из лука?',
        asks: [
          {
            id: 1,
            value: 'Улль',
            correct: true,
          },
          {
            id: 2,
            value: 'Один',
            correct: false,
          },
          {
            id: 3,
            value: 'Ньерд',
            correct: false,
          },
          {
            id: 4,
            value: 'Фригга',
            correct: false,
          }
        ]
      },
      {
        id: 7,
        title: 'Назовите имена двух сыновей Одина, матерями которым являлись разные великанши.',
        asks: [
          {
            id: 1,
            value: 'Ньерд и Браги',
            correct: false,
          },
          {
            id: 2,
            value: 'Фрейр  и Бальдар',
            correct: false,
          },
          {
            id: 3,
            value: 'Тор и Тюр',
            correct: false,
          },
          {
            id: 4,
            value: 'Вали и Видар',
            correct: true,
          }
        ]
      },
      {
        id: 8,
        title: 'Бог войны и судьбоносец всех войнов...',
        asks: [
          {
            id: 1,
            value: 'Тор',
            correct: false,
          },
          {
            id: 2,
            value: 'Тюр',
            correct: true,
          },
          {
            id: 3,
            value: 'Вали',
            correct: false,
          },
          {
            id: 4,
            value: 'Один',
            correct: false,
          }
        ]
      },
    ]
    const store = useStore()

    const currentSlide = ref(0)
    const currentSlideData = questions[currentSlide]
    let choiceAnswer = null
    let numberOfCorrectAnswers = 0
    let isCorrectAnswers = false

    const handleToggleSlide = () => {
      if (choiceAnswer) {
        if (currentSlide + 1 !== questions.length) {
            currentSlide.value++
        }
        if (isCorrectAnswers){
          numberOfCorrectAnswers += 1
        }
        choiceAnswer = null
      }
    }

    const choiceAnswerHandler = function(answer){
      if (answer === choiceAnswer) {
        return null
      }

      choiceAnswer = answer
      for (let i = 0; questions[currentSlide.value].asks.length > i; i++) {
        if (questions[currentSlide.value]['asks'][i].id === answer) {
          isCorrectAnswers = !!questions[currentSlide.value]['asks'][i].correct
        }
      }
    }

    const handlerResults = () => {
      if (isCorrectAnswers && choiceAnswer){
        console.log('HELLo')
        numberOfCorrectAnswers += 1
      }

      store.commit('SET_NUMBER_OF_CORRECT_ANSWERS', numberOfCorrectAnswers)
      store.commit('SET_IS_PASSED_TEST', true)
      store.commit('SET_TOTAL_COUNT_QUESTIONS', questions.length)
    }

    return {
      questions,
      currentSlide,
      currentSlideData,
      choiceAnswerHandler,
      handleToggleSlide,
      handlerResults
    }
  }
})

</script>
<style scoped lang="scss">
.questions {
  height: 100%;
  &__button {
    position: absolute;
    bottom: 2%;
    left: 50%;
    width: 450px;
    height: 85px;
    border-radius: 24px;
    font-size: 24px;
    line-height: 130%;
    letter-spacing: 0.05em;
    color: #FEFEFE;
    text-align: center;
    background: #BB6BD9;
    transform: translateX(-50%);

    @media screen and (max-width: 500px) {
      width: 250px;
      height: 55px;
    }
  }
}
</style>
