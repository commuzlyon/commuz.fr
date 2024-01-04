<template lang="html">
  <title>La Commuz' - Partenaires</title>
  <Meta name="description" content="Venez soutenir la Commuz en devenant partenaire."/>
<div>
  <div id="plaquette">
    <p>Téléchargez la <a class="inline-link" href="/Plaquette 2023.pdf" download>plaquette sponsors</a>, ou contactez nos responsables partenariats Aleksandra et Paul-Etienne à l'adresse <a href="mailto:commuzlyon@gmail.com">commuzlyon@gmail.com</a></p>
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
  respo1: {
    prenom: "Aleksandra",
    nom: "Krivokapic",
    telephone: "07 63 14 07 77",
    mail: "commuzlyon@gmail.com",
    image: "/images/Partenaires/KS.png",
  },
  respo2: {
    prenom: "Paul-Etienne",
    nom: "Clément",
    telephone: "",
    mail: "commuzlyon@gmail.com",
    image: "/images/Partenaires/PE.png",
  }
};

export default defineComponent({
  setup() {
    definePageMeta({
    layout: 'default',
  });
  },
  data: function () {
    return { respoPartenariats }
  },
});

</script>

<style lang="scss" scoped>
#tablePartenaires {
  display: flex;
  justify-content: center;
  text-align: center;

  img {
    margin-right: 1em;
    height: 281px;
    width: 281px; //200px;
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
