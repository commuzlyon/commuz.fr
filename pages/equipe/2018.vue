<template lang="html">
  <div>
    <pane type="pane--media" :bgImage="presentation.bgImage" :image="presentation.image" :text="presentation.text"></pane>
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
        <img src="/logos/poles/2018/scenario.png" alt="">
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
        <img src="/logos/poles/2018/mes.png" alt="">
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
  text: '<h2>Bas les masques</h2>' +
        '<p>Année 1919. Aube des années folles. Etats-Unis. Le grand magnat de l\'automobile Daniel Richard quitte ce monde avec une fortune à laisser. Sur son testament sont inscrits des proches du défunt, mais aussi des inconnus.</p>' +
        '<p>Comment connaissaient-ils Daniel Richard ? Qu\'est-ce qui se cache derrière ce testament ? Quelques soit les réponses, cette enquête les amènera à se poser des questions sur eux-mêmes, faire ressurgir le passé de Daniel, et élucider ce mystère.</p>',
  bgImage: '/images/equipes/equipe--2018.jpg',
  image: '/images/affiches/affiche--2018.jpg'
}

let equipe = {
  bureau: [
    {
      role: 'Présidente',
      nom: 'Apolline Vanderspeeten',
      photo: 'youmi.jpg'
    },
    {
      role: 'Vice-Président',
      nom: 'Jonathan Vavre',
      photo: 'jon.jpg'
    },
    {
      role: 'Secrétaire Générale',
      nom: 'Alice Bourdelain',
      photo: 'haba.jpg'
    },
    {
      role: 'Trésorière',
      nom: 'Estelle Assens',
      photo: 'estelle.jpg'
    }
  ],

  visibilite: [
    {
      role: 'Communication',
      nom: 'Camille Delong',
      photo: 'standy.jpg'
    },
    {
      role: 'Communication',
      nom: 'Inès Joly',
      photo: 'ines.jpg'
    },
    {
      role: 'Démarcheuse',
      nom: 'Aurore Boyer',
      photo: 'aurore.jpg'
    },
    {
      role: 'Démarcheuse',
      nom: 'Lisa Semling',
      photo: 'lisa.jpg'
    },
    {
      role: 'Webmaster',
      nom: 'Etienne Sanguinetti',
      photo: 'sheiros.jpg'
    }
  ],

  scenario: [
    {
      role: 'Scénariste',
      nom: 'Théo Santos',
      photo: 'mayar.jpg'
    },
    {
      role: 'Scénariste',
      nom: 'Claire Song',
      photo: 'claire.jpg'
    },
    {
      role: 'Scénariste',
      nom: 'Nicolas Chavonnand-Valades',
      photo: 'nico.jpg'
    },
    {
      role: 'Scénariste',
      nom: 'Emeline Taillis',
      photo: 'emeline.jpg'
    }
  ],

  mes: [
    {
      role: 'Coordinatrice artistique',
      nom: 'Emma Hakimi',
      photo: 'emma.jpg'
    },
    {
      role: 'Metteur en scène',
      nom: 'Yorick Vinesse',
      photo: 'yorick.jpg'
    },
    {
      role: 'Metteuse en scène',
      nom: 'Maria Pujos',
      photo: 'tihssy.jpg'
    }
  ],

  ac: [
    {
      role: 'Acteur-chanteur',
      nom: 'Teddy Serrano',
      photo: 'neo.jpg'
    },
    {
      role: 'Acteur-chanteur',
      nom: 'Sacha Landré',
      photo: 'poulpy.jpg'
    },
    {
      role: 'Acteur-chanteur',
      nom: 'Arthur Boutry',
      photo: 'balou.jpg'
    },
    {
      role: 'Actrice-chanteuse',
      nom: 'Mina Roncière',
      photo: 'rai\'ja.jpg'
    },
    {
      role: 'Actrice-chanteuse',
      nom: 'Taman Mhoumadi',
      photo: 'taman.jpg'
    },
    {
      role: 'Actrice-chanteuse',
      nom: 'Emma Plamchard',
      photo: 'kapry.jpg'
    },
    {
      role: 'Actrice-chanteuse',
      nom: 'Lydie Berthet',
      photo: 'lydie.jpg'
    }
  ],

  chant: [
    {
      role: 'Respo chant',
      nom: 'Arnaud Gluck',
      photo: 'phyl.jpg'
    },
    {
      role: 'Respo chant',
      nom: 'Dylan Bransol',
      photo: 'ferrat.jpg'
    },
    {
      role: 'Choriste',
      nom: 'Stéphan Coufin',
      photo: 'von zimmel.jpg'
    },
    {
      role: 'Choriste',
      nom: 'Claire Ben Ali',
      photo: 'egah.jpg'
    },
    {
      role: 'Choriste',
      nom: 'Ivain Rodriguez',
      photo: 'olyon.jpg'
    },
    {
      role: 'Choriste',
      nom: 'Charlotte Dillard',
      photo: 'yari.jpg'
    }
  ],

  composition: [
    {
      role: 'Respo compositeur',
      nom: 'Simon Mercier',
      photo: 'yukhu.jpg'
    },
    {
      role: 'Respo compositeur',
      nom: 'Adrien de la Salle',
      photo: 'arpys.jpg'
    },
    {
      role: 'Compositeur',
      nom: 'Paul Doan',
      photo: 'laka.jpg'
    },
    {
      role: 'Compositeur',
      nom: 'Nicolas Lafon',
      photo: 'duish.jpg'
    }
  ],

  zikos: [
    {
      role: 'Respo Zikos / Violoncelle',
      nom: 'Eva Meunier',
      photo: 'eva.jpg'
    },
    {
      role: 'Respo Zikos / Chef d\'orchestre',
      nom: 'Vincent Duong',
      photo: 'keeto.jpg'
    },
    {
      role: 'Alto & trompette',
      nom: 'Marwan Hassan',
      photo: 'rootz.jpg'
    },
    {
      role: 'Trombonne',
      nom: 'Denis Guibert',
      photo: 'origami.jpg'
    },
    {
      role: 'Piano',
      nom: 'Paul Duvivier',
      photo: 'spac.jpg'
    },
    {
      role: 'Flûte',
      nom: 'Jeanne Guillaumat',
      photo: 'lyndra.jpg'
    },
    {
      role: 'Trompette',
      nom: 'Clément Borne',
      photo: 'thiko.jpg'
    },
    {
      role: 'Clarinette',
      nom: 'Océane Rey',
      photo: 'lyneha.jpg'
    },
    {
      role: 'Saxophone',
      nom: 'Adrien Rive',
      photo: 'berkum.jpg'
    },
    {
      role: 'Violon',
      nom: 'Antoine Boudon',
      photo: 'dinan.jpg'
    },
    {
      role: 'Violon',
      nom: 'Aliénor Delhay',
      photo: 'muzz.jpg'
    },
    {
      role: 'Guitare',
      nom: 'Antoine Diers',
      photo: 'royce.jpg'
    },
    {
      role: 'Basse',
      nom: 'Vivien Geoffroy',
      photo: 'paccio.jpg'
    },
    {
      role: 'Guitare',
      nom: 'Côme Peladeau',
      photo: 'flex.jpg'
    },
    {
      role: 'Batterie',
      nom: 'Julien Schryve',
      photo: 'sanzes.jpg'
    },
    {
      role: 'Euphonium',
      nom: 'Matthias Zugarramurdi',
      photo: 'zuga.jpg'
    }
  ],

  danse: [
    {
      role: 'Respo danse',
      nom: 'Nina Cressend',
      photo: 'palma.jpg'
    },
    {
      role: 'Respo danse',
      nom: 'Mathilde Tordjeman',
      photo: 'passih.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Marianne Clément',
      photo: 'marianne.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Marine Antoine',
      photo: 'marine.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Cécile Goubet',
      photo: 'cecile.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Estelle Bézombes',
      photo: 'djuna.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Pauline Bregigeon',
      photo: 'yaza.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Karla Engalaere',
      photo: 'karla.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Anne Loquineau',
      photo: 'anne.jpg'
    },
    {
      role: 'Danseur',
      nom: 'Thibaut Rahm',
      photo: 'candy.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Philippine Renard',
      photo: 'philippine.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Chloé Rondepierre',
      photo: 'chloe.jpg'
    }
  ],

  costumes: [
    {
      role: 'Respo costumes',
      nom: 'Camille Boutigny',
      photo: 'rhomi.jpg'
    },
    {
      role: 'Respo costumes',
      nom: 'Charles Duhamel',
      photo: 'cely.jpg'
    },
    {
      role: 'Costumière',
      nom: 'Elise Lebreton',
      photo: 'oley.jpg'
    },
    {
      role: 'Costumière',
      nom: 'Clémentine Mounier',
      photo: 'lenou.jpg'
    },
    {
      role: 'Costumière',
      nom: 'Valentine Rasse',
      photo: 'aylie.jpg'
    }
  ],

  decors: [
    {
      role: 'Respo décors',
      nom: 'Justine Cordelle',
      photo: 'foxh.jpg'
    },
    {
      role: 'Respo décors',
      nom: 'Noémie Martin',
      photo: 'willa.jpg'
    },
    {
      role: 'Décoratrice',
      nom: 'Sophie Rolloy',
      photo: 'nyma.jpg'
    },
    {
      role: 'Décoratrice',
      nom: 'Lola Fathi',
      photo: 'lola.jpg'
    },
    {
      role: 'Décoratrice',
      nom: 'Caroline Yang',
      photo: 'caroline.jpg'
    }
  ],

  technique: [
    {
      role: 'Respo son',
      nom: 'Antonin Leyval',
      photo: 'polia.jpg'
    },
    {
      role: 'VP son',
      nom: 'Gautier Geenen',
      photo: 'dupastis.jpg'
    },
    {
      role: 'VP son',
      nom: 'Antoine Caisson',
      photo: 'lafarine.jpg'
    },
    {
      role: 'VP son',
      nom: 'Nils Demerlé',
      photo: 'georace.jpg'
    },
    {
      role: 'VP son',
      nom: 'Mathieu Perrin',
      photo: 'pydow.jpg'
    },
    {
      role: 'Respo lumière',
      nom: 'Charlotte Garreau',
      photo: 'charlotte.jpg'
    },
    {
      role: 'Respo vidéo',
      nom: 'Gaëtan Marchais',
      photo: 'HDV.jpg'
    }
  ],

  amour: [
    {
      role: 'VP Amour',
      nom: 'Valérian Seuwin',
      photo: 'tazzy.jpg'
    },
    {
      role: 'VP Amour',
      nom: 'Julie Hazard',
      photo: 'lally.jpg'
    },
    {
      role: 'VP Amour',
      nom: 'Lise Varenne-Paquet',
      photo: 'lise.jpg'
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
