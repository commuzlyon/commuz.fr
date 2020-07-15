<template lang="html">
<div id="main">
  <p>Page en construction</p>
  <p>Retour à l'<router-link class="navbar__link" active-class="navbar__link--active" to="/" exact>acceuil</router-link></p>
</div>
</template>

<script>
import Pane from '@/components/Pane'

export default {
  components: { Pane },
}
</script>

<style lang="scss">

#main {

  justify-content: center;
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 2rem;

  a {
    color: var(--pink);
  }
}

</style>
