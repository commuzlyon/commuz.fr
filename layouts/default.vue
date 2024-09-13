<template>
  <div>
    <Navbar />
    <slot />
    <Foot />
  </div>
</template>

<script setup lang="ts">
/*
Set `castingOpen` to true to enable the casting page link in the navigation bar. It will also show a card "La Commuz' recrute" on the main page
*/
const castingOpen = useState('castingOpen')
castingOpen.value = true
</script>
