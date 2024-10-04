function validarNumeroControl() {
    const numeroControl = document.getElementById("numeroControl").value;
    const mensaje = document.getElementById("mensaje");

    // Validar que el número tenga 8 dígitos
    if (numeroControl.length !== 8 || isNaN(numeroControl)) {
        mensaje.textContent = "El número de control debe tener 8 dígitos.";
        mensaje.style.color = "red";
        return;
    }

    const anioIngreso = numeroControl.substring(0, 2);
    const numeroTec = numeroControl.substring(2, 4);
    const consecutivo = numeroControl.substring(4);

    // Validar que el número de tecnológico sea 84
    if (numeroTec !== "84") {
        mensaje.textContent = "El número no corresponde al IT de Huejutla.";
        mensaje.style.color = "red";
        return;
    }

    // Si todo es correcto
    mensaje.textContent = "El número de control es válido.";
    mensaje.style.color = "green";
}
