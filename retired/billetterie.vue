<template lang="html">
  <title>La Commuz' - Billetterie</title>
  <Meta name="description" content="Acheter sa place pour le nouveau spectacle de la Commuz." />
  <div class="centered-container">
    <h1>Billetterie</h1>
    <p></p>
    <p></p>
    <p></p>
    <p class="description">Ne manquez pas le nouveau spectacle de la Commuz' 2024 !</p>
    <a href="https://collecte.io/commuz-2024-global-3824258/fr" target="_blank" rel="noopener noreferrer"
      class="buy-tickets-link">Acheter vos billets ici</a>
  </div>
</template>

<style lang="scss">
.centered-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 80vh;
  background-image: url('/Commuz2024/images/perso.png');
  background-size: cover;
  background-position: center;
  padding-left: 20px;
  padding-right: 20px;
}

.description {
  margin-bottom: 20px;
}

.buy-tickets-link {
  font-weight: bold;
  font-size: 18px;
}

.buy-tickets-link:hover {
  text-decoration: underline;
  color: rgb(255, 170, 47);
}
</style>
