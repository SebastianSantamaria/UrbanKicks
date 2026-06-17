function registrar() {

    const usuario = {

        nombre:
            document.getElementById("nombre").value,

        correo:
            document.getElementById("correo").value,

        password:
            document.getElementById("password").value
    };

    localStorage.setItem(
        "usuario",
        JSON.stringify(usuario)
    );

    alert("Usuario registrado correctamente");
}

function login() {

    const correo =
        document.getElementById("correoLogin").value;

    const password =
        document.getElementById("passwordLogin").value;

    const usuario =
        JSON.parse(localStorage.getItem("usuario"));

    const mensaje =
        document.getElementById("mensaje");

    if (
        usuario &&
        usuario.correo === correo &&
        usuario.password === password
    ) {

        mensaje.style.color = "green";

        mensaje.textContent =
            "¡Bienvenido " +
            usuario.nombre + "!";

        if (correo === "admin@urbankicks.com") {

            setTimeout(() => {

                window.location.href =
                    "admin/index.html";

            }, 1500);

        } else {

            setTimeout(() => {

                window.location.href =
                    "index.html";

            }, 1500);
        }

    } else {

        mensaje.style.color = "red";

        mensaje.textContent =
            "Correo o contraseña incorrectos";
    }
}