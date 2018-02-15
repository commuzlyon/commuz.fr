<template lang="html">
  <div>
    <pane type="pane--media" :bgImage="presentation.bgImage" :image="presentation.image" :text="presentation.text">
      <!-- <template scope="props">
        <div class="annee__links">
          <div class="button-link">
            <router-link :to="`/gallerie/2017`"><img src="/icons/gallerie.svg" alt="">Voir les photos</router-link>
          </div>
        </div>
      </template> -->
    </pane>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2018/bureau.png" alt="">
        <h2>Bureau</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.bureau" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2018/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2018/visibilite.png" alt="">
        <h2>Visibilité</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.visibilite" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2018/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <!-- <img src="/logos/poles/2018/scenario.png" alt=""> -->
        <h2>Scénario</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.scenario" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2018/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <!-- <img src="/logos/poles/2018/mes.png" alt=""> -->
        <h2>Mise en scène</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.mes" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2018/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2018/ac.png" alt="">
        <h2>Acteurs-chanteurs</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.ac" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2018/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2018/chant.png" alt="">
        <h2>Chant</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.chant" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2018/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2018/composition.png" alt="">
        <h2>Composition</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.composition" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2018/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2018/zikos.png" alt="">
        <h2>Musique</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.zikos" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2018/' + membre.photo" alt="">
          <template v-if="membre.nom == 'Marwan Hassan'">
            <router-link to="/rootz"><p><b>{{ membre.nom }}</b><br/>
              <i>{{ membre.role }}</i></p></router-link>
          </template>
          <template v-else>
            <p><b>{{ membre.nom }}</b><br/>
              <i>{{ membre.role }}</i></p>
          </template>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2018/danse.png" alt="">
        <h2>Danse</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.danse" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2018/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2018/costumes.png" alt="">
        <h2>Costumes</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.costumes" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2018/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2018/decors.png" alt="">
        <h2>Décors</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.decors" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2018/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2018/technique.png" alt="">
        <h2>Son, lumière et vidéo</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.technique" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2018/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <router-link to="/c/jambonbrie">
      <div class="section">
        <div class="section__description">
          <img src="/logos/poles/2018/amour.png" alt="">
          <h2>Amour</h2>
        </div>
        <div class="section__membres">
          <div class="trombi_membre" v-for="(membre, idMembre) in equipe.amour" :key="idMembre">
            <img v-if="membre.photo != ''" :src="'/images/equipes/2018/' + membre.photo" alt="">
            <p><b>{{ membre.nom }}</b><br/>
            <i>{{ membre.role }}</i></p>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import Pane from '@/components/Pane'

let presentation = {
  text: '<h1>Stay tuned...</h1>',
  bgImage: '/images/equipes/equipe--2018.jpg'
  // image: '/images/affiches/affiche--2018.jpg'
}

