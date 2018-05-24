<template lang="html">
  <div>
    <div class="gallerie_grid">
      <div class="gallerie_grid__entry" v-for="n in gallerie2018.photos[0]" :key="n" :class="gallerie2018.emphase.indexOf(n) >= 0 ? 'big-image' : 'small-image'">
        <!-- <img v-img="{ group: edition.annee, src: '/images/gallerie/2018' + edition.photos[1] }" class="lazy-image" :data-src="'/static/images/gallerie/' + edition.annee + '/' + n + edition.photos[1]"/> -->
        <img class="lazy-image" :data-src="'/images/gallerie/2018/' + n + gallerie2018.photos[1]"/>
      </div>
    </div>
  </div>
</template>

<script>

let gallerie2018 = {//////////////////////////////
  photos: [ 50, '.jpg' ],
  emphase: [
    6,
    10,
    24,
    34,
    35,
    41,
    47,
  ]
}

export default {
  data: function () {
    return { gallerie2018 }
  },
  mounted: function () {
    // Get all of the images that are marked up to lazy load
    const images = document.querySelectorAll('.lazy-image')
    const config = {
      rootMargin: '50px 0px',
      threshold: 0.01
    }

    var imageCount = images.length
    var observer

    // If we don't have support for intersection observer, loads the images immediately
    if (!('IntersectionObserver' in window)) {
      Array.from(images).forEach(image => preloadImage(image))
    } else {
      observer = new IntersectionObserver(onIntersection, config)
      images.forEach(image => {
        observer.observe(image)
      })
    }

    function fetchImage (url) {
      return new Promise((resolve, reject) => {
        const image = new Image()
        image.src = url
        image.onload = resolve
        image.onerror = reject
      })
    }

    function preloadImage (image) {
      const src = image.dataset.src
      if (!src) {
        return
      }
      return fetchImage(src).then(() => { applyImage(image, src) })
    }

    function applyImage (img, src) {
      img.src = src
      img.classList.add('fade-in')
    }

    function onIntersection (entries) {
      // Loop through the entries
      entries.forEach(entry => {
        // Are we in viewport?
        if (entry.intersectionRatio > 0) {
          imageCount--

          // Stop watching and load the image
          observer.unobserve(entry.target)
          preloadImage(entry.target)
        }
      })

      // Disconnect if we've already loaded all of the images
      if (imageCount === 0) {
        observer.disconnect()
      }
    }
  }
}
</script>

<style lang="scss">

</style>
