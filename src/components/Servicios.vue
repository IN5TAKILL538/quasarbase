<template>
  <div class="contenidoservicios">
    <div class="contenido">
      <div class="contenido1">
        <h2>Planeacion de bodas</h2>
        <p>
          Disfruta de tu la boda perfecta en el oasis paraiso DOLCHE & GAVANA.
        </p>
        <p class="precio"><b>$1000 X 10 invitados</b></p>
      </div>
      <div class="contenido2">
        <div class="q-pa-md">
          <q-carousel swipeable animated v-model="slide" thumbnails infinite>
            <q-carousel-slide :name="1" img-src="../img/casados.jpg" />
            <q-carousel-slide :name="2" img-src="../img/vestidosboda.jpg" />
            <q-carousel-slide :name="3" img-src="../img/comidaboda.jpg" />
            <q-carousel-slide :name="4" img-src="../img/musicaboda.jpg" />
          </q-carousel>
        </div>
      </div>
    </div>

    <div class="contenido">
      <div class="contenido1">
        <h2>Tour Para recien Casados</h2>
        <p>Tour para 2 con todo incluido + suite Luna de miel.</p>
        <p class="precio"><b>$3000 </b></p>
      </div>
      <div class="contenido2">
        <div class="q-pa-md">
          <q-carousel swipeable animated v-model="slide2" thumbnails infinite>
            <q-carousel-slide :name="1" img-src="../img/cenayate.jpg" />
            <q-carousel-slide :name="2" img-src="../img/romanticos.jpg" />
            <q-carousel-slide :name="3" img-src="../img/spapresidencial.jpg" />
            <q-carousel-slide :name="4" img-src="../img/colage.jpg" />
          </q-carousel>
        </div>
      </div>
    </div>

    <div class="contenido">
      <div class="contenido1">
        <h2>Disfruta de comida Gourmet 24HRS</h2>
        <p>el servico a Habitacion es Gratis.</p>
        <p class="precio"><b>$30 - $1000.</b></p>
      </div>
      <div class="contenido2">
        <div class="q-pa-md">
          <q-carousel swipeable animated v-model="slide3" thumbnails infinite>
            <q-carousel-slide :name="1" img-src="../img/menu4.jpg" />
            <q-carousel-slide :name="2" img-src="../img/menu1.jpg" />
            <q-carousel-slide :name="3" img-src="../img/menu2.jpg" />
            <q-carousel-slide :name="4" img-src="../img/menu3.jpg" />
          </q-carousel>
        </div>
      </div>
    </div>

    <div class="contenido">
      <div class="contenido1">
        <h2>Alquiler de Yate / tripulacion incluida</h2>
        <p>Disfruta de cenas, fiestas o viajes en el mar.</p>
        <p class="precio"><b>4000$ X dia</b></p>
      </div>
      <div class="contenido2">
        <div class="q-pa-md">
          <q-carousel swipeable animated v-model="slide4" thumbnails infinite>
            <q-carousel-slide :name="1" img-src="../img/yatepresidencial.jpg" />
            <q-carousel-slide :name="2" img-src="../img/cenayate.jpg" />
            <q-carousel-slide :name="3" img-src="../img/yate3.jpg" />
            <q-carousel-slide :name="4" img-src="../img/yate4.jpg" />
          </q-carousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    return {
      slide: ref(1),
      slide2: ref(1),
      slide3: ref(1),
      slide4: ref(1),
    };
  },
};
</script>
<style scoped>
p {
  text-align: center;
}

.q-pa-md {
  width: 360px;
  height: 360px;
}

.contenedorservicios {
  display: flex;
  padding: 0%;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: url(../img/menu4.jpg);

}


.contenido {
  background-color: rgba(192, 231, 245, 0.5);
  padding: 0%;
  margin: 10px;
  display: flex;

  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.contenido1 {
  flex-direction: column;
  padding: 10px;
  display: flex;
  height: 400px;
  width: 400px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-family: cursive;
  text-align: center;
}

.contenido2 {
  text-align: center;
  flex-direction: column;
  padding: 10px;
  display: flex;
  height: 400px;
  width: 400px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-family: cursive;
}

.contenidoservicios {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-image: url(../img/menu4.jpg);
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0%;
  margin: 0%;
}

.imagen {
  display: block;
  width: 380px;
  height: 380px;
}
</style>