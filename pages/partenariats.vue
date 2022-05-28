<template lang="html">

<div>
  <div id="plaquette">
    <p>Téléchargez la <a class="inline-link" href="/Plaquette 2022.pdf" download>plaquette sponsors</a>, ou contactez notre responsable partenariats Thomas à l'adresse <a href="mailto:commuzlyon@gmail.com">commuzlyon@gmail.com</a></p>
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
    prenom: "Thomas",
    nom: "Houziel",
    telephone: "06 62 96 67 92",
    mail: "commuzlyon@gmail.com",
    image: "/images/Partenaires/Thomas.jpg",
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
