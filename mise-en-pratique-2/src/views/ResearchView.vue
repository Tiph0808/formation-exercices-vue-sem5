<script setup>
import { personsList } from '@/assets/data'
import { ref } from 'vue'

//Je crée une ref pour l'input
const firstname = ref('')

// Je crée une ref qui dira si oui ou non le nom match avec un des users du tableau
const nameIsMatching = ref(false)

//Je crée une ref pour l'utilisateur qui matchera avec le firstname, je l'initialise a null
const personMatching = ref(null)

const searching = ref(false)

const handleSubmit = () => {
  // jai lancé la recherche :
  searching.value = true
  // je pars du principe que je ne vais rien trouver (de cette facon on "efface" les infos enregistrées au clic précédent)
  nameIsMatching.value = false
  personMatching.value = null
  // Je parcours mon tableau avec une boucle
  for (let i = 0; i < personsList.length; i++) {
    // console.log(personsList[i])
    // A chaque tour j'obtiens un objet qui represente un utilisateur
    // si le firstname du personsList[i] match avec le mame de l'input, alors j'assigne cet objet entier (=personsList[i] !) comme valeur a personMatching
    if (personsList[i].firstname === firstname.value) {
      nameIsMatching.value = true
      personMatching.value = personsList[i]
      console.log(personMatching.value)
    }
  }
}
</script>

<template>
  <main>
    <div>
      <h1>Research by name</h1>
      <form @submit.prevent="handleSubmit">
        <input type="text" id="firstname" name="firstname" v-model="firstname" />
        <button>Search</button>
      </form>
    </div>

    <div>
      <p v-if="!searching">Enter a firstname</p>
      <div v-else>
        <div v-if="nameIsMatching">
          <p>{{ personMatching.firstname }}</p>
          <p>{{ personMatching.lastname }}</p>
          <p>{{ personMatching.age }}</p>
          <p>{{ personMatching.job }}</p>
        </div>
        <p v-else>sorry</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 50px;
  display: flex;
  justify-content: space-around;
}
</style>
