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
      <q-btn class="btninfo" label="INFORMACION" color="primary" @click="card = true" />
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
      <q-btn class="btninfo" label="INFORMACION" color="primary" @click="card2 = true" />
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
      <q-btn class="btninfo" label="INFORMACION" color="primary" @click="card3 = true" />
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
      <q-btn class="btninfo" label="INFORMACION" color="primary" @click="card4 = true" />
    </div>
    <q-dialog v-model="card">
      <q-card class="my-card">
        <div class="q-pa-md">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" img-src="../img/bañerapresidencial.jpg" />
      <q-carousel-slide :name="2" img-src="../img/spapresidencial.jpg" />
      <q-carousel-slide :name="3" img-src="../img/yatepresidencial.jpg" />
      <q-carousel-slide :name="4" img-src="../img/piscinapresidencial.jpg" />
    </q-carousel>
  </div>

        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
            heigth="600px"
            width = "400px"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              SUIT PRESIDENCIAL
            </div>
            <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
              <q-icon name="place"/>
              
            </div>
          </div>

          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            Beneficios
          </div>
          <div class="text-caption text-grey">
            <b>Acceso a:</b> piscina personal, baños de lujo y tour spa.
          </div>
        </q-card-section>

        <q-separator />

       
      </q-card>
    </q-dialog>


    <q-dialog v-model="card2">
      <q-card class="my-card">
        <div class="q-pa-md">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" img-src="../img/tourromantico.jpg" />
      <q-carousel-slide :name="2" img-src="../img/jacuzzildm.jpg" />
      <q-carousel-slide :name="3" img-src="../img/bañerapresidencial.jpg" />
      <q-carousel-slide :name="4" img-src="../img/acuarionocturno.jpg" />
    </q-carousel>
  </div>

        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
            heigth="600px"
            width = "400px"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              SUIT LUNA DE MIEL
            </div>
            <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
              <q-icon name="place"/>
              
            </div>
          </div>

          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            Beneficios
          </div>
          <div class="text-caption text-grey">
            <b>Acceso a:</b> tour romantico, Jacuzzi, Spa en pareja y acuario nocturno.
          </div>
        </q-card-section>

        <q-separator />

       
      </q-card>
    </q-dialog>



    <q-dialog v-model="card3">
      <q-card class="my-card">
        <div class="q-pa-md">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" img-src="../img/lagofamiliar.jpg" />
      <q-carousel-slide :name="2" img-src="../img/bañostermales.jpg" />
      <q-carousel-slide :name="3" img-src="../img/niñera.jpg" />
      <q-carousel-slide :name="4" img-src="../img/animales.jpg" />
    </q-carousel>
  </div>

        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
            heigth="600px"
            width = "400px"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              CABAÑAS FAMILIARES
            </div>
            <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
              <q-icon name="place"/>
              
            </div>
          </div>

          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            Beneficios
          </div>
          <div class="text-caption text-grey">
            <b>Acceso a:</b> Lago recreacional, baños termales, granja y niñera.
          </div>
        </q-card-section>

        <q-separator />

       
      </q-card>
    </q-dialog>



    <q-dialog v-model="card4">
      <q-card class="my-card">
        <div class="q-pa-md">
    <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
    >
      <q-carousel-slide :name="1" img-src="../img/bañerapresidencial.jpg" />
      <q-carousel-slide :name="2" img-src="../img/spapresidencial.jpg" />
      <q-carousel-slide :name="3" img-src="../img/yatepresidencial.jpg" />
      <q-carousel-slide :name="4" img-src="../img/piscinapresidencial.jpg" />
    </q-carousel>
  </div>

        <q-card-section>
          <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
            heigth="600px"
            width = "400px"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">
              Servicio para solteros
            </div>
            <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
              <q-icon name="place"/>
              
            </div>
          </div>

          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            Beneficios
          </div>
          <div class="text-caption text-grey">
            <b>Acceso a:</b> barra libre, piscina, baños de lujo y fiesta de yate.
          </div>
        </q-card-section>

        <q-separator />

       
      </q-card>
    </q-dialog>



  
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    return {
      carousel: ref(false),
      card: ref(false),
      card2: ref(false),
      card3: ref(false),
      card4: ref(false),
      
      sliders: ref(false),

      slide: ref(1),
      lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!',

      stars: ref(3),

      slideVol: ref(39),
      slideAlarm: ref(56),
      
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
  opacity: 1;
  display: block;
  width: 300px;
  height: 200px;
}

.q-pa-md{
 
  opacity: 0.9;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;

}
.btninfo{
  display: block;
  justify-content: center;
  align-items: center;
  

}

</style>
