<script setup>
import { ref } from 'vue'

//je cree des valeurs reactives pour chaque infos
const firstname = ref('')
const lastname = ref('')
const email = ref('')
const legalStatus = ref('')

//je cree une ref avec un tab vide qui va recevoir des elements : les objets user que je cree a la soumission
const waitingList = ref([])

// je cree une fonction qui reinitialise mes champs a des strings vides
const resetForm = () => {
  firstname.value = ''
  lastname.value = ''
  email.value = ''
  legalStatus.value = ''
}

// je cree une ref pour le message a afficher si tous les champs ne sont pas remplis
const errorMessage = ref('')

const handleSubmit = () => {
  if (firstname.value && lastname.value && email.value && legalStatus.value) {
    // au clic je cree un objet avec seulement ces infos
    const user = {
      firstname: firstname.value,
      lastname: lastname.value,
      legalStatus: legalStatus.value,
    }
    //J'ajoute cet objet user a mon tableau
    waitingList.value.push(user)
    // console.log(waitingList.value)

    resetForm() // jappelle la fonction qui vide les champs
  } else {
    errorMessage.value = 'Veuillez remplir tous les champs'
  }
}
</script>

<template>
  <main>
    <div>
      <form @submit.prevent="handleSubmit">
        <label for="firstname">
          Firstname :
          <input type="text" id="firstname" v-model="firstname" @input="errorMessage = ''"
        /></label>
        <label for="lastname">
          Lastname : <input type="text" id="lastname" v-model="lastname" @input="errorMessage = ''"
        /></label>
        <label for="email">
          Email : <input type="text" id="email" v-model="email" @input="errorMessage = ''"
        /></label>
        <div>
          <label for="adult">
            <input
              type="radio"
              name="legal-status"
              v-model="legalStatus"
              @input="errorMessage = ''"
              id="adult"
              value="adult"
            />Adult</label
          >
          <label for="minor">
            <input
              type="radio"
              name="legal-status"
              v-model="legalStatus"
              @input="errorMessage = ''"
              id="minor"
              value="minor"
            />Minor</label
          >
        </div>
        <button>Add to Waiting List</button>
        <p v-if="errorMessage">{{ errorMessage }}</p>
      </form>
    </div>

    <div>
      <h1>Waiting List</h1>
      <div v-if="waitingList.length > 0">
        <ul v-for="(user, index) in waitingList" :key="index">
          <li>{{ user.firstname }}</li>
          <li>{{ user.lastname }}</li>
          <li>{{ user.legalStatus }}</li>
        </ul>
      </div>
      <p v-else>Nobody on the list yet !</p>
    </div>
  </main>
</template>

<style scoped>
main {
  margin: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
form > label {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
div {
  display: flex;
  flex-direction: column;
}
</style>
