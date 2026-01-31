<script setup>
import { inject, ref } from 'vue'
// je recupere le router pour pouvoir m'enservir dans mon code car je ne peux pas mettre un RouterLink dans mon form, le redirection depend des infos transmises au clic donc la navigation doit se faire APRES la soumission des données
// Je fais ça grace à la methode .push() ---> router.push({name: 'nom de la route'}) Voir ligne 19
import { useRouter } from 'vue-router'
const router = useRouter()

const globalStore = inject('GlobalStore')

const newUser = ref({
  newFirstname: '',
  newLastname: '',
  newJob: '',
  newAge: null,
})

// Je combine plusieures actions a la soumission du formulaire
const submitForm = () => {
  globalStore.editProfile(newUser.value) // je declenche ma fonction dans mon provider et je lui envoie les nouvelles infos
  router.push({ name: 'profile' }) // PUIS je sui redirigée vers la page profile
}
</script>

<template>
  <main>
    <h1>Edit Your profile</h1>

    <form @submit.prevent="submitForm">
      <label>Firstname : <input type="text" id="fistname" v-model="newUser.newFirstname" /></label>

      <label>Lastname : <input type="text" id="lastname" v-model="newUser.newLastname" /></label>

      <label>Job : <input type="text" id="job" v-model="newUser.newJob" /></label>
      <label>Age : <input type="text" id="age" v-model="newUser.newAge" /></label>

      <button>Valid changes</button>
    </form>
  </main>
</template>

<style scoped>
main {
  padding: 30px;
}

h1 {
  font-size: 25px;
  text-align: center;
  margin-bottom: 30px;
}
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
}

form > label {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
</style>
