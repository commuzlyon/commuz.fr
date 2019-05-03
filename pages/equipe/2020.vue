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
          <img v-if="membre.photo != ''" :src="'/images/equipes/2019/' + membre.photo" alt="">
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
          <img v-if="membre.photo != ''" :src="'/images/equipes/2019/' + membre.photo" alt="">
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
          <img v-if="membre.photo != ''" :src="'/images/equipes/2019/' + membre.photo" alt="">
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
          <img v-if="membre.photo != ''" :src="'/images/equipes/2019/' + membre.photo" alt="">
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
          <img v-if="membre.photo != ''" :src="'/images/equipes/2019/' + membre.photo" alt="">
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
          <img v-if="membre.photo != ''" :src="'/images/equipes/2019/' + membre.photo" alt="">
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
          <img v-if="membre.photo != ''" :src="'/images/equipes/2019/' + membre.photo" alt="">
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
          <img v-if="membre.photo != ''" :src="'/images/equipes/2019/' + membre.photo" alt="">
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
          <img v-if="membre.photo != ''" :src="'/images/equipes/2019/' + membre.photo" alt="">
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
          <img v-if="membre.photo != ''" :src="'/images/equipes/2019/' + membre.photo" alt="">
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
          <img v-if="membre.photo != ''" :src="'/images/equipes/2019/' + membre.photo" alt="">
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
          <img v-if="membre.photo != ''" :src="'/images/equipes/2019/' + membre.photo" alt="">
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
      photo: 'justine.jpg'
    },
    {
      role: 'Vice-Présidente',
      nom: 'Marianne Clément',
      photo: 'marianne.jpg'
    },
    {
      role: 'Secrétaire Générale',
      nom: 'Sophie Rolloy',
      photo: 'sophie.jpg'
    },
    {
      role: 'Trésorière',
      nom: 'Capucine Taillard',
      photo: 'capucine.jpg'
    }
  ],
  visibilite: [
    {
      role: 'Communication',
      nom: 'Eva Meunier',
      photo: 'Eva.jpg'
    },
    {
      role: 'Communication',
      nom: 'Thomas Kuoch',
      photo: 'akelo.jpg'
    },
    /*{
      role: 'Partenariats',
      nom: 'Clarisse Bonnay',
      photo: 'aurore.jpg'
    },*/
    {
      role: 'Partenariats',
      nom: 'Eloi Roudaire',
      photo: 'zhapy.jpg'
    },
    {
      role: 'Webmaster',
      nom: 'Raphaël Chalicarne',
      photo: 'shender.jpg'
    }
  ],
  scenario: [
    {
      role: 'Scénariste',
      nom: 'Clément Borne',
      photo: 'thiko.jpg'
    },
    {
      role: 'Scénariste',
      nom: 'Ivain Rodriguez',
      photo: 'olyon.jpg'
    },
    {
      role: 'Scénariste',
      nom: 'Pierre Allegre',
      photo: 'yhgle.jpg'
    },
    {
      role: 'Scénariste',
      nom: 'Romain Hamet',
      photo: 'thakin.jpg'
    }
  ],
  mes: [
    {
      role: 'Respo Tableaux',
      nom: 'Anne Loquineau',
      photo: 'anne.jpg'
    },
    {
      role: 'Metteuse en scène',
      nom: 'Aurore Boyer',
      photo: 'aurore.jpg'
    },
    {
      role: 'Metteuse en scène',
      nom: 'Emma Hakimi',
      photo: 'emma_hakimi.jpg'
    }
  ],
  ac: [
    {
      role: 'Acteur-chanteur',
      nom: 'Benoit Decorse',
      photo: 'trakop.jpg'
    },
    {
      role: 'Actrice-chanteuse',
      nom: 'Jeanne Monnier',
      photo: 'Yon_ce.jpg'
    },
    {
      role: 'Actrice-chanteuse',
      nom: 'Klara Wolowska',
      photo: 'klara.jpg'
    },
    {
      role: 'Actrice-chanteuse',
      nom: 'Lina Piredda',
      photo: 'lina.jpg'
    },
    {
      role: 'Acteur-chanteur',
      nom: 'Pierre Babinet',
      photo: 'zoum.jpg'
    },
    {
      role: 'Acteur-chanteur',
      nom: 'Stéphan Couffin',
      photo: 'stephan.jpg'
    }
  ],
  chant: [
    {
      role: 'Respo chant',
      nom: 'Nicolas Chavonnand-Valades',
      photo: 'nico.jpg'
    },
    {
      role: 'Respo chant',
      nom: 'Tom Filczinger',
      photo: 'tom.jpg'
    },
    {
      role: 'Choriste - Soprane',
      nom: 'Emma de Boissoudy',
      photo: 'emma_de_boissoudy.jpg'
    },
    {
      role: 'Choriste - Mezzo-Soprane',
      nom: 'Suzanne He',
      photo: 'suzanne.jpg'
    },
    {
      role: 'Choriste - Ténor',
      nom: 'Cyril Lome',
      photo: 'cyril.jpg'
    },
    {
      role: 'Choriste - Baryton',
      nom: 'Vincent Haguet',
      photo: 'khappa.jpg'
    }
  ],
  composition: [
    {
      role: 'Respo compositeur',
      nom: 'Alexandre Cartier',
      photo: 'Paypouz.jpg'
    },
    {
      role: 'Respo compositeur',
      nom: 'Fabien Duranson',
      photo: 'Pollux.jpg'
    },
    {
      role: 'Compositeur',
      nom: 'Noëlle Houriez',
      photo: 'noelle.jpg'
    },
    {
      role: 'Compositeur',
      nom: 'Luis Juan Barragán',
      photo: 'inoui.jpg'
    }
  ],
  zikos: [
    {
      role: 'Respo Zikos', // / Violoncelle',
      nom: 'Antoine Boudon',
      photo: 'dinan.jpg'
    },
    {
      role: 'Respo Zikos',// / Chef d\'orchestre',
      nom: 'Matthias Zugarramurdi',
      photo: 'Zuga.jpg'
    },
    {
      role: 'Violon',
      nom: 'Raphaëlle David',
      photo: 'fender.jpg'
    },
    {
      role: 'Violon',
      nom: 'Agathe Voillequin',
      photo: 'agathe.jpg'
    },
    {
      role: 'Violoncelle',
      nom: 'Hippolyte Coste',
      photo: 'hippo.jpg'
    },
    {
      role: 'Flûte traversière',
      nom: 'Alix Robinne',
      photo: 'alix.jpg'
    },
    {
      role: 'Clarinette',
      nom: 'Pierre-Etienne Dury',
      photo: 'juana.jpg'
    },
    {
      role: 'Saxophone alto',
      nom: 'Aurélien Vu Ngoc',
      photo: 'ter.jpg'
    },
    {
      role: 'Trompette',
      nom: 'Arsène Marzorati',
      photo: 'sans_souci.jpg'
    },
    {
      role: 'Trombone',
      nom: 'Denis Guibert',
      photo: 'origami.jpg'
    },
    {
      role: 'Piano',
      nom: 'Pauline Colas des Francs',
      photo: 'Pauline.jpg'
    },
    {
      role: 'Guitare',
      nom: 'Loïc Béthencourt',
      photo: 'chonlé.jpg'
    },
    {
      role: 'Guitare basse',
      nom: 'Martin Bouillot',
      photo: 'pradow.jpg'
    },
    {
      role: 'Batterie',
      nom: 'François Courbin',
      photo: 'dumelon.jpg'
    }
  ],
  danse: [
    {
      role: 'Respo danse',
      nom: 'Chloé Rondepierre',
      photo: 'chloé.jpg'
    },
    {
      role: 'Respo danse',
      nom: 'Philippine Renard',
      photo: 'philippine.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Carla Salique',
      photo: 'carla.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Cécile Goubet',
      photo: 'cecile.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Charlotte Dillard',
      photo: 'charlotte_dillard.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Léna Kasmi',
      photo: 'lena.jpg'
    },
    {
      role: 'Danseur',
      nom: 'Linbo Sun',
      photo: 'linbo.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Marie Nagy',
      photo: 'marie.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Marine Antoine',
      photo: 'marine.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Muzi Zhu',
      photo: 'muzi.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Julia Ohana',
      photo: 'julia.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Roxane Boyer',
      photo: 'roxane.jpg'
    }
  ],
  costumes: [
    {
      role: 'Respo costumes',
      nom: 'Solène Butault',
      photo: 'tokha.jpg'
    },
    {
      role: 'Respo costumes',
      nom: 'Valentine Rasse',
      photo: 'valentine.jpg'
    },
    {
      role: 'Costumière',
      nom: 'Clervie Grillet',
      photo: 'clervie.jpg'
    },
    {
      role: 'Costumière',
      nom: 'Iris Edelman',
      photo: 'iris.jpg'
    },
    {
      role: 'Costumière',
      nom: 'Lison Allard',
      photo: 'lison.jpg'
    }
  ],
  decors: [
    {
      role: 'Respo décors',
      nom: 'Valentin Allard',
      photo: 'Zypo.jpg'
    },
    {
      role: 'Respo décors',
      nom: 'Victoire Momméja',
      photo: 'Tila.jpg'
    },
    {
      role: 'Décoratrice',
      nom: 'Clara Viner',
      photo: 'Clara.jpg'
    },
    {
      role: 'Décorateur',
      nom: 'Edouard Wattine',
      photo: 'Edouard.jpg'
    },
    {
      role: 'Décoratrice',
      nom: 'Margaux Lefrère',
      photo: 'Margaux.jpg'
    }
  ],
  technique: [
    {
      role: 'Respo son',
      nom: 'Antoine Caisson',
      photo: 'lafarine.jpg'
    },
    {
      role: 'Respo Son',
      nom: 'Dorian Belverge',
      photo: 'nerohn.jpg'
    },
    {
      role: 'VP son',
      nom: 'Julien Guinot',
      photo: 'joke.jpg'
    },
    {
      role: 'VP son',
      nom: 'Laurence Goigoux',
      photo: 'laurence.jpg'
    },
    {
      role: 'VP son',
      nom: 'Robin Mourton',
      photo: 'naste.jpg'
    },
    {
      role: 'VP son',
      nom: 'Thibaut Decombe',
      photo: 'balavoine.jpg'
    },
    {
      role: 'Respo lumière',
      nom: 'Tom Humeau',
      photo: 'jmm.jpg'
    },
    {
      role: 'Respo vidéo',
      nom: 'Antoine-Marie Portalier',
      photo: 'guich.jpg'
    }
  ],
  amour: [
    {
      role: 'VP Amour',
      nom: 'Charlotte Garreau',
      photo: 'charlotte_garreau.jpg'
    },
    {
      role: 'VP Amour',
      nom: 'Gaëtan Marchais',
      photo: 'hdv.jpg'
    },
    {
      role: 'VP Amour',
      nom: 'Vincent Arthaud',
      photo: 'bobby.jpg'
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
