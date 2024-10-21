<template>
    <div class="contenidoservicios">
        <div class="contenido">
            <div class="contenido1">
                <h2>Planeacion de bodas</h2>
                <p>Disfruta de tu la boda perfecta en el oasis paraiso DOLCHE & GAVANA.</p>
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
                <h2>Planeacion de bodas</h2>
                <p>Disfruta de tu la boda perfecta en el oasis paraiso DOLCHE & GAVANA.</p>
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
    </div>
</template>
<script>
import { ref } from 'vue'

export default {
    setup() {
        return {
            slide: ref(1)
        }
    }
}
</script>
<style>
p {
    text-align: center;
}

.q-pa-md {
    width: 360px;
    height: 360px;
}

.contenedorinicio {
    display: flex;
}

.contenido {
    padding: 0%;
    margin: 0%;
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

.contenedoservicios {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    padding: 0%;
    margin: 0%;
}

.imagen {
    display: block;
    width: 380px;
    height: 380px;

}
</style>