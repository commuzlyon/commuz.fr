<template>
<div>
  <div id="home__hero">
    <img id="home__hero__logo"  src="/images/homepage/Commuz_Titre.svg" alt="Commuz">
    <a id="home__hero__scroll" onclick="window.scrollTo(0,document.querySelector('#home__hero ~ div').offsetTop)"><img src="/icons/scroll-down.svg" alt="Flèche basse">Découvrir</a>
    <video id="home__hero_bg" poster="/images/homepage/poster-video-accueil.jpg" autoplay loop>
        <source src="/videos/video-intro-site-2021.webm" type="video/webm">
        <source src="/videos/video-intro-site-2021.mp4" type="video/mp4">
    </video>
  </div>
  <!-- Description -->
  <pane :type="'pane--left'" :bgImage="'/images/homepage/danseurs-2019.jpg'" :text="presentation"></pane>
  <pane :type="'pane--right'" :bgImage="'/images/homepage/spectacleAaZ.jpg'" :text="SpectacleAaZ"></pane>
  <!-- Témoignages -->
   <section id="testimonial">
    <div class="quote">
      <p>J'ai pris hier soir un grand plaisir, le spectacle est de grande qualité, son, lumière, costumes magnifiques, décors, le tout au service d'artistes de talents : musiciens, danseurs, chanteurs, acteurs-chanteurs.</p>
      <img src="/icons/quote_open.svg" alt="Guillemets">
      <div class="quote__author">
        <img src="/images/homepage/debouck.jpg" alt="Photo de Frank Debouck">
        <span>Frank Debouck &ndash; Directeur de l'École Centrale de Lyon entre 2011 et 2021 </span>
      </div>
    </div>

    <div class="quote">
      <p>Tout est parfaitement pensé et orchestré pour produire un spectacle unique et d’une qualité exceptionnelle. N’hésitez-pas à rejoindre l’aventure Commu’z en soutenant le talent de nos étuidant.e.s. Et n’oubliez-pas de venir les applaudir sur scène. Merci pour eux !</p>
      <img src="/icons/quote_open.svg" alt="Guillemets">
      <div class="quote__author">
        <img src="/images/homepage/PascalRay.jpg" alt="Photo de Pascal Ray">
        <span>Pascal Ray &ndash; Directeur de l'École Centrale de Lyon depuis 2021 </span>
      </div>
    </div>



   
  </section>
  <!-- Sponsors -->
  <sponsors></sponsors>
</div>
</template>

<script>
let data = {
  presentation:
    "<h2>La Commuz', c'est quoi ?</h2>" +
    "<p>La Commuz' est une comédie musicale organisée chaque année depuis 20 ans par une équipe de 80 étudiants de l'École Centrale de Lyon et de emlyon business school.</p>" +
    "<p>La Commuz’ réunit chaque année plus de 1000 spectateurs lors des soirées de spectacle au mois de mars. </p>",
  SpectacleAaZ:
    "<h2>Un spectacle imaginé de A à Z</h2>" +
    "<p>De l'élaboration du scénario en passant par les chorégraphies, la composition et l'orchestration des musiques, la mise en place de l'éclairage et du son, la création des costumes et des décors&hellip;</p>" +
    "<p>Tous les corps de métier du théâtre, du chant et de la danse sont réunis pour créer ce spectacle qui se veut d'une qualité professionnelle.</p>",
};
export default {
  layout: 'home',
  data: function () {
    return data;
    
  },
  head() {
    return {
      title: "La Commuz'",
    }
  }
};
</script>

<style lang="scss">
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

#testimonial {
  width: 90%;
  @media only screen and (min-width: 768px) {
    width: 80%;
  }
  @media only screen and (min-width: 992px) {
    width: 70%;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  @media only screen and (min-width: 768px) {
    padding: 4em;
  }
  margin: 3em 0;
  background: linear-gradient(100deg, #621837, #47193b 40%);

  .quote {
    max-width: 70ch;
    position: relative;
    margin-bottom: 1rem;
    margin-top: 1rem;

    & > img {
      position: absolute;
      top: -15px;
      left: -20px;
    }

    p {
      position: relative;
      z-index: 1;
      font-size: 1.2em;
      @media only screen and (min-width: 576px) {
        font-size: 1.3em;
      }
      margin-bottom: 1em;
    }
  }

  .quote__author {
    display: flex;
    align-items: center;
    color: rgb(228, 228, 228);

    & > img {
      height: 40px;
      width: 40px;
      border-radius: 100%;
      margin-right: 1rem;
    }
  }
}
</style>