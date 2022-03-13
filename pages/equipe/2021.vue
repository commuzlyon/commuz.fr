<template lang="html">
  <div>
    <pane type="pane--media" :bgImage="presentation.bgImage" :image="presentation.image" :text="presentation.text"></pane>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2021/bureau.png" alt="Bureau">
        <h2>Bureau</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.bureau" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2021/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2021/visibilite.png" alt="Visibilité">
        <h2>Visibilité</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.visibilite" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2021/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2021/scenario.png" alt="Scénario">
        <h2>Scénario</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.scenario" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2021/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2021/mes.png" alt="Mise en scène">
        <h2>Mise en scène</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.mes" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2021/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2021/ac.png" alt="Acteur-chanteur, comédien">
        <h2>Acteurs-chanteurs</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.ac" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2021/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2021/choristes.png" alt="Choristes">
        <h2>Chant</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.chant" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2021/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2021/composition.png" alt="Composition">
        <h2>Composition</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.composition" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2021/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2021/musik.png" alt="Musique">
        <h2>Musique</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.zikos" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2021/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2021/danse.png" alt="Danseuses">
        <h2>Danse</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.danse" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2021/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2021/costumes.png" alt="Costumes">
        <h2>Costumes</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.costumes" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2021/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2021/decors.png" alt="Décors">
        <h2>Décors</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.decors" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2021/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2021/technique.png" alt="Technique">
        <h2>Son, lumière et vidéo</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.technique" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2021/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2021/amour.png" alt="Support">
        <h2>Amour</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.amour" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2021/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let presentation = {
  text: "<h2>2021 - Noces d'opium</h2>" +
          "<p>Sous couvert de vendre du thé, le jeune Thomas a organisé à Shanghai un gigantesque trafic d’opium. Avec sa partenaire commerciale et amante Meiyun, il s’apprête à faire un dernier gros coup avant de se retirer. Mais c’était sans compter la visite surprise de sa femme Gemma, débarquée tout droit de Londres avec sa belle-famille. Le jeune anglais devra donc rivaliser d'efforts pour gérer son commerce sans être découvert par sa belle-famille.</p>",
  bgImage: '/images/equipes/equipe--2021.jpg',
  image: '/images/affiches/affiche--2021.jpg'
}


