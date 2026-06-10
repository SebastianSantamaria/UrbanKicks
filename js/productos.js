const productos = [
    {
        nombre: "Nike Air Max",
        precio: 449,
        imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },
    {
        nombre: "Adidas Forum",
        precio: 399,
        imagen: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500"
    },
    {
        nombre: "Puma RS-X",
        precio: 349,
        imagen: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500"
    },
    {
        nombre: "New Balance 550",
        precio: 429,
        imagen: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500"
    },
    {
        nombre: "Nike Dunk Low",
        precio: 469,
        imagen: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500"
    },
    {
        nombre: "Adidas Superstar",
        precio: 329,
        imagen: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=500"
    },
    {
        nombre: "Converse Chuck Taylor",
        precio: 259,
        imagen: "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=500"
    },
    {
        nombre: "Vans Old Skool",
        precio: 299,
        imagen: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500"
    },
    {
        nombre: "Nike Jordan 1",
        precio: 699,
        imagen: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500"
    },
    {
        nombre: "Adidas Ultraboost",
        precio: 549,
        imagen: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500"
    },
    {
        nombre: "Puma Suede Classic",
        precio: 279,
        imagen: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500"
    },
    {
        nombre: "New Balance 574",
        precio: 389,
        imagen: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500"
    }
];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

actualizarContador();

mostrarProductos(productos);

function mostrarProductos(listaProductos){

    const contenedor =
    document.getElementById("productos");

    contenedor.innerHTML = "";

    listaProductos.forEach(producto => {

        contenedor.innerHTML += `

            <div class="tarjeta">

                <img src="${producto.imagen}" alt="${producto.nombre}">

                <h3>${producto.nombre}</h3>

                <p>S/ ${producto.precio}</p>

                <button onclick='agregarAlCarrito(${JSON.stringify(producto)})'>

                    Agregar al carrito

                </button>

            </div>

        `;
    });
}

function agregarAlCarrito(producto){

    carrito.push(producto);

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    actualizarContador();

    alert("Producto agregado al carrito");
}

function actualizarContador(){

    document.getElementById("contador")
    .textContent = carrito.length;
}

document.getElementById("buscador")
.addEventListener("input", function(){

    const texto =
    this.value.toLowerCase();

    const filtrados =
    productos.filter(producto =>

        producto.nombre
        .toLowerCase()
        .includes(texto)

    );

    mostrarProductos(filtrados);

});