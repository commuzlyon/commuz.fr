<template lang="html">

  <div>
    <navbar class="rel"></navbar>

<section id="sponsors">
    <div id="sponsors__text">
      <h2>Ils nous ont soutenus</h2>
      <p>Vous aussi, entrez en scène à nos côtés !</p>
      <p>Merci à nos partenaires qui nous aident et nous soutiennent dans la réalisation de ce spectacle</p>
      <!--<p>Téléchargez la <a class="inline-link" href="/Plaquette 2019.pdf" download>plaquette sponsors</a>, ou contactez nos responsables partenariat <router-link class="inline-link" active-class="navbar__link--active" to="/partenariats"><span>Julie et Jonathan.</span></router-link></p>-->
      
    </div>
    <div id="sponsors__logos">
      <a href="https://www.ec-lyon.fr/" target="_blank" rel="noopener"><img src="/logos/ecl.svg" alt="Logo de l'École Centrale de Lyon"></a>
      <a href="https://www.em-lyon.com" target="_blank" rel="noopener"><img src="/logos/em_corpo.svg" alt="Logo de la corpo emlyon business school"></a>
      <a href="http://www.crous-lyon.fr/" target="_blank" rel="noopener"><img src="/logos/crous.png" alt="Logo du Crous de Lyon"></a>
      <a href="https://www.universite-lyon.fr/" target="_blank" rel="noopener"><img src="/logos/udl.svg" alt="Logo de l'Université de Lyon"></a>
      <!--<img src="/logos/petitballon.svg" alt="Logo de Le Petit Ballon">-->
    </div>
</section>

<div id="plaquette">
  <pane :type="'pane--right'" :bgImage="'/images/couverturePlaquette.jpg'" :text="data.plaquette"></pane>
</div>
    <table id="tablePartenaires">
      <tr>
        <td v-for="partenaire in respoPartenariats">
          {{ partenaire.nom }} {{ partenaire.prenom  }}
          <br>
          Email: {{ partenaire.mail }}
          <br>
          Télephone: {{ partenaire.telephone }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Pane from '@/components/Pane'


let respoPartenariats = [
  {
    prenom: "Jonathan",
    nom: "Tata",
    telephone: "06 77 77 77 77",
    mail: "fff@gmail.com"
  },
  {
    prenom: "Julie",
    nom: "Humayou",
    telephone: "06 66 66 66 66",
    mail: "ggg@gmail.com"
  }
]

let data = {
  plaquette: '<p>Vous pouvez retrouver la plaquette sponsors en cliquant <a id="dlPlaquette" class="inline-link" href="/Plaquette 2019.pdf" download>ici</a>'
}

export default {
  components: { Navbar, Pane },
  data: function () {
    return {respoPartenariats, data}
  }
}
</script>

<style lang="scss" scoped>

#tablePartenaires 
{
  display:flex;
  justify-content: center;
  text-align: center;
}

#sponsors {
  color: white;
  padding: 2rem;
  margin-bottom: 2rem;
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
}

#dlPlaquette {
  color: var(--pink);
}


</style>
