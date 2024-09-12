<template>
  <div class="flex flex-col items-center space-y-5 my-8">

    <h1
      class="text-4xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-6xl dark:text-white text-center beyond">
      <!-- We may use text-gray-900 for light mode-->
      La Commuz'
    </h1>

    <p class="caviar flex flex-row items-center pb-5 text-center">
      <UIcon name="i-heroicons-sparkles" class="w-5 h-5 mx-2" />
      Retrouvez-nous sur vos réseaux préférés
      <UIcon name="i-heroicons-sparkles" class="w-5 h-5 mx-2" />
    </p>

    <a v-for="item in items" :key="item.text" :href="item.link" target="_blank">
      <UCard class="w-80 flex flex-col items-center">
        <div class="flex flex-row items-center space-x-2  caviar text-commuz-500">
          <UIcon :name="item.icon" class="w-5 h-5 mx-2" />
          {{ item.text }}
        </div>
      </UCard>
    </a>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    icon: 'i-heroicons-computer-desktop',
    text: 'Site web',
    link: 'https://commuz.fr',
  },
  {
    icon: 'i-ph-instagram-logo',
    text: 'Instagram',
    link: 'https://www.instagram.com/commuzlyon/',
  },
  {
    icon: 'i-ph-facebook-logo',
    text: 'Facebook',
    link: 'https://www.facebook.com/commuzlyon',
  },
  {
    icon: 'i-ph-youtube-logo',
    text: 'YouTube',
    link: 'https://www.youtube.com/channel/UCDZ2LRLcQB0MZ6hkB_RNDuQ',
  },
  {
    icon: 'i-ph-linkedin-logo',
    text: 'Linkedln',
    link: 'https://www.linkedin.com/company/commuz',
  },
];
</script>