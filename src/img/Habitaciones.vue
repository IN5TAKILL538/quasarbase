<template>
  <div class="contenedorHabitaciones">
    <div class="q-pa-md">
      <h3 class="tipoHabitacion">SUIT PRESIDENCIAL</h3>
      <q-carousel v-model="slide1" transition-prev="scale" transition-next="scale" swipeable animated
        control-color="white" navigation padding arrows height="300px" width="400px"
        class="bg-primary text-white shadow-1 rounded-borders" id="suitpresidencial">
        <template v-slot:navigation-icon="{ active, btnProps, onClick }">
          <q-btn v-if="active" size="lg" icon="home" color="yellow" flat round dense @click="onClick" />
          <q-btn v-else size="sm" :icon="btnProps.icon" color="white" flat round dense @click="onClick" />
        </template>

        <q-carousel-slide name="style" class="column no-wrap flex-center">
          
          <img src="../img/presidencial1.jpg" alt="" class="imghabitaciones">

        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">

          <img src="../img/presidencial2.jpg" alt="" class="imghabitaciones">

        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">

          <img src="../img/presidencial3.jpg" alt="" class="imghabitaciones">

        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">

          <img src="../img/presidencial4.jpg" alt="" class="imghabitaciones">

        </q-carousel-slide>
      </q-carousel>
    </div>
    <div class="q-pa-md">
      <h3 class="tipoHabitacion">LUNA DE MIEL</h3>
      <q-carousel v-model="slide2" transition-prev="scale" transition-next="scale" swipeable animated
        control-color="white" navigation padding arrows height="300px" width="400px"
        class="bg-primary text-white shadow-1 rounded-borders">
        <template v-slot:navigation-icon="{ active, btnProps, onClick }">
          <q-btn v-if="active" size="lg" icon="home" color="yellow" flat round dense @click="onClick" />
          <q-btn v-else size="sm" :icon="btnProps.icon" color="white" flat round dense @click="onClick" />
        </template>

        <q-carousel-slide name="style" class="column no-wrap flex-center">

          <img src="../img/lunademiel1.jpg" alt="" class="imghabitaciones">

        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">

          <img src="../img/lunademiel2.jpg" alt="" class="imghabitaciones">

        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">

          <img src="../img/lunademiel3.jpg" alt="" class="imghabitaciones">

        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">

          <img src="../img/lunademiel4.jpg" alt="" class="imghabitaciones">

        </q-carousel-slide>
      </q-carousel>
    </div>
    <div class="q-pa-md">
      <h3 class="tipoHabitacion">CABAÑA FAMILIAR</h3>
      <q-carousel v-model="slide3" transition-prev="scale" transition-next="scale" swipeable animated
        control-color="white" navigation padding arrows height="300px" width="400px"
        class="bg-primary text-white shadow-1 rounded-borders">
        <template v-slot:navigation-icon="{ active, btnProps, onClick }">
          <q-btn v-if="active" size="lg" icon="home" color="yellow" flat round dense @click="onClick" />
          <q-btn v-else size="sm" :icon="btnProps.icon" color="white" flat round dense @click="onClick" />
        </template>

        <q-carousel-slide name="style" class="column no-wrap flex-center">

          <img src="../img/familiar1.jpg" alt="" class="imghabitaciones">

        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">

          <img src="../img/familiar2.jpg" alt="" class="imghabitaciones">

        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">

          <img src="../img/familiar3.jpg" alt="" class="imghabitaciones">

        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">

          <img src="../img/familiar4.jpg" alt="" class="imghabitaciones">

        </q-carousel-slide>
      </q-carousel>
    </div>
    <div class="q-pa-md">
      <h3 class="tipoHabitacion">SUIT SOLTEROS</h3>
      <q-carousel v-model="slide4" transition-prev="scale" transition-next="scale" swipeable animated
        control-color="white" navigation padding arrows height="300px" width="400px"
        class="bg-primary text-white shadow-1 rounded-borders">
        <template v-slot:navigation-icon="{ active, btnProps, onClick }">
          <q-btn v-if="active" size="lg" icon="home" color="yellow" flat round dense @click="onClick" />
          <q-btn v-else size="sm" :icon="btnProps.icon" color="white" flat round dense @click="onClick" />
        </template>

        <q-carousel-slide name="style" class="column no-wrap flex-center">

          <img src="../img/solteros1.jpg" alt="" class="imghabitaciones">

        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">

          <img src="../img/solteros2.jpg" alt="" class="imghabitaciones">

        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">

          <img src="../img/solteros3.jpg" alt="" class="imghabitaciones">

        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">

          <img src="../img/solteros4.jpg" alt="" class="imghabitaciones">

        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      slide1: ref('style'),
      slide2: ref('style'), 
      slide3: ref('style'), 
      slide4: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
    }
  }
}
</script>
<style scoped>
.contenedorHabitaciones{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-image: url(./img/fachada.jpg);
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  padding: 0%;
  margin: 0%;
  
}
.tipoHabitacion{
  display: flex;
  width: 400px;
  height: 50px;
  align-items: center;
  justify-content: center;
  text-align: center;

}
.imghabitaciones{
  display: block;
  width: 300px;
  height: 200px;
}
.q-carousel--arrows-horizontal.q-carousel--with-padding .q-carousel__slide{
  display: block;
  background-color: rgba(0, 0, 0, 0.2); /* Negro semitransparente */
}
.bg-primary{
  display: block;
  background-color: rgba(0, 0, 0, 0.2);
}
.q-pa-md{
  opacity: 0.9;
}

</style>
