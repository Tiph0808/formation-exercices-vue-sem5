import './assets/main.css'

import { createApp, provide, ref } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

const user = ref({
  gender: 'female',
  firstname: 'Sophia',
  lastname: 'Rodriguez',
  age: 31,
  job: 'environmental scientist',
})

//creation de mon provider
app.provide('GlobalStore', {
  user,
  editProfile: (newUser) => {
    user.value.firstname = newUser.newFirstname
    user.value.lastname = newUser.newLastname
    user.value.job = newUser.newJob
    user.value.age = newUser.newAge

    console.log('user apres modif', user.value)
  },
})

app.mount('#app')
