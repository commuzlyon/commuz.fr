<template lang="html">
<div style="overflow-y: hidden;"> 
  <!--  <audio id="commurge_audio" type="audio/mp3" src="/c/commurge/music/jul.mp3" autoplay loop></audio>-->
  
  <div id="commurge__container">
    <div id="overlay_chope">
      <img id="love_loader" src="/c/commurge/wink.gif">
      <div id="match">
        <div id="match__pictures">
          <div class="match__person" id="chopeA">
            <img id="chopeA_photo" src="">
            <!-- <div id="chopeA__photo" class="match__pictures"></div> -->
            <div class="match__description">
              <p id="chopeA__name" class="match__names">Nom 1</p>
              <p id="chopeA__desc">Viergee - INTJ</p>
            </div>
          </div>
          <div class="match__person" id="chopeB">
            <img id="chopeB_photo" src="">
            <!-- <div id="chopeB__photo" class="match__pictures"></div> -->
            <div class="match__description">
              <p id="chopeB__name" class="match__names">Nom 1</p>
              <p id="chopeB__desc">Viergee - INTJ</p>
            </div>
          </div>
        </div>
        <div id="chopOrNot">
          <p @click="sendChope('no')"  class="answer_chope" id="send_no_chope">🤮</p>
          <p @click="sendChope('yes')"  class="answer_chope" id="send_chope">🥰</p>
        </div>
        <div id="chopOrNot">
          <p @click="sendSuperChope()" :class="['answer_chope', isButtonDisabled ? 'answer_chope--disabled' : '']" id="send_super_chope">🤩</p>
        </div>
        <div id="chopOrNot">
          <p> <p id="counter_no" style="color: #00FF00">0</p> / <p id="counter_yes" style="color: Fuchsia">0</p> </p>
        </div>
      </div>
    </div>
    <div id="commurge__home">
      <img class="commurge__image" id="speedy" src="/c/commurge/thomas-the-train.png" alt="Thomas the Train">
      <img class="commurge__image" id="hands" src="/c/commurge/iloveyou.gif" alt="Hands in Heart">
      <img class="commurge__image" id="colombe" src="/c/commurge/colombe.gif" alt="Colombe">
      <button @click="openOverlay()" id="show_chope" type="button" class="commurge__button">¡ Hola Sexy !</button>
    </div>
    
  </div>
</div>
</template>

<script>
import anime from 'animejs';
import rainingParticles from '~/includes/rainingParticles';

let hashFunction = function (v, a,b,t) {
  let string = v + a + b + t;

  let hash = 0;

  if (string.length == 0) return hash;

  for (let i = 0 ;i<string.length ; i++){
    let ch = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + ch;
    hash = hash & hash;
  }

  return hash;
}

//We define the status of the Overlay
let OverlayStatus = false;

// Fait apparaitre les propositions de choppes.
let openOverlay = function () {
  let overlayChopeElt = document.getElementById('overlay_chope');
  let homeElt = document.getElementById('commurge__home');
  OverlayStatus = true;

  // Timeline : voir documentation anime.js
  let chopeTimeline = anime.timeline();

  chopeTimeline.add({
    targets: homeElt,
    opacity : [1, 0],
    duration : 500,
    begin : function(anime){
       genChope();
    },
    complete: function(anime) {
      homeElt.remove();
    },
  })
  chopeTimeline.add({
    targets: overlayChopeElt,
    borderRadius: ['50%', '0%'],
    scale: [0, 1],
    duration: 2000,
    easing: 'easeInOutQuart',
    begin: function() {
      overlayChopeElt.style.display = 'flex';
    },
  })

  // Animation des émojies
  anime({
    targets : '.answer_chope',
    translateY: [-5,5],
    rotateZ: [-5,5], 
    autoplay: true,
    direction: 'alternate',
    loop: true,
     easing: 'easeInOutSine'
  })

}



let commuzards = [];

let canVote = true;

