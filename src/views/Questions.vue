<template>
  <div class="questions">
    <quest @choiceAnswerHandler="choiceAnswerHandler" :dataQuestion="questions[currentSlide]" :countQuestions="questions.length"/>
    <button v-if="currentSlide + 1 === questions.length" class="questions__button">
      <router-link style="color: #FFFFFF;" to="/results">Сдать работу</router-link>
    </button>
    <button v-else class="questions__button" @click="handleToggleSlide">Продолжить</button>
  </div>
  {{questions.length}} {{currentSlide}}
</template>

<script>
import {defineAsyncComponent, defineComponent, reactive, ref} from "vue";
export default defineComponent({
  components: {
    quest: defineAsyncComponent(() => import(`@/components/questions/Quest.vue`)),
  },

  setup() {
    const questions = [
      {
        id: 1,
        questionTitle: 'quest',
        title: 'Вопрос1 тут прям тут',
        asks: [
          {
            id: 1,
            value: 'Какой-то ответ 1',
            correct: true,
          },
          {
            id: 2,
            value: 'Какой-то ответ 2!',
            correct: false,
          },
          {
            id: 3,
            value: 'Какой-то ответ 3',
            correct: false,
          },
          {
            id: 4,
            value: 'Какой-то ответ 4',
            correct: false,
          }
        ]
      },
      {
        id: 2,
        questionTitle: 'quest1',
        title: 'Вопрос2 тут прям тут',
        asks: [
          {
            id: 1,
            value: 'Какой-то ответ 1',
            correct: true,
          },
          {
            id: 2,
            value: 'Какой-то ответ 2',
            correct: false,
          },
          {
            id: 3,
            value: 'Какой-то ответ 3',
            correct: false,
          },
          {
            id: 4,
            value: 'Какой-то ответ 4',
            correct: false,
          }
        ]
      },
      {
        id: 3,
        questionTitle: 'quest2',
        title: 'Вопрос3 тут прям тут',
        asks: [
          {
            id: 1,
            value: 'Какой-то ответ 1',
            correct: true,
          },
          {
            id: 2,
            value: 'Какой-то ответ 2',
            correct: false,
          },
          {
            id: 3,
            value: 'Какой-то ответ 3',
            correct: false,
          },
          {
            id: 4,
            value: 'Какой-то ответ 4',
            correct: false,
          }
        ]
      }
    ]

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
          if (questions[currentSlide.value]['asks'][i].correct) {
            isCorrectAnswers = true
          }
        }
      }
    }
    return {
      questions,
      currentSlide,
      currentSlideData,
      choiceAnswerHandler,
      handleToggleSlide
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
  }
}
</style>
