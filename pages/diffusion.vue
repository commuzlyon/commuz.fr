<template lang="html">

<div id=diffusion>
  <navbar class="rel"></navbar>

    <pane :type="'pane--left'" :bgImage="'/images/Affiche-NocesDopium.png'" :text="texte"></pane>
    
  
</div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Pane from "@/components/Pane";



let texte = "<p id=diffusion>Retrouvez la diffusion de la Commuz' 2021: Noces d'Opium en cliquant sur ce lien <a href=\"https://youtu.be/AroAWdG9IK8\">https://youtu.be/AroAWdG9IK8</a></p>";

export default {
  components: { Navbar, Pane },
  data: function () {
    return { texte };
  },
};
</script>

<style lang="scss" scoped>
#tablePartenaires {
  display: flex;
  justify-content: center;
  text-align: center;

  img {
    margin-right: 1em;
    height: 200px;
    width: 200px;
  }
}

#sponsors {
  color: white;
  padding: 2rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  #sponsors__text {
    text-align: center;
    margin-bottom: 2rem;

    h2 {
      margin-bottom: 0.5em;
    }
  }

  #sponsors__logos {
    display: flex;
    width: 80%;
    @media only screen and (min-width: 992px) {
      width: 60%;
    }
    flex-wrap: wrap;
    justify-content: center;

    img {
      max-height: 100px;
      margin: 1rem;
    }
  }

  #partenaires_photo {
    display: flex;
    width: 80%;
    @media only screen and (min-width: 992px) {
      width: 60%;
    }
    flex-wrap: wrap;
    justify-content: center;

    img {
      max-height: 100px;
      margin: 1rem;
    }
  }
}

#diffusion {
  color: white;
  padding: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  margin-bottom: 1rem;

  a {
    color: var(--pink);
  }
}
</style>
