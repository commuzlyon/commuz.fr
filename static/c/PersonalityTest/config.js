const quiz = {
    user: "",
    questions: [
        {
            text: "Quand tu vois tes amis, tu proposes :",
            responses: [
                { text: "Un Netflix & chill : écran 4K, popcorn XL", type: ["Composition","Amour"] },
                { text: "Un musée ou concert : l'art réunit les gens", type: ["Decors","Costume","Zikos"] },
                { text: "Un plan dîner-ciné : le porte-monnaie se vide, mais tes yeux brillent", type: ["Lumiere","Son"] },
                { text: "L'embuscade : un bar et on verra bien la suite", type: ["AC","Choriste","Danse"] }
            ]
        },
        {
            text: "Dans les grandes lignes, quelle serait ta personnalité ?",
            responses: [
                { text: "Extraverti, sociable", type: ["Amour","AC","Choriste"] },
                { text: "Je suis un peu dans mon monde", type: ["Decors","Composition"] },
                { text: "Hyperactif, toujours à courir à gauche à droite", type: [ "Danse"] },
                { text: "Je me fonds dans la masse, pour créer quelque chose de plus grand", type: ["Costume","Zikos"] }
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
                { text: "L'organisateur : tu prévois la nourriture et le budget", type: ["Amour","Composition"] },
                { text: "Le retardataire : tu manques de louper le train de peu", type: ["Son","Lumiere","Zikos"] },
                { text: "L'influenceur : story à la piscine de 10h à 22h", type: [ "AC","Choriste","Danse"] },
                { text: "L'hyperactif : tu veux tout visiter, tout explorer", type: ["Decors","Costume"] }
            ]
        },
        {
            text: "D'ailleurs ces vacances d'été, elles se passent...",
            responses: [
                { text: "En montagne : Profiter de l'air frais et du paysage", type: ["Danse","Decors","Composition"] },
                { text: "Dans une capitale étrangère : Découvrir un pays et sa vie nocturne ", type: ["Son","Lumiere","Choriste",] },
                { text: "À la plage : Rien de mieux que le sable chaud en été", type: ["AC","Costume"] },
                { text: "Dans ta ville : toi et tes potes, on change pas une équipe qui gagne", type: ["Amour","Zikos"] }
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
            "Tu aimes faire du théâtre, chanter à pleins poumons, bouger ton petit corps et être sous le feu des projecteurs ? Aucun doute, tu es fait pour le poste d'AC. Tu incarneras un des personnages qui donneront vie à la Commuz' 2024, et tu vivras une incroyable aventure artistique et humaine.",
        notes: "N'hésite pas à contacter Andreas Dagannaud-Delisle ou Jules Mansion si tu as la moindre question !",
        image: "/c/PersonalityTest/images/AC.jpg",
        ID : 0
    },
    Choriste: {
        persona: "Choriste",
        description:
            "Parce que ton pommeau de douche n'est pas le seul qui mérite d'entendre ta douce voix, rejoins-nous et mets le feu pendant la prochaine comédie musicale en devenant Choriste 🎤🎶",
        notes:
            "N'hésite pas à contacter Etienne Patriarche ou Louise Wittmann si tu as la moindre question !",
        image: "/c/PersonalityTest/images/Choriste.jpg",
        ID : 1
    },
    Zikos: {
        persona: "Zikos/Musicien.nne",
        description:
            "Es-tu fait.e pour le pôle Zikos ? Si tu joues d'un instrument de musique et que tu aimes jouer en groupe, la réponse est oui ! Le pôle Zikos, c'est tout simplement l'orchestre de la Commuz' et donc le meilleur pôle !",
        notes:
            "N'hésite pas à contacter Antoine Fernandes ou Cassandre Girardeau-darnand si tu as la moindre question !",
        image: "/c/PersonalityTest/images/Zikos.jpg",
        ID : 2
    },
    Decors: {
        persona: "Décorateur.rice",
        description:
            "Une comédie musicale c'est cool, mais une comédie musicale qui te fait voyager et qui te transporte vers une autre époque, c'est encore mieux ! Quoi de plus idéal qu'une scène remplie de décors hyper stylés pour y parvenir ? Rejoindre le pôle Décors, c'est concevoir, réaliser et fabriquer l'ensemble des décors du spectacle.",
        notes: "N'hésite pas à contacter Vincent Daniel ou Pierrick Durand Glouchkoff si tu as la moindre question !",
        image: "/c/PersonalityTest/images/Decors.jpg",
        ID : 3
    },
    Son: {
        persona: "VP Son",
        description:
            "Que serait la Commuz' sans une sonorisation digne de ce nom ? Si tu es fan de son, de beau matos et que tu souhaite faire vibrer les cœurs du public autant que leurs fauteuils, alors le pôle son t'attend à bras ouverts ! Que tu sois débutant ou dbs(wo)man aguerri, tu as ta place ici !",
        notes: "N'hésite pas à contacter Manon Polverini ou Nicolas Watiez si tu as la moindre question !",
        image: "/c/PersonalityTest/images/Son.jpg",
        ID : 4
    },
    Costume: {
        persona: "VP Costumes",
        description:
            "Le pôle costume est un pilier de la Commuz' : il doit réaliser une centaine de costumes pour habiller les acteurs-chanteurs, les choristes, les danseurs, tout en s'inscrivant dans le thème, l'ambiance musicale et l'époque de la pièce.",
        notes:
            "N'hésite pas à contacter Lucile Audard ou Laura Chevaillier si tu as la moindre question !",
        image: "/c/PersonalityTest/images/Costume.jpg",
        ID : 5
    },
    Amour: {
        persona: "VP Amour",
        description:
            "Un humain a besoin en moyenne de 2500 kcal par jour ; pendant un WER ça peut monter facilement à 10 000... Autant dire que sans une mécanique bien huilée pour nourrir et détendre nos petits Commuzards, le spectacle n'aurait jamais lieu.",
        notes:
            "N'hésite pas à contacter Baptiste Dupoux ou Valentin Russoo si tu as la moindre question !",
        image: "/c/PersonalityTest/images/Amour.jpg",
        ID : 6
    },
    Composition: {
        persona: "VP Composition",
        description:
            "La composition à la Commuz' c'est comme le cœur chez l'homme, c'est elle qui lui donne toutes ses émotions. Pour composer à la Commuz', nul besoin d'un niveau stratosphérique, il suffit de faire preuve de créativité. En tant que compositeur tu pourras écrire et imaginer les musiques jouées par l'orchestre qui en mettront plein la vue aux spectateurs.",
        notes:
            "N'hésite pas à contacter Armel Rouxel ou Luis Brun si tu as la moindre question !",
        image: "/c/PersonalityTest/images/Compo.jpg",
        ID : 7
    },
    Lumiere: {
        persona: "VP Projection",
        description:
            "Au sein de l'équipe des décorateurs, le ou la VP Projection sera responsable de toutes les projections du spectacle : design et animation des visuels, mise en place technique, projection live lors du spectacle...",
        notes:
            "N'hésite pas à contacter Marie Gchr si tu as la moindre question !",
        image: "/c/PersonalityTest/images/Lumiere.jpg",
        ID : 8
    },
    Danse: {
        persona: "Danseur.euse",
        description:
            "Le pôle danse, c'est un pôle bourré de talents issus de différents parcours dans la danse et de personnalités toutes aussi géniales les unes que les autres, donc n'hésite pas à t'inscrire aux castings que tu sois débutant.e, avancé.e, classique, contempo ou hip-hop !",
        notes:
            "N'hésite pas à contacter Philippine Kedzia ou Marine Denée si tu as la moindre question !",
        image: "/c/PersonalityTest/images/Danse.jpg",
        ID : 9
    }
}

export {quiz, information}