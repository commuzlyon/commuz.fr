<template lang="html">
  <div>
    <pane type="pane--media" :bgImage="presentation.bgImage" :image="presentation.image" :text="presentation.text">
      <template scope="props">
        <div class="annee__links">
          <div class="button-link">
            <router-link :to="`/gallerie/2017`"><img src="/icons/gallerie.svg" alt="">Voir les photos</router-link>
          </div>
        </div>
      </template>
    </pane>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2017/bureau.png" alt="">
        <h2>Bureau</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.bureau" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2017/' + membre.photo" alt="">
          <img class="membre_apparition" v-if="membre.photo != ''" :src="'/images/equipes/2017/apparitions/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2017/relExt.png" alt="">
        <h2>Relations Extérieures</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.relExt" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2017/' + membre.photo" alt="">
          <img class="membre_apparition" v-if="membre.photo != ''" :src="'/images/equipes/2017/apparitions/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2017/scenario.png" alt="">
        <h2>Scénario</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.scenario" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2017/' + membre.photo" alt="">
          <img class="membre_apparition" v-if="membre.photo != ''" :src="'/images/equipes/2017/apparitions/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2017/mes.png" alt="">
        <h2>Mise en scène</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.mes" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2017/' + membre.photo" alt="">
          <img class="membre_apparition" v-if="membre.photo != ''" :src="'/images/equipes/2017/apparitions/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2017/ac.png" alt="">
        <h2>Acteurs-chanteurs</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.ac" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2017/' + membre.photo" alt="">
          <img class="membre_apparition" v-if="membre.photo != ''" :src="'/images/equipes/2017/apparitions/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2017/chant.png" alt="">
        <h2>Chant</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.chant" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2017/' + membre.photo" alt="">
          <img class="membre_apparition" v-if="membre.photo != ''" :src="'/images/equipes/2017/apparitions/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2017/composition.png" alt="">
        <h2>Composition</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.composition" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2017/' + membre.photo" alt="">
          <img class="membre_apparition" v-if="membre.photo != ''" :src="'/images/equipes/2017/apparitions/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2017/zikos.png" alt="">
        <h2>Musique</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.zikos" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2017/' + membre.photo" alt="">
          <img class="membre_apparition" v-if="membre.photo != ''" :src="'/images/equipes/2017/apparitions/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2017/danse.png" alt="">
        <h2>Danse</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.danse" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2017/' + membre.photo" alt="">
          <img class="membre_apparition" v-if="membre.photo != ''" :src="'/images/equipes/2017/apparitions/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2017/costumes.png" alt="">
        <h2>Costumes</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.costumes" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2017/' + membre.photo" alt="">
          <img class="membre_apparition" v-if="membre.photo != ''" :src="'/images/equipes/2017/apparitions/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2017/decors.png" alt="">
        <h2>Décors</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.decors" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2017/' + membre.photo" alt="">
          <img class="membre_apparition" v-if="membre.photo != ''" :src="'/images/equipes/2017/apparitions/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2017/technique.png" alt="">
        <h2>Technique</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.technique" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2017/' + membre.photo" alt="">
          <img class="membre_apparition" v-if="membre.photo != ''" :src="'/images/equipes/2017/apparitions/' + membre.photo" alt="">
          <p><b>{{ membre.nom }}</b><br/>
          <i>{{ membre.role }}</i></p>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section__description">
        <img src="/logos/poles/2017/amour.png" alt="">
        <h2>Amour</h2>
      </div>
      <div class="section__membres">
        <div class="trombi_membre" v-for="(membre, idMembre) in equipe.amour" :key="idMembre">
          <img v-if="membre.photo != ''" :src="'/images/equipes/2017/' + membre.photo" alt="">
          <img class="membre_apparition" v-if="membre.photo != ''" :src="'/images/equipes/2017/apparitions/' + membre.photo" alt="">
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
  text: '<h2>2017 : Le Caprice des Jeux</h2>' +
      '<p>Grèce Antique, vous avez dit ? Nous irons donc y rencontrer Pélops et sa mère, deux modestes gens vivant paisiblement grâce à leur troupeau de moutons.</p>' +
      '<p>Au grand désespoir de sa mère persuadée que son fils peut accomplir de grandes choses, Pélops se satisfait de sa position, sans véritable ambition. Elle aura beau le sermonner, Pélops reviendra toujours à ses moutons. Cependant, surplombant la Grèce depuis le Mont Olympe, les Dieux, eux, ne font pas la sourde oreille.</p>' +
      '<p>Quel destin réservent-ils à Pélops ?</p>',
  bgImage: '/images/equipes/equipe--2017.jpg',
  image: '/images/affiches/affiche--2017.jpg',
  gallerie: true
}

