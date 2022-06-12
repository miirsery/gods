import { createStore } from 'vuex'

export default createStore({
  state: {
    numberOfCorrectAnswers: 0,
    isPassedTest: false,
    totalCountQuestions: 0,
  },
  getters: {
  },
  mutations: {
    SET_NUMBER_OF_CORRECT_ANSWERS(state, payload) {
      this.state.numberOfCorrectAnswers = payload
    },
    SET_IS_PASSED_TEST(state, payload) {
      this.state.isPassedTest = payload
    },
    SET_TOTAL_COUNT_QUESTIONS(state, payload) {
      this.state.totalCountQuestions = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
