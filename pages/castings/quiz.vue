<template>
  <div class="flex flex-col items-center space-y-5 my-8">

    <h1 class="text-4xl font-extrabold md:text-5xl lg:text-6xl dark:text-white text-center flex flex-col ">
      Quel poste est fait pour toi ?
    </h1>


    <div class="flex flex-col gap-4 md:px-40 px-10 items-center justify-center w-2/3 pt-9">
      
      <UProgress class="mb-3" color="purple" :value="questionIndex * 100 / questions.length" />

      <div v-if="!started && !finished" class="flex flex-col">
        <UButton class="justify-around" size="xl" color="purple" variant="soft" @click="startGame">
          <UIcon name="i-heroicons-star" class="w-5 h-5" />
          Commencer
          <UIcon name="i-heroicons-star" class="w-5 h-5" />
        </UButton>

        <span class="mt-4">
          Aucune donnée personnelle n'est collectée au cours du processus.
        </span>

      </div>
      <div v-else-if="started && !finished" class="w-full">
        <div class="flex flex-col md:flex-row mt-3 w-full justify-between gap-2">
          <div class="font-medium lg:text-3xl md:text-2xl sm:text-xl">
            {{ questions[questionIndex].question }}
          </div>
          <div class="flex flex-col gap-2">
              <UButton color="purple" variant="soft" v-for="option, index in questions[questionIndex].options" :key="option.text" class="p-4" @click="() => answerQuestion(index)">
                <div class="min-w-48 w-full">
                  {{ option.text }}
                </div>
              </UButton>
          </div>
        </div>
      </div>
      <div v-else>
        <div v-if="!showResults" class="flex flex-col gap-2 items-center justify-center">
          <p class="">Un instant, nous calculons les postes qui te conviennent le mieux</p>
          <div class="h-12">
            <div class="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"/>
          </div>
        </div>
        <div v-else class="flex flex-col items-center gap-2"> 
          <NuxtLink to="/castings">
            <UCard class="flex flex-col items-center group">
              <div class="caviar text-commuz-500 group-hover:text-fuchsia-800 transition-all duration-500">
                Chaque poste de la Commuz' est différent, et chaque personne est unique. L'important est de candidater aux pôles que tu aimes et qui te correspondent.
              </div>
              <div class="flex flex-row items-center space-x-2 mt-4">
                <span class="text-sm caviar text-commuz-500 group-hover:text-fuchsia-800 transition-all duration-500">
                  Découvrir tous les postes
                </span>
                <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 mx-2 text-commuz-500 group-hover:text-fuchsia-800 transition-all duration-500" />
              </div>
            </UCard>
          </NuxtLink>

          <div class="mt-4">
            D'après vos réponses, les postes qui vous correspondent le plus sont :
          </div>

          <div v-for="post in getBestAnswer()" :key="post">
            {{ post }}
          </div>
          
          <UButton class="mt-4" color="purple" variant="soft" @click="startGame">
            Recommencer le test
          </UButton>
        </div>
        
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
const nbQuestions = 2;

const started = ref(false);
const finished = ref(false);

const showResults = ref(false);

const questionIndex = ref(0);
const availableQuestions: {question: string, options: {text: string, type: string[]}[]}[] = [
  {
    question: "Dans les grandes lignes, quelle serait ta personnalité ?",
    options: [
      {
        text: "Extraverti, sociable",
        type: ["Amour","AC","Choriste"]
      },
      { 
        text: "Je suis un peu dans mon monde", 
        type: ["Decors", "Composition"]
      },
      { 
        text: "Hyperactif, toujours à courir à gauche à droite",
        type: ["Danse"]
      },
      { 
        text: "Je me fonds dans la masse, pour créer quelque chose de plus grand", 
        type: ["Costume", "Zikos"]
      }
    ]
  },
  {
    question: "Dans la vie tu es plutôt...",
    options: [
    { text: "Manuel", type: ["Decors","Costume","Amour"] },
    { text: "Technique", type: ["Son","Lumiere"] },
    { text: "Créatif", type: [ "Zikos","Choriste","Composition"] },
    { text: "Une star", type: ["AC","Danse"] }
    ]
  },
  {
    question: "Petites vacances entre amis, tu es ...",
    options: [
      { text: "L'organisateur : tu prévois la nourriture et le budget", type: ["Amour","Composition"] },
      { text: "Le retardataire : tu manques de louper le train de peu", type: ["Son","Lumiere","Zikos"] },
      { text: "L'influenceur : story à la piscine de 10h à 22h", type: [ "AC","Choriste","Danse"] },
      { text: "L'hyperactif : tu veux tout visiter, tout explorer", type: ["Decors","Costume"] }
    ]
  }
];

const questions = ref<{question: string, options: {text: string, type: string[]}[]}[]>([]);

/**
 * To ensure that some posts does not have more chance to be recommended than others, 
 * when they are more represented in questions, than other, we use a weights dictionary.
 * 
 * When the game start, we count the number of times a post is recommended, and we increment the weight of this post.
 * 
 * Thus, a post will be recommended based on the proportion of times it was selected by the user and not based on the number of times it was selected.
 */
const weights: {[type: string]: number} = {}
// We store {postType: number of times the post was selected}
let answers: {[type: string]: number} = {}

function startGame() {
  console.log("Starting game");

  computeWeights();
  answers = {};
  questionIndex.value = 0;

  // We pick nbQuestions randomly
  const shuffledQuestions = Array.from(availableQuestions).sort(() => 0.5 - Math.random());
  questions.value = shuffledQuestions.slice(0, nbQuestions);

  started.value = true;
  finished.value = false;
  showResults.value = false;
}

function answerQuestion(i: number) {
  console.log("Answering question", i);
  for (const type of questions.value[questionIndex.value].options[i].type) {
    if (!answers[type]) {
      answers[type] = 0;
    }
    answers[type]++;
  }
  questionIndex.value++;
  if (questionIndex.value >= questions.value.length) {
    console.log("Game finished");
    console.log(answers);
    finished.value = true;
    started.value = false;
    new Promise((resolve) => setTimeout(resolve, 1000)).then(() => {
      showResults.value = true;
    });
  }
}

function computeWeights() {
  for (const question of questions.value) {
    // We compute a weight for each post possible on the question.
    // We only increment the weight by one per question, to be sure that 
    // the user can have the maximum score for a post by selected one answer by question
    const questionWeights = new Set<string>();
    for (const option of question.options) {
      for (const type of option.type) {
        questionWeights.add(type);
      }
    }
    // We increment the weight of each post by one
    for (const weight of questionWeights) {
      if (!weights[weight]) {
        weights[weight] = 0;
      }
      weights[weight]++;
    }
  }
} 

function getBestAnswer(): string[] {
  const bestAnswers = [];

  const keys = Object.keys(answers);
  keys.sort(function(a, b) {
    return answers[b] - answers[a];
  });

  for (const key of keys) {
    if (answers[key] === answers[keys[0]]) {
      bestAnswers.push(key);
    }
  }
  return bestAnswers;
}

</script>