<template lang="html">

<div>
  <div id="plaquette">
    <p>Téléchargez la <a class="inline-link" href="/Plaquette 2022.pdf" download>plaquette sponsors</a>, ou contactez nos responsables partenariats Saban, Aurélia et Eulalie à l'adresse <a href="mailto:commuzlyon@gmail.com">commuzlyon@gmail.com</a></p>
  </div>

  <div id="tablePartenaires">
    <table>
      <tr>
        <td v-for="partenaire in respoPartenariats">
          <img :src="partenaire.image" alt="" id="partenaires_photo">
        </td>
      </tr>
      <tr>
        <td v-for="partenaire in respoPartenariats">
          <p>{{ partenaire.prenom }} {{ partenaire.nom  }}
          
          <br>
          {{ partenaire.telephone }}</p>
        </td>
      </tr>
    </table>
  </div>

  <sponsors></sponsors>
</div>
</template>

<script>
let respoPartenariats = {
  respo3: {
    prenom: "Saban",
    nom: "Suresh",
    telephone: "07 81 65 10 85",
    mail: "commuzlyon@gmail.co",
    image: "/images/Partenaires/saban.png",
  },
  respo1: {
    prenom: "Aurélia",
    nom: "Zhang",
    telephone: "06 50 93 88 14",
    mail: "commuzlyon@gmail.co",
    image: "/images/Partenaires/aurelia.png",
  },
  respo2: {
    prenom: "Eulalie",
    nom: "Valha Bouret",
    telephone: "06 12 01 76 54",
    mail: "commuzlyon@gmail.com",
    image: "/images/Partenaires/eulalie.png",
  },
};

let data = {};

export default {
  data: function () {
    return { respoPartenariats, data };
  },
  head() {
    return {
      title: "La Commuz' - Partenariats",
    }
  }
};
</script>

<style lang="scss" scoped>
#tablePartenaires {
  display: flex;
  justify-content: center;
  text-align: center;

  img {
    margin-right: 1em;
    height: 281px;
    width: 200px;
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
