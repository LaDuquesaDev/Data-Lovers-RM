import { filterPersonajes } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';


let dataResults = data.results
let contenedorPersonajes = document.getElementById("contenedorPersonajes");

function listarPersonajes() {
    let grupoPersonajes = "";
    dataResults.forEach(element => {
        let personaje = `
            <div class="cards">
                <section class="fotoPersonaje">
                    <img src="${element.image}"/>
                </section>
                <section class="datos">
                    <h3>${element.name}</h3>
                    <h5>${element.status}</h5>
                    <h5>Última vez visto en: ${element.origin.name}</h5>
                    <h5>Lugar de origen: ${element.location.name}</h5>
                </section>
            </div>   
        `
        grupoPersonajes = grupoPersonajes + personaje
    });
    contenedorPersonajes.innerHTML = grupoPersonajes
}
listarPersonajes(dataResults);


//Elementos
// let characters = document.getElementById("btnPersonajes")
// document.getElementsByClassName("pantallaPersonajes").style.display = "none";

// let startHome = document.getElementById("btnHome")
// document.getElementById("home").style.display = "none";


//Funciones
// function btnPersonajes() {
//     document.getElementById("home").style.display = "none";
//     document.getElementsByClassName("pantallaPersonajes").style.display = "block";
// }

// function btnHome() {
//     document.getElementsByClassName("pantallaPersonajes").style.display = "none";
//     document.getElementById("home").style.display = "block";
// }

//Eventos
// characters.addEventListener("click", btnPersonajes);

// startHome.addEventListener("click", btnHome);

console.log(filterPersonajes, data);