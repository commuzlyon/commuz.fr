
<template>
  <div>
    <!-- Description -->
    <div id="home__hero">
      <img id="home__hero__logo"  src="/c/PersonalityTest/images/Watermark-Casting.png" alt="Commuz">
      <a id="home__hero__scroll" onclick="window.scrollTo(0,document.querySelector('#home__hero ~ div').offsetTop)"><img src="/icons/scroll-down.svg" alt="Flèche basse">Découvrir</a>
      <img id="home__hero_bg" src="/c/PersonalityTest/images/Poster-Casting.jpg">
    </div>
    <pane :type="'pane--left'" :bgImage="'/images/homepage/danseurs-2019.jpg'" :text="presentation"></pane>
    <pane :type="'pane--right'" :bgImage="'/images/homepage/spectacleAaZ.jpg'" :text="SpectacleAaZ"></pane>
    <pane :type="'pane--left'" :bgImage="'/c/PersonalityTest/images/casting-photo.jpg'" :text="CastingAaZ"></pane>


    <!-- Test -->
    <div class="Main" id="app">
      <Quiz />
    </div>
  </div>
</template>

<script>
import Quiz from "~/static/c/PersonalityTest/components/quiz.vue";

let data = {
  presentation:
    "<h2>La Commuz', c'est quoi ?</h2>" +
    "<p>La Commuz' est une comédie musicale organisée chaque année depuis 20 ans par une équipe de 80 étudiants de l'École Centrale de Lyon et de emlyon business school.</p>" +
    "<p>La Commuz’ réunit chaque année plus de 1000 spectateurs lors des soirées de spectacle au mois de mars. </p>",
  SpectacleAaZ:
    "<h2>Un spectacle imaginé de A à Z</h2>" +
    "<p>De l'élaboration du scénario en passant par les chorégraphies, la composition et l'orchestration des musiques, la mise en place de l'éclairage et du son, la création des costumes et des décors&hellip;</p>" +
    "<p>Tous les corps de métier du théâtre, du chant et de la danse sont réunis pour créer ce spectacle qui se veut d'une qualité professionnelle.</p>",
  CastingAaZ:
    "<h2>Bonne nouvelle : la Commuz' recrute !</h2>" +
    "<p>Quelque soit ton talent ou ta passion, la Commuz' t'accueille à bras ouverts pour l'aventure 2022 !  Les castings sont ouverts à toutes et tous et se dérouleront courant novembre.</p>" +
    "<p>Au programme : Danse 👯, Décors 🛠, Musique (Zikos) 🎻, VP Amour ❤️, Chant 🎤, Costumes 🪡, Acting 🎭, Son 📣, Lumière 💡,Composition 🎼. Fin des inscriptions le 20 Octobre à minuit !</p>" +
    "<center> <a target='_blank' rel='noopener' href='https://www.instagram.com/commuzlyon/' class='inline-link'> Pour s'inscrire c'est ici ! </a> </center>",
};

export default {
  name: "App",
  components: {
    Quiz
  },
  data: function () {
    return data;
    
  }
};  
</script>

<style  lang="scss" scoped>

@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");

body {
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    height: 100vh;
    background: linear-gradient(100deg,#621837,#47193b 40%);
    color: black;

    /* mocking native UI */
    // cursor: default !important; /* remove text selection cursor */
    user-select: none; /* remove text selection */
    // user-drag: none; /* disbale element dragging */
    display: flex;
    align-items: center;
    justify-content: center;
}
.Main{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2em;
        background: black;
    }

#home__hero {
  position: relative;
  width: 100%;
  height: 80vh;
  @media (orientation: landscape) {
    height: 100vh;
  }
  margin-bottom: 2em;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr auto 1fr;
  align-items: center;
  justify-items: center;

  #home__hero__logo {
    grid-area: 2 / 1 / 3 / -1;
    z-index: 1;
    width: 75%;
    @media (min-width: 992px) {
      width: 50%;
    }
  }

  #home__hero__scroll {
    grid-area: 3 / 1 / -1 / -1;
    z-index: 1;
    align-self: flex-start;
    // color: #e6e6e6;
    font-size: 1.5em;
    margin-top: 1.5em;
    cursor: pointer;
    user-select: none;

    img {
      transition: transform 0.2s ease-out;
    }
    &:hover img {
      transform: translateY(5px);
      transition: transform 0.3s cubic-bezier(0.42, 0, 0, 2.42);
    }
  }

  #home__hero_bg {
    grid-area: 1 / 1 / -1 / -1;
    z-index: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    filter: brightness(0.7);
  }
}
</style>
