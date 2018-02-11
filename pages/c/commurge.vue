<template lang="html">
<div>
  <audio id="commurge_audio" src="" autoplay loop></audio>
  <form name="chopes" id="chopes_form" netlify>
    <input type="text" name="chopeA" id="form__chopeA" value="">
    <input type="text" name="chopeB" id="form__chopeB" value="">
  </form>
  <div id="overlay_chope">
    <img id="close_chope" src="/c/commurge/close.gif" alt="">
    <img id="love_loader" src="/c/commurge/iloveyou.gif" alt="">
    <div id="match">
      <div class="match__person" id="chopeA">
        <img src="/c/commurge/trombi/Mayar.JPG" alt="">
        <p>Mayar</p>
      </div>
      <div class="match__person" id="chopeB">
        <img src="/c/commurge/trombi/Emeline.JPG" alt="">
        <p>Emeline</p>
      </div>
      <img id="send_chope" src="/c/commurge/pouce.gif" alt="">
    </div>
  </div>
  <div id="commurge__container">
    <div id="love">
      <img class="commurge__bg" src="/c/commurge/lovebg.jpg" alt="">
    </div>
    <div id="titanic">
      <img class="commurge__bg" src="/c/commurge/titanic.jpg" alt="">
    </div>
    <button id="show_chope" type="button" class="commurge__button">Découvrir une chope</button>
    <img class="commurge__image" id="coeur" src="/c/commurge/coeurs.gif" alt="">
    <img class="commurge__image" id="ange" src="/c/commurge/ange.gif" alt="">
    <img class="commurge__image" id="colombe" src="/c/commurge/colombe.gif" alt="">
    <img class="commurge__image" id="fleurs" src="/c/commurge/fleurs.gif" alt="">
  </div>
</div>
</template>

<script>
import anime from 'animejs'
import ratios from '@/static/c/commurge/ratios.json'

let closeChope = function () {
  let overlayChopeElt = document.getElementById('overlay_chope')
  let matchElt = document.getElementById('match')

  let timelineChope = anime.timeline()

  timelineChope.add({
    targets: overlayChopeElt,
    borderRadius: ['0%', '50%'],
    width: 0,
    height: 0,
    duration: 1500,
    easing: 'easeInOutQuart'
  }).add({
    targets: matchElt,
    opacity: [1, 0],
    duration: 200
  })
}

let showChope = function () {
  // choisis les chopes
  let noms = ['Youmi', 'Jon', 'Haba', 'Estelle', 'Mayar', 'Claire', 'Nicolas', 'Emeline', 'Phyl', 'Ferrat', 'Stéphan', 'Egah', 'O\'Lyon', 'Yari', 'Yorick', 'Tihssy', 'Emma', 'Néo', 'Poulpy', 'Balou', 'Rai\'ja', 'Taman', 'Kapry', 'Lydie', 'Palma', 'Passih', 'Marianne', 'Marine', 'Cécile', 'Djuna', 'Yaza', 'Karla', 'Anne', 'Thibaut', 'Philippine', 'Chloé', 'Polia', 'Dupastis', 'Lafarine', 'Georace', 'Mathieu', 'Charlotte', 'HDV', 'Foxh', 'Nyma', 'Lola', 'Willa', 'Caroline', 'Rhomi', 'Cely', 'Oley', 'Lénou', 'Aylie', 'Eva', 'Keeto', 'Rootz', 'Origami', 'Spac', 'Lyndra', 'Thiko', 'Lynéha', 'Berkum', 'Dinan', 'Muzz', 'Royce', 'Paccio', 'Flex', 'Sanzès', 'Matthias', 'Yukhu', 'Arpys', 'Laka', 'Lafon', 'Standy', 'Inès', 'Aurore', 'Lisa', 'Sheiros', 'Tazzy', 'Lally', 'Lise']

  let chopeA = noms[Math.floor(Math.random() * Math.floor(noms.length))]
  let chopeB = ratios[chopeA][Math.floor(Math.random() * Math.floor(ratios[chopeA].length))]

  let applyChope = function (nom, id) {
    let chopeElt = document.getElementById(id)
    let chopeImg = chopeElt.childNodes[0]
    let chopeP = chopeElt.childNodes[1]
    chopeImg.src = `/c/commurge/trombi/${nom}.JPG`
    chopeP.innerHTML = `${nom}`

    let formChopeElt = document.getElementById(`form__${id}`)
    formChopeElt.value = nom
  }
  applyChope(chopeA, 'chopeA')
  applyChope(chopeB, 'chopeB')

  // òuvre l'overlay
  let overlayChopeElt = document.getElementById('overlay_chope')
  let loveLoaderElt = document.getElementById('love_loader')
  let matchElt = document.getElementById('match')
  let matchPersonElts = document.getElementsByClassName('match__person')

  let timelineChope = anime.timeline()

  timelineChope.add({
    targets: overlayChopeElt,
    borderRadius: ['50%', '0%'],
    width: '100%',
    height: '100vh',
    duration: 1500,
    easing: 'easeInOutQuart'
  }).add({
    targets: loveLoaderElt,
    opacity: 1,
    duration: 500,
    easing: 'easeInQuad',
    offset: '-=1000'
  }).add({
    targets: loveLoaderElt,
    opacity: 0,
    duration: 500,
    easing: 'easeOutSine',
    offset: '+=1500'
  }).add({
    targets: matchElt,
    opacity: 1
  }).add({
    targets: matchPersonElts,
    transform: ['scale(0.7)', 'scale(1)'],
    delay: '2000'
  })
}

