
<template>
  <div>
    <!-- Description -->
    <div id="home__hero">
      <img id="home__hero__logo"  src="/c/PersonalityTest/images/Watermark-Casting.png" alt="Commuz">
      <a id="home__hero__scroll" onclick="window.scrollTo(0,document.querySelector('#home__hero ~ div').offsetTop)"><img src="/icons/scroll-down.svg" alt="Flèche basse">Découvrir</a>
      <img id="home__hero_bg" src="/c/PersonalityTest/images/Poster-Casting.jpg">
    </div>
    <pane :type="'pane--left'" :bgImage="'/images/homepage/danseurs-2019.jpg'" :text="item.presentation"></pane>
    <pane :type="'pane--right'" :bgImage="'/images/homepage/spectacleAaZ.jpg'" :text="item.SpectacleAaZ"></pane>
    <pane :type="'pane--left'" :bgImage="'/c/PersonalityTest/images/casting-photo.jpg'" :text="item.CastingAaZ"></pane>


    <!-- Test -->
    <div class="Main" id="app">
      <no-ssr>
      <Quiz />
      </no-ssr>
    </div>

    <!-- Presentation postes -->
    <div style="text-align:center">
      <h1>Parcourir les postes</h1>
    </div>
    <div>
      <carousel-3d  :controls-visible="true" :controls-prev-html="'&#10092; '" :controls-next-html="'&#10093;'" 
                :controls-width="30" :controls-height="60" :clickable="false" :width="350" :height="600">
              <no-ssr>
          <slide v-for="poste in postes" :index="poste.ID">
            <h2 class="title"> {{ poste.persona }}</h2>
            <figure><img :src="poste.image"></figure>
            <p>{{ poste.description }}</p>
          </slide>
          </no-ssr>
      </carousel-3d>
    </div>

  </div>
</template>

<script>
import Quiz from "~/static/c/PersonalityTest/components/quiz.vue";
import Slide from "~/static/c/PersonalityTest/components/carousel-3d/Slide.vue";
import Carousel3d from "~/static/c/PersonalityTest/components/carousel-3d/Carousel3d.vue";

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
    "<p>Quelque soit ton talent ou ta passion, la Commuz' t'accueille à bras ouverts pour l'aventure 2023 !  Les castings sont ouverts à toutes et tous et se dérouleront courant novembre.</p>" +
    "<p>Au programme : Danse 👯, Décors 🛠, Musique (Zikos) 🎻, VP Amour ❤️, Chant 🎤, Costumes 🪡, Acting 🎭, Son 📣, Lumière 💡,Composition 🎼 et partenariat 🤝. Fin des inscriptions le 21 Octobre à minuit !</p>" +
    "<center> <a target='_blank' rel='noopener' href='https://docs.google.com/forms/d/1ejyHhwJNPysFFgDL2GTDH7UEbBAqA1m8X102XW1IkAU/' class='inline-link'> Pour s'inscrire c'est ici ! </a> </center>",
};


