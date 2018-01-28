
<template lang="html">
<div>
  <navbar class="rel"></navbar>
  <audio src="/c/rootz/surmaroute.mp3" autoplay loop></audio>
  <div id="rootz__container">
    <img src="/c/rootz/rootz.png" alt="">
    <img src="/c/rootz/image.png" alt="">
    <div id="rootz__white-overlay"></div>
  </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import anime from 'animejs'

export default {
  components: { Navbar },
  mounted: function () {
    var maxElements = 40
    var duration = 3000
    var toAnimate = []
    var radius = window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight
    var distance = radius
    var colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C', '#b931a3', '#8f8dfb']

    var fragment = document.createDocumentFragment()
    for (var i = 0; i < maxElements; i++) {
      var el = document.createElement('div')
      el.classList.add('particule')
      el.style.backgroundColor = colors[anime.random(0, 3)]
      toAnimate.push(el)
      fragment.appendChild(el)
    }
    document.getElementById('rootz__container').appendChild(fragment)

    var animate = function (el, i) {
      var angle = Math.random() * Math.PI * 2
      anime({
        targets: el,
        translateX: [10, Math.cos(angle) * distance],
        translateY: [10, Math.sin(angle) * distance],
        scale: [
          {value: [0, 1], duration: 400, easing: 'easeOutBack'},
          {value: 0, duration: 400, delay: duration - 800, easing: 'easeInBack'}
        ],
        offset: (duration / maxElements) * i,
        duration: duration,
        easing: 'easeOutSine',
        loop: true
      })
    }

    toAnimate.forEach(animate)
  }
}
</script>

<style lang="scss">
#rootz__container {
  display: grid;
  justify-items: center;
  overflow: hidden;

  img:nth-child(1) {
    width: 100vw;
    grid-area: 1 / 1 / 1 / 1;
  }

  @keyframes tiltLR {
    0% { transform: rotate(25deg)}
    100% { transform: rotate(-15deg)}
  }

  img:nth-child(2) {
    z-index: 1;
    width: 10vw;
    grid-area: 1 / 1 / 1 / 1;
    transform: rotate(45deg);
    animation: tiltLR 0.6s alternate infinite linear;
  }

  .particule {
    grid-area: 1 / 1 / 1 / 1;
    align-self: center;
    z-index: 3;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    transform: scale(0);
  }
}

@keyframes whiteFlash {
  0% { opacity: 0 }
  25% { opacity: 0.4 }
  35% { opacity: 0 }
  100% { opacity: 0 }
}

#rootz__white-overlay {
  z-index: 2;
  grid-area: 1 / 1 / 1 / 1;
  height: 100%;
  width: 100%;
  background-color: white;
  opacity: 0;
  animation: whiteFlash 0.5s infinite;
}
</style>
