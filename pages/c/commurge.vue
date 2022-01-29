<template lang="html">
<div style="overflow-y: hidden;">
  <audio id="commurge_audio" type="audio/mp3" src="/c/commurge/music/jul.mp3" autoplay loop></audio>
  
  <div id="commurge__container">
    <div id="overlay_chope">
      <img id="love_loader" src="/c/commurge/wink.gif">
      <div id="match">
        <div id="match_pictures">
          <div class="match__person" id="chopeA">
            <img src="" alt="">
            <p></p>
          </div>
          <div class="match__person" id="chopeB">
            <img src="" alt="">
            <p></p>
          </div>
        </div>
        <div id="chopOrNot">
          <img @click="sendChope('no')" class="answer_chope" id="send_no_chope" src="/c/commurge/puck.png" alt="Puck Emoji">
          <img @click="sendChope('yes')" class="answer_chope" id="send_chope" src="/c/commurge/lovely.png" alt="Smile Emoji With Earths">
        </div>
      </div>
    </div>
    <div id="commurge__home">
      <img class="commurge__image" id="speedy" src="/c/commurge/speedy-gonzales.png" alt="Speedy Gonzales">
      <img class="commurge__image" id="hands" src="/c/commurge/iloveyou.gif" alt="Hands in Heart">
      <img class="commurge__image" id="colombe" src="/c/commurge/colombe.gif" alt="Colombe">
      <button @click="openOverlay()" id="show_chope" type="button" class="commurge__button">Hola ! Te ves sexy !</button>
    </div>
    
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

let heart


