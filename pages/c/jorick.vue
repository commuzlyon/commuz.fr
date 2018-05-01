<template lang="html">
<div class="">
  <img src="/c/jorick/groupe-jorick.jpg">
  <div id="snow"></div>
</div>
</template>

<script>

export default {
  layout: 'conchiage'
}
</script>

<style lang="scss" scoped>
img {
  width: 100vw;
}

#snow {
  background: none;
  background-image: url('/c/jorick/jorick1.png'), url('/c/jorick/jorick2.png'), url('/c/jorick/jorick3.png');
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index:3;
  animation: snow 20s linear infinite;
}

@keyframes snow {
    0% { background-position: 0px 0px, 0px 0px, 0px 0px }
    100% { background-position: 500px 1000px, 400px 400px, 300px 300px }
}
</style>
