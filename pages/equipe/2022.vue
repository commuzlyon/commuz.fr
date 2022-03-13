<template lang="html">
  <div>
    <pane type="pane--media" :bgImage="presentation.bgImage" :image="presentation.image" :text="presentation.text"></pane>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2022/bureau.png" alt="Bureau">
        <h2>Bureau</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre square" v-for="(membre, idMembre) in equipe.bureau" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2022/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2022/visibilite.png" alt="Visibilité">
        <h2>Visibilité</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre square" v-for="(membre, idMembre) in equipe.visibilite" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2022/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2022/scenario.png" alt="Scénario">
        <h2>Scénario</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre square" v-for="(membre, idMembre) in equipe.scenario" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2022/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2022/mes.png" alt="Mise en scène">
        <h2>Mise en scène</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre square" v-for="(membre, idMembre) in equipe.mes" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2022/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2022/ac.png" alt="Acteur-chanteur, comédien">
        <h2>Acteurs-chanteurs</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre square" v-for="(membre, idMembre) in equipe.ac" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2022/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2022/choristes.png" alt="Choristes">
        <h2>Chant</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre square" v-for="(membre, idMembre) in equipe.chant" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2022/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2022/composition.png" alt="Composition">
        <h2>Composition</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre square" v-for="(membre, idMembre) in equipe.composition" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2022/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2022/zikos.png" alt="Musique">
        <h2>Musique</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre square" v-for="(membre, idMembre) in equipe.zikos" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2022/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2022/danse.png" alt="Danseuses">
        <h2>Danse</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre square" v-for="(membre, idMembre) in equipe.danse" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2022/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2022/costumes.png" alt="Costumes">
        <h2>Costumes</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre square" v-for="(membre, idMembre) in equipe.costumes" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2022/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2022/decors.png" alt="Décors">
        <h2>Décors</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre square" v-for="(membre, idMembre) in equipe.decors" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2022/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2022/technique.png" alt="Technique">
        <h2>Lumière et son</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre square" v-for="(membre, idMembre) in equipe.technique" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2022/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2022/amour.png" alt="Support">
        <h2>Amour</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre square" v-for="(membre, idMembre) in equipe.amour" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2022/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.trombi_membre.square {
    img {
      border-radius: 0%;
    }
}
</style>

<script>
let presentation = {
  text: "<h2>2022 - En Memoria</h2>" +
          "<p>Mexique, 1842. Happée par la Fête des morts, la danseuse Diana prépare son spectacle, tiraillée entre la mémoire de sa mère biologique et les desseins vengeurs de sa mère adoptive. De son côté, son fiancé Rafael enquête sur la mort de l’ancien gouverneur du Vera Cruz dont le fantôme lui apparaît : un grand danger s’annonce.<br />Les ombres du passé resurgissent, de vieilles blessures se réveillent. Leurs destins s’entremêlent inextricablement. Pourront-ils empêcher cette fête de tourner au drame ?</p>",
  bgImage: '/images/equipes/equipe--2021.jpg',
  image: '/images/affiches/affiche--2022.png'
}


