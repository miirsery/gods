<template>
  <div class="questions">
    <keep-alive>
      <component :is="currentSlideData" />
    </keep-alive>
    <button class="questions__button" @click="handleToggleSlide">Продолжить</button>
  </div>
</template>
<script>
import {defineAsyncComponent, defineComponent, ref} from "vue";

export default defineComponent({
  components: {
    quest0: defineAsyncComponent(() => import(`@/components/questions/quest0.vue`)),
    quest1: defineAsyncComponent(() => import(`@/components/questions/quest1.vue`)),
    quest2: defineAsyncComponent(() => import(`@/components/questions/quest2.vue`))
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

    const currenSlide = ref(0)
    const currentSlideData = ref('quest0')

    const handleToggleSlide = () => {
      currenSlide.value++

      currentSlideData.value = questions[currenSlide.value].questionTitle
    }
    return {
      questions,
      currentSlideData,
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
    bottom: 10%;
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
