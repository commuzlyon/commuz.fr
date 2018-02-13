<template lang="html">
<div style="overflow-y: hidden;">
  <audio id="commurge_audio" src="" autoplay loop></audio>
  <div id="overlay_chope">
    <img id="love_loader" src="/c/commurge/iloveyou.gif">
    <div id="match">
      <div class="match__person" id="chopeA">
        <img src="" alt="">
        <p></p>
      </div>
      <div class="match__person" id="chopeB">
        <img src="" alt="">
        <p></p>
      </div>
      <img id="send_no_chope" src="/c/commurge/pouce.gif" alt="">
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
  }
  applyChope(chopeA, 'chopeA')
  applyChope(chopeB, 'chopeB')

  // òuvre l'overlay
  let overlayChopeElt = document.getElementById('overlay_chope')
  let loveLoaderElt = document.getElementById('love_loader')
  let matchElt = document.getElementById('match')

  let timelineChope = anime.timeline()

  timelineChope.add({
    targets: overlayChopeElt,
    borderRadius: ['50%', '0%'],
    width: '100%',
    height: '100%',
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
  })
}

let sendNoChope = function () {
  let chope = {}
  chope['chopeA'] = document.getElementById('chopeA').childNodes[1].innerHTML
  chope['chopeB'] = document.getElementById('chopeB').childNodes[1].innerHTML

  const req2 = new XMLHttpRequest()
  req2.open('POST', 'https://hooks.zapier.com/hooks/catch/2955359/zi5t25/')
  req2.send(JSON.stringify(chope))

  closeChope()
}

let sendChope = function () {
  let chope = {}
  chope['chopeA'] = document.getElementById('chopeA').childNodes[1].innerHTML
  chope['chopeB'] = document.getElementById('chopeB').childNodes[1].innerHTML

  const req = new XMLHttpRequest()
  req.open('POST', 'https://hooks.zapier.com/hooks/catch/2955359/zrxj48/')
  req.send(JSON.stringify(chope))

  closeChope()
}

export default {
  layout: 'conchiage',
  methods: { showChope, sendNoChope, sendChope },
  mounted: function () {
    let chansons = ['celui.mp3', 'jaimeraistrop.mp3', 'everythingido.mp3', 'laissemoitaimer.mp3', 'heyoh.mp3', 'femmelikeyou.mp3', 'miamor.mp3', 'leila.mp3', 'ilavaitlesmots.mp3', 'senorita.mp3']
    let i = Math.floor(Math.random() * Math.floor(chansons.length))
    document.getElementById('commurge_audio').src = `/c/commurge/${chansons[i]}`

    document.getElementById('show_chope').addEventListener('click', showChope)
    document.getElementById('send_chope').addEventListener('click', sendChope)
    document.getElementById('send_no_chope').addEventListener('click', sendNoChope)
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Dancing+Script');
@import url('https://fonts.googleapis.com/css?family=Pacifico');

#overlay_chope {
  background-color: #f687e5;
  background-image: url('/c/commurge/coeurs_bg.gif');
  background-repeat: repeat;
  border-radius: 100%;
  position: fixed;
  z-index: 10;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  height: 0;
  width: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

#send_no_chope {
  position: absolute;
  cursor: pointer;
  width: 50px;
  height: 70px;
  top: 30px;
  left: 50%;
  transform: translateX(-200%) scaleY(-1);
}

#send_chope {
  position: absolute;
  cursor: pointer;
  top: 30px;
  height: 70px;
  right: 50%;
  transform: translateX(200%);
}

#love_loader {
  opacity: 0;
  z-index: 11;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 45vw;
}

#match {
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  height: calc(100vh - 120px);
  @media (min-width: 800px) {
    align-self: center;
    flex-direction: row;
    // max-height: calc(100vh - 90px - 120px);
  }
  justify-content: center;
  width: 95vw;
}

.match__person {
  @media (max-width: 799px) {
    height: 45%;
    // width: auto;
  }
  @media (min-width: 800px) {
    width: 40vw;
    // height: auto;
  }
  margin: 0 1em 1em 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    @media (max-width: 799px) {
      max-height: 100%;
      width: auto;
    }
    @media (min-width: 800px) {
      width: 100%;
      height: auto;
    }
    max-width: 100%;
    min-height: 0;
    min-width: 0;
    margin-bottom: 1em;
    border: inset 5px pink;
  }

  p {
    font-family: 'Pacifico', cursive;
    font-size: 1.2em;
    @media (min-width: 800px) {
      font-size: 1.5em;
    }
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
