//Seleccionar los elementos
const boton = document.querySelector('#btn-agregar');
const contenido = document.querySelector('.articulo');

//Creo mis funciones
function agregarParrafo() {
	const parrafo = document.createElement('p');
	parrafo.textContent = 'Un texto'
	contenido.appendChild(parrafo);
}

//Asocio funcion a elemento con un evento
boton.addEventListener('click', agregarParrafo)
