<template>
  <div class="contenedor_inicio">
    <div class="contenidoh">
      <div class="contenidoh1">
        <p class="historia">
          El Hotel Resort Familiar "Paraíso Familiar" fue fundado por la familia
          Martínez con la visión de ser un refugio para que las familias se
          reconectaran. Comenzó con 20 cabañas y creció a 50, añadiendo un spa y
          un club infantil, además de organizar diversas actividades familiares.
          Con la llegada de la tecnología, implementaron reservas en línea y una
          app para facilitar la planificación de actividades. El resort adoptó
          prácticas sostenibles, incluyendo energía solar y un jardín orgánico.
          Hoy en día, "DOLCHE & GAVANA" es un destino amado por todo aquel que
          nos visita, comprometidos en crear recuerdos inolvidables.
        </p>
      </div>
      <div class="contenidoh2"><img src="../img/historia.jpg" alt="" class="imagen"></div>
    </div>

    <div class="contenido">
      <div class="contenido1">
        <p>
          Disfruta de un escape perfecto en nuestro oasis de tranquilidad.
          Relájate en nuestras instalaciones de spa y rejuvenece con
          tratamientos exclusivos.
        </p>
      </div>
      <div class="contenido2">
        <img src="../img/logo.jpg" alt="" class="imagen" />
      </div>
    </div>

    <div class="contenido">
      <div class="contenido2">
        <img src="../img/oasis.jpg" alt="" class="imagen" />
      </div>
      <div class="contenido1">
        <p>
          Explora una variedad de actividades emocionantes, desde deportes
          acuáticos hasta excursiones en la naturaleza. ¡La aventura te espera!
        </p>
      </div>
    </div>

    <div class="contenido">
      <div class="contenido1">
        <p>
          Los niños no seran un problema, contamos con personal especializado
          para que disfruten de nuestras instalaciones y sus hijos no sean un
          problema.
        </p>
      </div>
      <div class="contenido2">
        <img src="../img/piñata.jpg" alt="" class="imagen" />
      </div>
    </div>

    <div class="contenido">
      <div class="contenido2">
        <img src="../img/piñata2.jpg" alt="" class="imagen" />
      </div>
      <div class="contenido1">
        <p>
          O puedes formar parte de sus propias fiestas en familia, con nuestro
          equipo organizador de eventos para tu unica preocupacion disfrutar.
        </p>
      </div>
    </div>

    <div class="contenido">
      <div class="contenido1">
        <p>
          Si ya solo son tu y tu pareja puedes disfrutar de una experiencia
          unica disfrutando de nuestros servicios personalizados.
        </p>
      </div>
      <div class="contenido2">
        <img src="../img/colage.jpg" alt="" class="imagen" />
      </div>
    </div>

    <div class="contenido">
      <div class="contenido2">
        <img src="../img/casados.jpg" alt="" class="imagen" />
      </div>
      <div class="contenido1">
        <p>
          Disfruta de nuestros planes unicos para celebrar tu nueva vida junto a
          esa persona unica y especial que estara por el resto de tu vida a tu
          lado.
        </p>
      </div>
    </div>

    <div class="contenido">
      <div class="contenido1">
        <p>
          Tambien contamos con instalaciones para que vallas solo a salir de la
          rutina, podrias encontrar el amor, arriesgate a encontrar a tu alme
          gemela.
        </p>
      </div>
      <div class="contenido2">
        <img src="../img/solteros.jpg" alt="" class="imagen" />
      </div>
    </div>
  </div>
</template>

<style scoped>


p {
  text-align: center;
}
.historia {
  font-family: cursive;
  font-size: 20px;
  font-weight: bold;
}
.contenedorinicio {
  display: flex;
}

.contenido {
  padding: 0%;

  display: flex;

  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: rgba(52, 198, 247, 0.5);
  border-radius: 10px;
  margin: 10px;
}
.contenidoh {
  padding: 0%;

  display: flex;

  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, rgba(253, 254, 254, 0.5), rgba(5, 5, 5, 0.5));
  
  border-radius: 10px;
  margin: 10px;
}
.contenidoh1 {
  padding: 10px;
  display: flex;
  height: 600px;
  width: 400px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-family: cursive;
  
}
.contenidoh2 {
  padding: 10px;
  display: flex;
  height: 600px;
  width: 400px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-family: cursive;
}

.contenido1 {
  padding: 10px;
  display: flex;
  height: 400px;
  width: 400px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-family: cursive;
}

.contenido2 {
  padding: 10px;
  display: flex;
  height: 400px;
  width: 400px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-family: cursive;
}

.contenedor_inicio {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-image: url(../img/bienvenida.jpg);
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