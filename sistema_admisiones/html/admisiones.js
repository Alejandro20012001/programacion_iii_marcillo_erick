const formulario = document.querySelector("#formulario");
const mensaje = document.querySelector("#mensaje");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const datos = new FormData(formulario);
    const solicitud = {
        nombre: datos.get("nombre"),
        apellido: datos.get("apellido"),
        cedula: datos.get("cedula"),
        correo: datos.get("correo"),
        programa: datos.get("programa")
    };

    try {
        const solicitudes = JSON.parse(localStorage.getItem("solicitudes") || "[]");
        solicitudes.push(solicitud);
        localStorage.setItem("solicitudes", JSON.stringify(solicitudes));
        mensaje.textContent = "Solicitud guardada en este navegador.";
        formulario.reset();
    } catch (error) {
        mensaje.textContent = "No se pudo guardar la solicitud en este navegador.";
    }
});
