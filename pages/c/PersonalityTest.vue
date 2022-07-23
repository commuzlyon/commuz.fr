
<template>
  <div id="app" class="Main">
    <Quiz />
  </div>
</template>

<script>
import Quiz from "~/static/c/PersonalityTest/components/quiz.vue";

export default {
  name: "App",
  components: {
    Quiz
  }
};  
</script>

<style  lang="scss" scoped>
$primary_color: #fac0ca;

@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");

body {
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    height: 100vh;
    background: $primary_color;
    color: black;

    /* mocking native UI */
    // cursor: default !important; /* remove text selection cursor */
    user-select: none; /* remove text selection */
    // user-drag: none; /* disbale element dragging */
    display: flex;
    align-items: center;
    justify-content: center;
}
.Main{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5rem;
    }
</style>