let equipe = {
  bureau: [
    {
      role: 'Présidente',
      nom: 'Apolline Vanderspeeten',
      photo: ''
    },
    {
      role: 'Vice-Président',
      nom: 'Jonathan Vavre',
      photo: ''
    },
    {
      role: 'Secrétaire Générale',
      nom: 'Alice Bourdelain',
      photo: ''
    },
    {
      role: 'Trésorière',
      nom: 'Estelle Assens',
      photo: ''
    }
  ],

  visibilite: [
    {
      role: 'Communication',
      nom: 'Camille Delong',
      photo: ''
    },
    {
      role: 'Communication',
      nom: 'Inès Joly',
      photo: ''
    },
    {
      role: 'Démarcheuse',
      nom: 'Aurore Boyer',
      photo: ''
    },
    {
      role: 'Démarcheuse',
      nom: 'Lisa Semling',
      photo: ''
    },
    {
      role: 'Webmaster',
      nom: 'Etienne Sanguinetti',
      photo: ''
    }
  ],

  scenario: [
    {
      role: 'Scénariste',
      nom: 'Théo Santos',
      photo: ''
    },
    {
      role: 'Scénariste',
      nom: 'Claire Song',
      photo: ''
    },
    {
      role: 'Scénariste',
      nom: 'Nicolas Chavonnand-Valades',
      photo: ''
    },
    {
      role: 'Scénariste',
      nom: 'Emeline Taillis',
      photo: ''
    }
  ],

  mes: [
    {
      role: 'Coordinatrice artistique',
      nom: 'Emma Hakimi',
      photo: ''
    },
    {
      role: 'Metteur en scène',
      nom: 'Yorick Vinesse',
      photo: ''
    },
    {
      role: 'Metteuse en scène',
      nom: 'Maria Pujos',
      photo: ''
    }
  ],

  ac: [
    {
      role: 'Acteur-chanteur',
      nom: 'Teddy Serrano',
      photo: ''
    },
    {
      role: 'Acteur-chanteur',
      nom: 'Sacha Landré',
      photo: ''
    },
    {
      role: 'Acteur-chanteur',
      nom: 'Arthur Boutry',
      photo: ''
    },
    {
      role: 'Actrice-chanteuse',
      nom: 'Mina Roncière',
      photo: ''
    },
    {
      role: 'Actrice-chanteuse',
      nom: 'Taman Mhoumadi',
      photo: ''
    },
    {
      role: 'Actrice-chanteuse',
      nom: 'Emma Plamchard',
      photo: ''
    },
    {
      role: 'Actrice-chanteuse',
      nom: 'Lydie Berthet',
      photo: ''
    }
  ],

  chant: [
    {
      role: 'Respo chant',
      nom: 'Arnaud Gluck',
      photo: ''
    },
    {
      role: 'Respo chant',
      nom: 'Dylan Bransol',
      photo: ''
    },
    {
      role: 'Choriste',
      nom: 'Stéphan Coufin',
      photo: ''
    },
    {
      role: 'Choriste',
      nom: 'Claire Ben Ali',
      photo: ''
    },
    {
      role: 'Choriste',
      nom: 'Ivain Rodriguez',
      photo: ''
    },
    {
      role: 'Choriste',
      nom: 'Charlotte Dillard',
      photo: ''
    }
  ],

  composition: [
    {
      role: 'Respo compositeur',
      nom: 'Simon Mercier',
      photo: ''
    },
    {
      role: 'Respo compositeur',
      nom: 'Adrien de la Salle',
      photo: ''
    },
    {
      role: 'Compositeur',
      nom: 'Paul Doan',
      photo: ''
    },
    {
      role: 'Compositeur',
      nom: 'Nicolas Lafon',
      photo: ''
    }
  ],

  zikos: [
    {
      role: 'Respo Zikos / Violoncelle',
      nom: 'Eva Meunier',
      photo: ''
    },
    {
      role: 'Respo Zikos / Chef d\'orchestre',
      nom: 'Vincent Duong',
      photo: ''
    },
    {
      role: 'Alto & trompette',
      nom: 'Marwan Hassan',
      photo: ''
    },
    {
      role: 'Trombonne',
      nom: 'Denis Guibert',
      photo: ''
    },
    {
      role: 'Piano',
      nom: 'Paul Duvivier',
      photo: ''
    },
    {
      role: 'Flûte',
      nom: 'Jeanne Guillaumat',
      photo: ''
    },
    {
      role: 'Trompette',
      nom: 'Clément Borne',
      photo: ''
    },
    {
      role: 'Clarinette',
      nom: 'Océane Rey',
      photo: ''
    },
    {
      role: 'Saxophone',
      nom: 'Adrien Rive',
      photo: ''
    },
    {
      role: 'Violon',
      nom: 'Antoine Boudon',
      photo: ''
    },
    {
      role: 'Violon',
      nom: 'Aliénor Delhay',
      photo: ''
    },
    {
      role: 'Guitare',
      nom: 'Antoine Diers',
      photo: ''
    },
    {
      role: 'Basse',
      nom: 'Vivien Geoffroy',
      photo: ''
    },
    {
      role: 'Guitare',
      nom: 'Côme Peladeau',
      photo: ''
    },
    {
      role: 'Batterie',
      nom: 'Julien Schryve',
      photo: ''
    },
    {
      role: 'Euphonium',
      nom: 'Matthias Zugarramurdi',
      photo: ''
    }
  ],

  danse: [
    {
      role: 'Respo danse',
      nom: 'Nina Cressend',
      photo: ''
    },
    {
      role: 'Respo danse',
      nom: 'Mathilde Tordjeman',
      photo: ''
    },
    {
      role: 'Danseuse',
      nom: 'Marianne Clément',
      photo: ''
    },
    {
      role: 'Danseuse',
      nom: 'Marine Antoine',
      photo: ''
    },
    {
      role: 'Danseuse',
      nom: 'Cécile Goubet',
      photo: ''
    },
    {
      role: 'Danseuse',
      nom: 'Estelle Bézombes',
      photo: ''
    },
    {
      role: 'Danseuse',
      nom: 'Pauline Bregigeon',
      photo: ''
    },
    {
      role: 'Danseuse',
      nom: 'Karla Engalaere',
      photo: ''
    },
    {
      role: 'Danseuse',
      nom: 'Anne Loquineau',
      photo: ''
    },
    {
      role: 'Danseur',
      nom: 'Thibaut Rahm',
      photo: ''
    },
    {
      role: 'Danseuse',
      nom: 'Philippine Renard',
      photo: ''
    },
    {
      role: 'Danseuse',
      nom: 'Chloé Rondepierre',
      photo: ''
    }
  ],

  costumes: [
    {
      role: 'Respo costumes',
      nom: 'Camille Boutigny',
      photo: ''
    },
    {
      role: 'Respo costumes',
      nom: 'Charles Duhamel',
      photo: ''
    },
    {
      role: 'Costumière',
      nom: 'Elise Lebreton',
      photo: ''
    },
    {
      role: 'Costumière',
      nom: 'Clémentine Mounier',
      photo: ''
    },
    {
      role: 'Costumière',
      nom: 'Valentine Rasse',
      photo: ''
    }
  ],

  decors: [
    {
      role: 'Respo décors',
      nom: 'Justine Cordelle',
      photo: ''
    },
    {
      role: 'Respo décors',
      nom: 'Noémie Martin',
      photo: ''
    },
    {
      role: 'Décoratrice',
      nom: 'Sophie Rolloy',
      photo: ''
    },
    {
      role: 'Décoratrice',
      nom: 'Lola Fathi',
      photo: ''
    },
    {
      role: 'Décoratrice',
      nom: 'Caroline Yang',
      photo: ''
    }
  ],

  technique: [
    {
      role: 'Respo son',
      nom: 'Antonin Leyval',
      photo: ''
    },
    {
      role: 'VP son',
      nom: 'Gautier Geenen',
      photo: ''
    },
    {
      role: 'VP son',
      nom: 'Antoine Caisson',
      photo: ''
    },
    {
      role: 'VP son',
      nom: 'Nils Demerlé',
      photo: ''
    },
    {
      role: 'VP son',
      nom: 'Mathieu Perrin',
      photo: ''
    },
    {
      role: 'Respo lumière',
      nom: 'Charlotte Garreau',
      photo: ''
    },
    {
      role: 'Respo vidéo',
      nom: 'Gaëtan Marchais',
      photo: ''
    }
  ],

  amour: [
    {
      role: 'VP Amour',
      nom: 'Valérian Seuwin',
      photo: ''
    },
    {
      role: 'VP Amour',
      nom: 'Julie Hazard',
      photo: ''
    },
    {
      role: 'VP Amour',
      nom: 'Lise Varenne-Paquet',
      photo: ''
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
