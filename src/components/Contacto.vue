<template>
  <div class="contenedor_contactos">
    <div class="contenedor_mapa">
      <h2>Donde nos encontramos</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25443.448611382533!2d-8.61171795309071!3d37.14244817738387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1b2f15e2fe62b7%3A0xa107f15c0517a5c!2sAlvor%2C%20Portugal!5e0!3m2!1ses!2sco!4v1729521470492!5m2!1ses!2sco"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        class="mapa"
      ></iframe>
    </div>
    
      <div class="cards">
        <h2>Contáctanos</h2>
        <form>
          <div class="form-group">
            <label for="name">Nombre:</label>
            <input id="name" name="name" required="" type="text" />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input id="email" name="email" required="" type="email" />
          </div>
          <div class="form-group">
            <label for="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              required=""
              rows="4"
            ></textarea>
          </div>
          <div class="form-group">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
      <div class="cardss">
        <h2>Síguenos</h2>
        
        <img src="../img/redsocialbuena.png" alt="" class="imgredsocial">
        <h3 class="txtredsocial">@OASI_DOLCHE_&_GAVANA</h3>
        <div class="car"></div>
      </div>
   

    <button class="pin-button" style="top: 10px; left: 10px"></button>
    <button class="pin-button" style="top: 10px; right: 10px"></button>
    <button class="pin-button" style="bottom: 10px; left: 10px"></button>

    <button class="pin-button" style="bottom: 20%; right: 20%"></button>
  </div>
</template>

<script>
</script>
<style scoped>
.txtredsocial{
    font-family: cursive;
    font-size: 25px;
}
.imgredsocial{
    width: 200px;
    height: 200px;
    margin: 0%;
    padding: 0%;
}
contenedor_contactos {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0%;
  padding: 0%;
}
.contenedor_mapa {
  display: flex;
  
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  flex-wrap: wrap;
}
.mapa {
  display: block;
  
  justify-content: center;
  align-items: center;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  position: relative;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.cards {
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  border: 2px solid #d4af37;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
}
.cardss {
  background-color: white;
  border-radius: 15px;
  padding: 20px;
  height: 200px;
  text-align: center;
  border: 2px solid #d4af37;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.car {
  background-color: white;
  background-image: url("https://img.pikbest.com/wp/202405/hotel-entrance-luxury-room-in-stunning-3d-rendering_9791225.jpg!w700wp");
  background-size: cover;
  border-radius: 15px;
  position: relative;

  width: 100%;

  top: 100px;
  height: 200px;
  text-align: center;
  border: 2px solid #d4af37;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
.cards:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.cards img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
}
.cards h2 {
  margin-top: 15px;
  font-size: 1.5em;
}
.map {
  width: 100%;
  height: 200px;
  background-color: #e0d4b3;
  border-radius: 10px;
}
.form-group {
  margin-bottom: 15px;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
  color: #d4af37;
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #d4af37;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #f2e8d5;
  color: #3b2f2f;
}
.form-group button {
  background-color: #d4af37;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}
.form-group button:hover {
  background-color: #b88a4a;
}
.cards p {
  margin: 2px 0;
}
.pin-button {
  background-color: #d4af37;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: absolute;
  cursor: pointer;
}
.pin-button::after {
  content: "";
  width: 15px;
  height: 15px;
  background-color: #b88a4a;
  border-radius: 50%;
  position: absolute;
  top: 7.5px;
  left: 7.5px;
}
.pin-button:hover {
  background-color: #b88a4a;
}
.social-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-size: 2em;
  color: #d4af37;
}
.social-icons a {
  color: #d4af37;
  transition: color 0.3s ease;
}
.social-icons a:hover {
  color: #b88a4a;
}
@media screen and (max-width: 968px) {
  .contenedor_mapa{
    width: 600px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .mapa{
    width: 600px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .grid {
    grid-template-columns: 1fr;
  }
  .cards {
    justify-content: center;
    align-items: center;

  }
  .pin-button {
    width: 20px;
    height: 20px;
    top: 10px;
    left: 10px;
  }
  .pin-button::after {
    width: 10px;
    height: 10px;
    top: 5px;
    left: 5px;
  }
  .social-icons {
    font-size: 1.5em;
  }
  body {
    background-color: #f2e8d5;
    color: #3b2f2f;
    font-family: "Times New Roman", serif;
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }
}
@media screen and (max-width: 600px) {
  .contenedor_mapa{
    width: 400px;
    justify-content: center;
    align-items: center;
    text-align: center;
    }
    .mapa{
    width: 400px;
    justify-content: center;
    align-items: center;
    text-align: center;
    }
  .cards {

    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .pin-button {
    width: 15px;
    height: 15px;
    top: 5px;
    left: 5px;
  }
  .pin-button::after {
    width: 7.5px;
    height: 7.5px;
    top: 2.5px;
    left: 2.5px;
  }
  .social-icons {
    font-size: 1em;
  }
  body {
    background-color: #f2e8d5;
    color: #3b2f2f;
    font-family: "Times New Roman", serif;
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }
  .container {
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    background-color: #e0d4b3;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
}
@media screen and (max-width: 1200px) {
  .cards {
    padding: 10px;
  }
  .pin-button {
    width: 15px;
    height: 15px;
    top: 5px;
    left: 5px;
  }
  .pin-button::after {
    width: 7.5px;
    height: 7.5px;
    top: 2.5px;
    left: 2.5px;
  }
  .social-icons {
    font-size: 1em;
  }
  body {
    background-color: #f2e8d5;
    color: #3b2f2f;
    font-family: "Times New Roman", serif;
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
    padding: 0;
  }
}
</style>