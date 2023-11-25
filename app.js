

 import {guardarDatos} from "./firebase.js"
 const crudForm = document.getElementById('crud-form')

 crudForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const nombre = crudForm ['nombre']
    const carrera = crudForm ['carrera']
    const nivel = crudForm ['nivel']
    const participantes =crudForm ['participantes']

    guardarDatos(nombre.value, carrera.value, nivel.value, participantes.value)

    
 })