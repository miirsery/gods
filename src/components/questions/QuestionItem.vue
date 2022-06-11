<template>
    <div class="question__item" @click="clickAnswer(ask.id)" :class="[active ? 'active' : '']">
        <div class="question__number">{{ ask.id }}</div>
        <p class="question__ask">{{ ask.value }}</p>
    </div>
</template>

<script>
export default {
  name: "QuestionItem",

  props: {
    ask: Object,
    choiceItem: Number,
  },

  data() {
    return {
      active: false,
    }
  },

  methods: {
    clickAnswer(askId) {
      this.$emit('choice-answer', askId)
    }
  },

  watch: {
    choiceItem(newValue) {
      console.log(newValue)
      this.active = newValue === this.ask.id;
    }
  }
}
</script>

<style scoped>

</style>