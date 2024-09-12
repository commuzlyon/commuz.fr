<template>
  <div class="text-base">
    <NuxtLink :to="to" class="animated-nuxt-link flex flex-row items-center">
      <UIcon v-if="lefticon" :name="lefticon" class="w-5 h-5 mr-2" />

      {{ text }}
      <UIcon v-if="icon" :name="icon" class="w-5 h-5 ml-2" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
  to: string;
  lefticon?: string;
  icon?: string;
}>();
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: white;

  &:active,
  &:focus {
    outline: none;
  }
}


// inlines links with hover animation

.animated-nuxt-link {
  @media only screen and (min-width: 768px) {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      left: 0;
      top: 1.25em;
      opacity: 0.5;
      background: currentColor;
      transform: scale3d(0, 1, 1);
      transform-origin: 100% 50%;
      transition: transform 0.5s;
      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    }

    &:hover {
      &::before {
        transform: scale3d(1, 1, 1);
        transition-timing-function: ease;
        transform-origin: 0% 50%;
      }
    }
  }
}

.inline-link-black {
  @media only screen and (min-width: 768px) {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      left: 0;
      top: 1.25em;
      opacity: 0.5;
      background: currentColor;
      color: black;
      transform: scale3d(0, 1, 1);
      transform-origin: 100% 50%;
      transition: transform 0.5s;
      transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    }

    &:hover {
      &::before {
        transform: scale3d(1, 1, 1);
        transition-timing-function: ease;
        transform-origin: 0% 50%;
        color: black;
      }
    }
  }
}
</style>