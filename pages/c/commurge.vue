<template lang="html">
<div style="overflow-y: hidden;">
  <audio id="commurge_audio" type="audio/mp3" src="/c/commurge/music/jul.mp3" autoplay loop></audio>
  <div id="overlay_chope">
    <img id="love_loader" src="/c/commurge/wink.gif">
    <div id="match">
      <div class="match__person" id="chopeA">
        <img src="" alt="">
        <p></p>
      </div>
      <div class="match__person" id="chopeB">
        <img src="" alt="">
        <p></p>
      </div>
      <img @click="sendNoChope()" id="send_chope" src="/c/commurge/pouce.gif" alt="">
      <img @click="sendChope()" id="send_no_chope" src="/c/commurge/pouce.gif" alt="">
    </div>
  </div>
  <div id="commurge__container">
    <div id="love">
      <img class="commurge__bg" src="/c/commurge/lovebg.jpg" alt="">
    </div>
    <div id="titanic">
      <img class="commurge__bg" src="/c/commurge/tramp.jpg" alt="">
    </div>
    <button @click="openOverlay()" id="show_chope" type="button" class="commurge__button">Découvrir une chope !</button>
    <img class="commurge__image" id="coeur" src="/c/commurge/coeurs.gif" alt="kheur <3">
    <img class="commurge__image" id="ange" src="/c/commurge/clippy.gif" alt="clippy">
    <img class="commurge__image" id="colombe" src="/c/commurge/clippy2.gif" alt="un autre clippy">
  </div>
</div>
</template>

<script>
import anime from 'animejs'
import ratios from '@/static/c/commurge/ratios.json'

// Si jamais on veut attribuer un token unique par connexion au site
let hashToken = function () {
  return(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
}


let hashUser = hashToken();


let openOverlay = function () {
  let overlayChopeElt = document.getElementById('overlay_chope')

  let timelineChope = anime.timeline()

  timelineChope.add({
    targets: overlayChopeElt,
    borderRadius: ['50%', '0%'],
    translateX: ['-50%', '-50%'],
    translateY: ['-50%', '-50%'],
    scale: [0, 1],
    duration: 1000,
    easing: 'easeInOutQuart'
  })

  timelineChope.finished.then(() => {
    let commurgeImagesElts = document.querySelectorAll('.commurge__image')
    commurgeImagesElts.forEach((elt) => elt.remove())
    genChope()
  })
}

let genChope = function () {
  let noms = ['Agathe P', 'Agathe V', 'Alexia', 'Alice A', 'Alice B', 'Amandine', 'Arsène', 'Aurélien', 'Benoît',
               'Boris', 'Bérénice', 'Camille', 'Carla', 'Chaloupe', 'Clara', 'Clervie', 'Clémence', 'Constance', 'Céline', 'David',
                'Dumelon', 'Dédon', 'edouard', 'Emma', 'Flymm', 'Genatz', 'Iris', 'Ivain', 'JuanTurko', 'Julian', 'Julien', 'Juliette',
                'Keeto', 'keJo', 'Laïs', 'Lise', 'Lison', 'Lomboh', 'Louis', 'Loïc', 'Léo', 'Maaëlys', 'Mahé', 'Marie', 'Martin Bouillot',
                'Maxence', 'Mayar', 'Nathan', 'Nicolas Miranda', 'Nina', 'Pauline', 'Phrygoh', 'Scoopyh', 'Strady', 'Thibault', 'Théophile',
                'Tom Humeau', 'Tom Mehl', 'Vincent prez', 'YonC', 'Yuexuan', 'Zac', 'Zhuoran']

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

  let loveLoaderElt = document.getElementById('love_loader')
  let matchElt = document.getElementById('match')

  let timelineChope = anime.timeline()

  timelineChope.add({
    targets: loveLoaderElt,
    opacity: 1,
    duration: 500,
    easing: 'easeInOutQuart'
  }).add({
    targets: loveLoaderElt,
    opacity: 0,
    duration: 500,
    easing: 'easeInOutQuart',
    offset: '+=2000'
  }).add({
    targets: matchElt,
    opacity: [0, 1],
    duration: 300,
    easing: 'easeInOutQuart'
  })
}

let genNouvelleChope = function () {
  let matchElt = document.getElementById('match')

  let timelineChope = anime.timeline()

  timelineChope.add({
    targets: matchElt,
    opacity: 0,
    duration: 400,
    easing: 'easeInOutQuart'
  })

  timelineChope.finished.then(genChope)
}

let sendNoChope = function () {
  let chope = {}
  chope['validay'] = 'no' // Miskine le couple n'est pas validé par le commuzard
  chope['chopeA'] = document.getElementById('chopeA').childNodes[1].innerHTML
  chope['chopeB'] = document.getElementById('chopeB').childNodes[1].innerHTML
  chope['id'] = hashUser;

  const req2 = new XMLHttpRequest()
  req2.open('POST', 'https://bastienlaville.alwaysdata.net/')
  req2.send(JSON.stringify(chope))

  genNouvelleChope()
}

let sendChope = function () {
  let chope = {}
  chope['validay'] = 'yes' // Là c'est une chope validée
  chope['chopeA'] = document.getElementById('chopeA').childNodes[1].innerHTML
  chope['chopeB'] = document.getElementById('chopeB').childNodes[1].innerHTML
  chope['id'] = hashUser;

  const req = new XMLHttpRequest()
  req.open('POST', 'https://bastienlaville.alwaysdata.net/')
  req.send(JSON.stringify(chope))

  genNouvelleChope()
}

// Note (BL) : j'ai volontairement laissé tomber le système à base de zapier
// Il n'était ni pérenne (compte à recréer toutes les 2 semaines) ni efficace (interface GUI brouillonne)
// À la place, je conseille d'utiliser un système php ultra simple et un compte perso gratuit sur alwaysdata
// C'est moins élégant, mais on a un contrôle plus fin sur nos données


export default {
  layout: 'conchiage',
  methods: { openOverlay, sendNoChope, sendChope },
  mounted: function () {
    let chansons = ['boom.mp3', 'chimai.mp3', 'dion.mp3', 'feuxamour.mp3', 'jul.mp3', 'queen.mp3']
    let i = Math.floor(Math.random() * Math.floor(chansons.length))
    document.getElementById('commurge_audio').src = `/c/commurge/music/${chansons[i]}`
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
  transform: translate(-50%,-50%) scale(0);
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  }

  #send_chope {
  position: absolute;
  cursor: pointer;
  width: 50px;
  height: 70px;
  top: 30px;
  left: 50%;
  transform: translateX(-200%) scaleY(-1);
  }

  #send_no_chope {
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
  width: 35vw;
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
