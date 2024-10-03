import {createRouter, createWebHashHistory} from "vue-router"

import Actividades from "../components/Actividades.vue"
import Contacto from "../components/Contacto.vue"
import Habitaciones from "../components/Habitaciones.vue"
import Inicio from "../components/Inicio.vue"
import Servicios from "..coponents/Servicios.vue"


const routes = [
    {path:"/actividades", component: Actividades},
    {path:"/contacto", component: Contacto},
    {path:"/habitaciones", component: Habitaciones},
    {path:"/servicios", component: Servicios},
    {path:"/", component: Inicio}
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})