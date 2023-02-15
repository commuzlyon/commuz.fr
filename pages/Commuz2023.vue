
<template>
  <div>
    <!-- Description -->
    <div id="home__hero">
      <img id="home__hero__logo"  src="/Commuz2023/images/watermark-2023.png" alt="Commuz">
      <a id="home__hero__scroll" onclick="window.scrollTo(0,document.querySelector('#home__hero ~ div').offsetTop)"><img src="/icons/scroll-down.svg" alt="Flèche basse">Découvrir</a>
      <!-- Image d'en tête -->
      <picture id="home__hero_bg">
      <source  id="home__hero_bg" media="(min-width:560px)" srcset="/Commuz2023/images/poster-commuz2023.png">
      <img  id="home__hero_bg" src= "/Commuz2023/images/poster-mobile-commuz2023.png">
      </picture>
    </div>
    <pane id="infos1" :type="'pane--media-left'" :image="'/Commuz2023/images/famille.png'" :text="item.text1"></pane>
    <pane id="infos2" :type="'pane--media'" :image="'/Commuz2023/images/ecrivains.png'" :text="item.text2"></pane>
    <pane id="infos3" :type="'pane--media-left'" :image="'/Commuz2023/images/freres.png'" :text="item.text3"></pane>


    <!-- Trailer -->
    <div style="text-align:center; margin:2em">
      <h1>Trailer de l'édition 2023 !</h1> 
      <iframe id="youtube" width="560" height="315" src="https://www.youtube.com/embed/W1GMUZgqELY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <!-- Presentation des personnages -->
    <div style="text-align:center; margin:2em">
      <h1>Découvrir les personnages</h1>
    </div>
    <div>
      <carousel-3d  :controls-visible="true" :controls-prev-html="'&#10092; '" :controls-next-html="'&#10093;'" 
                :controls-width="30" :controls-height="60" :clickable="false" :width="350" :height="500" >
              <no-ssr>
          <slide v-for="poste in postes" :index="poste.ID">
            <!--<h2 class="title"> {{ poste.persona }}</h2>-->
            <figure><img :src="poste.image" style="padding-bottom:1em"></figure>
            <p>{{ poste.description }}</p>
          </slide>
          </no-ssr>
      </carousel-3d>
    </div>


    <!-- Billetterie -->

    <!-- Event Facebook -->

  </div>
</template>

<script>
import Slide from "~/static/Commuz2023/components/carousel-3d/Slide.vue";
import Carousel3d from "~/static/Commuz2023/components/carousel-3d/Carousel3d.vue";

let data = {
  text1:
    "<h2>Synopsis</h2>" +
    "<p align=justify >Au début du XIX siècle, l’ingénieur Robert Fawkes a la folle ambition de rallier les capitales européennes par le rail en construisant un train titanesque : le Léviathan. Ainsi est lancé en 1825 le plus grand projet jamais entrepris par l’Homme Des chantiers voient le jour partout en Europe, des ponts, des tunnels et des gares aux proportions inédites sont bâties. Seulement, les conditions de travail délétères des ouvriers conduisent à des contestations, qui s’amplifient rapidement pour devenir de véritables élans révolutionnaires, connus aujourd’hui sous le nom de Printemps de Peuples. Parmi les meneurs des insurrections socialistes, le jeune Français Thomas Ravet parvient à fédérer les groupes contestataires indépendants et crée un organisme puissant, la Confrérie Ouvrière, pour les représenter. Dès lors, l’opposition fait rage. Le Léviathan accompagne l’émergence d’une idéologie politique nouvelle : Le Libéralisme, alors que la Confrérie constitue désormais une force socialiste majeure.</p>",
  text2:
    "<p align=justify>1848, alors que le combat idéologique fait rage, la Confrérie Ouvrière est accusée d’avoir voulu prendre le pouvoir par la force. La Confrérie est dissoute, le socialisme enterré. Démarre alors une véritable chasse aux sorcières des anciens leaders de l’organisation, et de Thomas Ravet en particulier.</p>"+
    "<p align=justify>Nous sommes en 1851. Après 26 années de travaux, le Léviathan est enfin sur le point d’achever sa tournée inaugurale à destination de la Grande Exposition Universelle des Travaux de l’Industrie à Londres. La Confrérie et les évènements de 1848 se font tranquillement oublier, et les passagers profitent des joies du voyage. Mais désormais capable de relier Moscou à Londres, le Léviathan cristallise de nouveau les tensions entre deux mondes. Et dans l’ombre, il se murmure que la Confrérie serait de retour. </p>",
  text3:
    "<h2>Informations pratiques</h2>" +
    "<p>La Commuz' vous invite à nouveau à voyager les 3-4-5 mars !</p>"+
    "<p> <U>Adresse :</U> Théâtre Astrée, 6 Avenue Gaston Berger, 69100 Villeurbanne (accessible en tramway)</p>"+
    "<p> <U> Horaire d'ouverture des portes </U> : </p>"+
    "<ul><li> Vendredi : 19h </li> <li> Samedi : 19h </li> <li> Dimanche : 17h</li> </ul>" +
    "<p> Le spectacle commence 30 minutes après l'ouverture des portes.</p>"+
    "<center> <p> Ouverture de la billetterie générale le <strong style='color: var(--pink);'> 21 Février !</strong></p> "
    //"<center> <a target='_blank' rel='noopener' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' class='inline-link'> Pour acheter sa place c'est ici ! </a> </center>",
};


