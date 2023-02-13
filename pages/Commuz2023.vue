
<template>
  <div>
    <!-- Description -->
    <div id="home__hero">
      <img id="home__hero__logo"  src="/c/PersonalityTest/images/Watermark-Casting.png" alt="Commuz">
      <a id="home__hero__scroll" onclick="window.scrollTo(0,document.querySelector('#home__hero ~ div').offsetTop)"><img src="/icons/scroll-down.svg" alt="Flèche basse">Découvrir</a>
      <!-- Image d'en tête -->
      <img id="home__hero_bg" src="/c/PersonalityTest/images/Poster-Casting.jpg">
    </div>
    <pane id="infos1" :type="'pane--media-left'" :image="'/Commuz2023/images/famille.png'" :text="item.text1"></pane>
    <pane id="infos2" :type="'pane--media'" :image="'/Commuz2023/images/ecrivains.png'" :text="item.text2"></pane>
    <pane id="infos3" :type="'pane--media-left'" :image="'/Commuz2023/images/freres.png'" :text="item.text3"></pane>


    <!-- Trailer -->
    <div style="text-align:center; margin:2em">
      <h1>Trailer de l'édition 2023 !</h1>
      <iframe  src="//www.youtube.com/embed/P2c3stcFeZo" width="560" height="315" allowfullscreen="" frameborder="0"></iframe>
    </div>
    <!-- Presentation des personnages -->
    <div style="text-align:center; margin:2em">
      <h1>Découvrir les personnages</h1>
    </div>
    <div>
      <carousel-3d  :controls-visible="true" :controls-prev-html="'&#10092; '" :controls-next-html="'&#10093;'" 
                :controls-width="30" :controls-height="60" :clickable="false" :width="350" :height="600">
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
    "<h2>Lorem Ipsum</h2>" +
    "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra ut justo eget consectetur. Etiam dictum felis non mi egestas, non molestie sem consequat. Vestibulum tempus massa nec risus aliquam rhoncus. Nullam fermentum ex eu congue porta. Proin eu ligula a erat congue iaculis. Nunc mollis blandit accumsan. Integer leo elit, tempus non dapibus a, consectetur sed sem. Morbi pretium scelerisque vestibulum. Praesent ac accumsan libero. Integer commodo eu elit vel blandit. Donec elementum pretium dui, feugiat molestie arcu dapibus et. Nulla nunc ipsum, porta varius sem sit amet, facilisis sodales libero.</p>",
  text2:
    "<h2>Lorem Ipsum</h2>" +
    "<p>Donec ac ex in erat aliquam volutpat sit amet vehicula nisi. Cras imperdiet in nisi pretium fringilla. Integer id condimentum leo. Phasellus erat velit, egestas vitae erat quis, fermentum suscipit nunc. Curabitur tempor lorem a viverra auctor.  .</p>",
  text3:
    "<h2>Lorem Ipsum</h2>" +
    "<p>Vivamus a orci placerat, ultrices mi quis, condimentum est. Aliquam a augue eu sapien consectetur interdum. Praesent quis turpis sit amet quam facilisis fermentum. Praesent vestibulum auctor varius. Suspendisse eget ullamcorper tellus, eget pulvinar neque. Maecenas pellentesque tellus a urna hendrerit, non dignissim ante lobortis. Maecenas quis ligula et nibh consectetur tempor. Duis sodales ut dui pulvinar dignissim. Mauris tempor placerat enim, et venenatis nibh iaculis ac. Cras sit amet libero at neque condimentum luctus. Nam interdum nibh quis purus ultricies, in vestibulum odio semper. Etiam pretium velit vitae sapien porta, convallis pharetra mi ultricies. Proin ornare quis mauris id euismod.</p>" +
    "<center> <a target='_blank' rel='noopener' href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley' class='inline-link'> Pour acheter sa place c'est ici ! </a> </center>",
};


let information = {
    Robert: {
        persona: "Robert Fawkes",
        description:
            "Donec ac ex in erat aliquam volutpat sit amet vehicula nisi. Cras imperdiet in nisi pretium fringilla. Integer id condimentum leo. Phasellus erat velit, egestas vitae erat quis, fermentum suscipit nunc. Curabitur tempor lorem a viverra auctor.  ",
        notes: "",
        image: "/Commuz2023/images/Robert.png",
        ID : 0
    },
    Elisabeth: {
        persona: "Elisabeth Fawkes",
        description:
            "Donec ac ex in erat aliquam volutpat sit amet vehicula nisi. Cras imperdiet in nisi pretium fringilla. Integer id condimentum leo. Phasellus erat velit, egestas vitae erat quis, fermentum suscipit nunc. Curabitur tempor lorem a viverra auctor.  ",
        notes: "",
        image: "/Commuz2023/images/Elisabeth.png",
        ID : 1
    },
    Daisy: {
        persona: "Daisy Fawkes",
        description:
            "Donec ac ex in erat aliquam volutpat sit amet vehicula nisi. Cras imperdiet in nisi pretium fringilla. Integer id condimentum leo. Phasellus erat velit, egestas vitae erat quis, fermentum suscipit nunc. Curabitur tempor lorem a viverra auctor.  ",
        notes: "",
        image: "/Commuz2023/images/Daisy.png",
        ID : 2
    },
    Alex: {
        persona: "Alex",
        description:
            "Donec ac ex in erat aliquam volutpat sit amet vehicula nisi. Cras imperdiet in nisi pretium fringilla. Integer id condimentum leo. Phasellus erat velit, egestas vitae erat quis, fermentum suscipit nunc. Curabitur tempor lorem a viverra auctor.  ",
        notes: "",
        image: "/Commuz2023/images/Alex.png",
        ID : 3
    },
    Thomas: {
        persona: "Thomas",
        description:
            "Donec ac ex in erat aliquam volutpat sit amet vehicula nisi. Cras imperdiet in nisi pretium fringilla. Integer id condimentum leo. Phasellus erat velit, egestas vitae erat quis, fermentum suscipit nunc. Curabitur tempor lorem a viverra auctor.  ",
        notes: "",
        image: "/Commuz2023/images/Thomas.png",
        ID : 4
    },
    Helene: {
        persona: "Hélène",
        description:
            "Donec ac ex in erat aliquam volutpat sit amet vehicula nisi. Cras imperdiet in nisi pretium fringilla. Integer id condimentum leo. Phasellus erat velit, egestas vitae erat quis, fermentum suscipit nunc. Curabitur tempor lorem a viverra auctor.  ",
        notes: "",
        image: "/Commuz2023/images/Helene.png",
        ID : 5
    }
}


export default {
  name: "App",
  components: {
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

#youtube{
  max-width : 100%;
}

</style>