// Mis à jours des photos
let applyChope = function (commuzard, id) {
  let chopeElt = document.getElementById(id)
  let chopeImg = document.getElementById(id+'_photo')
  let chopeName = document.getElementById(id+'__name')
  let chopeDesc = document.getElementById(id+'__desc')
  chopeImg.src =`/c/commurge/pictures/${commuzard[3]}`
  chopeName.innerHTML = `${commuzard[0]}`
  chopeDesc.innerHTML = `${commuzard[4]} - ${commuzard[1]} - ${commuzard[2]}`
}

// Génération d'un couple
let genChope = function () {
  
  // Tirage au sort
  let chopeA = commuzards[1+Math.floor(Math.random() * Math.floor(commuzards.length-2))];
  let chopeB = commuzards[1+Math.floor(Math.random() * Math.floor(commuzards.length-2))];
  while (chopeA === chopeB) {
    chopeB = commuzards[1+Math.floor(Math.random() * Math.floor(commuzards.length-1))]
  }
  // Mis à jour des photos
  applyChope(chopeA, 'chopeA');
  applyChope(chopeB, 'chopeB');
  canVote = true;
}

// Transistion d'un couple à l'autre 
let genNouvelleChope = function () {

  let nouvellechopeTimeline = anime.timeline();
  nouvellechopeTimeline.add({
    targets : document.getElementById('overlay_chope'),
    borderRadius: ['0', '50%'],
    scale: [1, 0],
    duration: 1000,
    easing: 'easeInOutQuart'
  });
  nouvellechopeTimeline.add({
    targets : document.getElementById('overlay_chope'),
    borderRadius: ['50%', '0%'],
    scale: [0, 1],
    duration: 1000,
    easing: 'easeInOutQuart',
    begin: function(anime) {
      genChope()
    }
  });
}

// Envoie réponse positive
let count_no = 0;
let count_yes = 0;
// Compter superchope
let count_super_chope = 0;

let sendChope = function (answer) {

  if (canVote) {
    canVote = false;
    count_super_chope ++;
    if(['yes', 'no'].includes(answer)) {
      // Construction de la requête
      if (answer === "yes") {
        rainingParticles(["🧡", "💜","❤️","🌼", "🌸"])
          // Incrémentation du compteur
          count_yes++;
          document.getElementById('counter_yes').innerText = count_yes;
      }
      else {
        rainingParticles(["🤮", "💩"])
        // Incrémentation du compteur
        count_no++;
        document.getElementById('counter_no').innerText = count_no;
      }

      let chopeA = document.getElementById('chopeA__name').innerHTML;
      let chopeB = document.getElementById('chopeB__name').innerHTML;
      let timestamp = Date.now().toString();

      fetch('https://commurge.alwaysdata.net/vote', {
            headers: {
                "Content-Type": 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
              validay: answer,
              chopeA: chopeA,
              chopeB: chopeB,
              timestamp :  timestamp
              // hash : hashFunction(answer, chopeA, chopeB, timestamp)  
            })
          })
        .then(res => {
          if(res.ok){
            genNouvelleChope()
          }
          else {
            alert("Erreur 😿")
          }
        })
        .catch(() => alert("Erreur 😭"))
    }
  }
  
}

let sendSuperChope = function () {
  if (canVote) {
    canVote = false;
    count_super_chope = 0;
    rainingParticles(["🧡", "💜","❤️","🌼", "🌸"])
    // On boucle 2 fois pour envoyer 2 votes
    for(let i=0; i<2; i++){
      count_yes++;
      document.getElementById('counter_yes').innerText = count_yes;

      let chopeA = document.getElementById('chopeA__name').innerHTML;
      let chopeB = document.getElementById('chopeB__name').innerHTML;
      let timestamp = Date.now().toString();

      fetch('https://commurge.alwaysdata.net/vote', {
            headers: {
                "Content-Type": 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
              validay: answer,
              chopeA: chopeA,
              chopeB: chopeB,
              timestamp :  timestamp
              // hash : hashFunction(answer, chopeA, chopeB, timestamp)  
            })
          })
        .then(res => {
          if(res.ok){
            genNouvelleChope()
          }
          else {
            alert("Erreur 😿")
          }
        })
        .catch(() => alert("Erreur 😭"))
    }
    }
}


