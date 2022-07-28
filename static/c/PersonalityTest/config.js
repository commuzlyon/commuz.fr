const quiz = {
    user: "",
    questions: [
        {
            text: "Question 1",
            responses: [
                { text: "AC,Choriste,Amour", type: ["AC","Choriste","Amour"] },
                { text: "Son,Composition,Costume", type: ["Son","Composition","Costume"] },
                { text: "Lumiere,Danse", type: ["Lumiere","Danse"] },
                { text: "Zikos,Decors", type: ["Zikos","Decors"] }
            ]
        },
        {
            text: "Question 2",
            responses: [
                { text: "AC,Son,Lumiere", type: ["AC","Son","Lumiere"] },
                { text: "Choriste,Costume,Danse", type: ["Choriste","Costume", "Danse"] },
                { text: "Zikos,Amour", type: ["Zikos","Amour"] },
                { text: "Decors,Composition", type: ["Decors","Composition"] }
            ]
        }
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
            "Viens t’aventurer au pôle décors - le pôle complètement marteau ! 🔨 Artiste à temps plein ou occasionnel, bricoleur.euse du dimanche ou technicien.ne hors-pair, passionné.e de dessin ou non, tu es le.la bienvenu.e au pôle décors tant que tu as de l’imagination et que tu veux en faire profiter les autres !",
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
            "Être compositeur.rice, c’est créer les musiques qui seront jouées par les musicien.nne.s à la Commuz. Pas besoin d’être un Vivaldi pour composer, il suffit d’être créatif.ve. Tu pourras alors poser ta patte d’artiste sur ce magnifique projet qu’est la Commuz' et donner forme et musicalité au scénario.",
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
            "Le pôle danse, c’est un pôle bourré de talents issus de différents parcours dans la danse (donc n’hésite pas à t’inscrire aux castings que tu sois débutant.e, avancé.e, classique, contempo ou hip-hop) et de personnalités toutes aussi géniales les unes que les autres.",
        notes:
            "N'hésite pas à contacter Margaux Aloin ou Sarah Mrtn si tu as la moindre question !",
        image: "/c/PersonalityTest/images/Danse.jpg"
    }
}

export {quiz, information }