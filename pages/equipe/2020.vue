<template lang="html">
  <div>
    <pane type="pane--media" :bgImage="presentation.bgImage" :image="presentation.image" :text="presentation.text"></pane>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2020/bureau.png" alt="Bureau">
        <h2>Bureau</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.bureau" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2020/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2020/visibilite.png" alt="Visibilité">
        <h2>Visibilité</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.visibilite" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2020/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2020/scenario.png" alt="Scénario">
        <h2>Scénario</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.scenario" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2020/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2020/mes.png" alt="Mise en scènes">
        <h2>Mise en scène</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.mes" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2020/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2020/ac.png" alt="Acteur-chanteur, comédien">
        <h2>Acteurs-chanteurs</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.ac" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2020/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2020/choristes.png" alt="Choristes">
        <h2>Chant</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.chant" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2020/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2020/composition.png" alt="Composition">
        <h2>Composition</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.composition" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2020/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2020/musik.png" alt="Musique">
        <h2>Musique</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.zikos" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2020/' + membre.photo" alt="">
<!--           <template v-if="membre.nom == 'Marwan Hassan'">
            <router-link to="/rootz"><p><b>{{ membre.nom }}</b><br/>
              <i>{{ membre.role }}</i></p></router-link>
          </template> -->
          <template v-else>
            <p><b>{{ membre.nom }}</b><br/>
              <i>{{ membre.role }}</i></p>
          </template>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2020/danse.png" alt="Danseuses">
        <h2>Danse</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.danse" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2020/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2020/costumes.png" alt="Costumes">
        <h2>Costumes</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.costumes" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2020/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2020/decors.png" alt="Décors">
        <h2>Décors</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.decors" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2020/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2020/technique.png" alt="Technique">
        <h2>Son, lumière et vidéo</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.technique" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2020/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2020/amour.png" alt="Support">
        <h2>Amour</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.amour" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2020/' + membre.photo" alt="">
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
  text: '<h2>2020 : Titre final lol</h2>' +
          "<p>Un petit descriptif</p>",
  bgImage: '/images/equipes/equipe--2020.jpg',
  image: '/images/affiches/affiche--2020.jpg'
}


