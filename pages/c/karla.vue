<template lang="html">
<div>
  <div id="karla__container">
    <img :class="{ clicked: isClicked }" @click="clickHandler" src="/c/karla/baffe-avant.png">
    <img src="/c/karla/baffe-apres.png">
  </div>
</div>
</template>

<script>
export default {
  layout: 'conchiage',
  data: function () {
    return {
      isClicked: false,
      timesClicked: 0
    }
  },
  watch: {
    timesClicked: function (newValue, oldValue) {
      if (newValue >= 5) {
        document.location.href = '/c/karla/baffe_loop.mp4'
      }
    }
  },
  methods:
  {
    clickHandler: function () {
      this.timesClicked += 1
      window.setTimeout(() => { this.timesClicked = 0 }, 1000)
      this.isClicked = true
      window.setTimeout(() => { this.isClicked = false }, 200)
    }
  }
}
</script>

<style lang="scss">
#karla__container {
  overflow: hidden;

  display: grid;
  grid-template: 100vh / 100vw;

  img {
    grid-area: 1 / 1 / 2 / 2;
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: center;
  }

  img:nth-child(1) {
    z-index: 2;
    opacity: 1;
    transition: opacity 0.2s;

    &.clicked {
      opacity: 0;
      // transition: opacity 0.1s;
    }
  }

}
</style>
