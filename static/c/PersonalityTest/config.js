const quiz = {
    user: "",
    questions: [
        {
            text: "Quand tu regardes un spectacle, qu'est ce qui t'attire le plus ?",
            responses: [
                { text: "L'imaginer, l'écrire", type: ["Composition","Danse"] },
                { text: "Le mettre en place, le monter", type: ["Decors","Costume"] },
                { text: "Le gérer, l'animer", type: ["Lumiere","Son","Amour"] },
                { text: "Le faire vivre", type: ["AC","Zikos","Choriste"] }
            ]
        },
        {
            text: "Dans les grandes lignes, quelle serait ta personnalité ?",
            responses: [
                { text: "Extraverti, sociable", type: ["Amour","AC","Choriste"] },
                { text: "Je suis un peu dans mon monde", type: ["Decors","Composition"] },
                { text: "Hyperactif, toujours à courir à gauche à droite", type: [ "Danse"] },
                { text: "Je me fond dans la masse, pour créer quelque chose de plus grand", type: ["Costume","Zikos"] }
            ]
        },
        {
            text: "Dans la vie tu es plutôt...",
            responses: [
                { text: "Manuel", type: ["Decors","Costume","Amour"] },
                { text: "Technique", type: ["Son","Lumiere"] },
                { text: "Créatif", type: [ "Zikos","Choriste","Composition"] },
                { text: "Une star", type: ["AC","Danse"] }
            ]
        },
        {
            text: "Petites vacances entre amis, tu es ...",
            responses: [
                { text: "L'oganisateur : tu prévois la nourriture et le budget", type: ["Amour","Composition"] },
                { text: "Le retardataire : tu manques de louper le train de peu", type: ["Son","Lumiere","Zikos"] },
                { text: "L'influenceur : story à la piscine de 10h à 22h", type: [ "AC","Choriste","Danse"] },
                { text: "L'hyperactif : tu veux tout visiter, tout explorer", type: ["Decors","Costume"] }
            ]
        },
        {
            text: "Si tu avais un super pouvoir ce serait ?",
            responses: [
                { text: "Voyager dans le temps", type: ["Costume","Decors","Composition"] },
                { text: "Être riche sans limite", type: ["Son","Amour"] },
                { text: "Devenir invisible", type: [ "Zikos","Choriste","Lumiere"] },
                { text: "Plaire à n'importe qui", type: ["AC","Danse"] }
            ]
        },
        {
            text: "Il pleut et tu cherches une activité tu...",
            responses: [
                { text: "vas voir un concert/un film", type: ["Zikos","Choriste"] },
                { text: "restes bien au chaud au fond de ton lit", type: ["Son","Lumiere"] },
                { text: "vas au musée", type: [ "Decors","Costume",] },
                { text: "en profites pour prendre le temps de cuisiner", type: ["Amour","Composition"] }
            ]
        },
        {
            text: "Un de tes amis chante faux...",
            responses: [
                { text: "tu te sens obligé de le corriger", type: ["AC","Choriste","Composition"] },
                { text: "tu tentes de l'accompagner pour sauver les meubles", type: ["Zikos","Amour","Danse"] },
                { text: "Tu t'éloignes pour ne plus l'entendre", type: [ "Decors","Costume",] },
                { text: "Tu mets ton casque pour soulager tes oreilles", type: ["Son","Lumiere"] }
            ]
        },
        {
            text: "Une petite jam session s'improvise devant toi : tu…",
            responses: [
                { text: "Fonces jouer avec les autres musiciens ", type: ["AC","Choriste","Zikos"] },
                { text: "T'enjailles a fond, tu danses, tu vis la musique ", type: ["Composition","Danse"] },
                { text: "Applaudis en souriant fièrement : ils sont talentueux tes potes ", type: ["Son","Lumiere","Amour"] },
                { text: "Regardes de loin, tu savoures discrètement ce qui se passe ", type: ["Decors", "Costume"] }
            ]
        },
        {
            text: "Quand tu sors d'un concert/d'une pièce de théâtre…",
            responses: [
                { text: "Tu gardes des images de l'ambiance plein la tête ", type: [ "Decors","Lumiere"] },
                { text: "Tu rêves d'être sur scène toi aussi ", type: ["AC","Choriste","Zikos"] },
                { text: "Tu cherches à savoir comment ils en sont venus à ce résultat ", type: ["Composition","Son", "Costume"] },
                { text: "Tu te repasses les musiques/le texte des centaines de fois ", type: ["Danse","Amour"] }
            ]
        },
        {
            text: "Si tu étais dans une comédie musicale tu serais…",
            responses: [
                { text: "L'original, avec des centaines d'idées en tête ", type: ["Composition" ,"Lumiere"] },
                { text: "Celui/celle qui transforme toute sa vie en chanson ", type: ["AC","Choriste",] },
                { text: "Celui/celle sur qui on peut compter : toujours derrière ses potes !", type: ["Zikos", "Danse","Amour"] },
                { text: "Le/la MacGyver : avec un rien tu fais de la magie", type: ["Son", "Costume","Decors" ] }
            ]
        },
    ]
}