let equipe = {
  bureau: [
    {
      role: 'Président',
      nom: 'Maxence Bideaux',
      photo: '26-MaxenceB.jpg'
    },
    {
      role: 'Vice-Président',
      nom: 'Thibaut Caporgno',
      photo: '32-ThibautC.jpg'
    },
    {
      role: 'Secrétaire Générale',
      nom: "Marie d'Harcourt",
      photo: '31-MarieD.jpg'
    },
    {
      role: 'Trésorier',
      nom: 'Johan Bernard',
      photo: '25-JohanB.jpg'
    }
  ],

  visibilite: [
    {
      role: 'Star',
      nom: 'Bro Douai',
      photo: '0-Bro.jpg'
    },
    {
      role: 'Communication',
      nom: 'Eva Louste',
      photo: '9-EvaL.jpg'
    },
    {
      role: 'Communication',
      nom: 'Eloi Roudaire',
      photo: '2-EloiR.jpg'
    },
    {
      role: 'Communication',
      nom: 'Pia de Vita',
      photo: '87-Piad.jpg'
    },
    {
      role: 'Webmestre',
      nom: 'Alban Gosset',
      photo: '40-AlbanG.jpg'
    },
    {
      role: 'Partenariats',
      nom: 'Pauline Perrin',
      photo: '36-PaulineP.jpg'
    },
    {
      role: 'Partenariats',
      nom: 'Julie Humayou',
      photo: '88-JulieH.jpg'
    },
    {
      role: 'Partenariats',
      nom: 'Jonathan Tata',
      photo: '33-JonathanT.jpg'
    }
  ],

  scenario: [
    {
      role: 'Scénariste',
      nom: 'Juliette Gandon',
      photo: '42-JulietteG.jpg'
    },
    {
      role: 'Scénariste',
      nom: 'Paul Nédélec',
      photo: '39-PaulN.jpg'
    },
    {
      role: 'Scénariste',
      nom: 'Sarah Schmidt',
      photo: '1-SarahS.jpg'
    },
    {
      role: 'Scénariste',
      nom: 'Arthur Cena',
      photo: '8-ArthurC.jpg'
    }
  ],

  mes: [
    {
      role: 'Coordinatrice artistique',
      nom: 'Amandine Chemoul',
      photo: '38-AmandineC.jpg'
    },
    {
      role: 'Metteur en scène',
      nom: 'Loïc Denis',
      photo: '29-LoïcD.jpg'
    },
    {
      role: 'Metteuse en scène',
      nom: 'Alice Bensussan',
      photo: '28-AliceB.jpg'
    }
  ],

  ac: [
    {
      role: 'Actrice-chanteuse',
      nom: 'Emma Jaremko',
      photo: '72-EmmaJ.jpg'
      },
    {
      role: 'Acteur-chanteur',
      nom: 'Fabien Duranson',
      photo: '27-FabienD.jpg'
    },
    {
      role: 'Acteur-chanteur',
      nom: 'Robin Mourton',
      photo: '22-RobinM.jpg'
    },
    {
      role: 'Actrice-chanteuse',
      nom: 'Adèle Lefevre',
      photo: '73-AdèleL.jpg'
    },
    {
      role: 'Acteur-chanteur',
      nom: 'Ivain Rodriguez',
      photo: '49-IvainR.jpg'
    },
    {
      role: 'Actrice-chanteuse',
      nom: 'Audrey Teixeira',
      photo: '84-AudreyT.jpg'
    }
  ],

  chant: [
    {
      role: 'Respo chant',
      nom: 'Julian Achatz',
      photo: '67-JulianA.jpg'
    },
    {
      role: 'Respo chant',
      nom: 'Lison Allard',
      photo: '66-LisonA.jpg'
    },
    {
      role: 'Choriste',
      nom: 'Hélène Burget',
      photo: '68-HélèneB.jpg'
    },
    {
      role: 'Choriste',
      nom: 'Claire de Montgolfier',
      photo: '69-ClaireD.jpg'
    },
    {
      role: 'Choriste',
      nom: "Julien Guinot",
      photo: '70-JulienG.jpg'
    },
    {
      role: 'Choriste',
      nom: 'Daniel Mer',
      photo: '71-DanielM.jpg'
    }
  ],

  composition: [
    {
      role: 'Respo compositeur',
      nom: 'Emma de Boissoudy',
      photo: '10-EmmaD.jpg'
    },
    {
      role: 'Respo compositeur',
      nom: 'Jean Turck',
      photo: '16-JeanT.jpg'
    },
    {
      role: 'Compositeur',
      nom: 'Laurena Eliard',
      photo: '15-LaurenaE.jpg'
    },
    {
      role: 'Compositeur',
      nom: 'Mahé Venault',
      photo: '50-MahéV.jpg'
    }
  ],

  zikos: [
    {
      role: 'Respo Zikos',
      nom: 'Victor Penalver',
      photo: '37-VictorP.jpg'
    },
    {
      role: 'Respo Zikos',
      nom: 'Marie Ferran',
      photo: '51-MarieF.jpg'
    },
    {
      role: 'Violon',
      nom: 'Arthur Becker',
      photo: '12-ArthurB.jpg'
    },
    {
      role: 'Violon',
      nom: 'Ettienne Granger',
      photo: '57-EtienneG.jpg'
    },
    {
      role: 'Alto',
      nom: 'Marie Gachère',
      photo: '55-MarieG.jpg'
    },
    {
      role: 'Violoncelle',
      nom: 'Vadim Lagresle',
      photo: '59-VadimL.jpg'
    },
    {
      role: 'Flûte',
      nom: 'Inès Battisti',
      photo: '11-InesB.jpg'
    },
    {
      role: 'Flûte',
      nom: 'Chloé Peltier',
      photo: '61-ChloéP.jpg'
    },
    {
      role: 'Saxophone soprano',
      nom: 'Martin Greiveldinger',
      photo: '54-MartinG.jpg'
    },
    {
      role: 'Saxophone alto',
      nom: 'Aurélien Vu Ngoc',
      photo: '53-AurélienV.jpg'
    },
    {
      role: 'Trompette',
      nom: 'Grégoire Bon',
      photo: '14-GrégoireB.jpg'
    },
    {
      role: 'Trombone',
      nom: 'Tom Mehl',
      photo: '64-TomM.jpg'
    },
    {
      role: 'Cor',
      nom: 'Baptiste Perreyon',
      photo: '65-BaptisteP.jpg'
    },
    {
      role: 'Piano',
      nom: 'Léopold Kowalski',
      photo: '58-LeopoldK.jpg'
    },
    {
      role: 'Guitare',
      nom: 'Anatole Dung',
      photo: '52-AnatoleD.jpg'
    },
    {
      role: 'Guitare basse',
      nom: 'Julien Delaffon',
      photo: '48-JulienD.jpg'
    },
    {
      role: 'Batterie',
      nom: 'Oscar Bolzinger',
      photo: '13-OscarB.jpg'
    }    
  ],

  danse: [
    {
      role: 'Respo danse',
      nom: 'Bérénice Vives',
      photo: '35-BéréniceV.jpg'
    },
    {
      role: 'Respo danse',
      nom: 'Albane Tayac',
      photo: '24-AlbaneT.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Félicité Lambel',
      photo: '19-FélicitéL.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Juliette Brosolo',
      photo: '60-JulietteB.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Clémence Bouquillon',
      photo: '80-ClémenceB.jpg'
    },
    {
      role: 'Danseur',
      nom: 'Joseph Garnier',
      photo: '30-JosephG.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Perrine Gouaillard',
      photo: '81-PerrineG.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Océane Haddad',
      photo: '34-OcéaneH.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Yuexuan Kong',
      photo: '44-YuexuanK.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Jeanne Monnier',
      photo: '23-JeanneM.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Camille Nivelet',
      photo: '82-CamilleN.jpg'
    },
    {
      role: 'Danseuse',
      nom: 'Chloé Vacheron',
      photo: '43-ChloéV.jpg'
    },
    {
      role: 'Danseur',
      nom: 'Raphaël Régnault',
      photo: '83-RaphaëlR.jpg'
    }
  ],

  costumes: [
    {
      role: 'Respo costumes',
      nom: 'Solène Butault',
      photo: '78-SolèneB.jpg'
    },
    {
      role: 'Respo costumes',
      nom: 'Lise Charcosset',
      photo: '74-LiseC.jpg'
    },
    {
      role: 'Costumière',
      nom: 'Lucie Giordano',
      photo: '79-LucieG.jpg'
    },
    {
      role: 'Costumière',
      nom: 'Laura Sallet',
      photo: '75-LauraS.jpg'
    },
    {
      role: 'Costumière',
      nom: 'Louise Wittman',
      photo: '63-LouiseW.jpg'
    }
  ],

  decors: [
    {
      role: 'Respo décors',
      nom: 'Antoine Caisson',
      photo: '56-AntoineC.jpg'
    },
    {
      role: 'Respo décors',
      nom: 'Maëlys Herrouin',
      photo: '3-MaelysH.jpg'
    },
    {
      role: 'Décorateur',
      nom: 'Maxime Peter',
      photo: '46-MaximeP.jpg'
    },
    {
      role: 'Décoratrice',
      nom: 'Eva Simarik',
      photo: '85-EvaS.jpg'
    },
    {
      role: 'Décoratrice',
      nom: 'Justine Bayet',
      photo: '86-JustineB.jpg'
    },
    {
      role: 'Décoratrice',
      nom: 'Manon Boisson',
      photo: '62-ManonB.jpg'
    }
  ],

  technique: [
    {
      role: 'Respo lumière',
      nom: 'Cléo Larminay',
      photo: '7-CléoL.jpg'
    },
    {
      role: 'Respo son',
      nom: 'Thibaut Decombe',
      photo: '77-ThibautD.jpg'
    },
    {
      role: 'Respo son',
      nom: 'Boris Laurent',
      photo: '76-BorisL.jpg'
    },
    {
      role: 'VP son',
      nom: 'Carole Belot',
      photo: '4-CaroleB.jpg'
    },
    {
      role: 'VP son',
      nom: 'Théotime Bergese',
      photo: '41-ThéotimeB.jpg'
    },
    {
      role: 'VP son',
      nom: 'Thomas Levasseur',
      photo: '45-ThomasL.jpg'
    },
    {
      role: 'VP son',
      nom: 'Olivier Wifak',
      photo: '47-OlivierW.jpg'
    },
    {
      role: 'Respo vidéo',
      nom: 'Emeric le Hors',
      photo: '6-EmericL.jpg'
    }
  ],

  amour: [
    {
      role: 'VP Amour',
      nom: 'Flavien Foucart',
      photo: '21-FlavienF.jpg'
    },
    {
      role: 'VP Amour',
      nom: 'Delphine Gindre',
      photo: '18-DelphineG.jpg'
    },
    {
      role: 'VP Amour',
      nom: 'Nicolas Miranda',
      photo: '20-NicolasM.jpg'
    },
    {
      role: 'VP Amour',
      nom: 'Valentine Rasse',
      photo: '17-ValentineR.jpg'
    }
  ]
}


export default {
  data: function () {
    return { equipe, presentation }
  }
}
</script>
