<template lang="html">

<div>
  <navbar class="rel"></navbar>

  <div id="plaquette">
    <p>Téléchargez la <a class="inline-link" href="/Plaquette 2021.pdf" download>plaquette sponsors</a>, ou contactez nos responsables partenariats Pauline, Jonathan et Julie à l'adresse <a href="mailto:commuzlyon@gmail.com">commuzlyon@gmail.com</a></p>
  </div>

  <div id="tablePartenaires">
    <table>
      <tr>
        <td v-for="partenaire in respoPartenariats">
          <img :src="partenaire.image" alt="" id="partenaires_photo">
        </td>
      <tr>
        <td v-for="partenaire in respoPartenariats">
          <p>{{ partenaire.prenom }} {{ partenaire.nom  }}
          
          <br>
          Téléphone : {{ partenaire.telephone }}</p>
        </td>
      </tr>
    </table>
  </div>

  <section id="sponsors">
    <div id="sponsors__text">
      <h2>Ils nous ont soutenus</h2>
      <p>Vous aussi, entrez en scène à nos côtés !</p>
      <p>Merci à nos partenaires qui nous aident et nous soutiennent dans la réalisation de ce spectacle</p>
      <!--<p>Téléchargez la <a class="inline-link" href="/Plaquette 2021.pdf" download>plaquette sponsors</a>, ou contactez nos responsables partenariat <router-link class="inline-link" active-class="navbar__link--active" to="/partenariats"><span>Julie et Jonathan.</span></router-link></p>-->
      
    </div>
    <div id="sponsors__logos">
      <a href="https://www.ec-lyon.fr/" target="_blank" rel="noopener"><img src="/logos/ecl.svg" alt="Logo de l'École Centrale de Lyon"></a>
      <a href="https://www.em-lyon.com" target="_blank" rel="noopener"><img src="/logos/em_corpo.svg" alt="Logo de la corpo emlyon business school"></a>
      <a href="http://www.crous-lyon.fr/" target="_blank" rel="noopener"><img src="/logos/crous.png" alt="Logo du Crous de Lyon"></a>
      <a href="https://www.universite-lyon.fr/" target="_blank" rel="noopener"><img src="/logos/udl.svg" alt="Logo de l'Université de Lyon"></a>
      <!--<img src="/logos/petitballon.svg" alt="Logo de Le Petit Ballon">-->
    </div>


  </section>
</div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Pane from "@/components/Pane";

let respoPartenariats = {
  respo3: {
    prenom: "Saban",
    nom: "Suresh",
    telephone: "07 81 65 10 85",
    mail: "commuzlyon@gmail.co",
    image: "/images/Partenaires/Saban_Suresh.jpg",
  },
  respo1: {
    prenom: "Aurélia",
    nom: "Zhang",
    telephone: "",
    mail: "commuzlyon@gmail.co",
    image: "/images/Partenaires/_.jpg",
  },
  respo2: {
    prenom: "Eulalie",
    nom: "Valha Bouret",
    telephone: "",
    mail: "commuzlyon@gmail.com",
    image: "/images/Partenaires/_.jpg",
  },
};

let data = {};

export default {
  components: { Navbar, Pane },
  data: function () {
    return { respoPartenariats, data };
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

#plaquette {
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
