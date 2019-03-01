<template lang="html">
  <div>
    <nuxt/>
    <foot></foot>
    <div id="preloader__container">
      <div id="preloader_bg"></div>
  		<div id="preloader">
				<img src="/icons/preloader__logo.svg"/>
			</div>
		</div>
    <div id="overlayDiv"></div>
    <style>
      * {
        margin:0;
        padding:0;
      }
      html {
        overflow-y: scroll;
        overflow-x: none;
      }
      #preloader_bg {
        height:100vh;
        width:100vw;
        position:fixed;
        top:0;
        background:black;
        z-index:99;
      }
      #preloader {
        height:80vh;
        width:100%;
        position:absolute;
        top:0;
        z-index:100;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      @media (orientation: landscape) {
        #preloader {
          height: 100vh;
        }
      }
      #preloader img {
        width: 75%;
      }
      @media (min-width: 992px) {
        #preloader img {
          width: 50%;
        }
      }
    </style>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Foot from '@/components/Foot'
import bus from '@/components/bus'
import FontFaceObserver from 'fontfaceobserver'
import anime from 'animejs'

export default {
  components: { Navbar, Foot },
  mounted: function () {
    let merriweatherObserver = new FontFaceObserver('Merriweather')
    let alegreyaObserver = new FontFaceObserver('Alegreya Sans')

    let minLoading = new Promise(resolve => window.setTimeout(resolve, 500))

    function removePreloader () {
      let preloaderElt = document.getElementById('preloader__container')
      let removeOverlayAnimation = anime({
        targets: preloaderElt,
        opacity: [1, 0],
        duration: 2000,
        easing: 'easeOutSine'
      })
      removeOverlayAnimation.finished.then(() => {
        preloaderElt.remove()
      })
      bus.$emit('loaded', true)
    }

    Promise.all([
      minLoading,
      merriweatherObserver.load(),
      alegreyaObserver.load()
    ]).then(removePreloader, removePreloader)
  }
}
</script>

<style lang="scss" scoped>
// transitioning between elements in router-view

.router-overlay-leave-active {
  transition: opacity 0.3s ease;
}
.router-overlay-leave-to {
  opacity: 0.5;
}

#overlayDiv {
  position: fixed;
  bottom: 0;
  height: 100vh;
  width: 100%;
  background-color: black;
  z-index: 90;
  transform-origin: bottom;
  transform: scaleY(0);
  transition: transform 0.4s ease-in-out;

  &.up {
    transform: scaleY(1);
    transition: transform 0.3s ease-in-out;
  }
}
</style>
