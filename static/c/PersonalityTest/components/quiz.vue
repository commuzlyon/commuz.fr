<script>
import Vue from "vue";
import {quiz, information } from "./../config";

const userResponseSkelaton = Array(quiz.questions.length).fill(null);
const userResponseTypesSkelaton = Array(quiz.questions.length).fill(null);

export default {
  name: "Quiz",
  data() {
    return {
      quiz: quiz,
      questionIndex: -1,
      userResponses: userResponseSkelaton,
      userTypes: userResponseTypesSkelaton,
      isActive: false
    };
  },
  filters: {
    charIndex: function(i) {
      return String.fromCharCode(97 + i);
    }
  },

  methods: {
    restart: function() {
      this.questionIndex = 0;
      this.userResponses = Array(this.quiz.questions.length).fill(null);
    },
    selectOption: function(index) {
      Vue.set(this.userResponses, this.questionIndex, index);
      Vue.set(
        this.userTypes,
        this.questionIndex,
        this.quiz.questions[this.questionIndex].responses[index].type
      );
    },
    next: function() {
      if (this.questionIndex < this.quiz.questions.length) this.questionIndex++;
    },
    prev: function() {
      if (this.quiz.questions.length > 0) this.questionIndex--;
    },
    quizCompleted() {
      if (this.questionIndex >= this.quiz.questions.length) {
        return true;
      }
      return false;
    },
    shorthandResult: function() {
      const collateTypes = Array.prototype.concat.apply([], this.userTypes);

      let result = {};
      for (let i = 0; i < collateTypes.length; i++) {
        if (!result[collateTypes[i]]) {
          result[collateTypes[i]] = 0;
        }
        ++result[collateTypes[i]];
      }
      const order = ["TWGA", "TSGW", "TPCB", "TSSW", "TCLG", "TRC"];

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
    score: function() {
      return information[this.shorthandResult()];
    }
  }
};
</script>

<style scoped src="../styles/quiz.css"></style>
<template src="./quiz.html"></template>
