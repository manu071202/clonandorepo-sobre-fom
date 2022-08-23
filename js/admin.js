import { Pelicula } from "./classPelicula.js";

let listaPeliculas = []; //aqui voy a guardar las pelis
//traer los input
let codigo = document.querySelector("#codigo");
let titulo = document.querySelector("#titulo");
let descripcion = document.querySelector("#descripcion");
let imagen = document.querySelector("#imagen");
let genero = document.querySelector("#genero");
let formPelicula = document.querySelector("#formPelicula");
let btnCrearPelicula = document.querySelector("#btnCrearPelicula");
//crear una instancia de la ventana modal
const modalAdminPelicula = new bootstrap.Modal(
  document.querySelector("#modalPelicula")
);

//agregar el evento
btnCrearPelicula.addEventListener("click", crearPelicula);
formPelicula.addEventListener("submit", guardarPelicula);

function crearPelicula() {
  //mostrarVentanamodal
  modalAdminPelicula.show();

  //generar un identificador unico y asignarlo al campo del codigo
  codigo.value = uuidv4();

  //console.log( uuidv4()); esta libreria genera identificadores unicos

  //crear una pelicula
}

function guardarPelicula(e) {
  e.preventDefault();
  //volver a validar los campos

  //si los datos son correctos
  let nuevaPelicula = new Pelicula(
    codigo.value,
    titulo.value,
    descripcion.value,
    imagen.value,
    genero.value
  );
  listaPeliculas.push(nueva)
  console.log(listaPeliculas)
}
