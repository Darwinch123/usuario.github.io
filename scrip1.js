function Login() {
    let usuario = document.getElementById('usuario').value;
    let password = document.getElementById('contraseña').value;

    if (usuario === "Darqui" && password === "14/02/2024") {
        window.location = 'Inicio love.html';
    } else {
        swal("Contraseña incorrecto","Intenta de nuevo mi dormilona hermosa","error");
    }
}
