<template>
    <div class="container">

        <!-- Background Music -->
        <audio loop autoplay>
            <source src="/c/testDeCompatibilite/SFX/Wii Shop - Theme.mp3" type="audio/mp3">
        </audio>

        <h1>Test de compatibilité</h1>
        <div class="profiles">
            <div v-if="people.length" class="person-container">
                <div class="person-info">
                    <label for="person1"></label>
                    <select v-model="selectedPerson1" id="person1">
                        <option v-for="person in people" :key="person.id" :value="person">
                            {{ person.name }}
                        </option>
                    </select>
                    <div v-if="selectedPerson1" class="selected-person">
                        <img :src="'/c/commurge/pictures/' + selectedPerson1.photos" class="person-img"
                            alt="Person 1 Photo" />
                        <p class="text-up">MBTI: {{ selectedPerson1.mbti }}</p>
                        <p>Astro: {{ selectedPerson1.astro }}</p>
                    </div>
                </div>
            </div>

            <div v-if="people.length" class="person-container">
                <div class="person-info">
                    <label for="person2"></label>
                    <select v-model="selectedPerson2" id="person2">
                        <option v-for="person in people" :key="person.id" :value="person">
                            {{ person.name }}
                        </option>
                    </select>
                    <div v-if="selectedPerson2" class="selected-person">
                        <img :src="'/c/commurge/pictures/' + selectedPerson2.photos" class="person-img"
                            alt="Person 2 Photo" />
                        <p class="text-up">MBTI: {{ selectedPerson2.mbti }}</p>
                        <p>Astro: {{ selectedPerson2.astro }}</p>
                    </div>
                </div>
            </div>
        </div>

        <button v-if="arePicturesSelected" @click="displayResult" class="image-button">
            <img src="/c/testDeCompatibilite/coeur.png" alt="Coeur Image" class="heart" />
            <span class="result">{{ result }}</span>
        </button>
    </div>
</template>
  
<script>
import { onMounted } from 'vue';