let information = {
    Robert: {
        persona: "Robert Fawkes",
        description:
            "Chers amis ! l’époque qui s’ouvre est celle du Libéralisme, de la Paix, et du triomphe de la Science. J’ai initié le plus grand chantier de l’Histoire pour bâtir le Léviathan.",
        notes: "",
        image: "/Commuz2023/images/Robert.png",
        ID : 0
    },
    Elisabeth: {
        persona: "Elisabeth Fawkes",
        description:
            "Ah non, votre réplique ne marche pas ! Je dois absolument finir cette maudite pièce avant l’arrivée à Londres. Mais je crois que ma plume m’abandonne…",
        notes: "",
        image: "/Commuz2023/images/Elisabeth.png",
        ID : 1
    },
    Daisy: {
        persona: "Daisy Fawkes",
        description:
            "Thomas, La Confrérie Ouvrière…  c’est de l’histoire ancienne. Moi aussi, je veux plaider la cause du socialisme, mais je le ferai à ma manière.",
        notes: "",
        image: "/Commuz2023/images/Daisy.png",
        ID : 2
    },
    Alex: {
        persona: "Alex",
        description:
            "Moi, je vis sur les planches, pas ailleurs ! Comédien vedette de la troupe d’Elisabeth, je lui suis tellement reconnaissant pour tout ce qu’elle m’a appris.",
        notes: "",
        image: "/Commuz2023/images/Alex.png",
        ID : 3
    },
    Thomas: {
        persona: "Thomas",
        description:
            "Confrères ! Amis ! Rejoignez-nous dans la lutte. La Confrérie Ouvrière n’est pas morte. Nous rétablirons la vérité.",
        notes: "",
        image: "/Commuz2023/images/Thomas.png",
        ID : 4
    },
    Helene: {
        persona: "Hélène",
        description:
            "Alors c’est vrai ? J’ai gagné ma place dans le Léviathan ! Je ne réalise pas encore, mais je sens que ça va être exceptionnel. Quelle joie de voyager hors de Paris !",
        notes: "",
        image: "/Commuz2023/images/Helene.png",
        ID : 5
    }
}

let background = "/Commuz2023/images/poster-commuz2023.png"

//if(screen.width < 1020) {
//  background = "/Commuz2023/images/poster-mobile-commuz2023.png";}
//else{ 
//  background= "/Commuz2023/images/Helene.png"}

export default {
  name: "App",
  components: {
    Carousel3d,
    Slide
  },
  data: function () {
    return {
      item : data,
      postes : information,
      bgImg : background
    };
    
  },
  head() {
    return {
      title: "La Commuz' - Commuz' 2023",
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
  margin-bottom: 0.5em;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr auto 1fr;
  align-items: center;
  justify-items: center;

  #home__hero__logo {
    grid-area: 2 / 1 / 3 / -1;
    z-index: 1;
    width: 95%;
    @media (min-width: 992px) {
      width: 75%;
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

#youtube{
  max-width : 100%;
}

</style>
