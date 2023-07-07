function validarFormulario() {
    var correo = document.getElementById("correo").value;
    var contraseña = document.getElementById("contraseña").value;

    if (correo === "admin" && contraseña === "123") {
        window.location.href = "/pages/admin.html";
    } else {
        window.location.href = "/pages/soluciones/mascotas-forms/mascota1.html";
    }
}