let equipe = {
  bureau: [
    {
      role: 'Présidente',
      nom: 'Victoire Momméja',
      photo: 'tila.gif'
    },
    {
      role: 'Vice-Présidente',
      nom: 'Marianne Sauvanet',
      photo: 'marianne.gif'
    },
    {
      role: 'Secrétaire Général',
      nom: 'Antoine Rager',
      photo: 'patou.gif'
    },
    {
      role: 'Trésorier',
      nom: 'Sacha Hornik',
      photo: 'nimo.gif'
    }
  ],

  relExt: [
    {
      role: 'Communication',
      nom: 'Fabien Bajard',
      photo: 'okah.gif'
    },
    {
      role: 'Communication',
      nom: 'Claire Song',
      photo: 'claireS.gif'
    },
    {
      role: 'Partenariat',
      nom: 'Estelle Assens',
      photo: 'estelle.gif'
    },
    {
      role: 'Partenariat',
      nom: 'Lola Fathi',
      photo: 'lola.gif'
    },
    {
      role: 'Webmaster',
      nom: 'Gauthier Fanucci',
      photo: 'govi.gif'
    }
  ],

  scenario: [
    {
      role: 'Scénariste',
      nom: 'Pierre Babinet',
      photo: 'zoum.gif'
    },
    {
      role: 'Scénariste',
      nom: 'Coline Bron',
      photo: 'sooky.gif'
    },
    {
      role: 'Scénariste',
      nom: 'Jérémie Proux',
      photo: 'teto.gif'
    }
  ],

  mes: [
    {
      role: 'Metteur en scène',
      nom: 'Paul Duvivier',
      photo: 'spac.gif'
    },
    {
      role: 'Metteur en scène',
      nom: 'Gaëtan Marchais',
      photo: 'hdv.gif'
    }
  ],

  ac: [
    {
      role: 'Acteur-chanteur',
      nom: 'Vincent Arthaud',
      photo: 'bobby.gif'
    },
    {
      role: 'Actrice-chanteuse',
      nom: 'Graciane Dalsace',
      photo: 'graciane.gif'
    },
    {
      role: 'Actrice-chanteuse',
      nom: 'Anaïs de Roquefeuil',
      photo: 'anais.gif'
    },
    {
      role: 'Acteur-chanteur',
      nom: 'Arnaud Gluck',
      photo: 'phyl.gif'
    },
    {
      role: 'Actrice-chanteuse',
      nom: 'Emma Hakimi',
      photo: 'emma.gif'
    },
    {
      role: 'Acteur-chanteur',
      nom: 'Nicolas Valades-Chavonnand',
      photo: 'nicolas.gif'
    },
    {
      role: 'Acteur-chanteur',
      nom: 'Yorick Vinesse',
      photo: 'faudel.gif'
    }
  ],

  chant: [
    {
      role: 'Respo chant',
      nom: 'Ségolène Bouvret',
      photo: 'lyboo.gif'
    },
    {
      role: 'Respo chant',
      nom: 'Justin Brasier de Thuy',
      photo: 'yotha.gif'
    },
    {
      role: 'Respo chant',
      nom: 'Agathe Deveraux',
      photo: 'tchou.gif'
    },
    {
      role: 'Choriste',
      nom: 'Lydie Berthet',
      photo: 'lydie.gif'
    },
    {
      role: 'Choriste',
      nom: 'Dylan Bransol',
      photo: 'ferrat.gif'
    },
    {
      role: 'Choriste',
      nom: 'Sacha Landré',
      photo: 'poulpy.gif'
    },
    {
      role: 'Choriste',
      nom: 'Eva Markiewicz',
      photo: 'lilhay.gif'
    }
  ],

  composition: [
    {
      role: 'Respo compositeurs',
      nom: 'Marius Blanchard',
      photo: 'marius.gif'
    },
    {
      role: 'Compositrice',
      nom: 'Inès Allard de Grandmaison',
      photo: 'babou.gif'
    },
    {
      role: 'Compositeur',
      nom: 'Vivien Geoffroy',
      photo: 'paccio.gif'
    },
    {
      role: 'Compositeur',
      nom: 'Simon Mercier',
      photo: 'yukhu.gif'
    },
    {
      role: 'Compositeur',
      nom: 'Benjamin Thiron',
      photo: 'guera.gif'
    }
  ],

  zikos: [
    {
      role: 'Respo zikos / Violon',
      nom: 'Théophile Brézot',
      photo: 'jazz.gif'
    },
    {
      role: 'Respo zikos / Piano',
      nom: 'Alexandre Cartier',
      photo: 'paypouz.gif'
    },
    {
      role: 'Clarinette',
      nom: 'Adrien de la Salle',
      photo: 'arpys.gif'
    },
    {
      role: 'Flûte',
      nom: 'Camille Delong',
      photo: 'standy.gif'
    },
    {
      role: 'Batterie',
      nom: 'Antoine Diers',
      photo: 'royce.gif'
    },
    {
      role: 'Clarinette',
      nom: 'Vincent Duong',
      photo: 'keeto.gif'
    },
    {
      role: 'Flûte',
      nom: 'Tom Filczinger',
      photo: 'metry.gif'
    },
    {
      role: 'Euphonium',
      nom: 'Jason Fitoussi',
      photo: 'carglass.gif'
    },
    {
      role: 'Guitare solo',
      nom: 'Gautier Geenen',
      photo: 'dupastis.gif'
    },
    {
      role: 'Alto / Trompette',
      nom: 'Marwan Hassan',
      photo: 'rootz.gif'
    },
    {
      nom: 'Théophile Huet',
      role: 'Saxophone',
      photo: 'hulmann.gif'
    },
    {
      nom: 'Malena Jeantet',
      role: 'Violon',
      photo: 'nara.gif'
    },
    {
      role: 'Trombone',
      nom: 'Quentin Lebret',
      photo: 'corruption.gif'
    },
    {
      role: 'Guitare rythmique / Tambourin',
      nom: 'Quentin Lemaire',
      photo: 'pepin.gif'
    },
    {
      role: 'Guitare basse',
      nom: 'Albert Leroy',
      photo: 'rezu.gif'
    },
    {
      role: 'Violoncelle',
      nom: 'Eva Meunier',
      photo: 'eva.gif'
    }
  ],

  danse: [
    {
      role: 'Respo danse',
      nom: 'Julie Catel-Guihomat',
      photo: 'julie.gif'
    },
    {
      role: 'Respo danse',
      nom: 'Claire Vignes',
      photo: 'claireV.gif'
    },
    {
      role: 'Danseuse',
      nom: 'Salomé Amar',
      photo: 'salome.gif'
    },
    {
      role: 'Danseuse',
      nom: 'Chama Benabdesselam',
      photo: 'chama.gif'
    },
    {
      role: 'Danseuse',
      nom: 'Iris Brugidou',
      photo: 'iris.gif'
    },
    {
      role: 'Danseuse',
      nom: 'Nina Cressend',
      photo: 'palma.gif'
    },
    {
      role: 'Danseuse',
      nom: 'Ornella Diascorn',
      photo: 'ornella.gif'
    },
    {
      role: 'Danseuse',
      nom: 'Marjorie Lapras',
      photo: 'marjorie.gif'
    },
    {
      role: 'Danseuse',
      nom: 'Anne Loquineau',
      photo: 'anne.gif'
    },
    {
      role: 'Danseuse',
      nom: 'Pauline Romagon',
      photo: 'djin.gif'
    },
    {
      role: 'Danseur',
      nom: 'Teddy Serrano',
      photo: 'neo.gif'
    },
    {
      role: 'Danseuse',
      nom: 'Mathilde Tordjeman',
      photo: 'passih.gif'
    },
    {
      nom: 'Jonathan Vavre',
      role: 'Danseur',
      photo: 'jonathan.gif'
    }
  ],

  costumes: [
    {
      role: 'Respo costumes',
      nom: 'Camille Boutigny',
      photo: 'rhomi.gif'
    },
    {
      role: 'Respo costumes',
      nom: 'Charles Duhamel',
      photo: 'cely.gif'
    },
    {
      role: 'Costumier',
      nom: 'Guillaume Charreaux',
      photo: 'vahrum.gif'
    },
    {
      role: 'Costumière',
      nom: 'Apolline Vanderspeeten',
      photo: 'youmi.gif'
    },
    {
      role: 'Costumière',
      nom: 'Lise Varenne-Paquet',
      photo: 'lise.gif'
    }
  ],

  decors: [
    {
      role: 'Respo décors',
      nom: 'Alice Bourdelain',
      photo: 'haba.gif'
    },
    {
      role: 'Respo décors',
      nom: 'Clémence Lévecque',
      photo: 'chika.gif'
    },
    {
      role: 'Décorateur',
      nom: 'Simon Mercier',
      photo: 'yukhu.gif'
    },
    {
      role: 'Décoratrice',
      nom: 'Yasmine Mouhsine',
      photo: 'kaths.gif'
    },
    {
      role: 'Décoratrice',
      nom: 'Tara Pidoux',
      photo: 'tara.gif'
    }
  ],

  technique: [
    {
      role: 'Respo son',
      nom: 'Théo Delecour',
      photo: 'lamayo.gif'
    },
    {
      role: 'Respo son',
      nom: 'Arthur Lett',
      photo: 'khalee.gif'
    },
    {
      role: 'VP son',
      nom: 'Paola de Perthuis',
      photo: 'paola.gif'
    },
    {
      nom: 'Paul Doan',
      role: 'VP son',
      photo: 'laka.gif'
    },
    {
      role: 'VP son',
      nom: 'Benjamin Fontimpe',
      photo: 'tryton.gif'
    },
    {
      role: 'VP son',
      nom: 'Antonin Leyval',
      photo: 'polia.gif'
    },
    {
      role: 'Respo lumières',
      nom: 'Nelson Poumaëre',
      photo: 'ploc.gif'
    }
  ],

  amour: [
    {
      role: 'VP amour',
      nom: 'Donatien Delehelle',
      photo: 'defy.gif'
    },
    {
      role: 'VP amour',
      nom: 'Romane Paradis',
      photo: 'romane.gif'
    },
    {
      role: 'VP amour',
      nom: 'Marine Sousa',
      photo: 'marine.gif'
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
.pane--media ~ .section {
  margin-top: 3rem;
}
</style>
