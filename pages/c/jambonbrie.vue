<template lang="html">
<div class="">
  <!-- <navbar class="abs"></navbar> -->
  <div id="jambonbrie__container">
    <img id="jambonbrie__bg" src="/c/jambonbrie/amour.jpg" alt="">
    <div id="jambonbrie__ingredients" class="dropper">
      <img class="draggable" id="jambonbrie__brie" src="/c/jambonbrie/brie.jpg" alt="">
      <img class="draggable" id="jambonbrie__jambon" src="/c/jambonbrie/jambon.png" alt="">
    </div>
    <div class="dropper" id="jambonbrie__tartine"></div>
  </div>
</div>
</template>

<script>
// import Navbar from '@/components/Navbar'

export default {
  // components: { Navbar },
  mounted: function () {
    function showAmour () {
      let dossiers = ['lise.jpg', 'lally.mp4', 'thazzy.jpg']
      let url = `/c/jambonbrie/${dossiers[Math.floor(Math.random() * Math.floor(dossiers.length))]}`
      document.location.href = url
    }

    (function () {
      var dndHandler = {
        draggedElement: null,

        applyDragEvents: function (element) {
          element.draggable = true
          var dndHandler = this
          element.addEventListener('dragstart', function (e) {
            dndHandler.draggedElement = e.target
            e.dataTransfer.setData('text/plain', '')
          })
        },

        applyDropEvents: function (dropper) {
          var dndHandler = this
          dropper.addEventListener('dragover', function (e) {
            e.preventDefault()
          })
          dropper.addEventListener('drop', function (e) {
            e.preventDefault()
            let target = e.target
            let draggedElement = dndHandler.draggedElement
            let clonedElement = draggedElement.cloneNode(true)
            while (target.className.indexOf('dropper') === -1) {
              target = target.parentNode
            }
            clonedElement = target.appendChild(clonedElement)
            dndHandler.applyDragEvents(clonedElement)
            draggedElement.parentNode.removeChild(draggedElement)
          })
          dropper.addEventListener('drop', function (e) {
            if (document.getElementById('jambonbrie__tartine').childNodes.length === 2) showAmour()
          })
        }
      }

      let elements = document.querySelectorAll('.draggable')
      let elementsLen = elements.length

      for (var i = 0; i < elementsLen; i++) {
        dndHandler.applyDragEvents(elements[i])
      }

      let droppers = document.querySelectorAll('.dropper')
      let droppersLen = droppers.length

      for (let i = 0; i < droppersLen; i++) {
        dndHandler.applyDropEvents(droppers[i])
      }
    })()
  }
}
</script>

<style lang="scss">
#jambonbrie__container {
  width: 100%;
  min-width: 350px;
  height: 100vh;
  display: grid;
  grid-gap: 0;
  justify-items: center;
  grid-template-columns: 1fr 350px 1fr;
  grid-template-rows: 2fr 1fr 100px;
  @media only screen and (min-width: 650px) {
    grid-template-columns: 1fr 350px 1fr 270px;
    grid-template-rows: 2fr 1fr;
  }
}

#jambonbrie__bg {
  grid-area: 1 / 1 / -2 / -1;
  @media only screen and (min-width: 650px) {
    grid-area: 1 / 1 / -1 / -2;
  }
  z-index: -1;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

#jambonbrie__tartine {
  grid-area: 2 / 2 / -2 / -1;
  @media only screen and (min-width: 650px) {
    grid-area: 2 / 2 / -1 / -2;
  }
  width: 350px;
  background: url('/c/jambonbrie/tartine.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  display: grid;
  align-items: center;
  justify-content: center;
  #jambonbrie__brie, #jambonbrie__jambon {
    grid-area: 1 / 1 / -1 / -1;
  }
  #jambonbrie__brie { z-index: 1 }
  #jambonbrie__jambon { z-index: 2 }
}

#jambonbrie__ingredients {
  grid-area: 3 / 1 / -1 / -1;
  background-repeat: repeat-x;
  flex-direction: row;
  @media only screen and (min-width: 650px) {
    grid-area: 1 / 4 / -1 / -1;
    background-repeat: repeat-y;
    flex-direction: column;
    height: 70%;
  }
  padding: 1em;
  align-self: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: url('/c/jambonbrie/frigo.jpg');
  background-size: contain;
}

#jambonbrie__brie, #jambonbrie__jambon {
  max-width: 200px;
}
</style>
