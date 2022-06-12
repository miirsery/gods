<template>
  <div class="question">
    <div class="question__top">
      <div class="question__fractions">{{ dataQuestion.id }} | {{ countQuestions }}</div>
      <h1 class="question__title">{{ dataQuestion.title }}</h1>
    </div>
    <div class="question__items">
      <question-item
          v-for="ask in dataQuestion.asks"
          :ask="ask"
          :key="ask.id"
          :choice-item="choiceItem"
          @choice-answer="choiceAnswer"
      />
    </div>
  </div>
</template>

<script>
import QuestionItem from "@/components/questions/QuestionItem";
export default {
  name: "quest",
  components: {QuestionItem},
  props: {
    dataQuestion: Object,
    countQuestions: Number,
  },

  data() {
    return {
      choiceItem: null,
    }
  },

  methods: {
    choiceAnswer(askId) {
      this.choiceItem = askId
      this.$emit('choiceAnswerHandler', askId)
    }
  },

  watch: {
    dataQuestion() {
      this.choiceItem = null
    }
  }
}
</script>

<style scoped>
.question {
  cursor: pointer;
}
</style>
