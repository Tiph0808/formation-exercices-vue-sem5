<script setup>
import { inject } from 'vue'
import { RouterLink } from 'vue-router'

const globalStore = inject('GlobalStore')
</script>
<template>
  <main>
    <h1>Your Profile</h1>
    <div>
      <p>Firstname : {{ globalStore.user.value.firstname }}</p>
      <p>Lastname : {{ globalStore.user.value.lastname }}</p>
      <p>Age : {{ globalStore.user.value.age }}</p>
      <p>Job : {{ globalStore.user.value.job }}</p>
    </div>

    <RouterLink :to="{ name: 'edit' }">
      <button>Edit profile</button>
    </RouterLink>
  </main>
</template>

<style scoped>
main {
  padding: 30px;
}
h1 {
  font-size: 25px;
  margin-bottom: 30px;
}

div {
  margin-bottom: 30px;
}
</style>
