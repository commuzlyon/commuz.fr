<template lang="html">
  <div>
    <pane type="pane--media" :bgImage="presentation.bgImage" :image="presentation.image" :text="presentation.text"></pane>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2019/bureau.png" alt="">
        <h2>Bureau</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.bureau" :key="idMembre">
          <!--<img v-if="membre.photo != ''" :src="'/images/equipes/2019/' + membre.photo" alt="">-->
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2019/visibilite.png" alt="">
        <h2>Visibilité</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.visibilite" :key="idMembre">
          <!--<img v-if="membre.photo != ''" :src="'/images/equipes/2019/' + membre.photo" alt="">-->
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2019/scenario.png" alt="">
        <h2>Scénario</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.scenario" :key="idMembre">
          <!--<img v-if="membre.photo != ''" :src="'/images/equipes/2019/' + membre.photo" alt="">-->
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2019/mes.png" alt="">
        <h2>Mise en scène</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.mes" :key="idMembre">
          <!--<img v-if="membre.photo != ''" :src="'/images/equipes/2019/' + membre.photo" alt="">-->
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2019/ac.png" alt="">
        <h2>Acteurs-chanteurs</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.ac" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2019/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2019/chant.png" alt="">
        <h2>Chant</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.chant" :key="idMembre">
          <!--<img v-if="membre.photo != ''" :src="'/images/equipes/2019/' + membre.photo" alt="">-->
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2019/composition.png" alt="">
        <h2>Composition</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.composition" :key="idMembre">
          <!--<img v-if="membre.photo != ''" :src="'/images/equipes/2019/' + membre.photo" alt="">-->
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2019/zikos.png" alt="">
        <h2>Musique</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.zikos" :key="idMembre">
          <!--<img v-if="membre.photo != ''" :src="'/images/equipes/2019/' + membre.photo" alt="">-->
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
        <img src="/logos/poles/2019/danse.png" alt="">
        <h2>Danse</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.danse" :key="idMembre">
          <!--<img v-if="membre.photo != ''" :src="'/images/equipes/2019/' + membre.photo" alt="">-->
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2019/costumier.png" alt="">
        <h2>Costumes</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.costumes" :key="idMembre">
          <!--<img v-if="membre.photo != ''" :src="'/images/equipes/2019/' + membre.photo" alt="">-->
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2019/decors.png" alt="">
        <h2>Décors</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.decors" :key="idMembre">
          <!--<img v-if="membre.photo != ''" :src="'/images/equipes/2019/' + membre.photo" alt="">-->
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2019/technique.png" alt="">
        <h2>Son, lumière et vidéo</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.technique" :key="idMembre">
          <!--<img v-if="membre.photo != ''" :src="'/images/equipes/2019/' + membre.photo" alt="">-->
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2019/amour.png" alt="">
        <h2>Amour</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.amour" :key="idMembre">
          <!--<img v-if="membre.photo != ''" :src="'/images/equipes/2019/' + membre.photo" alt="">-->
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
  text: '<h2>2019 : Désorientés</h2>' +
          "<p>Au cœur du XIème siècle, alors que les tensions montent entre Orient et Occident, Elena et Alix sont envoyées en mission à l’aube de la première Croisade. Cependant, elles se font capturer par le puissant Calife. Désormais devenues esclaves, elles se retrouvent au milieu d’un conflit mêlant jalousie, querelles familiales et souvenirs douloureux.</p>" + "<p>Quels secrets chaque membre de cette famille cache-t-il aux autres ? Elena et Alix sauront-elles se sortir de cette prison orientale ? Mais où est donc passée la semoule ? Le vent d’Ouest souffle sur le palais : ils en seront tous... Désorientés.</p>",
  bgImage: '/images/equipes/equipe--2019.jpg',
  image: '/images/affiches/affiche--2019.jpg'
}
let equipe = {
  bureau: [
    {
      role: 'Présidente',
      nom: 'Justine Cordelle',
      photo: 'youmi.jpg'
    },
    {
      role: 'Vice-Présidente',
      nom: 'Marianne Clément',
      photo: 'jon.jpg'
    },
    {
      role: 'Secrétaire Générale',
      nom: 'Sophie Rolloy',
      photo: 'haba.jpg'
    },
    {
      role: 'Trésorière',
      nom: 'Capucine Taillard',
      photo: 'estelle.jpg'
    }
  ],

  visibilite: [
    {
      role: 'Communication',
      nom: 'Eva Meunier',
      photo: 'standy.jpg'
    },
    {
      role: 'Communication',
      nom: 'Thomas Kuoch',
      photo: 'ines.jpg'
    },
    {
      role: 'Partenariats',
      nom: 'Clarisse Bonnay',
      photo: 'aurore.jpg'
    },
    {
      role: 'Partenariats',
      nom: 'Eloi Roudaire',
      photo: 'lisa.jpg'
    },
    {
      role: 'Webmaster',
      nom: 'Raphaël Chalicarne',
      photo: 'sheiros.jpg'
    }
  ],

  scenario: [
    {
      role: 'Scénariste',
      nom: 'Clément Borne',
      photo: 'mayar.jpg'
    },
    {
      role: 'Scénariste',
      nom: 'Ivain Rodriguez',
      photo: 'claire.jpg'
    },
    {
      role: 'Scénariste',
      nom: 'Pierre Allegre',
      photo: 'nico.jpg'
    },
    {
      role: 'Scénariste',
      nom: 'Romain Hamet',
      photo: 'emeline.jpg'
    }
  ],

  mes: [
    {
      role: 'Respo Tableaux',
      nom: 'Anne Loquineau',
      photo: 'emma.jpg'
    },
    {
      role: 'Metteuse en scène',
      nom: 'Aurore Boyer',
      photo: 'yorick.jpg'
    },
    {
      role: 'Metteuse en scène',
      nom: 'Emma Hakimi',
      photo: 'tihssy.jpg'
    }
  ],

  ac: [
    {
      role: 'Acteur-chanteur',
      nom: 'Benoit Decorse',
      photo: 'neo.jpg'
    },
    {
      role: 'Actrice-chanteuse',
      nom: 'Jeanne Monnier',
      photo: 'poulpy.jpg'
    },
    {
      role: 'Actrice-chanteuse',
      nom: 'Klara Wolowska',
      photo: 'klara.jpg'
    },
    {
      role: 'Actrice-chanteuse',
      nom: 'Lina Piredda',
      photo: 'rai\'ja.jpg'
    },
    {
      role: 'Acteur-chanteur',
      nom: 'Pierre Babinet',
      photo: 'taman.jpg'
    },
    {
      role: 'Acteur-chanteur',
      nom: 'Stéphan Couffin',
      photo: 'kapry.jpg'
    }
  ],

  chant: [
    {
      role: 'Respo chant',
      nom: 'Nicolas Chavonnand-Valades',
      photo: 'phyl.jpg'
    },
    {
      role: 'Respo chant',
      nom: 'Tom Filczinger',
      photo: 'ferrat.jpg'
    },
    {
      role: 'Choriste - Soprane',
      nom: 'Emma de Boissoudy',
      photo: 'von zimmel.jpg'
    },
    {
      role: 'Choriste - Mezzo-Soprane',
      nom: 'Suzanne He',
      photo: 'egah.jpg'
    },
    {
      role: 'Choriste - Ténor',
      nom: 'Cyril Lome',
      photo: 'olyon.jpg'
    },
    {
      role: 'Choriste - Baryton',
      nom: 'Vincent Haguet',
      photo: 'yari.jpg'
    }
  ],

  composition: [
    {
      role: 'Respo compositeur',
      nom: 'Alexandre Cartier',
      photo: 'yukhu.jpg'
    },
    {
      role: 'Respo compositeur',
      nom: 'Fabien Duranson',
      photo: 'arpys.jpg'
    },
    {
      role: 'Compositeur',
      nom: 'Noëlle Houriez',
      photo: 'laka.jpg'
    },
    {
      role: 'Compositeur',
      nom: 'Luis Juan Barragán',
      photo: 'duish.jpg'
    }
  ],

  zikos: [
    {
      role: 'Respo Zikos', // / Violoncelle',
      nom: 'Antoine Boudon',
      photo: 'eva.jpg'
    },
    {
      role: 'Respo Zikos',// / Chef d\'orchestre',
      nom: 'Matthias Zugarramurdi',
      photo: 'keeto.jpg'
    },
    {
      role: 'Violon',
      nom: 'Raphaëlle David',
      photo: 'rootz.jpg'
    },
    {
      role: 'Violon',
      nom: 'Agathe Voillequin',
      photo: 'origami.jpg'
    },
    {
      role: 'Violoncelle',
      nom: 'Hippolyte Coste',
      photo: 'spac.jpg'
    },
    {
      role: 'Flûte traversière',
      nom: 'Alix Robinne',
      photo: 'lyndra.jpg'
    },
    {
      role: 'Clarinette',
      nom: 'Pierre-Etienne Dury',
      photo: 'thiko.jpg'
    },
    {
      role: 'Saxophone alto',
      nom: 'Aurélien Vu Ngoc',
      photo: 'lyneha.jpg'
    },
    {
      role: 'Trompette',
      nom: 'Arsène Marzorati',
      photo: 'berkum.jpg'
    },
    {
      role: 'Trombone',
      nom: 'Denis Guibert',
      photo: 'dinan.jpg'
    },
    {
      role: 'Piano',
      nom: 'Pauline Colas des Francs',
      photo: 'royce.jpg'
    },
    {
      role: 'Guitare',
      nom: 'Loïc Béthencourt',
      photo: 'paccio.jpg'
    },
    {
      role: 'Guitare basse',
      nom: 'Martin Bouillot',
      photo: 'flex.jpg'
    },
    {
      role: 'Batterie',
      nom: 'François Courbin',
      photo: 'sanzes.jpg'
    }
  ],

  danse: [
    {
      role: 'Respo danse',
      nom: 'Chloé Rondepierre',
      photo: 'palma.jpg'
    },
    {
      role: 'Respo danse',
      nom: 'Philippine Renard',
      photo: 'passih.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Carla Salique',
      photo: 'marianne.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Cécile Goubet',
      photo: 'marine.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Charlotte Dillard',
      photo: 'cecile.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Léna Kasmi',
      photo: 'djuna.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Linbo Sun',
      photo: 'yaza.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Marie Nagy',
      photo: 'karla.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Marine Antoine',
      photo: 'anne.jpg'
    },
    {
      role: 'Danseur',
      nom: 'Muzi Zhu',
      photo: 'candy.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Julia Ohana',
      photo: 'philippine.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Roxane Boyer',
      photo: 'chloe.jpg'
    }
  ],

  costumes: [
    {
      role: 'Respo costumes',
      nom: 'Solène Butault',
      photo: 'rhomi.jpg'
    },
    {
      role: 'Respo costumes',
      nom: 'Valentine Rasse',
      photo: 'cely.jpg'
    },
    {
      role: 'Costumière',
      nom: 'Clervie Grillet',
      photo: 'oley.jpg'
    },
    {
      role: 'Costumière',
      nom: 'Iris Edelman',
      photo: 'lenou.jpg'
    },
    {
      role: 'Costumière',
      nom: 'Lison Allard',
      photo: 'aylie.jpg'
    }
  ],

  decors: [
    {
      role: 'Respo décors',
      nom: 'Valentin Allard',
      photo: 'foxh.jpg'
    },
    {
      role: 'Respo décors',
      nom: 'Victoire Momméja',
      photo: 'willa.jpg'
    },
    {
      role: 'Décoratrice',
      nom: 'Clara Viner',
      photo: 'nyma.jpg'
    },
    {
      role: 'Décorateur',
      nom: 'Edouard Wattine',
      photo: 'lola.jpg'
    },
    {
      role: 'Décoratrice',
      nom: 'Caroline Yang',
      photo: 'caroline.jpg'
    },
    {
      role: 'Décoratrice',
      nom: 'Margaux Lefrère',
      photo: 'caroline.jpg'
    }
  ],

  technique: [
    {
      role: 'Respo son',
      nom: 'Antoine Caisson',
      photo: 'polia.jpg'
    },
    {
      role: 'Respo Son',
      nom: 'Dorian Belverge',
      photo: 'dupastis.jpg'
    },
    {
      role: 'VP son',
      nom: 'Julien Guinot',
      photo: 'lafarine.jpg'
    },
    {
      role: 'VP son',
      nom: 'Laurence Goigoux',
      photo: 'georace.jpg'
    },
    {
      role: 'VP son',
      nom: 'Robin Mourton',
      photo: 'pydow.jpg'
    },
    {
      role: 'VP son',
      nom: 'Thibaut Decombe',
      photo: 'pydow.jpg'
    },
    {
      role: 'Respo lumière',
      nom: 'Tom Humeau',
      photo: 'charlotte.jpg'
    },
    {
      role: 'Respo vidéo',
      nom: 'Antoine-Marie Portalier',
      photo: 'HDV.jpg'
    }
  ],

  amour: [
    {
      role: 'VP Amour',
      nom: 'Charlotte Garreau',
      photo: 'tazzy.jpg'
    },
    {
      role: 'VP Amour',
      nom: 'Gaëtan Marchais',
      photo: 'lally.jpg'
    },
    {
      role: 'VP Amour',
      nom: 'Vincent Arthaud',
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
    /*.trombi_membre {
        position: absolute;
        clip:rect(0px,185px,170px,15px);
    }*/
</style>
