<template>
  <div class="flex flex-col items-center space-y-5 my-8">

    <h1 class="text-4xl font-extrabold md:text-5xl lg:text-6xl dark:text-white text-center flex flex-col ">
      <!-- We may use text-gray-900 for light mode-->
      <span>Bonne nouvelle</span>
      <span>La Commuz' recrute !</span>
    </h1>

    <div class="flex flex-col gap-4 md:px-40 px-10 items-center justify-center ">
      <div class="md:w-1/2">
        Quelque soit ton talent ou ta passion, la Commuz' t'accueille à bras ouverts pour l'aventure 2024 ! Les
        castings sont ouverts à toutes et tous.
      </div>
      <div class="md:w-1/2">
        Au programme : Danse 👯, Décors 🛠, Musique (Zikos) 🎻, VP Amour ❤️, Chant 🎤, Costumes 🪡, Acting 🎭, Son 📣,
        Projection 📽, Composition 🎼 et Partenariat 🤝.
      </div>
      <div>
        <AnimatedNuxtLink text="Découvrir la Commuz'" to="/" icon="i-heroicons-arrow-long-right-solid" />
      </div>
    </div>

    <div class="flex flex-col gap-4 md:px-40 px-10 items-center justify-center pt-10">
      <div class="w-3/4 flex flex-row gap-4 items-center  ">
        <UIcon name="i-heroicons-calendar-days" class="w-20 h-20" />
        <span class="flex flex-col">
          <span class="font-bold">Castings anticipés</span>
          Réservés aux 2A/3A/4A de l'emlyon et Centrale. Inscription entre le 8 août et le 17 septembre
          <AnimatedNuxtLink text="Formulaire d'inscription"
            to="https://docs.google.com/forms/d/e/1FAIpQLSfSXolt-PMM8c7XBdwA6NHZtXAUnjglKZDcd4E10RjSWU9yvA/viewform"
            lefticon="i-heroicons-link" />
        </span>
      </div>

      <div class="w-3/4 flex flex-row gap-4 items-center  ">
        <UIcon name="i-heroicons-calendar-days" class="w-20 h-20" />
        <span class="flex flex-col">
          <span class="font-bold">Castings généraux</span>
          Ouverts à tout élève de l'emlyon et Centrale. Inscription à partir du 2 octobre
        </span>
      </div>
    </div>

    <!-- 
    <div class="flex flex-col gap-4 md:px-40 px-10 items-center justify-center pt-10">
      Découvrez les postes

      <HeroCarousel title="Danseurs et danseuses" :reversed="false" :images="[
        '/castings/danseurs/201857_IMG_7951_5482x3655.jpg',
        '/castings/danseurs/201864_RL7A1656_5760x3840.jpg',
        '/castings/danseurs/201885_IMG_108_5760x3840.jpg',
      ]">
        <p>
          Le pôle danse, c'est un pôle bourré de talents issus de différents parcours dans la danse
          et de personnalités toutes aussi géniales les unes que les autres, donc n'hésite pas à
          t'inscrire aux castings que tu sois débutant.e, avancé.e, classique, contempo ou hip-hop
          !
        </p>
      </HeroCarousel>

    </div> -->
  </div>

</template>
