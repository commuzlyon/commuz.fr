<template lang="html">
  <title>La Commuz' - Partenaires</title>
  <Meta name="description" content="Venez soutenir la Commuz en devenant partenaire." />
  <div>
    <div id="plaquette">
      <p>Téléchargez la <a class="inline-link" href="/Plaquette-2024.pdf" download>plaquette sponsors</a>, ou contactez
        nos responsables partenariats Vincent et Lou à l'adresse <a
          href="mailto:partenariat@commuz.fr">partenariat@commuz.fr</a></p>
    </div>

    <div>
      <carousel :itemstoshow="2.5" :wrap-around="true" :autoplay="2000" :pauseAutoplayOnHover="true">
        <slide v-for="partenaire in respoPartenariats" :key="partenaire.telephone" class="slide">
          <div class="carousel-item">
            <figure><img class="photos" :src="partenaire.image"></figure>
            <p class="nom-prenom">{{ partenaire.prenom + ' ' + partenaire.nom }}</p>
            <p class="telephone">{{ partenaire.telephone }}</p>
          </div>
        </slide>

        <template #addons>
          <navigation />
        </template>
      </carousel>
    </div>

    <div style="text-align:center; margin:2em">
      <h2>Les coulisses de la Commuz' 2023</h2>
      <iframe class="youtube" src="https://www.youtube.com/embed/0in9oBqaI0I?si=p0K2z6m5mEhMX8VJ"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    </div>


    <sponsors></sponsors>
  </div>
</template>

<script>
let respoPartenariats = {
  respo1: {
    prenom: "Vincent",
    nom: "Rouaret",
    telephone: "06 70 68 02 23",
    mail: "commuzlyon@gmail.com",
    image: "/images/Partenaires/VR.jpg",
  },
  respo2: {
    prenom: "Lou",
    nom: "Taffanel",
    telephone: "07 82 36 63 30",
    mail: "commuzlyon@gmail.com",
    image: "/images/Partenaires/LT.jpg",
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
    color: #ee8c04;
  }
}

@media (min-width: 768px) {

  .photos {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    margin: 0 auto;
  }

  .nom-prenom {
    font-size: 1.5rem;
  }

  .telephone {
    font-size: 1.2rem;
  }

  .youtube {
    width: 800px;
    height: 450px;
  }
}

@media (max-width: 767px) {

  .photos {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 0 auto;
  }

  .nom-prenom {
    font-size: 1.5rem;
  }

  .telephone {
    font-size: 1.2rem;
  }

  .youtube {
    width: 300px;
    height: 200px;
  }
}
</style>
