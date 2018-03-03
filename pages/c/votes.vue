<template lang="html">
  <div>
    <div class="votes_container">
      <div class="">
        <img @click="sendVote('Balou')" src="/c/votes/Balou_néon.jpg" alt="">
        <img @click="sendVote('Balou')" src="/c/votes/Balou.jpg" alt="">
      </div>
      <div class="">
        <img @click="sendVote('Kapry')" src="/c/votes/Kapry_néon.jpg" alt="">
        <img @click="sendVote('Kapry')" src="/c/votes/Kapry.jpg" alt="">
      </div>
      <div class="">
        <img @click="sendVote('Lydie')" src="/c/votes/Lydie_néon.jpg" alt="">
        <img @click="sendVote('Lydie')" src="/c/votes/Lydie.jpg" alt="">
      </div>
      <div class="">
        <img @click="sendVote('Mina')" src="/c/votes/Mina_néon.jpg" alt="">
        <img @click="sendVote('Mina')" src="/c/votes/Mina.jpg" alt="">
      </div>
      <div class="">
        <img @click="sendVote('Neo')" src="/c/votes/Neo_néon.jpg" alt="">
        <img @click="sendVote('Neo')" src="/c/votes/Neo.jpg" alt="">
      </div>
      <div class="">
        <img @click="sendVote('Poulpy')" src="/c/votes/Poulpy_néon.jpg" alt="">
        <img @click="sendVote('Poulpy')" src="/c/votes/Poulpy.jpg" alt="">
      </div>
      <div class="">
        <img @click="sendVote('Taman')" src="/c/votes/Taman_néon.jpg" alt="">
        <img @click="sendVote('Taman')" src="/c/votes/Taman.jpg" alt="">
      </div>
      <img src="/logos/logo--equipe.svg" alt="">
    </div>
  </div>
</template>

<script>

let sendVote = function (ac) {
  let selector = `[src="/c/votes/${ac}.jpg"]`
  let acElt = document.querySelector(selector)
  acElt.classList.add('clicked')
  window.setTimeout(() => { acElt.classList.remove('clicked') }, 250)

  const req = new XMLHttpRequest()
  req.open('POST', 'https://hooks.zapier.com/hooks/catch/3012903/kof8w9/')
  req.send(JSON.stringify({ choix: ac }))
}

export default {
  methods: { sendVote },
  layout: 'conchiage'
}
</script>

<style lang="scss" scoped>
.votes_container {
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(4, 1fr);

  div {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    display: grid;

    img {
      grid-area: 1 / 1 / -1 / -1;
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;

      transition: all 0.2s;
      opacity: 1;
      &.clicked {
        opacity: 0;
        transition: all 0.07s;
      }
    }


  }

  & > img {
    justify-self: center;
    align-self: center;
    width: 60%;
  }
}
</style>