let information = {
    AC: {
        persona: "Acteur.rice-Chanteur.euse",
        description:
            "Tu aimes faire du théâtre, chanter à pleins poumons, bouger ton petit corps et être sous le feu des projecteurs ? Aucun doute, tu es fait pour le poste d’AC. Tu incarneras un des personnages qui donneront vie à la Commuz 2023, et tu vivras une incroyable aventure artistique et humaine.",
        notes: "N'hésite pas à contacter Inès Battisti ou Jean Rannou si tu as la moindre question !",
        image: "/c/PersonalityTest/images/AC.jpg",
        ID : 0
    },
    Choriste: {
        persona: "Choriste",
        description:
            "Parce que ton pommeau de douche n’est pas le seul qui mérite d’entendre ta douce voix, rejoins-nous et mets le feu pendant la prochaine comédie musicale en devenant Choriste 🎤🎶",
        notes:
            "N'hésite pas à contacter Antonin Delorme ou Marguerite Lafeuillade si tu as la moindre question !",
        image: "/c/PersonalityTest/images/Choriste.jpg",
        ID : 1
    },
    Zikos: {
        persona: "Zikos/Musicien.nne",
        description:
            "Es-tu fait.e pour le pôle Zikos ? Si tu joues d'un instrument de musique et que tu aimes jouer en groupe, la réponse est oui ! Le pôle Zikos, c'est tout simplement l'orchestre de la Commuz' et donc  le meilleur pôle !",
        notes:
            "N'hésite pas à contacter Paul Kaassis ou Emilie Stentz si tu as la moindre question !",
        image: "/c/PersonalityTest/images/Zikos.jpg",
        ID : 2
    },
    Decors: {
        persona: "Décorateur.rice",
        description:
            "Une comédie musicale c'est cool, mais une comédie musicale qui te fait voyager et qui te transporte vers une autre époque, c'est encore mieux ! Quoi de plus idéal qu'une scène remplie de décors hyper stylés pour y parvenir ? Rejoindre le pôle Décors, c'est concevoir, réaliser et fabriquer l'ensemble des décors du spectacle. ",
        notes: "N'hésite pas à contacter Adèle Lefevre ou Chloé Mrtte si tu as la moindre question !",
        image: "/c/PersonalityTest/images/Decors.jpg",
        ID : 3
    },
    Son: {
        persona: "VP Son",
        description:
            "Que serait la Commuz sans une sonorisation digne de ce nom ? Si tu es fan de son, de beau matos et que tu souhaite faire vibrer les cœurs du publique autant que leurs fauteuils, alors le pôle son t’attend à bras ouverts ! Que tu sois débutant ou dbs(wo)man aguerri, tu as ta place ici !",
        notes: "N'hésite pas à contacter Agustin Soux ou Clément Pacoret si tu as la moindre question !",
        image: "/c/PersonalityTest/images/Son.jpg",
        ID : 4
    },
    Costume: {
        persona: "VP Costumes",
        description:
            "Le pôle costume est un pilier de la Commuz’ : il doit réaliser une centaine de costumes pour habiller les acteurs-chanteurs, les choristes, les danseurs, tout en s'inscrivant dans le thème, l'ambiance musicale et l'époque de la pièce.",
        notes:
            "N'hésite pas à contacter Imane Demnati ou Jean Turck si tu as la moindre question !",
        image: "/c/PersonalityTest/images/Costume.jpg",
        ID : 5
    },
    Amour: {
        persona: "VP Amour",
        description:
            "Un humain a besoin en moyenne de 2500 kcal par jour. Pendant un WER ça peut monter facilement à 10 000, surtout pour les Zikos qui passent leurs journées à courir dans tous les sens !! Autant dire que sans une mécanique bien huilée pour nourrir nos petits Commuzards, le spectacle n’aurait jamais lieu.",
        notes:
            "N'hésite pas à contacter Aurore Granier si tu as la moindre question !",
        image: "/c/PersonalityTest/images/Amour.jpg",
        ID : 6
    },
    Composition: {
        persona: "VP Composition",
        description:
            "La composition à la Commuz c'est comme le cœur chez l'homme, c'est elle qui lui donne toutes ses émotions. Pour composer à la Commuz, nul besoin d'un niveau stratosphérique, il suffit de faire preuve de créativité. En tant que compositeur tu pourras écrire et imaginer les musiques jouées par l'orchestre qui en mettront plein la vue aux spectateurs.",
        notes:
            "N'hésite pas à contacter Antonin Rouffet ou Léopold Kowalski si tu as la moindre question !",
        image: "/c/PersonalityTest/images/Compo.jpg",
        ID : 7
    },
    Lumiere: {
        persona: "Respo Lumière",
        description:
            "La ou le Respo Lumière c’est la personne qui s’occupe de A à Z de la mise en scène lumineuse de la Commuz’.  Elle doit travailler en étroite collaboration avec les metteurs en scène et les coordinateurs artistiques pour donner une cohérence lumineuse au spectacle !",
        notes:
            "N'hésite pas à contacter Benjamin Denise si tu as la moindre question !",
        image: "/c/PersonalityTest/images/Lumiere.jpg",
        ID : 8
    },
    Danse: {
        persona: "Danseur.euse",
        description:
            "Le pôle danse, c’est un pôle bourré de talents issus de différents parcours dans la danse (donc n’hésite pas à t’inscrire aux castings que tu sois débutant.e, avancé.e, classique, contempo ou hip-hop) et de personnalités toutes aussi géniales les unes que les autres.",
        notes:
            "N'hésite pas à contacter Margaux Aloin ou Sarah Mrtn si tu as la moindre question !",
        image: "/c/PersonalityTest/images/Danse.jpg",
        ID : 9
    },
    Partenariat: {
        persona: "Danseur.euse",
        description:
            "Le VP Partenariat à la Commuz, c'est le coup de pouce de tout le monde. ça permet de travailler avec tout le monde, de pouvoir intervenir sur des projets super variés des le début du mandat. ",
        notes:
            "N'hésite pas à contacter Benjamin Denise si tu as la moindre question !",
        image: "/c/PersonalityTest/images/Partenariat.jpg",
        ID : 10
    }
}


export default {
  name: "App",
  components: {
    Quiz,
    Carousel3d,
    Slide
  },
  data: function () {
    return {
      item : data,
      postes : information
    };
    
  },
  head() {
    return {
      title: "La Commuz' - Castings 2023",
    }
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
    color: blue;

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
.carousel-3d-container {
  .carousel-3d-slide {
    padding: 20px;
    border-radius: 1px;
    border-color: white;
    border-style: solid;
    border-radius : 0.5rem;
    background-size: cover;
    background-color: black;
    display: block;
    margin: 0;
    box-sizing: border-box;
    text-align: center;
    
    .title { font-size: 22px; }
  }
}

.carousel-3d-container figure {
  margin: 0;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}

</style>