let equipe = {
  bureau: [
    {
      role: 'Président',
      nom: 'Rémi Amoroso',
      photo: 'PP_Remi.png'
    },
    {
      role: 'Vice-Président',
      nom: 'Juliette Brosolo',
      photo: 'PP_Juliette.jpg'
    },
    {
      role: 'Secrétaire Générale',
      nom: "Marie Gachère",
      photo: 'PP_Marie.jpg'
    },
    {
      role: 'Trésorier',
      nom: 'Gaspard Boraud',
      photo: 'PP_Gaspard.jpg'
    }
  ],

  visibilite: [
    // {
    //   role: 'Star',
    //   nom: 'Bro Douai',
    //   photo: '0-Bro.jpg'
    // },
    {
      role: 'Communication',
      nom: 'Fabien Leclerc',
      photo: 'PP_Fabien.jpg'
    },
    {
      role: 'Communication',
      nom: 'Cassandre Manas',
      photo: 'PP_Cassandre.png'
    },
    {
      role: 'Webmestre',
      nom: 'Benjamin Denise',
      photo: 'PP_Benjamin.jpg'
    },
    {
      role: 'Partenariats',
      nom: 'Saban Suresh',
      photo: 'PP_Saban.png'
    },
    {
      role: 'Partenariats',
      nom: 'Aurélia Zhang',
      photo: 'PP_Aurelia.jpg'
    }
  ],

  scenario: [
    {
      role: 'Scénariste',
      nom: 'Inès Battisti',
      photo: 'PP_Ines.jpg'
    },
    {
      role: 'Scénariste',
      nom: 'Andréas Dagannaud',
      photo: 'PP_Andreas.jpg'
    },
    {
      role: 'Scénariste',
      nom: 'Atnoine Haynez',
      photo: 'PP_Antoine.jpg'
    },
    {
      role: 'Scénariste',
      nom: 'Claire de Montgolfier',
      photo: 'PP_Claire.jpg'
    }
  ],

  mes: [
    {
      role: 'Coordinatrice artistique',
      nom: 'Marie Ferran',
      photo: 'PP_Marie_CA.jpg'
    },
    {
      role: 'Coordinateur artistique',
      nom: 'Joseph Garnier',
      photo: 'PP_Jospeh.jpg'
    },
    {
      role: 'Metteur en scène',
      nom: 'Zaccharie Lakhal',
      photo: 'PP_Zac.jpg'
    },
    {
      role: 'Metteuse en scène',
      nom: 'Adèle Lefevre',
      photo: 'PP_Adele.jpg'
    }
  ],

  ac: [
    {
      role: 'Actrice-chanteuse',
      nom: 'Alice Bensussan',
      photo: 'PP_Alice.jpg'
      },
    {
      role: 'Actrice-chanteur',
      nom: 'Roxane Boyer',
      photo: 'PP_Roxane.jpg'
    },
    {
      role: 'Acteur-chanteur',
      nom: 'Antonin Delorme',
      photo: 'PP_Antonin.jpg'
    },
    {
      role: 'Acteur-chanteur',
      nom: 'Vincent Haguet',
      photo: 'PP_Vincent.jpg'
    },
    {
      role: 'Acteur-chanteur',
      nom: 'Jean Rannou',
      photo: 'PP_Jean.jpg'
    },
    {
      role: 'Actrice-chanteuse',
      nom: 'Julie Ugolini',
      photo: 'PP_Jean.jpg'
    }
  ],

  chant: [
    {
      role: 'Respo chant',
      nom: 'Hélène Burget',
      photo: 'PP_Helene.jpg'
    },
    {
      role: 'Respo chant',
      nom: 'Julien Guinot',
      photo: 'PP_Julien.jpg'
    },
    {
      role: 'Choriste',
      nom: 'Anaïs Bousseau',
      photo: 'PP_Anais.jpg'
    },
    {
      role: 'Choriste',
      nom: 'Yohan Kumanovic',
      photo: 'PP_Yohan.jpg'
    },
    {
      role: 'Choriste',
      nom: 'Margerite Lafeuillade',
      photo: 'PP_Marguerite.jpg'
    },
    {
      role: 'Choriste',
      nom: 'Matthieu Leveau',
      photo: 'PP_Matthieu.jpg'
    }
  ],

  composition: [
    {
      role: 'Respo compositeur',
      nom: 'Abel Bichot',
      photo: 'PP_Abel.jpg'
    },
    {
      role: 'Respo compositeur',
      nom: 'Etienne Granger',
      photo: 'PP_Etienne.jpg'
    },
    {
      role: 'Compositrice',
      nom: 'Amélie Cochard',
      photo: 'PP_Amélie.jpg'
    },
    {
      role: 'Compositeur',
      nom: 'Paul Kassis',
      photo: 'PP_Paul.jpg'
    },
    {
      role: 'Compositeur',
      nom: 'Jean Turck',
      photo: 'PP_Zan.jpg'
    }
  ],

  zikos: [
    {
      role: 'Respo Zikos / Chef d\'orchestre',
      nom: 'Julien Delaffon',
      photo: 'PP_Julien_zikos.jpg'
    },
    {
      role: 'Respo Zikos / Piano',
      nom: 'Léopold Kowalski',
      photo: 'PP_Leopold.jpg'
    },
    {
      role: 'Violon',
      nom: 'Anouk Chavane',
      photo: 'PP_Anouk.jpg'
    },
    {
      role: 'Violon',
      nom: 'Camille Normant',
      photo: 'PP_Camille_zikos.jpg'
    },
    {
      role: 'Violon',
      nom: 'Antoine Marin',
      photo: 'PP_Antoine_zikos.jpg'
    },
    {
      role: 'Alto',
      nom: 'Marie Gachère',
      photo: 'PP_Marie.jpg'
    },
    {
      role: 'Violoncelle',
      nom: 'Agnès Grardel',
      photo: 'PP_Agnes.jpg'
    },
    {
      role: 'Contrebasse',
      nom: 'Rita Khadari',
      photo: 'PP_Rita.jpg'
    },
    {
      role: 'Pipo',
      nom: 'Chloé Peltier',
      photo: 'PP_Chloe_Zikos.jpg'
    },
    {
      role: 'Hautbois',
      nom: 'Zoé Nopehr',
      photo: 'PP_Zoe.jpg'
    },
    {
      role: 'Saxophone Alto',
      nom: 'Paul Kaassis',
      photo: 'PP_Paul.jpg'
    },
    {
      role: 'Trompette',
      nom: 'Grégoire Bon',
      photo: 'PP_Grégoire.jpg'
    },
    {
      role: 'Cor',
      nom: 'Baptiste Perreyon',
      photo: 'PP_Baptiste.jpg'
    },
    {
      role: 'Guitare',
      nom: 'Clément Pacoret',
      photo: 'PP_Dino.jpg'
    },
    {
      role: 'Guitare basse',
      nom: 'Solal Chomand',
      photo: 'PP_Solal.jpg'
    },
    {
      role: 'Batterie',
      nom: 'Mathis De Géa',
      photo: 'PP_Mathis.jpg'
    }    
  ],

  danse: [
    {
      role: 'Respo danse',
      nom: 'Camille Nivelet',
      photo: 'PP_Camille_danse.jpg'
    },
    {
      role: 'Respo danse',
      nom: 'Chloé Vacheron',
      photo: 'PP_Chloe_danse.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Margaux_Aloin',
      photo: 'PP_Margaux.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Perrine Gouaillard',
      photo: 'PP_Perrine.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Apolline Kozlovsky',
      photo: 'PP_Apolline.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Sarah Martinotti',
      photo: 'PP_Sarah_Martinotti.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Julie Mateu',
      photo: 'PP_Julie_danse.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Sarah Menand',
      photo: 'PP_Sarah_Menand.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Cléa Milcent',
      photo: 'PP_Clea.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Carla Salique',
      photo: 'PP_Carla.jpg'
    },
    {
      role: 'Danseur',
      nom: 'Linbo Sun',
      photo: 'PP_Linbo.jpg'
    },
    {
      role: 'Danseur',
      nom: 'Edmond Verdier',
      photo: 'PP_Edmond.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Rebecca Walker',
      photo: 'PP_Rebecca.jpg'
    }
  ],

  costumes: [
    {
      role: 'Respo costumes',
      nom: 'Eliam Tchandeu Noundou',
      photo: 'PP_Eliam.jpg'
    },
    {
      role: 'Respo costumes',
      nom: 'Louise Wittmann',
      photo: 'PP_Louise.jpg'
    },
    {
      role: 'Costumière',
      nom: 'Lucile Audard',
      photo: 'PP_Lucile.jpg'
    },
    {
      role: 'Costumière',
      nom: 'Clémentine Dunglas',
      photo: 'PP_Clementine.jpg'
    },
    {
      role: 'Costumier',
      nom: 'Tistou Fages',
      photo: 'PP_Tistou.jpg'
    }
  ],

  decors: [
    {
      role: 'Respo décors',
      nom: 'Pierre Arzul',
      photo: 'PP_Pierre.jpg'
    },
    {
      role: 'Respo décors',
      nom: 'Justine Bayet',
      photo: 'PP_Justine.jpg'
    },
    {
      role: 'Décoratrice',
      nom: 'Anne-Fleur Cotte',
      photo: 'PP_Anne_Fleur.jpg'
    },
    {
      role: 'Décoratrice',
      nom: 'Capucine de Bourayne',
      photo: 'PP_Capucine.jpg'
    },
    {
      role: 'Décoratrice',
      nom: 'Clémence Magnière',
      photo: 'PP_Clémence.jpg'
    },
    {
      role: 'Décoratrice',
      nom: 'Audrey Teixeira',
      photo: 'PP_Audrey.jpg'
    }
  ],

  technique: [
    {
      role: 'Respo lumière',
      nom: 'Naomi Sakata',
      photo: 'PP_Naomi.jpg'
    },
    {
      role: 'Respo son',
      nom: 'Jules Mansion',
      photo: 'PP_Jules.jpg'
    },
    {
      role: 'VP son',
      nom: 'Réjane Bastien',
      photo: 'PP_Rejane.jpg'
    },
    {
      role: 'VP son',
      nom: 'Oscar Bolzinger',
      photo: 'PP_Oscar.jpg'
    },
    {
      role: 'VP son',
      nom: 'Quentin Gracia',
      photo: 'PP_Quentin.jpg'
    },
    {
      role: 'VP son',
      nom: 'Agustìn Soux',
      photo: 'PP_Agustin.jpg'
    },
    {
      role: 'VP son',
      nom: 'Nicolas Starc',
      photo: 'PP_Nicolas.jpg'
    }
  ],

  amour: [
    {
      role: 'VP Amour',
      nom: 'Clara Angrand',
      photo: 'PP_Clara.jpg'
    },
    {
      role: 'VP Amour',
      nom: 'Benoit Decorse',
      photo: 'PP_Benoit.jpg'
    },
    {
      role: 'VP Amour',
      nom: 'Aurore Granier',
      photo: 'PP_Aurore.jpg'
    },
    {
      role: 'VP Amour',
      nom: 'Chloé Lutz',
      photo: 'PP_Chloe.jpg'
    }
  ]
}


export default {
  data: function () {
    return { equipe, presentation }
  }
}
</script>
