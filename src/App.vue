<template>
<div>
  <q-layout view="lHr lpr fFf">
    <q-header reveal bordered class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title class="titulo">
          <q-avatar>
            <img src="./img/logo.jpg" />
          </q-avatar>
          DOLCHE & GAVANA RESORT
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab to="/" label="INICIO" />

        <q-route-tab to="/habitaciones" label="HABITACIONES" />
        <q-route-tab to="/actividades" label="ACTIVIDADES" />
        <q-route-tab to="/servicios" label="SERVICIOS" />

        <q-route-tab to="/contacto" label="CONTACTO" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer reveal bordered class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          
          <div class="logitobajo"> 
            <q-avatar>
            <img src="./img/logo.jpg" class="logo"/>
          </q-avatar></div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
<style scoped>
.titulo{

  text-align: center;
}
.logitobajo{
  display: flex;
  align-items: center;
  justify-content: center;
  
}
@media screen and (max-width: 600px) {
  .q-route-tab{
  
  font-size: 20px;
}

}

</style>