// Fait apparaitre les propositions de choppes.
let openOverlay = function () {
  let overlayChopeElt = document.getElementById('overlay_chope');
  let homeElt = document.getElementById('commurge__home');

  // Timeline : voir documentation anime.js
  let choppeTimeline = anime.timeline();

  choppeTimeline.add({
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
  choppeTimeline.add({
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

const noms = ['Le Cerf', 'Julian', 'Yuexuan', 'Etienne', 'Bro', 'Albane', 'Clémence', 'Juliette B', 'Joseph', 'Perrine', 'Océane', 'Félicité', 'Jeanne', 'Camille', 'Raphaël', 'Chloé V', 'Antoine', 
            'Maëlys', 'Maxime', 'Eva S', 'Justine', 'Manon', 'Solène', 'Lise', 'Lucie', 'Laura', 'Louise', 'Emma D', 'Jean', 'Laurena', 'Mahé', 'Victor', 'Marie F', 
            'Inès', 'Arthur B', 'Oscar', 'Grégoire', 'Julien D', 'Anatole', 'Marie G', 'Martin', 'Léopold', 'Vadim', 'Tom', 'Chloé P', 'Baptiste', 'Aurélien', 
            'Thibaut D', 'Boris', 'Carole', 'Théotime', 'Thomas', 'Olivier', 'Cléo', 'Lison', 'Hélène', 'Claire', 'Julien G', 'Daniel', 'Fabien', 'Emma J', 
            'Adèle', 'Robin', 'Ivain', 'Audrey', 'Flavien', 'Delphine', 'Nicolas', 'Alice', 'Amandine', 'Loïc', 'Arthur C', 'Juliette G', 'Paul', 'Sarah', 'Julie', 'Pauline', 
            'Jonathan', 'Pia', 'Eloi', 'Alban', 'Eva L', 'Maxence', 'Johan', 'Marie D', 'Emeric', 'Emma L', 'Thibaut C', 'Bérénice', "Valentine"]

// Mis à jours des photos
let applyChope = function (nom, id) {
  let chopeElt = document.getElementById(id)
  let chopeImg = chopeElt.childNodes[0]
  let chopeP = chopeElt.childNodes[1]
  chopeImg.src = `/c/commurge/trombi/${nom}.jpg`
  chopeP.innerHTML = `${nom}`
}

// Génération d'un couple
let genChope = function () {
  
  // Tirage au sort
  let chopeA = noms[Math.floor(Math.random() * Math.floor(noms.length))]
  let chopeB = noms[Math.floor(Math.random() * Math.floor(noms.length))]
  while (chopeA === chopeB) {
    chopeB = noms[Math.floor(Math.random() * Math.floor(noms.length))]
  }
  // Mis à jour des photos
  applyChope(chopeA, 'chopeA')
  applyChope(chopeB, 'chopeB')
}

// Transistion d'un couple à l'autre 
let genNouvelleChope = function () {

  let nouvelleChoppeTimeline = anime.timeline();
  nouvelleChoppeTimeline.add({
    targets : document.getElementById('overlay_chope'),
    borderRadius: ['0', '50%'],
    scale: [1, 0],
    delay: 1000,
    duration: 1000,
    easing: 'easeInOutQuart'
  });
  nouvelleChoppeTimeline.add({
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
let sendChope = function (answer) {
  if(['yes', 'no'].includes(answer)) {
    // Construction de la requête
    if (answer === "yes") {
      rainingParticles(["🧡"])
    }
    else {
      rainingParticles(["🤮", "💩"])
    }
    let chope = new FormData();
    chope.append("validay", answer);
    chope.append('chopeA', document.getElementById('chopeA').childNodes[1].innerHTML);
    chope.append('chopeB', document.getElementById('chopeB').childNodes[1].innerHTML);
    chope.append('id', hashUser);
    chope.append('timestamp', Date.now());

    // Envoie de la requete
    fetch('https://commuzlyon.alwaysdata.net/vote', {
          headers: {
              Accept: 'application/json',
          },
          method: 'POST',
          body: chope,
        })
    
    // Changement de couple
    genNouvelleChope();
  }
  
}

// Note (BL) : j'ai volontairement laissé tomber le système à base de zapier
// Il n'était ni pérenne (compte à recréer toutes les 2 semaines) ni efficace (interface GUI brouillonne)
// À la place, je conseille d'utiliser un système php ultra simple et un compte perso gratuit sur alwaysdata
// C'est moins élégant, mais on a un contrôle plus fin sur nos données

let rainingParticles = function (particles) {
    // adaptée de http://xahlee.info/js/js_raining_particles.html
    
    const num_of_particles = 50;  // Nombre de particules
    const driftX = 50;          // Déplacement vertical
    const gravity = 30;        // Dpalcement horizontal
    const update_speed = 100;
 
    const ParticleTypes= particles;

    // Dimensions de la page
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;

    const viewSpaceWidth = viewportWidth;
    const viewSpaceHeight = viewportHeight;

    // Fonction aléatoire
    const randomInt = ((xmin,xmax) => (Math.floor( Math.random() * (xmax + 1 - xmin) + xmin )));    // Entier aléatoire
    const randomReal = ((xmin,xmax) => ( Math.random() * (xmax - xmin) + xmin ));                   // Réel aléatoire

    let particle_box = document.getElementById("particle_box");
    if (!particle_box) {
      particle_box = document.createElement("div");
      particle_box.setAttribute("id","particle_box");
    }

    // Fonction générative d'une particule
    const f_new_particle = (() => {
        const yy = document.createElement("div");
        // Forme de la particule
        yy. textContent= ParticleTypes[Math.floor( Math.random() * ParticleTypes.length )];
        // Position X
        yy["xxleft"]=randomInt(0, viewSpaceWidth);
        yy.style.left= yy["xxleft"] + "px";
        // Position Y
        yy["xxtop"]= -50;
        yy.style.top= yy["xxtop"] + "px";
        // Rotation
        yy["xrotate"] = randomInt(-150, 150);
        yy.style.transform = "rotate(" + yy["xrotate"] + "deg)";
        // Taille
        yy["xsize"]= 10 + randomInt(0,30);
        yy.style.fontSize = yy["xsize"] + "px";

        yy.style.position="fixed";
        yy.style.zIndex= randomInt(100,9999) .toString();
        yy.style.transition= "top linear 1.5s, left linear 1.5s, transform linear 1.5s";
        return yy;
    });

    // Création des particules
    { for (let i=0; i < num_of_particles; i++) { particle_box.appendChild( f_new_particle()) } } ;

    document.body.appendChild(particle_box);

    const particleNodes = Array.from (particle_box.children);

    // Fonction mis à jours de la position
    const f_update_positions = (() => {

        particleNodes.forEach (((xx) => {
            xx["xxleft"] +=
                (() => {
                    const rnd = Math.random();
                    if ( rnd < 0.3333 ) {
                        return 0;
                    } else if ( rnd < 0.6666) {
                        return driftX;}
                    else {
                        return - driftX;
                    }
                }) ();

            xx["xxtop"] = xx["xxtop"] + ( (xx["xsize"]/20) * (gravity) );

            if ( xx["xxtop"] > (viewSpaceHeight)*2 ) {
                xx.remove();    // Arrivé en bas on supprime la particule
            } else {
                xx["xxtop"] = xx["xxtop"] + gravity /10 * randomInt(0,10); };

            if ( xx["xrotate"] !== 0 ) {
                xx["xrotate"] = xx["xrotate"] + randomInt(-30,60);
                xx.style.transform = "rotate(" + xx["xrotate"] + "deg)";
            };

            xx.style.left = xx["xxleft"] + "px";
            xx.style.top = xx["xxtop"] + "px";
        }))

        // Si plus de particule on met fin à l'interval
        if (particleNodes.length == 0){
            clearInterval(particlesUpdateInterval);
        }

    });
    const particlesUpdateInterval = setInterval( f_update_positions , update_speed);
}

export default {
  layout: 'conchiage',
  methods: { openOverlay, sendChope, rainingParticles },
  mounted: function () {
    let chansons = ['boom.mp3', 'chimai.mp3', 'dion.mp3', 'feuxamour.mp3', 'jul.mp3', 'queen.mp3'];
    let i = Math.floor(Math.random() * Math.floor(chansons.length));
    document.getElementById('commurge_audio').src = `/c/commurge/music/${chansons[i]}`;
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
    })
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
    display : flex;
    flex-direction : column;
    justify-content: space-around;
    margin : 0 auto;
    height: 100%;

    #match_pictures {
      display : flex;
      flex-direction : column;
      text-align: center;
      @media (min-width: 700px) {
        flex-direction : row;
      }
      .match__person {
        img {
          width : 400px;
          max-width : 70%
        }
      }
    }
    

    #chopOrNot {
      display : flex;
      justify-content : space-around;

      #send_chope {
      cursor: pointer;
      height: 70px;
      top: 30px;
      left: 50%;
      }

      #send_no_chope {
      cursor: pointer;
      height: 70px;
      right: 50%;
      }
    }
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
