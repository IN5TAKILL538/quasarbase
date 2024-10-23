<template>
  <div class="contenedorHabitaciones">
    <div class="q-pa-md">
      <h3 class="tipoHabitacion">SUIT PRESIDENCIAL</h3>
      <q-carousel
        v-model="slide1"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="300px"
        width="400px"
        class="bg-primary text-white shadow-1 rounded-borders"
        id="suitpresidencial"
      >
        <template v-slot:navigation-icon="{ active, btnProps, onClick }">
          <q-btn
            v-if="active"
            size="lg"
            icon="home"
            color="yellow"
            flat
            round
            dense
            @click="onClick"
          />
          <q-btn
            v-else
            size="sm"
            :icon="btnProps.icon"
            color="white"
            flat
            round
            dense
            @click="onClick"
          />
        </template>

        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <img src="../img/presidencial1.jpg" alt="" class="imghabitaciones" />
          <button class="habitacionmount">$1200</button>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <img src="../img/presidencial2.jpg" alt="" class="imghabitaciones" />
          <button class="habitacionmount">$1200</button>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <img src="../img/presidencial3.jpg" alt="" class="imghabitaciones" />
          <button class="habitacionmount">$1500</button>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <img src="../img/presidencial4.jpg" alt="" class="imghabitaciones" />
          <button class="habitacionmount">$1600</button>
        </q-carousel-slide>
      </q-carousel>
      <div class="divinfo"><q-btn
        class="btninfo"
        label="INFORMACION"
        color="primary"
        @click="card = true"
      /></div>
    </div>
    <div class="q-pa-md">
      <h3 class="tipoHabitacion">LUNA DE MIEL</h3>
      <q-carousel
        v-model="slide2"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="300px"
        width="400px"
        class="bg-primary text-white shadow-1 rounded-borders"
      >
        <template v-slot:navigation-icon="{ active, btnProps, onClick }">
          <q-btn
            v-if="active"
            size="lg"
            icon="home"
            color="yellow"
            flat
            round
            dense
            @click="onClick"
          />
          <q-btn
            v-else
            size="sm"
            :icon="btnProps.icon"
            color="white"
            flat
            round
            dense
            @click="onClick"
          />
        </template>

        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <img src="../img/lunademiel1.jpg" alt="" class="imghabitaciones" />
          <button class="habitacionmount">$1000</button>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <img src="../img/lunademiel2.jpg" alt="" class="imghabitaciones" />
          <button class="habitacionmount">$1200</button>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <img src="../img/lunademiel3.jpg" alt="" class="imghabitaciones" />
          <button class="habitacionmount">$1400</button>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <img src="../img/lunademiel4.jpg" alt="" class="imghabitaciones" />
          <button class="habitacionmount">$1000</button>
        </q-carousel-slide>
      </q-carousel>
      <div class="divinfo"><q-btn
        class="btninfo"
        label="INFORMACION"
        color="primary"
        @click="card = true"
      /></div>
    </div>
    <div class="q-pa-md">
      <h3 class="tipoHabitacion">CABAÑA FAMILIAR</h3>
      <q-carousel
        v-model="slide3"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="300px"
        width="400px"
        class="bg-primary text-white shadow-1 rounded-borders"
      >
        <template v-slot:navigation-icon="{ active, btnProps, onClick }">
          <q-btn
            v-if="active"
            size="lg"
            icon="home"
            color="yellow"
            flat
            round
            dense
            @click="onClick"
          />
          <q-btn
            v-else
            size="sm"
            :icon="btnProps.icon"
            color="white"
            flat
            round
            dense
            @click="onClick"
          />
        </template>

        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <img src="../img/familiar1.jpg" alt="" class="imghabitaciones" />
          <button class="habitacionmount">$2500</button>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <img src="../img/familiar2.jpg" alt="" class="imghabitaciones" />
          <button class="habitacionmount">$1600</button>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <img src="../img/familiar3.jpg" alt="" class="imghabitaciones" />
          <button class="habitacionmount">$2200</button>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <img src="../img/familiar4.jpg" alt="" class="imghabitaciones" />
          <button class="habitacionmount">$1800</button>
        </q-carousel-slide>
      </q-carousel>
      <div class="divinfo"><q-btn
        class="btninfo"
        label="INFORMACION"
        color="primary"
        @click="card = true"
      /></div>
    </div>
    <div class="q-pa-md">
      <h3 class="tipoHabitacion">SUIT SOLTEROS</h3>
      <q-carousel
        v-model="slide4"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="300px"
        width="400px"
        class="bg-primary text-white shadow-1 rounded-borders"
      >
        <template v-slot:navigation-icon="{ active, btnProps, onClick }">
          <q-btn
            v-if="active"
            size="lg"
            icon="home"
            color="yellow"
            flat
            round
            dense
            @click="onClick"
          />
          <q-btn
            v-else
            size="sm"
            :icon="btnProps.icon"
            color="white"
            flat
            round
            dense
            @click="onClick"
          />
        </template>

        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <img src="../img/solteros1.jpg" alt="" class="imghabitaciones" />
          <button class="habitacionmount">$1200</button>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <img src="../img/solteros2.jpg" alt="" class="imghabitaciones" />
          <button class="habitacionmount">$1000</button>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <img src="../img/solteros3.jpg" alt="" class="imghabitaciones" />
          <button class="habitacionmount">$1200</button>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <img src="../img/solteros4.jpg" alt="" class="imghabitaciones" />
          <button class="habitacionmount">$1100</button>
        </q-carousel-slide>
      </q-carousel>
      <div class="divinfo"><q-btn
        class="btninfo"
        label="INFORMACION"
        color="primary"
        @click="card = true"
      /></div>
    </div>
    <q-dialog v-model="card">
      <q-card class="my-card">
        <div class="q-pa-md">
          <q-carousel swipeable animated v-model="slide" thumbnails infinite>
            <q-carousel-slide
              :name="1"
              img-src="../img/bañerapresidencial.jpg"
            />
            <q-carousel-slide :name="2" img-src="../img/spapresidencial.jpg" />
            <q-carousel-slide :name="3" img-src="../img/yatepresidencial.jpg" />
            <q-carousel-slide
              :name="4"
              img-src="../img/piscinapresidencial.jpg"
            />
          </q-carousel>
        </div>

        <q-card-section>
                      <router-link to="/contacto">
                <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%)"
            heigth="600px"
            width="400px"
          />
              </router-link>

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">SUIT PRESIDENCIAL</div>
            <div
              class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
            >
              <router-link to="/contacto">
                <q-icon name="place" style="cursor: pointer" />
              </router-link>
            </div>
          </div>

          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">Beneficios</div>
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
          <q-carousel swipeable animated v-model="slide" thumbnails infinite>
            <q-carousel-slide :name="1" img-src="../img/tourromantico.jpg" />
            <q-carousel-slide :name="2" img-src="../img/jacuzzildm.jpg" />
            <q-carousel-slide
              :name="3"
              img-src="../img/bañerapresidencial.jpg"
            />
            <q-carousel-slide :name="4" img-src="../img/acuarionocturno.jpg" />
          </q-carousel>
        </div>

        <q-card-section>
                       <router-link to="/contacto">
                <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%)"
            heigth="600px"
            width="400px"
          />
              </router-link>

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">SUIT LUNA DE MIEL</div>
            <div
              class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
            >
              <router-link to="/contacto">
                <q-icon name="place" style="cursor: pointer" />
              </router-link>
            </div>
          </div>

          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">Beneficios</div>
          <div class="text-caption text-grey">
            <b>Acceso a:</b> tour romantico, Jacuzzi, Spa en pareja y acuario
            nocturno.
          </div>
        </q-card-section>

        <q-separator />
      </q-card>
    </q-dialog>

    <q-dialog v-model="card3">
      <q-card class="my-card">
        <div class="q-pa-md">
          <q-carousel swipeable animated v-model="slide" thumbnails infinite>
            <q-carousel-slide :name="1" img-src="../img/lagofamiliar.jpg" />
            <q-carousel-slide :name="2" img-src="../img/bañostermales.jpg" />
            <q-carousel-slide :name="3" img-src="../img/niñera.jpg" />
            <q-carousel-slide :name="4" img-src="../img/animales.jpg" />
          </q-carousel>
        </div>

        <q-card-section>
                       <router-link to="/contacto">
                <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%)"
            heigth="600px"
            width="400px"
          />
              </router-link>

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">CABAÑAS FAMILIARES</div>
            <div
              class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
            >
              <router-link to="/contacto">
                <q-icon name="place" style="cursor: pointer" />
              </router-link>
            </div>
          </div>

          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">Beneficios</div>
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
          <q-carousel swipeable animated v-model="slide" thumbnails infinite>
            <q-carousel-slide :name="1" img-src="../img/barralibre.jpg" />
            <q-carousel-slide :name="2" img-src="../img/fiestapiscina.jpg" />
            <q-carousel-slide :name="3" img-src="../img/fiestayate.jpg" />
            <q-carousel-slide
              :name="4"
              img-src="../img/bañerapresidencial.jpg"
            />
          </q-carousel>
        </div>

        <q-card-section>
                       <router-link to="/contacto">
                <q-btn
            fab
            color="primary"
            icon="place"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%)"
            heigth="600px"
            width="400px"
          />
              </router-link>

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">Servicio para solteros</div>
            <div
              class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
            >
              <q-icon name="place" />
            </div>
          </div>

          <q-rating v-model="stars" :max="5" size="32px" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">Beneficios</div>
          <div class="text-caption text-grey">
            <b>Acceso a:</b> barra libre, piscina, baños de lujo y fiesta de
            yate.
          </div>
        </q-card-section>

        <q-separator />
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from "vue";

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
      lorem:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!",

      stars: ref(3),

      slideVol: ref(39),
      slideAlarm: ref(56),

      slide1: ref("style"),
      slide2: ref("style"),
      slide3: ref("style"),
      slide4: ref("style"),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
    };
  },
};
</script>
<style>
.habitacionmount {
    background-color: #007BFF; /* Color de fondo */
    color: white; /* Color del texto */
    padding: 10px 20px; /* Espaciado interno */
    
    border-radius: 5px; /* Bordes redondeados */
    cursor: pointer; /* Cambiar cursor al pasar el mouse */
    transition: background-color 0.3s, transform 0.1s; /* Transiciones suaves */
    margin: 10px;
}

/* Efecto al pasar el mouse */
.habitacionmount:hover {
    background-color: #0056b3; /* Color de fondo al pasar el mouse */
}

/* Efecto al hacer clic */
.habitacionmount:active {
    transform: scale(0.8); /* Efecto de reducción */
}
.contenedorHabitaciones {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-image: url(../img/fachada.jpg);
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  padding: 0%;
  margin: 0%;

}
.tipoHabitacion {
  display: flex;
  width: 400px;
  height: 20px;
  align-items: center;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
   color: rgb(129, 207, 11); /* Color oscuro */
    text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5); /* Sombra clara */
}
.imghabitaciones {
  opacity: 1;
  display: block;
  width: 300px;
  height: 200px;
  padding-top: 10px;
}

.q-pa-md {
  opacity: 0.8;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  width: 400px;
  height: 500px;
  margin: 5px;
}
.btninfo {
  display: block;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 820px) {
  
}
.q-btn{
  display: block;
  width: 200px;
  height: 20px;
  margin: 5px;
}
.divinfo{
display: flex;
justify-content: center;
align-items: center;
text-align: center;
}

</style>
