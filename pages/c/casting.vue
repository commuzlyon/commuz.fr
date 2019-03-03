<template lang="html">
<div class="perles">
    <h1>{{ perle_text }}</h1>
    <h3>{{ perle_auteur }}</h3>
</div>
<!--<div class="">
    <svg version="1.1" id="refresh" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="408px" height="408px" viewBox="0 0 408 408" style="enable-background:new 0 0 408 408;" xml:space="preserve"><g fill="#fff">
        <path d="M346.8,61.2C311.1,22.95,260.1,0,204,0C91.8,0,0,91.8,0,204s91.8,204,204,204c94.35,0,173.4-66.3,196.35-153H346.8
			C326.4,313.65,270.3,357,204,357c-84.15,0-153-68.85-153-153c0-84.15,68.85-153,153-153c43.35,0,79.05,17.85,107.1,45.9
			l-81.6,81.6H408V0L346.8,61.2z"/>
    </g>
    </svg>
</div>-->
</template>

<script>
    var perles = [["Le corps est dedans / RIP les paroles","NCV"],
["L'avantage c'est que si la vidéo ne marche pas, c'est pas bien grave","NCV"],
["Catastrophe, la pire jusqu'à présent","NCV"],
["Ça ne sert à rien de s'attarder sur le chant","NCV"],
["Chuuuut, parles pas trop fort, j'allais dormir","CB"],
["Roux","PA"],
["Ils font chier tes cheveux, on voit pas ton visage","PA"],
["Il commence par le deuxième couplet, c’est intéressant","IR"],
["Elle a des grosses traces de doigt sur ses lunettes maintenant","IR"],
["Il faudrait qu'elle chante pour pouvoir juger le timbre","NCV"],
["Nein nein nein !","NCV"],
["On dirait une sorte de poème iranien prononcé dans une cave du 18ème arrondissement","NCV"],
["Elle sent bon","NCV"],
["Mou comme les règles Maped qui se tordent","CB"],
["Comment il fait pour crier et que ça sonne étouffé","IR"],
["Puissance : j’ai l’impression d’entendre mon voisin chanter derrière un mur d’1m20 d’épaisseur","RH"],
["GERES TOI !!!","CT"],
["Timbre : quelconque","NCV"],
["Je ne sais pas s’il chante ou parle","JC"],
["il me fait rire, il est à fond c'est trop chou on sent qu'il voit un film dans sa tête","AB"],
["Tu es faux aujourd'hui, tu piques les oreilles","NCV"],
["Le pauvre il capte rien à nos blagues. On lui fait peur.","JC"],
["Mâche beaucoup et dit « eum »","JC"],
["de manière naturelle","NCV"],
["Qu'est-ce que ça peut être long le théâtre quand c'est mauvais","NCV"],
["Expérience musicale : J’espère pas","NCV"],
["Justesse : Non","NCV"],
["Il essaie, sans le son on pourrait croire qu'il est à fond","IR"],
["(fin de la chanson) Dites moi quand l'intro est finie svp, que je l'entende un peu chanter","CB"],
["Je pense qu'il a eu un traumatisme à droite de son corps, je n'ai jamais vu son oreille droite","IR"],
["Tellement de constance dans le claquement de doigts","JC"],
["Il est trop beau","NCV"],
["Bien, mais finit toutes ses phrases en « hhh ». Il a un ton de documentaire animalier c'est génial","IR"],
["Il me regarde je pense qu'il m'aime","IR"],
["Le truc à la guitare c'est mignon, ça fait youtubeur beauté qui fait une cover","NCV"],
["Ça tremble beaucoup, sur les aigus ça fait effet chèvre","NCV"],
["Alto coincée peut-être Mezzo si elle se lâche un peu","NCV"],
["Rythme : Catastrophe","NCV"],
["Y a un rythme ?","PA"],
["Note générale : C’est non.","NCV"],
["Variété de jeu : la récitation de CM1","NCV"],
["Atouts : sa partenaire ressemble à une petite fille dans un film d’horreur","NCV"],
["J'aime bien son haut et ses chaussures","NCV"],
["Potentiel émotionnel : x","NCV"],
["Mise en scène : Bien sur le passage de la tablette","TF"],
["Son pote fait genre 2m10. Mais il joue comme un pied","IR"],
["Je serais vexé si j’étais l’amour de sa vie","IR"],
["Canon : étrangement ça passe","NCV"],
["Pas ouf, parfois joli mais ça passe","SR"],
["Aussi immobile que ma grand-mère morte","CB"],
['"Y a une petite mise en scène" Ah ouais vraiment toute petite !',"PA"],
["Mal de mer. La fameuse danse de Gilbert Montagné","NCV"],
["Le 7ème cercle de l'enfer est constitué de diffusion en boucle de scènes de théâtre joués par ces protagonistes","NCV"],
["Rien à tirer","GM"],
["Très bonne démonstration de lecture","PD"],
["Laisse tomber","AD"],
["Les euh phrases euh sont euh hachées","NCV"],
["Bon gros suceur","JBDT"],
["J'aime bien la musique de fond","NCV"],
["Potentiel émotionnel : Fait ressentir de la pitié au spectateur quand il demande si quelqu'un peut lui donner la réplique","JBDT"],
["Justesse : 18 chansons en une seule, félicitations","JBDT"],
["Pousse des drôles de gémissements quand elle oublie ses paroles... je suis troublé","JBDT"],
["Elle me met une tête, du coup elle en met deux à Spac","GM"],
["Le jour où les spectateurs seront cachés dans des ordinateurs ce sera peut être interessant.","SB"],
["Pfff pas grand chose, elle est mignone mais c'est tout","SB"],
["J'me fais chier","JBDT"],
["13 ans de chant : tu parles d'une blague","GM"],
["C'est mignon, voire un peu ridiculo-mignon","NCV"],
["Note générale : On vous enverra un courrier","AG"],
["Manière très élégante de tousser","AG"],
["Côté positif : la délibération va être courte","CS"],
["Elle a un tatouage de mangemort","YV"],
["Avec les cheveux attachés on dirait un peu un poisson","TS"],
["-20 points sur Upside pour le faux départ","TS"],
["Il a une faible tessiture","YV"],
["Interprétation : Mains jointes, les yeux au ciel, une religieuse. Se balance dangereusement, j'ai l'impression de voir un sapin dans le vent.","DB"],
["Je suis partagé entre sa capacité folle à faire du yaourt en français et son absence de paroles","YV"],
["Ne se laisse pas démonter par la non-conaissance des paroles j'aime !!! C'est pro :P","AG"],
["Tintin au Pérou, puis Tintin au Congo, puis Tintin et la Castafiore. On a tout eu c'est super !","AG"],
["Je vous partage mon état d'esprit en ce début de casting : je veux une alto","AG"],
["Elle a choisi une chanson à 4 notes","YV"],
["Beaucoup de potentiel. Franchement, il est sexy","CS"],
["RRRRRRR","MP"],
["Notion très approximative des hauteurs de notes.","AG"],
["Elle bouge pas mal mais gigote plus qu'elle ne bouge","TS"],
["Vocalises excellentes, tout dans le nez quand elle chante.","DB"],
["Balancement de droite à gauche, toujours un rictus serré qui, je pense, nuit à la qualité sonore. ","AG"],
["Soprano, j'aime trop","DB"],
["Vibrato qui se tranforme en trémolo","YV"],
["Un peu poupouffe","NCV"],
["Ca a son charme cet auto-tune, mais peut-être pas toutes les 5s.","AG"],
["Ça fait très danse de spectacle de camping, mais c'est sympa","NCV"],
["Atouts : Ses yeux !!!!!! ","DB"],
["Il sera bien mieux en danseur","NCV"],
["OH PUTAIN ELLE M'A REGARDE JSUIS AMOUREUSE. OU EST MON HETEROSEXUALITE ?","CS"],
["Non, son poème en Allemand a des paroles très touchantes mais il n'y met pas de coeur.","DB"],
["Très amusant :) timbre sympathique, très gentil.","DB"],
["Arrête de marteler le vent avec tes poings.","DB"],
["Je suis pas un pro mais je dirais que c'est faux sur le libre.","TS"],
["Changement de sexe","MP"],
];
    var n = perles.length;
    let indice = Math.floor((Math.random() * n));
    //let perle_text = perles[indice][0];
    //let perle_auteur = perles[indice][1];
    
    let refresh = function(n, perles) {
        var indice = Math.floor((Math.random() * n));
        var perle_text = perles[indice][0];
        var perle_auteur = perles[indice][1];
        var perle_array = [perle_text,perle_auteur];
        
        return perle_array;
    }
    
    let perle_array =  refresh(n, perles);
    let perle_text = perle_array[0];
    let perle_auteur = perle_array[1];
    
export default {
  layout: 'conchiage',
  data () {
    return {
        perle_text,
        perle_auteur
    }
  },
components: {
}
}
    

</script>

<style lang="scss" scoped>
    .perles {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 5rem;
    }
</style>