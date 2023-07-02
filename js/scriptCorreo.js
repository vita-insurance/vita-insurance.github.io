let seccionActual = 1;
const secciones = document.getElementsByClassName("seccion");

function avanzar() {
  // Ocultar la sección actual
  secciones[seccionActual - 1].style.display = "none";
  
  // Incrementar el contador de la sección actual
  seccionActual++;
  
  // Mostrar la siguiente sección
  secciones[seccionActual - 1].style.display = "block";
}
