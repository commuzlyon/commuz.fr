export default {
    components: true,
    css: ['~/assets/css/global.scss'],
    head : {
        script: [
            {
                src: "https://www.googletagmanager.com/gtag/js?id=G-CC0ZQE9TB5",
                async: true,
            },
            {
                src: "js/ga.js",
            }
        ],
        meta: [
            { charset: 'utf-8' },
            { name: 'language', content: 'French'},
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name : 'keyword', content:['Comédie musicale', 'Lyon', 'Centrale', 'EM Lyon', 'Etudiants', 'Danse', 'Chant', 'Théâtre', 'Musique', 'Spectacle']},
            { hid: 'description', name: 'description', content: 'Comédie musicale étudiante commune à l\'École Centrale de Lyon et à emlyon business school' },
            { name: 'author', content:'Benjamin Denise'},
            { name: 'theme-color', content: '#fe7a90' },
            // Open Graph
            { property: 'og:type', content: "website" },
            { property: 'og:site_name', content: "commuz" },
            { property: 'og:title', content: "La Commuz'" },
            { property: 'og:locale', content: 'fr_FR' },
            { property: 'og:description', content: 'Comédie musicale étudiante commune à l\'École Centrale de Lyon et à emlyon business school' },
            // Carte Twitter
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: '@commuzlyon' },
            { name: 'twitter:title', content: "La Commuz'"   },
            { name: 'twitter:description', content: "Comédie musicale étudiante commune à l'École Centrale de Lyon et à emlyon business school" },
            { name: 'twitter:image', content: 'https://commuz.fr/logos/commuz-masque-logo.png' },
            { name: 'twitter:image:alt', content: "Logo de la Commuz'" }
        ]
    }
}