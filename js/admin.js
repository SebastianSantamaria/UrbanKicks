const hoy = new Date();

document.getElementById("fecha")
.textContent =
hoy.toLocaleDateString();

const usuario =
JSON.parse(localStorage.getItem("usuario"));

document.getElementById("usuarios")
.textContent =
usuario ? 1 : 0;

const carrito =
JSON.parse(localStorage.getItem("carrito"))
|| [];

document.getElementById("carrito")
.textContent =
carrito.length;

let total = 0;

carrito.forEach(producto => {

    total += producto.precio;

});

document.getElementById("total")
.textContent =
"S/ " + total.toFixed(2);