export default defineComponent({
    setup() {
        const people = ref([]);
        const selectedPerson1 = ref(null);
        const selectedPerson2 = ref(null);
        const result = ref(null);

        const astroScores = {
            'Bélier': { 'Bélier': 10, 'Taureau': 10, 'Gémeaux': 50, 'Cancer': 30, 'Lion': 50, 'Vierge': 10, 'Balance': 50, 'Scorpion': 10, 'Sagittaire': 50, 'Capricorne': 30, 'Verseau': 50, 'Poissons': 50 },
            'Taureau': { 'Bélier': 10, 'Taureau': 50, 'Gémeaux': 30, 'Cancer': 50, 'Lion': 10, 'Vierge': 50, 'Balance': 30, 'Scorpion': 50, 'Sagittaire': 10, 'Capricorne': 50, 'Verseau': 10, 'Poissons': 50 },
            'Gémeaux': { 'Bélier': 50, 'Taureau': 30, 'Gémeaux': 50, 'Cancer': 30, 'Lion': 30, 'Vierge': 30, 'Balance': 50, 'Scorpion': 10, 'Sagittaire': 50, 'Capricorne': 10, 'Verseau': 50, 'Poissons': 30 },
            'Cancer': { 'Bélier': 30, 'Taureau': 50, 'Gémeaux': 30, 'Cancer': 50, 'Lion': 30, 'Vierge': 30, 'Balance': 30, 'Scorpion': 50, 'Sagittaire': 10, 'Capricorne': 50, 'Verseau': 10, 'Poissons': 50 },
            'Lion': { 'Bélier': 50, 'Taureau': 10, 'Gémeaux': 30, 'Cancer': 30, 'Lion': 10, 'Vierge': 30, 'Balance': 50, 'Scorpion': 30, 'Sagittaire': 50, 'Capricorne': 10, 'Verseau': 50, 'Poissons': 10 },
            'Vierge': { 'Bélier': 10, 'Taureau': 50, 'Gémeaux': 30, 'Cancer': 30, 'Lion': 30, 'Vierge': 30, 'Balance': 30, 'Scorpion': 10, 'Sagittaire': 30, 'Capricorne': 50, 'Verseau': 10, 'Poissons': 50 },
            'Balance': { 'Bélier': 50, 'Taureau': 30, 'Gémeaux': 50, 'Cancer': 30, 'Lion': 50, 'Vierge': 30, 'Balance': 50, 'Scorpion': 30, 'Sagittaire': 30, 'Capricorne': 30, 'Verseau': 50, 'Poissons': 10 },
            'Scorpion': { 'Bélier': 10, 'Taureau': 50, 'Gémeaux': 10, 'Cancer': 50, 'Lion': 30, 'Vierge': 10, 'Balance': 30, 'Scorpion': 50, 'Sagittaire': 30, 'Capricorne': 30, 'Verseau': 10, 'Poissons': 50 },
            'Sagittaire': { 'Bélier': 50, 'Taureau': 10, 'Gémeaux': 50, 'Cancer': 10, 'Lion': 50, 'Vierge': 30, 'Balance': 30, 'Scorpion': 30, 'Sagittaire': 10, 'Capricorne': 10, 'Verseau': 30, 'Poissons': 30 },
            'Capricorne': { 'Bélier': 30, 'Taureau': 50, 'Gémeaux': 10, 'Cancer': 50, 'Lion': 10, 'Vierge': 50, 'Balance': 30, 'Scorpion': 30, 'Sagittaire': 10, 'Capricorne': 30, 'Verseau': 10, 'Poissons': 30 },
            'Verseau': { 'Bélier': 50, 'Taureau': 10, 'Gémeaux': 50, 'Cancer': 10, 'Lion': 50, 'Vierge': 10, 'Balance': 50, 'Scorpion': 10, 'Sagittaire': 30, 'Capricorne': 10, 'Verseau': 10, 'Poissons': 30 },
            'Poissons': { 'Bélier': 50, 'Taureau': 50, 'Gémeaux': 30, 'Cancer': 50, 'Lion': 10, 'Vierge': 50, 'Balance': 10, 'Scorpion': 50, 'Sagittaire': 30, 'Capricorne': 30, 'Verseau': 30, 'Poissons': 50 },
        };


        const scoreAstro = (astro1, astro2) => {
            if (!(astro1 in astroScores) || !(astro2 in astroScores)) {
                throw new Error('Invalid astro type');
            }
            return astroScores[astro1][astro2];
        };

        const mbtiScores = {
            'Médiateur - INFP': { 'Médiateur - INFP': 40, 'Inspirateur - ENFP': 40, 'Avocat - INFJ': 40, 'Protagoniste - ENFJ': 50, 'Architecte - INTJ': 40, 'Commandant - ENTJ': 50, 'Logicien - INTP': 40, 'Innovateur - ENTP': 40, 'Aventurier - ISFP': 10, 'Amuseur - ESFP': 10, 'Virtuose - ISTP': 10, 'Entrepreneur - ESTP': 10, 'Défenseur - ISFJ': 10, 'Consul - ESFJ': 10, 'Logisticien - ISTJ': 10, 'Directeur - ESTJ': 10 },
            'Inspirateur - ENFP': { 'Médiateur - INFP': 40, 'Inspirateur - ENFP': 40, 'Avocat - INFJ': 50, 'Protagoniste - ENFJ': 40, 'Architecte - INTJ': 50, 'Commandant - ENTJ': 40, 'Logicien - INTP': 40, 'Innovateur - ENTP': 40, 'Aventurier - ISFP': 10, 'Amuseur - ESFP': 10, 'Virtuose - ISTP': 10, 'Entrepreneur - ESTP': 10, 'Défenseur - ISFJ': 10, 'Consul - ESFJ': 10, 'Logisticien - ISTJ': 10, 'Directeur - ESTJ': 10 },
            'Avocat - INFJ': { 'Médiateur - INFP': 40, 'Inspirateur - ENFP': 50, 'Avocat - INFJ': 40, 'Protagoniste - ENFJ': 40, 'Architecte - INTJ': 40, 'Commandant - ENTJ': 40, 'Logicien - INTP': 40, 'Innovateur - ENTP': 50, 'Aventurier - ISFP': 10, 'Amuseur - ESFP': 10, 'Virtuose - ISTP': 10, 'Entrepreneur - ESTP': 10, 'Défenseur - ISFJ': 10, 'Consul - ESFJ': 10, 'Logisticien - ISTJ': 10, 'Directeur - ESTJ': 10 },
            'Protagoniste - ENFJ': { 'Médiateur - INFP': 50, 'Inspirateur - ENFP': 40, 'Avocat - INFJ': 40, 'Protagoniste - ENFJ': 40, 'Architecte - INTJ': 40, 'Commandant - ENTJ': 40, 'Logicien - INTP': 40, 'Innovateur - ENTP': 40, 'Aventurier - ISFP': 50, 'Amuseur - ESFP': 10, 'Virtuose - ISTP': 10, 'Entrepreneur - ESTP': 10, 'Défenseur - ISFJ': 10, 'Consul - ESFJ': 10, 'Logisticien - ISTJ': 10, 'Directeur - ESTJ': 10 },
            'Architecte - INTJ': { 'Médiateur - INFP': 40, 'Inspirateur - ENFP': 50, 'Avocat - INFJ': 40, 'Protagoniste - ENFJ': 40, 'Architecte - INTJ': 40, 'Commandant - ENTJ': 40, 'Logicien - INTP': 40, 'Innovateur - ENTP': 50, 'Aventurier - ISFP': 30, 'Amuseur - ESFP': 30, 'Virtuose - ISTP': 30, 'Entrepreneur - ESTP': 30, 'Défenseur - ISFJ': 20, 'Consul - ESFJ': 20, 'Logisticien - ISTJ': 20, 'Directeur - ESTJ': 20 },
            'Commandant - ENTJ': { 'Médiateur - INFP': 50, 'Inspirateur - ENFP': 40, 'Avocat - INFJ': 40, 'Protagoniste - ENFJ': 40, 'Architecte - INTJ': 40, 'Commandant - ENTJ': 40, 'Logicien - INTP': 50, 'Innovateur - ENTP': 40, 'Aventurier - ISFP': 30, 'Amuseur - ESFP': 30, 'Virtuose - ISTP': 30, 'Entrepreneur - ESTP': 30, 'Défenseur - ISFJ': 30, 'Consul - ESFJ': 30, 'Logisticien - ISTJ': 30, 'Directeur - ESTJ': 30 },
            'Logicien - INTP': { 'Médiateur - INFP': 40, 'Inspirateur - ENFP': 40, 'Avocat - INFJ': 40, 'Protagoniste - ENFJ': 40, 'Architecte - INTJ': 40, 'Commandant - ENTJ': 50, 'Logicien - INTP': 40, 'Innovateur - ENTP': 40, 'Aventurier - ISFP': 30, 'Amuseur - ESFP': 30, 'Virtuose - ISTP': 30, 'Entrepreneur - ESTP': 30, 'Défenseur - ISFJ': 20, 'Consul - ESFJ': 20, 'Logisticien - ISTJ': 20, 'Directeur - ESTJ': 50 },
            'Innovateur - ENTP': { 'Médiateur - INFP': 40, 'Inspirateur - ENFP': 40, 'Avocat - INFJ': 50, 'Protagoniste - ENFJ': 40, 'Architecte - INTJ': 50, 'Commandant - ENTJ': 40, 'Logicien - INTP': 40, 'Innovateur - ENTP': 40, 'Aventurier - ISFP': 30, 'Amuseur - ESFP': 30, 'Virtuose - ISTP': 30, 'Entrepreneur - ESTP': 30, 'Défenseur - ISFJ': 20, 'Consul - ESFJ': 20, 'Logisticien - ISTJ': 20, 'Directeur - ESTJ': 20 },
            'Aventurier - ISFP': { 'Médiateur - INFP': 10, 'Inspirateur - ENFP': 10, 'Avocat - INFJ': 10, 'Protagoniste - ENFJ': 50, 'Architecte - INTJ': 30, 'Commandant - ENTJ': 30, 'Logicien - INTP': 30, 'Innovateur - ENTP': 30, 'Aventurier - ISFP': 20, 'Amuseur - ESFP': 20, 'Virtuose - ISTP': 20, 'Entrepreneur - ESTP': 20, 'Défenseur - ISFJ': 30, 'Consul - ESFJ': 50, 'Logisticien - ISTJ': 30, 'Directeur - ESTJ': 50 },
            'Amuseur - ESFP': { 'Médiateur - INFP': 10, 'Inspirateur - ENFP': 10, 'Avocat - INFJ': 10, 'Protagoniste - ENFJ': 10, 'Architecte - INTJ': 30, 'Commandant - ENTJ': 30, 'Logicien - INTP': 30, 'Innovateur - ENTP': 30, 'Aventurier - ISFP': 20, 'Amuseur - ESFP': 20, 'Virtuose - ISTP': 20, 'Entrepreneur - ESTP': 20, 'Défenseur - ISFJ': 50, 'Consul - ESFJ': 30, 'Logisticien - ISTJ': 50, 'Directeur - ESTJ': 30 },
            'Virtuose - ISTP': { 'Médiateur - INFP': 10, 'Inspirateur - ENFP': 10, 'Avocat - INFJ': 10, 'Protagoniste - ENFJ': 10, 'Architecte - INTJ': 30, 'Commandant - ENTJ': 30, 'Logicien - INTP': 30, 'Innovateur - ENTP': 30, 'Aventurier - ISFP': 20, 'Amuseur - ESFP': 20, 'Virtuose - ISTP': 20, 'Entrepreneur - ESTP': 20, 'Défenseur - ISFJ': 30, 'Consul - ESFJ': 50, 'Logisticien - ISTJ': 30, 'Directeur - ESTJ': 50 },
            'Entrepreneur - ESTP': { 'Médiateur - INFP': 10, 'Inspirateur - ENFP': 10, 'Avocat - INFJ': 10, 'Protagoniste - ENFJ': 10, 'Architecte - INTJ': 30, 'Commandant - ENTJ': 30, 'Logicien - INTP': 30, 'Innovateur - ENTP': 30, 'Aventurier - ISFP': 20, 'Amuseur - ESFP': 20, 'Virtuose - ISTP': 20, 'Entrepreneur - ESTP': 20, 'Défenseur - ISFJ': 50, 'Consul - ESFJ': 30, 'Logisticien - ISTJ': 50, 'Directeur - ESTJ': 30 },
            'Défenseur - ISFJ': { 'Médiateur - INFP': 10, 'Inspirateur - ENFP': 10, 'Avocat - INFJ': 10, 'Protagoniste - ENFJ': 10, 'Architecte - INTJ': 20, 'Commandant - ENTJ': 30, 'Logicien - INTP': 10, 'Innovateur - ENTP': 10, 'Aventurier - ISFP': 30, 'Amuseur - ESFP': 50, 'Virtuose - ISTP': 50, 'Entrepreneur - ESTP': 50, 'Défenseur - ISFJ': 40, 'Consul - ESFJ': 40, 'Logisticien - ISTJ': 40, 'Directeur - ESTJ': 40 },
            'Consul - ESFJ': { 'Médiateur - INFP': 10, 'Inspirateur - ENFP': 10, 'Avocat - INFJ': 10, 'Protagoniste - ENFJ': 10, 'Architecte - INTJ': 20, 'Commandant - ENTJ': 30, 'Logicien - INTP': 10, 'Innovateur - ENTP': 10, 'Aventurier - ISFP': 50, 'Amuseur - ESFP': 30, 'Virtuose - ISTP': 30, 'Entrepreneur - ESTP': 30, 'Défenseur - ISFJ': 40, 'Consul - ESFJ': 40, 'Logisticien - ISTJ': 40, 'Directeur - ESTJ': 40 },
            'Logisticien - ISTJ': { 'Médiateur - INFP': 10, 'Inspirateur - ENFP': 10, 'Avocat - INFJ': 10, 'Protagoniste - ENFJ': 10, 'Architecte - INTJ': 20, 'Commandant - ENTJ': 30, 'Logicien - INTP': 10, 'Innovateur - ENTP': 10, 'Aventurier - ISFP': 30, 'Amuseur - ESFP': 50, 'Virtuose - ISTP': 50, 'Entrepreneur - ESTP': 50, 'Défenseur - ISFJ': 40, 'Consul - ESFJ': 40, 'Logisticien - ISTJ': 40, 'Directeur - ESTJ': 40 },
            'Directeur - ESTJ': { 'Médiateur - INFP': 10, 'Inspirateur - ENFP': 10, 'Avocat - INFJ': 10, 'Protagoniste - ENFJ': 10, 'Architecte - INTJ': 20, 'Commandant - ENTJ': 30, 'Logicien - INTP': 50, 'Innovateur - ENTP': 10, 'Aventurier - ISFP': 50, 'Amuseur - ESFP': 30, 'Virtuose - ISTP': 30, 'Entrepreneur - ESTP': 30, 'Défenseur - ISFJ': 40, 'Consul - ESFJ': 40, 'Logisticien - ISTJ': 40, 'Directeur - ESTJ': 40 },
        };

        const scorembti = (mbti1, mbti2) => {
            if (!(mbti1 in mbtiScores) || !(mbti2 in mbtiScores)) {
                throw new Error('Invalid MBTI type');
            }
            return mbtiScores[mbti1][mbti2];
        };

        // Pour attendre une certaine période
        const delay = ms => new Promise(res => setTimeout(res, ms));

        const displayResult = async () => {
            result.value = "?";
            const temp = (scoreAstro(selectedPerson1.value.astro, selectedPerson2.value.astro) + scorembti(selectedPerson1.value.mbti, selectedPerson2.value.mbti)).toString();

            const suspense = new Audio('/c/testDeCompatibilite/SFX/suspense.mp3');
            const low = new Audio('/c/testDeCompatibilite/SFX/10 - 30 - dramatic fart sound effect.mp3');
            const lowmedium = new Audio('/c/testDeCompatibilite/SFX/40 - Hehe Boy Meme.mp3');
            const medium = new Audio('/c/testDeCompatibilite/SFX/50 - 60 - hello there.mp3');
            const mediumhigh = new Audio('/c/testDeCompatibilite/SFX/70 - noice.mp3');
            const high = new Audio('/c/testDeCompatibilite/SFX/80 - Oh My God.mp3');
            const veryhigh = new Audio('/c/testDeCompatibilite/SFX/90 - 100 - WOW.mp3');

            if (temp <= 30) {
                low.play();
                await delay(6000);
            } else {
                suspense.play();
                await delay(6000)
                if (temp <= 40) {
                    lowmedium.play();
                } else if (temp <= 60) {
                    medium.play();
                } else if (temp <= 70) {
                    mediumhigh.play();
                } else if (temp <= 80) {
                    high.play();
                } else {
                    veryhigh.play();
                }
            }
            result.value = temp;
        };

        const arePicturesSelected = computed(() => {
            return selectedPerson1.value && selectedPerson2.value;
        });

        const fetchData = async () => {
            // For local dev
            //const response = await fetch('http://localhost:3000/c/commurge/infos.csv');
            // For prod
            const response = await fetch('https://commuz.fr/c/commurge/infos.csv')

            const csvData = await response.text();

            // Parse CSV data into an array of objects
            csvData
                .trim()
                .split('\n')
                .forEach((line, index) => {
                    if (index !== 0) {
                        const [name, astro, mbti, photos, poste] = line.split(';');
                        people.value.push({ id: index, name, astro, mbti, photos, poste });
                    }
                });
        };

        onMounted(() => {
            fetchData();
        });

        definePageMeta({
            layout: "conchiage",
            name: "Test de compatibilité",
        });

        return {
            people,
            selectedPerson1,
            selectedPerson2,
            result,
            arePicturesSelected,
            displayResult,
        };
    },
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Dancing+Script');
@import url('https://fonts.googleapis.com/css?family=Pacifico');

#app {
    height: 100vh;
    /* 100% of the viewport height */
    display: flex;
    justify-content: center;
    align-items: center;
}

h1 {
    font-size: 1.5em;
    text-align: center;
    color: white;
    margin: 0.5em 0;
    text-align: center;
}

.profiles {
    display: flex;
    justify-content: space-around;
}

.person-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 50px;
    margin-left: 50px;
}

.person-info {
    text-align: center;
}

.selected-person {
    margin-top: 10px;
}

button {
    margin-bottom: 20px;
    background-color: transparent;
    border: none;
    outline: none;
}

.container {
    height: 100vh;
    width: 100%;
    align-items: center;
    justify-items: center;
    display: flex;
    flex-direction: column;
    background-color: #6ab48e;
    background-image: url('/c/testDeCompatibilite/heart-background.gif');
    background-repeat: repeat;
}

.image-button {
    position: relative;
}

.result {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 10em;
}

@media only screen and (max-width: 600px) {
    /* Adjust styles for screens with a maximum width of 600 pixels (typical for phones) */

    .profiles {
        flex-direction: column;
        /* Stack profiles vertically on small screens */
        align-items: center;
    }

    .person-img {
        width: 55%;
    }

    .person-container {
        margin-right: 0;
        /* Remove right margin on small screens */
        margin-left: 0;
        /* Remove left margin on small screens */
    }

    .text-up {
        margin-bottom: 0px;
    }

    .selected-person {
        margin-top: 5px;
        /* Adjust margin on small screens */
    }

    button {
        margin-bottom: 5px;
        /* Adjust margin on small screens */
    }
}
</style>
  