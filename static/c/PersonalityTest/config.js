const quiz = {
    user: "",
    questions: [
        {
            text: "Do you know what day is it today?",
            responses: [
                { text: "Of course!", type: ["Choriste"] },
                { text: "Of course, it's Friday everyday!", type: ["Son"] },
                { text: "No, I've totally lost track of time.", type: ["Decors"] },
                { text: "Does it matter?", type: ["Costumes"] }
            ]
        },
        {
            text: "What do you think of the term 'circuit breaker'?",
            responses: [
                {
                    text: "Very creative name! (No sarcasm intended)",
                    type: ["Choriste", "Decors"]
                },
                { text: "Lockdown then say lockdown lah...", type: ["AC", "Zikos"] },
                { text: "I catch no ball/ I don't understand.", type: ["Son"] },
                { text: "So smart I cannot even.", type: ["Costumes"] }
            ]
        },
        {
            text: "How is working from home/ home-based learning for you?",
            responses: [
                {
                    text: "What is that! I'm an essential worker.",
                    type: ["Costumes", "Choriste"]
                },
                {
                    text:
                        "I'm an essential worker but I think I ought/ want to be home.",
                    type: ["Zikos"]
                },
                { text: "I'm so enjoying it.", type: ["Son"] },
                { text: "It's even more tiring.", type: ["Decors"] }
            ]
        },
        {
            text: "What is your opinion on the timing of the circuit breaker?",
            responses: [
                { text: "Too late! Too slow!", type: ["AC"] },
                { text: "Just timely!", type: ["Choriste"] },
                {
                    text: "No need CB lah!",
                    type: ["Zikos"]
                },
                { text: "KNNBCCB", type: ["Costumes"] }
            ]
        },
        {
            text: "Which scenario is the worst to you?",
            responses: [
                { text: "WIFI down", type: ["Son"] },
                {
                    text: "Ran out of toilet paper",
                    type: ["Zikos"]
                },
                { text: "Another extension in the circuit breaker", type: ["AC"] },
                { text: "Food delivery got lost", type: ["Decors"] }
            ]
        },
        {
            text:
                "Which scene (from a movie/ series) does COVID-19 resemble the most to you?",
            responses: [
                {
                    text: "Thanos snapping his fingers in Avengers: Infinity War",
                    type: ["Zikos"]
                },
                { text: "The zombie apocalypse in Train to Busan", type: ["Costumes"] },
                { text: "The political mess in Chernobyl", type: ["AC"] },
                { text: "I don't watch movies.", type: ["Decors"] }
            ]
        },
        {
            text:
                "Which category of app did you download/ use the most during the circuit breaker?",
            responses: [
                { text: "Shopping app", type: ["Decors"] },
                { text: "Government-related app", type: ["Choriste"] },
                {
                    text: "Gaming app",
                    type: ["Son"]
                },
                { text: "Social media app", type: ["AC"] }
            ]
        },
        {
            text: "What do you look forward to each day?",
            responses: [
                {
                    text: "The number of confirmed (and unlinked etc.) cases lor!",
                    type: ["Costumes"]
                },
                {
                    text:
                        "I don't look forward to the next day nor the day after next and the day after.",
                    type: ["Zikos","Lumiere"]
                },
                {
                    text: "Knowing that tomorrow will be a better day :)",
                    type: ["Choriste", "Son"]
                },
                { text: "A better government.", type: ["AC","Danseur"] }
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
    Costumes: {
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