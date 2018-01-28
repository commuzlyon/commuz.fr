<template lang="html">
  <div>
    <navbar class="rel"></navbar>
    <div id="years-list">
      <router-link class="inline-link" v-for="(annee, id) in anneesEquipes" :key="id" :to="`/equipe/${annee}`" exact>{{ annee }}</router-link>
    </div>
    <nuxt-child/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

let anneesEquipes = [ '2018', '2017' ]

export default {
  components: { Navbar },
  data: function () {
    return { anneesEquipes }
  }
}
</script>

<style lang="scss">
#years-list {
  padding: 1rem 5rem 3rem 5rem;
  position: relative;

  a {
    margin-right: 0.8em;
    font-size: 1.9em;
    color: rgb(120, 120, 120);

    &.nuxt-link-active {
      color: white;
    }
  }
}

.section {
  margin-bottom: 4rem;
  display: flex;
  flex-direction: column;

  h2 {
    align-self: center;
    font-size: 1.1em;
  }
}

.section__description {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;

  img {
    margin-right: 1em;
    height: 100px;
    width: 100px;
  }

  h2 {
    margin-bottom: 0;
  }
}

.section__membres {
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.trombi_membre {
  margin: 1em;
  display: grid;
  justify-items: center;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: auto;

  img {
    grid-area: 1 / 1 / 2 / 2;
    border-radius: 50%;
    height: 150px;
    margin-bottom: 1em;
  }

  .membre_apparition {
    z-index: 1;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .membre_apparition:hover {
    opacity: 1;
  }

  p {
    grid-row-start: 2;
    text-align: center;
    font-size: 0.8em;
    line-height: 1.2em;
  }
}
</style>