const information = {
    AC: {
        persona: "Acteur.rice-Chanteur.euse",
        description:
            "Être acteur.rice-chanteur.euse, c’est incarner les personnages qui feront vivre le spectacle de la Commuz' 2022. Tu as l’âme de Jean-Paul Belmondo, Emma Stone ou même Lady Gaga ? Tu es attiré.e par la scène et tu aimes chanter, jouer et danser ? Alors le poste d’acteur.rice-chanteur.euse est fait pour toi !",
        notes: "N'hésite pas à contacter Inès Battisti ou Jean Rannou si tu as la moindre question !",
        image: "/c/PersonalityTest/images/AC.jpg"
    },
    Choriste: {
        persona: "Choriste",
        description:
            "Parce que ton pommeau de douche n’est pas le seul qui mérite d’entendre ta douce voix, rejoins-nous et mets le feu pendant la prochaine comédie musicale en devenant Choriste 🎤🎶",
        notes:
            "N'hésite pas à contacter Antonin Delorme ou Marguerite Lafeuillade si tu as la moindre question !",
        image: "/c/PersonalityTest/images/Choriste.jpg"
    },
    Zikos: {
        persona: "Zikos/Musicien.nne",
        description:
            "Qu’est-ce qu’un.e Zikos ? Le Zikos fait partie du plus gros pôle de la Commuz’ et joue dans l’orchestre aux côtés de musicien.ne.s talentueux.euses et à l’écoute ! Que tu sois concertiste de renom ou bien musicien.ne amateur.rice, tu donneras vie aux reprises et compositions originales de la Commuz’.",
        notes:
            "N'hésite pas à contacter Paul Kaassis ou Emilie Stentz si tu as la moindre question !",
        image: "/c/PersonalityTest/images/Zikos.jpg"
    },
    Decors: {
        persona: "Décorateur.rice",
        description:
            "Une comédie musicale c'est cool, mais une comédie musicale qui te fait voyager et qui te transporte vers une autre époque, c'est encore mieux ! Quoi de plus idéal qu'une scène remplie de décors hyper stylés pour y parvenir ? Rejoindre le pôle Décors, c'est concevoir, réaliser et fabriquer l'ensemble des décors du spectacle. ",
        notes: "N'hésite pas à contacter Adèle Lefevre ou Chloé Mrtte si tu as la moindre question !",
        image: "/c/PersonalityTest/images/Decors.jpg"
    },
    Son: {
        persona: "VP Son",
        description:
            "Être VP Son, c'est assurer à l'aide d'une équipe réduite la sonorisation de toute la Commuz' (week-ends de répétition et représentations), pour un orchestre, les choristes et les acteurs-chanteur.euse.s . Objectif: une sonorisation parfaite et 0 larsen !",
        notes: "N'hésite pas à contacter Agustin Soux ou Clément Pacoret si tu as la moindre question !",
        image: "/c/PersonalityTest/images/Son.jpg"
    },
    Costume: {
        persona: "VP Costumes",
        description:
            "Le pôle costume est un des piliers de la Commuz’ : sa mission est d’habiller chaque personnage en s’efforçant de retranscrire le caractère et le rôle de chaque acteur.rice, tout en véhiculant les idées et le ton de la pièce.",
        notes:
            "N'hésite pas à contacter Imane Demnati ou Jean Turck si tu as la moindre question !",
            image: "/c/PersonalityTest/images/Costume.jpg"
    },
    Amour: {
        persona: "VP Amour",
        description:
            "Un humain a besoin en moyenne de 2500 kcal par jour. Pendant un WER ça peut monter facilement à 10 000, surtout pour les Zikos qui passent leurs journées à courir dans tous les sens !! Autant dire que sans une mécanique bien huilée pour nourrir nos petits Commuzards, le spectacle n’aurait jamais lieu.",
        notes:
            "N'hésite pas à contacter Aurore Granier si tu as la moindre question !",
        image: "/c/PersonalityTest/images/Amour.jpg"
    },
    Composition: {
        persona: "VP Composition",
        description:
            "La composition à la Commuz c'est comme le cœur chez l'homme, c'est elle qui lui donne toute ses émotions. Pour composer à la Commuz, nul besoin d'un niveau stratosphérique, il suffit de faire preuve de créativité. En tant que compositeur tu pourra écrire et imaginer les musiques jouées par l'orchestre qui en mettront plein la vue aux spectateurs.",
        notes:
            "N'hésite pas à contacter Antonin Rouffet ou Léopold Kowalski si tu as la moindre question !",
        image: "/c/PersonalityTest/images/Compo.jpg"
    },
    Lumiere: {
        persona: "Respo Lumière",
        description:
            "Le.la Respo Lumière est la personne qui s’occupe de A à Z de la mise en scène lumineuse de la Commuz’. Il.elle doit travailler en étroite collaboration avec les metteurs en scène et les coordinateurs artistiques pour donner une cohérence lumineuse au spectacle !",
        notes:
            "N'hésite pas à contacter Benjamin Denise si tu as la moindre question !",
        image: "/c/PersonalityTest/images/Lumiere.jpg"
    },
    Danse: {
        persona: "Danseur.euse",
        description:
            "La danse est à la Commuz ce que Bonnie est à Clyde : un indispensable ! C’est le pôle qui donne vie aux tableaux et qui en met plein la vue aux spectateurs ! Les danseurs, c’est avant tout une team pleine de talent, créative et soudée!",
        notes:
            "N'hésite pas à contacter Margaux Aloin ou Sarah Mrtn si tu as la moindre question !",
        image: "/c/PersonalityTest/images/Danse.jpg"
    }
}

export {quiz, information }