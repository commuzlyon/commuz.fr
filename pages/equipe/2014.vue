<template lang="html">
  <div>
    <pane type="pane--media" :bgImage="presentation.bgImage" :image="presentation.image" :text="presentation.text"></pane>
    <div class="section">
      <div class="section__description">
        <h2>Bureau</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.bureau" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2014/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <h2>Mise en scène</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.mes" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2014/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <h2>Chant</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.chant" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2014/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <h2>Danse</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.danse" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2014/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <h2>Musique</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.zikos" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2014/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <h2>Communication</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.communication" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2014/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <h2>Son</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.son" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2014/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <h2>Amour</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.amour" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2014/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <h2>Décors</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.decors" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2014/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <h2>Costumes</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.costumes" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2014/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <h2>Scénario</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.scenario" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2014/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <h2>Acteurs-chanteurs</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.ac" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2014/' + membre.photo" alt="">
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
  text: '<h2>2014 : Broadway To Hell</h2>' +
        '<p>John Wise, icône du cinéma muet, fait parler de lui sur le plateau de la série Coeur d\'amour, théâtre de la rivalité entre ses deux anciens élèves, Daniel et Natacha.</p>' +
        '<p>Sous les yeux d\'un producteur aussi despotique qu\'incompétent et de son stagiaire préposé au café, tous deux escaladent les feux de la rampe, jusqu\'à l\'arrivée de Cunégonde Wise, la fille de John Wise.</p>',
  bgImage: '/images/equipes/equipe--2014.jpg',
  image: '/images/affiches/affiche--2014.jpg'
}

