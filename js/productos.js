let productos =
JSON.parse(localStorage.getItem("productos"));

if(!productos){
    
productos = [
    {
        nombre: "Nike Air Max",
       precio: 449,
        categoria: "hombre",
        imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },
    {
        nombre: "Adidas Forum",
        precio: 399,
        categoria: "hombre",
        imagen: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500"
    },
    {
        nombre: "Puma RS-X",
        precio: 349,
        categoria: "hombre",
        imagen: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500"
    },
    {
        nombre: "New Balance 550",
        precio: 429,
        categoria: "hombre",
        imagen: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500"
    },
    {
        nombre: "Nike Dunk Low",
        precio: 469,
        categoria: "hombre",
        imagen: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500"
    },
    {
        nombre: "Nike Dunk Low",
        precio: 469,
        categoria: "mujer",
        imagen: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500"
    }
];

localStorage.setItem(
"productos",
JSON.stringify(productos)
);

}
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

                <h3>${producto.nombre}
                
                 ${producto.oferta ?
                 '<span class="oferta">🔥 OFERTA</span>'
                 : ''}

                  </h3> 

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
function mostrarTodo(){

    mostrarProductos(productos);
}

function mostrarHombre(){

    const hombre =
    productos.filter(producto =>
        producto.categoria === "hombre"
    );

    mostrarProductos(hombre);
}

function mostrarMujer(){

    const mujer =
    productos.filter(producto =>
        producto.categoria === "mujer"
    );

    mostrarProductos(mujer);
}

function mostrarOfertas(){

    const ofertas =
    productos.filter(producto =>
        producto.oferta === true
    );

    mostrarProductos(ofertas);
}