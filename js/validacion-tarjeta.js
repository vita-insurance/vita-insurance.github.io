//VALIDACIÓN DE NÚMERO DE TARJETA

document.addEventListener('DOMContentLoaded', function() {
    var numeroTarjeta = document.getElementById('numeroTarjeta');
    var mensajeValidacion = document.getElementById('mensajeValidacion');
  
    numeroTarjeta.addEventListener('input', function() {
      var tarjetaRegex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
      var numeroSinEspacios = numeroTarjeta.value.replace(/\s/g, '');
  
      if (tarjetaRegex.test(numeroSinEspacios)) {
        mensajeValidacion.textContent = 'El número de tarjeta es válido';
        mensajeValidacion.style.color = 'green';
      } else {
        mensajeValidacion.textContent = 'El número de tarjeta no es válido';
        mensajeValidacion.style.color = 'red';
      }
  
      // Aplicar máscara y separar cada cuatro caracteres
      var numeroConEspacios = numeroSinEspacios.replace(/\D/g, '')
        .replace(/(\d{4})(?=\d)/g, '$1 ');
      numeroTarjeta.value = numeroConEspacios;
    });
  });
  
  //VALIDACIÓN DE FECHA DE VENCIMIENTO
  document.addEventListener('DOMContentLoaded', function() {
    var fechaVencimiento = document.getElementById('fechaVencimiento');
  
    var formulario = document.querySelector('form');
    formulario.addEventListener('submit', function(event) {
      event.preventDefault();
  
      var fechaRegex = /^(0[1-9]|1[0-2])\/(\d{2})$/;
      var fechaIngresada = fechaVencimiento.value;
  
      if (!fechaRegex.test(fechaIngresada)) {
        mostrarMensaje('El formato de fecha es incorrecto. Debe ser MM/AA.', 'red');
        return;
      }
  
      var fechaActual = new Date();
      var mesActual = fechaActual.getMonth() + 1;
      var anioActual = fechaActual.getFullYear() % 100;
  
      var [mesIngresado, anioIngresado] = fechaIngresada.split('/');
      mesIngresado = parseInt(mesIngresado, 10);
      anioIngresado = parseInt(anioIngresado, 10);
  
      if (anioIngresado < anioActual || (anioIngresado === anioActual && mesIngresado < mesActual)) {
        mostrarMensaje('La fecha de vencimiento debe ser mayor a la fecha actual.', 'red');
        return;
      }
  
      mostrarMensaje('La fecha de vencimiento es válida.', 'green');
      // Realizar alguna acción adicional aquí, como enviar el formulario
    });
  
    fechaVencimiento.addEventListener('input', function() {
      var fechaIngresada = fechaVencimiento.value;
      var fechaLimpia = fechaIngresada.replace(/\D/g, '').slice(0, 4);
      var fechaFormateada = fechaLimpia.replace(/(\d{2})(\d{0,2})/, '$1/$2');
      fechaVencimiento.value = fechaFormateada;
    });
  
    function mostrarMensaje(mensaje, color) {
      fechaVencimiento.setCustomValidity(mensaje);
      fechaVencimiento.style.borderColor = color;
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    var csvInput = document.getElementById('csv');
  
    csvInput.addEventListener('input', function() {
      var csvValue = csvInput.value.trim();
      var csvRegex = /^\d{3}$/;
  
      if (!csvRegex.test(csvValue)) {
        csvInput.setCustomValidity('El CSV debe contener tres dígitos numéricos.');
        csvInput.classList.add('invalid');
      } else {
        csvInput.setCustomValidity('');
        csvInput.classList.remove('invalid');
      }
    });
  });
  
  
  