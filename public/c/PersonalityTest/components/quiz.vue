<script>
import { quiz, information } from "./../config";

const userResponseSkelaton = Array(quiz.questions.length).fill(null);
const userResponseTypesSkelaton = Array(quiz.questions.length).fill(null);

export default defineComponent({
  name: "Quiz",
  filters: {
    charIndex: function (i) {
      return String.fromCharCode(97 + i);
    }
  },
  data() {
    return {
      quiz: quiz,
      questionIndex: -1,
      userResponses: userResponseSkelaton,
      userTypes: userResponseTypesSkelaton,
      isActive: false
    };
  },

  methods: {
    restart: function () {
      this.questionIndex = 0;
      this.userResponses = Array(this.quiz.questions.length).fill(null);
    },
    selectOption: function (index) {
      this.userResponses[this.questionIndex] = index;
      this.userTypes[this.questionIndex] = this.quiz.questions[this.questionIndex].responses[index].type;
    },
    next: function () {
      if (this.questionIndex < this.quiz.questions.length) this.questionIndex++;
    },
    prev: function () {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    quizCompleted() {
      if (this.questionIndex >= this.quiz.questions.length) {
        return true;
      }
      return false;
    },
    shorthandResult: function () {
      const collateTypes = Array.prototype.concat.apply([], this.userTypes);

      const result = {};
      for (let i = 0; i < collateTypes.length; i++) {
        if (!result[collateTypes[i]]) {
          result[collateTypes[i]] = 0;
        }
        ++result[collateTypes[i]];
      }
      const order = ["AC", "Choriste", "Zikos", "Decors", "Son", "Costume", "Amour", "Composition", "Lumiere", "Danse"];

      return Object.keys(result).reduce((a, b) => {
        if (result[a] > result[b]) {
          return a;
        }
        if (result[a] < result[b]) {
          return b;
        }
        if (result[a] == result[b]) {
          return order.indexOf(a) < order.indexOf(b) ? a : b;
        }
      });
    },
    score: function () {
      return information[this.shorthandResult()];
    }
  }
});
</script>

<template src="./quiz.html"></template>
<style scoped src="../styles/quiz.css"></style>
