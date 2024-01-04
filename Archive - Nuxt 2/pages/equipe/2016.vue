<template lang="html">
  <div>
    <pane type="pane--media" :bgImage="presentation.bgImage" :image="presentation.image" :text="presentation.text"></pane>
    <div class="section">
      <div class="section__description">
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
        <h2>Mise en scène</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.mes" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2016/' + membre.photo" alt="">
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
          <img v-if="membre.photo != ''" :src="'/images/equipes/2016/' + membre.photo" alt="">
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
          <img v-if="membre.photo != ''" :src="'/images/equipes/2016/' + membre.photo" alt="">
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
          <img v-if="membre.photo != ''" :src="'/images/equipes/2016/' + membre.photo" alt="">
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
          <img v-if="membre.photo != ''" :src="'/images/equipes/2016/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <h2>Composition</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.composition" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2016/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <h2>Technique</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.technique" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2016/' + membre.photo" alt="">
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
          <img v-if="membre.photo != ''" :src="'/images/equipes/2016/' + membre.photo" alt="">
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
          <img v-if="membre.photo != ''" :src="'/images/equipes/2016/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

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
  ],

  ac: [
    {
      role: 'Comtesse Alvarez',
      nom: 'Amélie Barbier',
      photo: 'amebar.png'
    },
    {
      role: 'Isabella',
      nom: 'Ségolène Bouvret',
      photo: 'segbou.png'
    },
    {
      role: 'Lisa',
      nom: 'Agathe Deveraux',
      photo: 'agadev.png'
    },
    {
      role: 'Leandro',
      nom: 'Colin Maillebuau',
      photo: 'colmai.png'
    },
    {
      role: 'Duc de la Rioja / Chef aztèque',
      nom: 'Antoine Rager',
      photo: 'antrag.png'
    },
    {
      role: 'Monsieur Mousse',
      nom: 'Pauline Romagon',
      photo: 'paurom.png'
    },
    {
      role: 'Capitaine Cortes',
      nom: 'Valérian Seuwin',
      photo: 'valseu.png'
    },
    {
      role: 'Castillo',
      nom: 'Maxime Taupiac',
      photo: 'maxtau.png'
    }
  ],

  composition: [
    {
      role: 'Compositeur',
      nom: 'Vivien Geoffroy',
      photo: 'vivgeo.png'
    },
    {
      role: 'Compositeur',
      nom: 'Francois-Rémi Mazy',
      photo: 'framaz.png'
    },
    {
      role: 'Compositeur',
      nom: 'Marius Blanchard',
      photo: 'marbla.png'
    },
    {
      role: 'Compositeur',
      nom: 'Alexandre Cartier',
      photo: 'alecar.png'
    },
    {
      role: 'Compositeur',
      nom: 'Théo Delecour',
      photo: 'thedel.png'
    }
  ],

  chant: [
    {
      role: 'Respo chant',
      nom: 'Inès Allard de Grandmaison',
      photo: 'inedeg.png'
    },
    {
      role: 'Respo chant',
      nom: 'Gauthier Fanucci',
      photo: 'gaufan.png'
    },
    {
      role: 'Choriste',
      nom: 'Justin Brasier de Thuy',
      photo: 'jusbra.png'
    },
    {
      role: 'Choriste',
      nom: 'Chloé Thenoz',
      photo: 'chlthe.png'
    }
  ],

  danse: [
    {
      role: 'Respo danse',
      nom: 'Anaïs Brault',
      photo: 'anabra.png'
    },
    {
      role: 'Respo danse',
      nom: 'Mathlide Ray',
      photo: 'matray.png'
    },
    {
      role: 'Danseuse',
      nom: 'Chama Benabdesselam',
      photo: 'chaben.png'
    },
    {
      role: 'Danseuse',
      nom: 'Cyrielle Callerame',
      photo: 'cyrcal.png'
    },
    {
      role: 'Danseuse',
      nom: 'Julie Catel',
      photo: 'julcat.png'
    },
    {
      role: 'Danseur',
      nom: 'Simon Chevrel',
      photo: 'simche.png'
    },
    {
      role: 'Danseuse',
      nom: 'Alice Deroo',
      photo: 'alider.png'
    },
    {
      role: 'Danseuse',
      nom: 'Ornella Diascorn',
      photo: 'orndia.png'
    },
    {
      role: 'Danseuse',
      nom: 'Anne-Marie Plancke',
      photo: 'annpla.png'
    },
    {
      role: 'Danseuse',
      nom: 'Inès Prunières',
      photo: 'inepru.png'
    },
    {
      role: 'Danseur',
      nom: 'Thibaut Rahm',
      photo: 'thirah.png'
    },
    {
      role: 'Danseuse',
      nom: 'Marianne Sauvanet',
      photo: 'marsau.png'
    },
    {
      role: 'Danseuse',
      nom: 'Claire Vignes',
      photo: 'clavig.png'
    }
  ],

  zikos: [
    {
      role: 'Respo zikos / Piano',
      nom: 'Vivien Geoffroy',
      photo: 'vivgeo.png'
    },
    {
      role: 'Respo zikos / Guitare rythmique',
      nom: 'Jean-Xia Chou',
      photo: 'jeacho.png'
    },
    {
      role: 'Hautbois',
      nom: 'Aristide Bled',
      photo: 'arible.png'
    },
    {
      role: 'Accordéon',
      nom: 'Francois-Rémi Mazy',
      photo: 'framaz.png'
    },
    {
      role: 'Violon',
      nom: 'Théophile Brézot',
      photo: 'thebre.png'
    },
    {
      role: 'Violon',
      nom: 'Claire-Marie Gaisne',
      photo: 'clagai.png'
    },
    {
      role: 'Violoncelle',
      nom: 'Sacha Hornik',
      photo: 'sachor.png'
    },
    {
      role: 'Euphonium',
      nom: 'Florian Lacaze',
      photo: 'flolac.png'
    },
    {
      role: 'Guitare basse',
      nom: 'Sacha Landré',
      photo: 'saclan.png'
    },
    {
      role: 'Guitare solo / Tambourin',
      nom: 'Quentin Lemaire',
      photo: 'quelem.png'
    },
    {
      role: 'Batterie',
      nom: 'Florent Monasterolo',
      photo: 'flomon.png'
    },
    {
      role: 'Clarinette',
      nom: 'Mathilde Rajon',
      photo: 'matraj.png'
    },
    {
      role: 'Saxophone',
      nom: 'Adrien Rive',
      photo: 'adrriv.png'
    },
    {
      role: 'Flûte',
      nom: 'Florentin Vallée',
      photo: 'floval.png'
    }
  ],

  technique: [
    {
      role: 'VP lumières',
      nom: 'Paul Duvivier',
      photo: 'pauduv.png'
    },
    {
      role: 'VP son',
      nom: 'Donation Delehelle',
      photo: 'dondel.png'
    },
    {
      role: 'VP son',
      nom: 'Arthur Lett',
      photo: 'artlet.png'
    },
    {
      role: 'VP son',
      nom: 'Farah Ouali',
      photo: 'faroua.png'
    },
    {
      role: 'VP son',
      nom: 'Benjamin Thiron',
      photo: 'benthi.png'
    },
    {
      role: 'VP son',
      nom: 'Valentin Vie',
      photo: 'valvie.png'
    }
  ],

  decors: [
    {
      role: 'Respo décors',
      nom: 'Julie Hazard',
      photo: 'julhaz.png'
    },
    {
      role: 'Respo décors',
      nom: 'Lisa Do Nascimento',
      photo: 'lisdon.png'
    },
    {
      role: 'Décoratrice',
      nom: 'Joséphine Larrieu',
      photo: 'joslar.png'
    },
    {
      role: 'Décoratrice',
      nom: 'Agathe Poisot',
      photo: 'agapoi.png'
    },
    {
      role: 'Décoratrice',
      nom: 'Myriam Billet',
      photo: 'myrbil.png'
    }
  ],

  costumes: [
    {
      role: 'Respo costumes',
      nom: 'Victoire Momméja',
      photo: 'vicmom.png'
    },
    {
      role: 'Respo costumes',
      nom: 'Justine Gaudré',
      photo: 'jusgau.png'
    },
    {
      role: 'Costumière',
      nom: 'Inès Joly',
      photo: 'inejol.png'
    },
    {
      role: 'Costumière',
      nom: 'Marianne Coupry',
      photo: 'marcou.png'
    },
    {
      role: 'Costumière',
      nom: 'Marie Legrand',
      photo: 'marleg.png'
    }
  ]
}

export default {
  data: function () {
    return { equipe, presentation }
  }
}
</script>