let sendChope = function () {
  let chopesForm = document.getElementById('chopes_form')
  chopesForm.submit()
}

export default {
  layout: 'conchiage',
  methods: { showChope, closeChope, sendChope },
  mounted: function () {
    let chansons = ['celui.mp3', 'jaimeraistrop.mp3', 'everythingido.mp3', 'laissemoitaimer.mp3', 'heyoh.mp3', 'femmelikeyou.mp3', 'miamor.mp3']
    let i = Math.floor(Math.random() * Math.floor(chansons.length))
    document.getElementById('commurge_audio').src = `/c/commurge/${chansons[i]}`

    document.getElementById('show_chope').addEventListener('click', showChope)
    document.getElementById('send_chope').addEventListener('click', sendChope)
    document.getElementById('close_chope').addEventListener('click', closeChope)
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Dancing+Script');
@import url('https://fonts.googleapis.com/css?family=Pacifico');

form {
  display: none;
}

#overlay_chope {
  background-color: #f687e5;
  background-image: url('/c/commurge/coeurs_bg.gif');
  background-repeat: repeat;
  border-radius: 100%;
  position: absolute;
  z-index: 10;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  height: 0;
  width: 0;
  display: grid;
  justify-items: center;
  align-items: center;
  overflow: hidden;
}

#overlay_chope__bg {
  grid-area: 1 / 1 / -1 / -1;
  height: 100%;
  width: 100%;

  img {
    object-position: center;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
}

#close_chope {
  position: absolute;
  cursor: pointer;
  width: 50px;
  height: 50px;
  top: 20px;
  left: 20px;
}

#send_chope {
  position: absolute;
  cursor: pointer;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  height: 100px;
}

#love_loader {
  opacity: 0;
  z-index: 11;
  grid-area: 1 / 1 / -1 / -1;
}

#match {
  opacity: 0;
  grid-area: 1 / 1 / -1 / -1;
  display: flex;
  flex-direction: row;
}

.match__person {
  margin: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 1em;
    border: inset 8px pink;
  }

  p {
    font-family: 'Pacifico', cursive;
    font-size: 3em;
  }
}


#commurge__container {
  height: 100vh;
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-area: 1fr / 1fr;
  @media (min-width: 700px) {
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
  }
  background-color: #f687e5;
  background-image: url('/c/commurge/stars_bg.gif');
  background-repeat: repeat;
}

.commurge__button {
  grid-area: 1 / 1 / 2 / 2;
  @media (min-width: 700px) {
    grid-area: 2 / 2 / 3 / 3;
  }
  z-index: 2;
  background-color: #ff00a2;
  padding: 1em 2em;
  border-radius: 50%;
  font-size: 1.4em;
  color: white;
  font-family: 'Dancing Script', cursive;
  font-weight: bold;
}

.commurge__image {
  max-height: 100%;
  max-width: 100%;
  z-index: 1;
}

#coeur {
  grid-area: 1 / 1 / 2 / 2;
  @media (min-width: 700px) {
    grid-area: 2 / 2 / 3 / 3;
  }
}

#ange {
  display: none;
  grid-area: 1 / 1 / 2 / 2;
  @media (min-width: 700px) {
    display: block;
    grid-area: 1 / 1 / 2 / 2;
  }
}

#colombe {
  display: none;
  grid-area: 1 / 1 / 2 / 2;
  @media (min-width: 700px) {
    display: block;
    grid-area: 1 / 3 / 2 / 4;
  }
}

#fleurs {
  display: none;
  grid-area: 1 / 1 / 2 / 2;
  @media (min-width: 700px) {
    display: block;
    grid-area: 3 / 3 / 4 / 4;
  }
}

.commurge__bg {
  mix-blend-mode: overlay;
  z-index: 0
}

#titanic, #love {
  grid-area: 1 / 1 / -1 / -1;
  height: 100%;
  width: 100%;

  img {
    object-position: center;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
}
</style>
