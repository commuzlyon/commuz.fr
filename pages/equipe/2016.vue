<template lang="html">
  <div>
    <pane type="pane--media" :bgImage="presentation.bgImage" :image="presentation.image" :text="presentation.text"></pane>
    <div class="section">
      <div class="section__description">
        <!-- <img src="/logos/poles/2017/bureau.png" alt=""> -->
        <h2>Bureau</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.bureau" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2016/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <!-- <img src="/logos/poles/2017/communication.png" alt=""> -->
        <h2>Communication</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.communication" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2016/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <!-- <img src="/logos/poles/2017/amour.png" alt=""> -->
        <h2>Amour</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.amour" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2016/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <!-- <img src="/logos/poles/2017/scenario.png" alt=""> -->
        <h2>Scénario</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.scenario" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2016/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2017/mes.png" alt="">
        <h2>Mise en scène</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.mes" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2017/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2017/ac.png" alt="">
        <h2>Acteurs-chanteurs</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.ac" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2017/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2017/chant.png" alt="">
        <h2>Chant</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.chant" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2017/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2017/composition.png" alt="">
        <h2>Composition</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.composition" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2017/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2017/zikos.png" alt="">
        <h2>Musique</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.zikos" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2017/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2017/danse.png" alt="">
        <h2>Danse</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.danse" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2017/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2017/costumes.png" alt="">
        <h2>Costumes</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.costumes" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2017/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2017/decors.png" alt="">
        <h2>Décors</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.decors" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2017/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2017/technique.png" alt="">
        <h2>Technique</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.technique" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2017/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Pane from '@/components/Pane'

let presentation = {
  text: '<h2>2016 : Les Fruits de la Passion</h2>' +
        '<p>Voyagez dans une Espagne morcelée où la Renaissance n’en est encore qu’à ses prémices... A cette époque où les guerres de territoires sont encore monnaie courante, le duché de la Rioja, l\'un des plus important duché d\'Espagne, vit des moments difficiles : les finances du royaume sont au plus mal et les tensions avec les royaumes voisins de Castille et d\'Aragon sont palpables...</p>' +
        '<p>Comment la situation a-t-elle pu dégénérer à ce point ? La gestion calamiteuse et frivole du Duc de la Rioja y est certainement pour quelque chose ! Ce joyeux luron a une fâcheuse tendance à privilégier les bals décadents et les danses folâtres aux problèmes géopolitiques...</p>' +
        '<p>Son entourage va-t-il enfin se décider à réagir ?</p>',
  bgImage: '/images/equipes/equipe--2016.jpg',
  image: '/images/affiches/affiche--2016.jpg'
}

let equipe = {
  bureau: [
    {
      role: 'Président',
      nom: 'Florian Borgobello',
      photo: 'flobor.png'
    },
    {
      role: 'Vice-pésident',
      nom: 'Gonzague Gendreau',
      photo: 'gongen.png'
    },
    {
      role: 'Secrétaire générale',
      nom: 'Romane Paradis',
      photo: 'rompar.png'
    },
    {
      role: 'Trésorière',
      nom: 'Léa Bettini',
      photo: 'leabet.png'
    }
  ],

  communication: [
    {
      role: 'Respo com\'',
      nom: 'Marine Sousa',
      photo: 'marsou.png'
    },
    {
      role: 'Démarcheur',
      nom: 'Simon Chevrel',
      photo: 'simche.png'
    },
    {
      role: 'Démarcheuse',
      nom: 'Manon Zaoui',
      photo: 'manzao.png'
    },
    {
      role: 'VP com\'',
      nom: 'Mallaury Pons',
      photo: 'malpon.png'
    }
  ],

  amour: [
    {
      role: 'VP amour',
      nom: 'Gabrielle Le Doeuf',
      photo: 'gabled.png'
    },
    {
      role: 'VP amour',
      nom: 'Benoit Serrano',
      photo: 'benser.png'
    }
  ],

  scenario: [
    {
      role: 'Scénariste',
      nom: 'Nathanaël Boé-Fréchet',
      photo: 'natboe.png'
    },
    {
      role: 'Scénariste',
      nom: 'Benjamin Dupas',
      photo: 'bendup.png'
    },
    {
      role: 'Scénariste',
      nom: 'Romane Paradis',
      photo: 'rompar.png'
    },
    {
      role: 'Scénariste',
      nom: 'Aloyse de Lavernette',
      photo: 'alodel.png'
    }
  ],

  mes: [
    {
      role: 'Metteur en scène',
      nom: 'Thibaut Lasfargues',
      photo: 'thilas.png'
    },
    {
      role: 'Metteur en scène',
      nom: 'Vincent Breton',
      photo: 'vinbre.png'
    }
  ]
}

export default {
  components: { Pane },
  data: function () {
    return { equipe, presentation }
  }
}
</script>

<style lang="scss">
</style>