let equipe = {
  bureau: [
    {
      role: 'Présidente',
      nom: 'Agathe Renard',
      photo: 'foxy.jpg'
    },
    {
      role: 'Vice-Présidente',
      nom: 'Alice Deroo',
      photo: 'deroo.jpg'
    },
    {
      role: 'Secrétaire Général',
      nom: 'Yann Perche',
      photo: 'perche.jpg'
    },
    {
      role: 'Trésorière',
      nom: 'Sophie Bigot',
      photo: ''
    }
  ],

  mes: [
    {
      role: 'Metteuse en scène',
      nom: 'Océane Gillier',
      photo: 'gillier.jpg'
    },
    {
      role: 'Metteuse en scène',
      nom: 'Alice Couderc',
      photo: 'acouderc.jpg'
    }
  ],

  chant: [
    {
      role: 'VP chant',
      nom: 'Gesine Schelth',
      photo: 'schleth.jpg'
    },
    {
      role: 'VP chant',
      nom: 'Jérémy Lhuillier',
      photo: 'lhuillier.jpg'
    },
    {
      role: 'Choriste',
      nom: 'Victor Cholley',
      photo: 'victorc.jpg'
    },
    {
      role: 'Choriste',
      nom: 'Agathe Poisot',
      photo: 'agathep.jpg'
    }
  ],

  danse: [
    {
      role: 'VP danse',
      nom: 'Simon Chevrel',
      photo: 'chevrel.jpg'
    },
    {
      role: 'VP danse',
      nom: 'Agathe Honoré',
      photo: 'honore.jpg'
    },
    {
      role: 'Danseur',
      nom: 'Chen Zhen-Yang',
      photo: 'chen.jpg'
    },
    {
      role: 'Danseur',
      nom: 'Vincent Breton',
      photo: 'breton.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Eleonora Rozza',
      photo: 'rozza.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Marjorie Lapras',
      photo: 'marjorie.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Zoé Neirac',
      photo: 'zoe.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Iris Brugidou',
      photo: 'iris.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Maylis Lauda',
      photo: 'mama.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Frédérique Vermare',
      photo: 'vermare.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Lucie Lambreth',
      photo: 'lucie.jpg'
    }
  ],

  zikos: [
    {
      role: 'VP zikos',
      nom: 'Inès Gandon',
      photo: 'ines.jpg'
    },
    {
      role: 'VP zikos',
      nom: 'Raphaël Jolis',
      photo: 'marto.jpg'
    },
    {
      role: 'Musicien',
      nom: 'David Abensur',
      photo: 'david.jpg'
    },
    {
      role: 'Musicien',
      nom: 'Jean Goizauskas',
      photo: 'jean.jpg'
    },
    {
      role: 'Musicien',
      nom: 'Maxime Bru',
      photo: 'bru.jpg'
    },
    {
      role: 'Musicienne',
      nom: 'Lise Bossard',
      photo: 'lise.jpg'
    },
    {
      role: 'Musicien',
      nom: 'Alexandre Voute',
      photo: 'voute.jpg'
    },
    {
      role: 'Musicien',
      nom: 'Clément Thébaud',
      photo: 'clement.jpg'
    },
    {
      role: 'Musicien',
      nom: 'Benjamin Horvilleur',
      photo: 'sharpy.jpg'
    },
    {
      role: 'Musicien',
      nom: 'Yann Perche',
      photo: 'yann.jpg'
    },
    {
      role: 'Musicienne',
      nom: 'Estelle Ayet',
      photo: 'estelle.jpg'
    },
    {
      role: 'Musicien',
      nom: 'Wesley Agoua',
      photo: 'wesley.jpg'
    },
    {
      role: 'Musicienne',
      nom: 'Eloïse Mesnier Pierrouttet',
      photo: 'emesnier.jpg'
    }
  ],

  communication: [
    {
      role: 'VP com',
      nom: 'Nicolas Papernot',
      photo: 'orky.jpg'
    },
    {
      role: 'VP com',
      nom: 'Enora Garreau',
      photo: 'enora.jpg'
    },
    {
      role: 'VP com',
      nom: 'Diane Sakarovitch',
      photo: ''
    }
  ],

  son: [
    {
      role: 'VP son',
      nom: 'Louis Zawadzki',
      photo: 'louis.jpg'
    },
    {
      role: 'VP son',
      nom: 'Capucine Guyot',
      photo: 'guyot.jpg'
    },
    {
      role: 'VP son',
      nom: 'Elisa Joliveau',
      photo: 'elisaj.jpg'
    }
  ],

  amour: [
    {
      role: 'VP amour',
      nom: 'Mathieu Ortolé',
      photo: 'cudi.jpg'
    },
    {
      role: 'VP amour',
      nom: 'Nicolas Papernot',
      photo: 'orky.jpg'
    }
  ],

  decors: [
    {
      role: 'Décorateur',
      nom: 'John Fleury',
      photo: 'pocah.jpg'
    },
    {
      role: 'Décoratrice',
      nom: 'Héloïse Chalot',
      photo: 'heloise.jpg'
    },
    {
      role: 'Décoratrice',
      nom: 'Alizée Deckmyn',
      photo: 'alizee.jpg'
    },
    {
      role: 'Décorateur',
      nom: 'Thomas Pucci',
      photo: 'pong.jpg'
    }
  ],

  costumes: [
    {
      role: 'Costumière',
      nom: 'Elisabeth Li',
      photo: 'elisabethli.jpg'
    },
    {
      role: 'Costumière',
      nom: 'Justine Le Cam',
      photo: 'justine.jpg'
    },
    {
      role: 'Costumière',
      nom: 'Chloé Caron',
      photo: 'caron.jpg'
    },
    {
      role: 'Costumière',
      nom: 'Floriane Paty',
      photo: 'floriane.jpg'
    }
  ],

  scenario: [
    {
      role: 'Scénariste',
      nom: 'Louis Zawadski',
      photo: 'louis.jpg'
    },
    {
      role: 'Scénariste',
      nom: 'Killian Hutchinson',
      photo: 'kiki.jpg'
    },
    {
      role: 'Scénariste',
      nom: 'Nathanaëlle Bonnet',
      photo: 'nbonnet.jpg'
    },
    {
      role: 'Scénariste',
      nom: 'Thibaut Lasfargues',
      photo: 'thibautl.jpg'
    }
  ],

  ac: [
    {
      role: 'Acteur-chanteur',
      nom: 'Nathanaël Boé-Frechet',
      photo: ''
    },
    {
      role: 'Acteur-chanteur',
      nom: 'Thibaut Souilliard',
      photo: 'thibauts.jpg'
    },
    {
      role: 'Actrice-chanteuse',
      nom: 'Valentina Crippa',
      photo: 'valentina.jpg'
    },
    {
      role: 'Actrice-chanteuse',
      nom: 'Camille Guinand',
      photo: 'camille.jpg'
    },
    {
      role: 'Actrice-chanteuse',
      nom: 'Clémence Thiébaugeorges',
      photo: ''
    },
    {
      role: 'Acteur-chanteur',
      nom: 'Leopold Schmutz',
      photo: 'leopold.jpg'
    },
    {
      role: 'Acteur-chanteur',
      nom: 'Nicolas Dalisson',
      photo: 'nicolasdalisson.jpg'
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

<style lang="scss" scoped>
.trombi_membre {
  img {
    // grid-area: 1 / 1 / 2 / 2;
    border-radius: 0;
    height: 200px;
    // margin-bottom: 1em;
  }
}
</style>