let handleKeyDown = function(event) {
      if(OverlayStatus){
        if (event.keyCode === 37 || event.key === 'ArrowLeft') {
          this.sendChope('no');
        } else if (event.keyCode === 39 || event.key === 'ArrowRight') {
          this.sendChope('yes');
        }
      }
    }

export default {
  layout: 'conchiage',
   head: {
    title: 'Site des chopes',
    meta: [
       { name: 'robots', content: 'noindex' },
    ],
  },
  computed: {
    isButtonDisabled() {
      return this.count_super_chope < 2;
    }
  },
  methods: { openOverlay, sendChope, rainingParticles, handleKeyDown },
  mounted: async function () {
    
    await fetch('https://commuz.fr/c/commurge/infos.csv')
    .then((response) => response.text())
    .then(csv => csv.split('\n'))
    .then(t => {t.forEach(e => commuzards.push(e.split(';')))})
    //let chansons = ['boom.mp3', 'chimai.mp3', 'dion.mp3', 'feuxamour.mp3', 'jul.mp3', 'queen.mp3'];
    //let i = Math.floor(Math.random() * Math.floor(chansons.length));
    //document.getElementById('commurge_audio').src = `/c/commurge/music/${chansons[i]}`;
    anime({
      targets : '#show_chope',
      autoplay: true,
      scale: [1,1.1],
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine'
    });
    anime({
      targets : '#speedy',
      autoplay: true,
      rotateY: [-20,20],
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine'
    });
    window.addEventListener('keydown', this.handleKeyDown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
}

</script>


<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Dancing+Script');
  @import url('https://fonts.googleapis.com/css?family=Pacifico');

  #overlay_chope {
    display: none;
    height: 100%;
    width: 100%;
    overflow: hidden;
    align-items: center;
    justify-content: center;
  }

  #match{
    color : gold;
    display : flex;
    flex-direction : column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 20px;

    p {
      margin : 0;
    }

    #match__pictures {
      display : flex;
      flex-direction : column;
      text-align: center;
      justify-content: center;
      flex : 1;
      width: 100%;
      gap : 20px;
      @media (min-width: 700px) {
        flex-direction : row;
      }
      #chopeA {
        flex-direction: column-reverse;
      }
      .match__names {
        font-size: 2em;
      }

      .match__pictures {
        background-size: cover;
      }
      .match__person {
        display : flex;
        flex-direction : column;
        justify-content: flex-end;
        align-items : center;
        gap: 10px;
        img{
          width: 60%;
        }
        .match__description {
          font-weight : bold;
        }
      }
    }
    

    #chopOrNot {
      display : flex;
      align-items: bottom;
      justify-content : space-around;
      font-size: 8vh;
      width: 100%;
      p {
        margin: 0;
      }

      #send_chope {
      cursor: pointer;
      }

      #send_no_chope {
      cursor: pointer;
      }

      #send_super_chope{
        cursor: pointer;
      }

    }
  }
  .answer_chope--disabled {
  color: #c4c4c4;
  cursor: not-allowed;
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


  #commurge__container {
    height: 100vh;
    width: 100%;
    align-items: center;
    justify-items: center;
    background-color: #480ca8;
    background-image: url('/c/commurge/stars_bg.gif');
    background-repeat: repeat;

    #commurge__home {
      padding : 20px;
      display : grid;
      align-items: center;
      grid-template-columns: repeat(3, 33%);
      grid-template-rows: repeat(5, 20%);
      height: 100%;
      
      // Bouton "Découvrir une choppe"
      .commurge__button {
        grid-area: 4/1/5/4;
        z-index: 2;
        background-color: #bb98ff;
        padding: 1em 2em;
        border-radius: 50%;
        font-size: 1.4em;
        color: white;
        font-family: 'Dancing Script', cursive;
        font-weight: bold;
        max-width : 300px;
        margin : 0 auto;  

      }

      #speedy {
        grid-area: 3/2;
      }
      #colombe {
        grid-area: 1/3;
      }
      #hands {
        grid-area: 1/1/3/3;
      }

      .commurge__image {
      max-height: 100%;
      max-width: 100%;
      margin: 0 auto;
    }

    }
    

  }

</style>
