function addOverlay (el, done) {
  let slideTiming = {
    duration: 300,
    fill: 'forwards',
    easing: 'ease-in-out',
    iterations: 1
  }
  let scaleUpKF = [
    { transform: 'scale3d(1,0,1)' },
    { transform: 'scale3d(1,1,1)' }
  ]
  let overlayElt = document.getElementById('overlayDiv')
  let addOverlayAnim = overlayElt.animate(scaleUpKF, slideTiming)
  addOverlayAnim.onfinish = () => done()
}

function removeOverlay (el, done) {
  let slideTiming = {
    duration: 300,
    fill: 'forwards',
    easing: 'ease-in-out',
    iterations: 1
  }
  let scaleDownKF = [
    { transform: 'scale3d(1,1,1)' },
    { transform: 'scale3d(1,0,1)' }
  ]
  let overlayElt = document.getElementById('overlayDiv')
  window.setTimeout(function () {
    window.scrollTo(0, 0)
    let removeOverlayAnim = overlayElt.animate(scaleDownKF, slideTiming)
    removeOverlayAnim.onfinish = function () {
      done()
    }
  }, 300)
}

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'La Commuz\'',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { name: 'theme-color', content: '#fe7a90' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/variables.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#fe7a90' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: [
    '@/assets/css/global.scss',
  ],
  transition: {
    mode: 'out-in',
    name: 'router-view-fade',
    leave: addOverlay,
    enter: removeOverlay
  },
  // transition: function _transition (to, from) {
  //   let reg = new RegExp('\/\w\/\w')
  //   console.log(to)
  //   if (to.match(reg) && from.match(reg)) {
  //     console.log('hip')
  //     return 'fade'
  //   }
  //   let trans = {
  //     mode: 'out-in',
  //     name: 'router-view-fade',
  //     leave: addOverlay,
  //     enter: removeOverlay
  //   }
  //   return trans
  // },
  router: {
    middleware: [ 'redirect_equipe', 'redirect_gallerie' ]
  }
}
