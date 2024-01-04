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
          <p><b>{{ membre.nom }}</b><br />
            <i>{{ membre.role }}</i>
          </p>
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
          <p><b>{{ membre.nom }}</b><br />
            <i>{{ membre.role }}</i>
          </p>
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
          <p><b>{{ membre.nom }}</b><br />
            <i>{{ membre.role }}</i>
          </p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2020/mes.png" alt="Mise en scène">
        <h2>Mise en scène</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.mes" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2020/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br />
            <i>{{ membre.role }}</i>
          </p>
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
          <p><b>{{ membre.nom }}</b><br />
            <i>{{ membre.role }}</i>
          </p>
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
          <p><b>{{ membre.nom }}</b><br />
            <i>{{ membre.role }}</i>
          </p>
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
          <p><b>{{ membre.nom }}</b><br />
            <i>{{ membre.role }}</i>
          </p>
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
          <p><b>{{ membre.nom }}</b><br />
            <i>{{ membre.role }}</i>
          </p>
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
          <p><b>{{ membre.nom }}</b><br />
            <i>{{ membre.role }}</i>
          </p>
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
          <p><b>{{ membre.nom }}</b><br />
            <i>{{ membre.role }}</i>
          </p>
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
          <p><b>{{ membre.nom }}</b><br />
            <i>{{ membre.role }}</i>
          </p>
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
          <p><b>{{ membre.nom }}</b><br />
            <i>{{ membre.role }}</i>
          </p>
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
          <p><b>{{ membre.nom }}</b><br />
            <i>{{ membre.role }}</i>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let presentation = {
  text: '<h2>2020 - Contretemps</h2>' +
    "<p>Titouan, adolescent de 17 ans en fac d'Histoire se réveille à Versailles, un matin de 1712, dans un corps qui n'est pas le sien. Le propriétaire de ce corps s'appelle Joseph, est compositeur du Roi, et reprend connaissance au même moment dans la chambre de Titouan, au XXI<sup>e</sup> siècle. Alors que les proches de Joseph défilent devant Titouan avec leurs intrigues et leurs secrets, l'adolescent se rend rapidement compte qu'il a une énorme responsabilité : il doit composer une comédie-ballet pour Louis XIV. </p>",
  bgImage: '/images/equipes/equipe--2020.jpg',
  image: '/images/affiches/affiche--2020.jpg'
}