let equipe = {
  bureau: [
    {
      role: 'Président',
      nom: 'Vincent Haguet',
      photo: 'vincenth.jpg'
    },
    {
      role: 'Vice-Président',
      nom: 'Édouard Wattinne',
      photo: 'francoisw.jpg'
    },
    {
      role: 'Secrétaire Générale',
      nom: 'François Courbin',
      photo: 'francoisc.jpg'
    },
    {
      role: 'Trésorière',
      nom: 'Nina Cressend',
      photo: 'ninac.jpg'
    }
  ],

  visibilite: [
    {
      role: 'Communication',
      nom: 'Julien Guinot',
      photo: 'julieng.jpg'
    },
    {
      role: 'Communication',
      nom: 'Klara Wolowska',
      photo: 'klaraw.jpg'
    },
    {
      role: 'Webmestre',
      nom: 'Bastien Laville',
      photo: 'bastienl.jpg'
    },
    {
      role: 'Partenariats',
      nom: 'Constance De Bejarry',
      photo: 'cdb.jpg'
    },
    {
      role: 'Partenariats',
      nom: 'Hippolyte Coste',
      photo: 'hippoc.jpg'
    }
  ],

  scenario: [
    {
      role: 'Scénariste',
      nom: 'Tom Humeau',
      photo: 'tomh.jpg'
    },
    {
      role: 'Scénariste',
      nom: 'Alice Bensussan',
      photo: 'aliceb.jpg'
    },
    {
      role: 'Scénariste',
      nom: 'Amandine Chemoul',
      photo: 'amdinec.jpg'
    },
    {
      role: 'Scénariste',
      nom: 'Loïc Denis',
      photo: 'loicd.jpg'
    }
  ],

  mes: [
    {
      role: 'Metteur en scène',
      nom: 'Ivain Rodriguez',
      photo: 'ivainr.jpg'
    },
    {
      role: 'Metteuse en scène',
      nom: 'Benoît Descorse',
      photo: 'benoitd.jpg'
    }
  ],

  ac: [
    {
      role: 'Actrice-chanteuse',
      nom: 'Delphine Gindres',
      photo: 'delphineg.jpg'
    },
    {
      role: 'Acteur-chanteur',
      nom: 'Nathan Godoy',
      photo: 'nathang.jpg'
    },
    {
      role: 'Acteur-chanteur',
      nom: 'Zaccharie Lakhal',
      photo: 'zacl.jpg'
    },
    {
      role: 'Actrice-chanteuse',
      nom: 'Agathe Peigney',
      photo: 'agathep.jpg'
    },
    {
      role: 'Acteur-chanteur',
      nom: 'Théo Santos',
      photo: 'mayar.jpg'
    },
    {
      role: 'Comédien',
      nom: 'Paul Nédélec',
      photo: 'pauln.jpg'
    },
    {
      role: 'Comédien',
      nom: 'Mahé Venault',
      photo: 'mahev.jpg'
    },
    {
      role: 'Comédienne',
      nom: 'Adam Alice',
      photo: 'adama.jpg'
    }
  ],

  chant: [
    {
      role: 'Respo chant',
      nom: 'Suzanne He',
      photo: 'suzanneh.jpg'
    },
    {
      role: 'Respo chant',
      nom: 'Agathe Voillequin',
      photo: 'agathev.jpg'
    },
    {
      role: 'Choriste',
      nom: 'Julian Achatz',
      photo: 'juliana.jpg'
    },
    {
      role: 'Choriste',
      nom: 'Maxence Bideaux',
      photo: 'maxenceb.jpg'
    },
    {
      role: 'Choriste',
      nom: "Marie d'Hacourt",
      photo: 'maried.jpg'
    },
    {
      role: 'Choriste',
      nom: 'Apolline Jauffret',
      photo: 'apoj.jpg'
    }
  ],

  composition: [
    {
      role: 'Respo compositeur',
      nom: 'Louis Barlet',
      photo: 'louisb.jpg'
    },
    {
      role: 'Respo compositeur',
      nom: 'Arsène Marzorati',
      photo: 'arsenem.jpg'
    },
    {
      role: 'Compositeur',
      nom: 'Thibault Carpogno',
      photo: 'thibaultc.jpg'
    },
    {
      role: 'Compositeur',
      nom: 'Julien Gehrke',
      photo: 'julieng.jpg'
    }
  ],

  zikos: [
    {
      role: 'Respo Zikos',
      nom: 'Emma de Boissoudy',
      photo: 'emmad.jpg'
    },
    {
      role: 'Respo Zikos',
      nom: 'Vincent Duong',
      photo: 'vincentd.jpg'
    },
    {
      role: 'Violon',
      nom: 'David Kene',
      photo: 'davidk.jpg'
    },
    {
      role: 'Violon',
      nom: 'Jean Turck',
      photo: 'jeant.jpg'
    },
    {
      role: 'Alto',
      nom: 'Alicia Barsacq',
      photo: 'aliciab.jpg'
    },
    {
      role: 'Flûte',
      nom: 'Théophile Dandé',
      photo: 'theophiled.jpg'
    },
    {
      role: 'Hautbois',
      nom: 'Zoé Morel',
      photo: 'zoem.jpg'
    },
    {
      role: 'Saxophone soprano',
      nom: 'Martin Greiveldinger',
      photo: 'marting.jpg'
    },
    {
      role: 'Saxophone alto',
      nom: 'Victor Penalver',
      photo: 'victorp.jpg'
    },
    {
      role: 'Trompette',
      nom: 'Samuel Rizoulière',
      photo: 'samuelr.jpg'
    },
    {
      role: 'Trombone',
      nom: 'Tom Mehl',
      photo: 'tomm.jpg'
    },
    {
      role: 'Piano',
      nom: 'Lauréna Éliard',
      photo: 'laurenae.jpg'
    },
    {
      role: 'Guitare',
      nom: 'Robin Calmard',
      photo: 'robinc.jpg'
    },
    {
      role: 'Guitare basse',
      nom: 'Nicolas Moniez',
      photo: 'nicolasm.jpg'
    },
    {
      role: 'Batterie',
      nom: 'Léo Savigni',
      photo: 'léos.jpg'
    }
  ],

  danse: [
    {
      role: 'Respo danse',
      nom: 'Léna Kasmi',
      photo: 'lenak.jpg'
    },
    {
      role: 'Respo danse',
      nom: 'Jeanne Monier',
      photo: 'jeannem.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Carla Salique',
      photo: 'carla.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Bérénice Vives',
      photo: 'berenicev.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Clémence Bouquillon',
      photo: 'clemenceb.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Anastasia Bruniaux',
      photo: 'anastasiab.jpg'
    },
    {
      role: 'Danseur',
      nom: 'Linbo Sun',
      photo: 'linbo.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Eva Giband',
      photo: 'evag.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Yuexuan Kong',
      photo: 'yuek.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Li Zhuoran',
      photo: 'liz.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Juliette Quinet',
      photo: 'julietteq.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Céline Raillé',
      photo: 'celiner.jpg'
    }
  ],

  costumes: [
    {
      role: 'Respo costumes',
      nom: 'Iris Edelman',
      photo: 'irise.jpg'
    },
    {
      role: 'Respo costumes',
      nom: 'Clervie Grillet',
      photo: 'clervie.jpg'
    },
    {
      role: 'Costumière',
      nom: 'Lise Charcosset',
      photo: 'lisec.jpg'
    },
    {
      role: 'Costumière',
      nom: 'Pauline Colas Des Francs',
      photo: 'pcdf.jpg'
    },
    {
      role: 'Costumière',
      nom: 'Marguerite de La Porte',
      photo: 'mdlp.jpg'
    }
  ],

  decors: [
    {
      role: 'Respo décors',
      nom: 'Lison Allard',
      photo: 'lisona.jpg'
    },
    {
      role: 'Respo décors',
      nom: 'Martin Le Henaff',
      photo: 'mlh.jpg'
    },
    {
      role: 'Décoratrice',
      nom: 'Laïs Foix',
      photo: 'laisf.jpg'
    },
    {
      role: 'Décorateur',
      nom: 'Julien Mougel',
      photo: 'Julienm.jpg'
    },
    {
      role: 'Décoratrice',
      nom: 'Maëlys Herrouin',
      photo: 'maelysh.jpg'
    }
  ],

  technique: [
    {
      role: 'Respo son',
      nom: 'Aurélien Vu NGnoc',
      photo: 'aurelienvu.jpg'
    },
    {
      role: 'VP son',
      nom: 'Clara Angrand',
      photo: 'claraa.jpg'
    },
    {
      role: 'VP son',
      nom: 'Éléonor Audiot',
      photo: 'eleonora.jpg'
    },
    {
      role: 'VP son',
      nom: 'Camille Babin',
      photo: 'camilleb.jpg'
    },
    {
      role: 'VP son',
      nom: 'Boris Laurent',
      photo: 'borisl.jpg'
    },
    {
      role: 'VP son',
      nom: 'Nicolas Miranda',
      photo: 'nicolasm.jpg'
    },
    {
      role: 'VP lumière',
      nom: 'Alban Gosset',
      photo: 'albang.jpg'
    }
  ],

  amour: [
    {
      role: 'VP Amour',
      nom: 'Martin Bouillot',
      photo: 'martinb.jpg'
    },
    {
      role: 'VP Amour',
      nom: 'Alexia De Mombynes',
      photo: 'adm.jpg'
    },
    {
      role: 'VP Amour',
      nom: 'Chloé Lutz',
      photo: 'chloel.jpg'
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
