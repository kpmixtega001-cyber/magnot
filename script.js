// Seleccionamos el botón por su ID
const boton = document.getElementById('miBoton');

// Agregamos un evento para detectar el clic
boton.addEventListener('click', () => {
  boton.classList.toggle('activo');
  
  if (boton.classList.contains('activo')) {
    boton.textContent = '¡Activado!';
  } else {
    boton.textContent = 'Hacer clic';
  }
});
