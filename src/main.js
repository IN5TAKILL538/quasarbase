import { createApp } from 'vue'

import App from './App.vue'
import { router } from './routes/Routes.js'
import { Quasar } from 'quasar'

import '@quasar/extras/material-icons/material-icons.css'

import 'quasar/src/css/index.sass'






const myapp = createApp(App)

myapp.use(Quasar, {
  plugins: {}, 
})
myapp.use(router)


myapp.mount('#app')
const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).mount('#app')