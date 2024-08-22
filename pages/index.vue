<template>
  <div>
    <title>La Commuz'</Title>
    <Meta name="description"
      content="La Commuz' est une comédie musicale organisée chaque année depuis 20 ans par une équipe de près de 100 étudiants de l'École Centrale de Lyon et de l'EMLyon." />

    <IndexVideoTitle />
    <!-- Description -->
    <pane :type="'pane--left'" :bg-image="'/images/homepage/danseurs-2019.jpg'" :text="presentation" />
    <pane :type="'pane--right'" :bg-image="'/images/homepage/spectacleAaZ.jpg'" :text="SpectacleAaZ" />
    <!-- Témoignages -->
    <section id="testimonial">
      <div class="quote">
        <p>J'ai pris hier soir un grand plaisir, le spectacle est de grande qualité, son, lumière, costumes magnifiques,
          décors, le tout au service d'artistes de talents : musiciens, danseurs, chanteurs, acteurs-chanteurs.</p>
        <img src="/icons/quote_open.svg" alt="Guillemets">
        <div class="quote__author">
          <img src="/images/homepage/debouck.jpg" alt="Photo de Frank Debouck">
          <span>Frank Debouck &ndash; Directeur de l'École Centrale de Lyon entre 2011 et 2021 </span>
        </div>
      </div>

      <div class="quote">
        <p>Tout est parfaitement pensé et orchestré pour produire un spectacle unique et d'une qualité exceptionnelle.
          N'hésitez-pas à rejoindre l'aventure Commuz' en soutenant le talent de nos étudiant.e.s. Et n'oubliez-pas de
          venir les applaudir sur scène. Merci pour eux !</p>
        <img src="/icons/quote_open.svg" alt="Guillemets">
        <div class="quote__author">
          <img src="/images/homepage/PascalRay.jpg" alt="Photo de Pascal Ray">
          <span>Pascal Ray &ndash; Directeur de l'École Centrale de Lyon depuis 2021 </span>
        </div>
      </div>




    </section>
    <!-- Sponsors -->
    <Sponsors />
  </div>
</template>

<script>
import Pane from '~/components/Pane.vue';
import Sponsors from '~/components/Sponsors.vue';

const data = {
  presentation:
    "<h2>La Commuz', c'est quoi ?</h2>" +
    "<p>La Commuz' est une comédie musicale organisée chaque année depuis 20 ans par une équipe de près de 100 étudiants de l'École Centrale de Lyon et de l'EMLyon.</p>" +
    "<p>La Commuz’ réunit chaque année plus de 1200 spectateurs lors des soirées de spectacle au mois de mars. </p>",
  SpectacleAaZ:
    "<h2>Un spectacle imaginé de A à Z</h2>" +
    "<p>De l'élaboration du scénario en passant par les chorégraphies, la composition et l'orchestration des musiques, la mise en place de l'éclairage et du son, la création des costumes et des décors&hellip;</p>" +
    "<p>Tous les corps de métier du théâtre, du chant et de la danse sont réunis pour créer ce spectacle qui se veut d'une qualité professionnelle.</p>",
};

export default defineComponent({
  setup() {
    definePageMeta({
      layout: 'home',
      components: { Sponsors, Pane }
    });
  },
  data: function () {
    return data;
  },

});
</script>

<style lang="scss">
#testimonial {
  width: 90%;

  @media only screen and (min-width: 768px) {
    width: 80%;
  }

  @media only screen and (min-width: 992px) {
    width: 70%;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em;

  @media only screen and (min-width: 768px) {
    padding: 4em;
  }

  margin: 3em 0;
  background: linear-gradient(100deg, #de8406, #e72203 100%);

  .quote {
    max-width: 70ch;
    position: relative;
    margin-bottom: 1rem;
    margin-top: 1rem;

    &>img {
      position: absolute;
      top: -15px;
      left: -20px;
    }

    p {
      position: relative;
      z-index: 1;
      font-size: 1.2em;

      @media only screen and (min-width: 576px) {
        font-size: 1.3em;
      }

      margin-bottom: 1em;
    }
  }

  .quote__author {
    display: flex;
    align-items: center;
    color: rgb(228, 228, 228);

    &>img {
      height: 40px;
      width: 40px;
      border-radius: 100%;
      margin-right: 1rem;
    }
  }
}
</style>