let equipe = {
  bureau: [
    {
      role: 'Président',
      nom: 'Vincent Haguet',
      photo: 'Khappa.jpg'
    },
    {
      role: 'Vice-Président',
      nom: 'Édouard Wattinne',
      photo: 'Edouard.jpg'
    },
    {
      role: 'Secrétaire Générale',
      nom: 'François Courbin',
      photo: 'Dumelon.jpg'
    },
    {
      role: 'Trésorière',
      nom: 'Nina Cressend',
      photo: 'Nina.jpg'
    }
  ],

  visibilite: [
    {
      role: 'Star',
      nom: 'Bro Douai',
      photo: 'Bro.jpg'
    },
    {
      role: 'Communication',
      nom: 'Julien Guinot',
      photo: 'Joke.jpg'
    },
    {
      role: 'Communication',
      nom: 'Klara Wolowska',
      photo: 'Klara.jpg'
    },
    {
      role: 'Webmestre',
      nom: 'Bastien Laville',
      photo: 'Bastien.jpg'
    },
    {
      role: 'Partenariats',
      nom: 'Constance De Bejarry',
      photo: 'Constance.jpg'
      // },
      // {
      //   role: 'Partenariats',
      //   nom: 'Hippolyte Coste',
      //   photo: 'hippoc.jpg'
    }
  ],

  scenario: [
    {
      role: 'Scénariste',
      nom: 'Tom Humeau',
      photo: 'TomH.jpg'
    },
    {
      role: 'Scénariste',
      nom: 'Alice Bensussan',
      photo: 'Alice.jpg'
    },
    {
      role: 'Scénariste',
      nom: 'Amandine Chemoul',
      photo: 'Amandine.jpg'
    },
    {
      role: 'Scénariste',
      nom: 'Loïc Denis',
      photo: 'Loic.jpg'
    }
  ],

  mes: [
    {
      role: 'Coordinatrice artistique',
      nom: 'Roxane Boyer',
      photo: 'Roxanne.jpg'
    },
    {
      role: 'Metteur en scène',
      nom: 'Ivain Rodriguez',
      photo: 'Olyon.jpg'
    },
    {
      role: 'Metteuse en scène',
      nom: 'Benoît Descorse',
      photo: 'Trakop.jpg'
    }
  ],

  ac: [
    {
      role: 'Actrice-chanteuse',
      nom: 'Delphine Gindre',
      photo: 'Dédon.jpg'
    },
    {
      role: 'Acteur-chanteur',
      nom: 'Nathan Godoy',
      photo: 'Nathan.jpg'
    },
    {
      role: 'Acteur-chanteur',
      nom: 'Zaccharie Lakhal',
      photo: 'Zac.jpg'
    },
    {
      role: 'Actrice-chanteuse',
      nom: 'Agathe Peigney',
      photo: 'AgatheP.jpg'
    },
    {
      role: 'Acteur-chanteur',
      nom: 'Théo Santos',
      photo: 'Mayar.jpg'
    },
    {
      role: 'Comédien',
      nom: 'Paul Nédélec',
      photo: 'Phrygoh.jpg'
    },
    {
      role: 'Comédien',
      nom: 'Mahé Venault',
      photo: 'Mahe.jpg'
    },
    {
      role: 'Comédienne',
      nom: 'Adam Alice',
      photo: 'AliceA.jpg'
    }
  ],

  chant: [
    {
      role: 'Respo chant',
      nom: 'Suzanne He',
      photo: 'Suzanne.jpg'
    },
    {
      role: 'Respo chant',
      nom: 'Agathe Voillequin',
      photo: 'AgatheV.jpg'
    },
    {
      role: 'Choriste',
      nom: 'Julian Achatz',
      photo: 'Julian.jpg'
    },
    {
      role: 'Choriste',
      nom: 'Maxence Bideaux',
      photo: 'Maxence.jpg'
    },
    {
      role: 'Choriste',
      nom: "Marie d'Harcourt",
      photo: 'Marie.jpg'
    },
    {
      role: 'Choriste',
      nom: 'Apolline Jauffret',
      photo: 'Apolline.jpg'
    }
  ],

  composition: [
    {
      role: 'Respo compositeur',
      nom: 'Louis Barlet',
      photo: 'Zephy.jpg'
    },
    {
      role: 'Respo compositeur',
      nom: 'Arsène Marzorati',
      photo: 'Arsene.jpg'
    },
    {
      role: 'Compositeur',
      nom: 'Thibault Carpogno',
      photo: 'thibault.jpg'
    },
    {
      role: 'Compositeur',
      nom: 'Julien Gehrke',
      photo: 'JulienG.jpg'
    }
  ],

  zikos: [
    {
      role: 'Respo Zikos',
      nom: 'Emma de Boissoudy',
      photo: 'Emma.jpg'
    },
    {
      role: 'Respo Zikos',
      nom: 'Vincent Duong',
      photo: 'Keeto.jpg'
    },
    {
      role: 'Violon',
      nom: 'David Kene',
      photo: 'David.jpg'
    },
    {
      role: 'Violon',
      nom: 'Jean Turck',
      photo: 'JeanT1.jpg'
    },
    {
      role: 'Alto',
      nom: 'Alicia Barsacq',
      photo: 'Alicia.jpg'
    },
    {
      role: 'Flûte',
      nom: 'Théophile Dandé',
      photo: 'Zher.jpg'
    },
    {
      role: 'Hautbois',
      nom: 'Zoé Morel',
      photo: 'Zoe.jpg'
    },
    {
      role: 'Saxophone soprano',
      nom: 'Martin Greiveldinger',
      photo: 'Quibu.jpg'
    },
    {
      role: 'Saxophone alto',
      nom: 'Victor Penalver',
      photo: 'Lomboh.jpg'
    },
    {
      role: 'Trompette',
      nom: 'Samuel Rizoulière',
      photo: 'Samuel.jpg'
    },
    {
      role: 'Trombone',
      nom: 'Tom Mehl',
      photo: 'TomAlibabasse.jpg'
    },
    {
      role: 'Piano',
      nom: 'Lauréna Éliard',
      photo: 'Laurena.jpg'
    },
    {
      role: 'Guitare',
      nom: 'Robin Calmard',
      photo: 'Robin.jpg'
    },
    {
      role: 'Guitare basse',
      nom: 'Nicolas Moniez',
      photo: 'Chaloupe.jpg'
    },
    {
      role: 'Batterie',
      nom: 'Léo Savigni',
      photo: 'LeoS.jpg'
    }
  ],

  danse: [
    {
      role: 'Respo danse',
      nom: 'Léna Kasmi',
      photo: 'Lena.jpg'
    },
    {
      role: 'Respo danse',
      nom: 'Jeanne Monier',
      photo: 'Jeanne.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Carla Salique',
      photo: 'Valtha.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Bérénice Vives',
      photo: 'Berenice.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Clémence Bouquillon',
      photo: 'Clemence.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Anastasia Bruniaux',
      photo: 'Anastasia.jpg'
    },
    {
      role: 'Danseur',
      nom: 'Linbo Sun',
      photo: 'Linbo.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Eva Giband',
      photo: 'Eva.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Yuexuan Kong',
      photo: 'Yuexuan.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Li Zhuoran',
      photo: 'Zhuoran.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Juliette Quinet',
      photo: 'Juliette.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Céline Raillé',
      photo: 'Celine.jpg'
    }
  ],

  costumes: [
    {
      role: 'Respo costumes',
      nom: 'Iris Edelman',
      photo: 'Iris.jpg'
    },
    {
      role: 'Respo costumes',
      nom: 'Clervie Grillet',
      photo: 'Clervos.jpg'
    },
    {
      role: 'Costumière',
      nom: 'Lise Charcosset',
      photo: 'Lise.jpg'
    },
    {
      role: 'Costumière',
      nom: 'Pauline Colas Des Francs',
      photo: 'Pauline.jpg'
    },
    {
      role: 'Costumière',
      nom: 'Marguerite de La Porte',
      photo: 'Marguerite.jpg'
    }
  ],

  decors: [
    {
      role: 'Respo décors',
      nom: 'Lison Allard',
      photo: 'Lison.jpg'
    },
    {
      role: 'Respo décors',
      nom: 'Martin Le Henaff',
      photo: 'Genatz.jpg'
    },
    {
      role: 'Décoratrice',
      nom: 'Laïs Foix',
      photo: 'Lais.jpg'
    },
    {
      role: 'Décorateur',
      nom: 'Julien Mougel',
      photo: 'Scoopyh.jpg'
    },
    {
      role: 'Décoratrice',
      nom: 'Maëlys Herrouin',
      photo: 'Maelys.jpg'
    }
  ],

  technique: [
    {
      role: 'Respo son',
      nom: 'Aurélien Vu Ngoc',
      photo: 'Aurelien.jpg'
    },
    // {
    //   role: 'VP son',
    //   nom: 'Clara Angrand',
    //   photo: 'claraa.jpg'
    // },
    // {
    //   role: 'VP son',
    //   nom: 'Éléonor Audiot',
    //   photo: 'eleonora.jpg'
    // },
    {
      role: 'VP son',
      nom: 'Camille Babin',
      photo: 'Camille.jpg'
    },
    {
      role: 'VP son',
      nom: 'Boris Laurent',
      photo: 'Boris.jpg'
    },
    {
      role: 'VP son',
      nom: 'Nicolas Miranda',
      photo: 'Brador.jpg'
    },
    {
      role: 'VP son',
      nom: 'Clara Angrand',
      photo: 'Nahe.jpg'
    },
    {
      role: 'VP lumière',
      nom: 'Alban Gosset',
      photo: 'Alban.jpg'
    },
    {
      role: 'Respo vidéo',
      nom: 'Pierre Rouaix',
      photo: 'Pierre.jpg'
    }
  ],

  amour: [
    {
      role: 'VP Amour',
      nom: 'Martin Bouillot',
      photo: 'Pradow.jpg'
    },
    {
      role: 'VP Amour',
      nom: 'Alexia De Mombynes',
      photo: 'Alexia.jpg'
    },
    {
      role: 'VP Amour',
      nom: 'Chloé Lutz',
      photo: 'Flymm.jpg'
    }
  ]
}


export default {
  data: function () {
    return { equipe, presentation }
  }
}
</script>