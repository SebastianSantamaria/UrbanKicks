let carrito =
JSON.parse(localStorage.getItem("carrito")) || [];

const lista =
document.getElementById("lista-carrito");

mostrarCarrito();

function mostrarCarrito(){

    lista.innerHTML = "";

    let subtotal = 0;
    let cantidadTotal = 0;

    carrito.forEach((producto,index)=>{

        if(!producto.cantidad){

            producto.cantidad = 1;
        }

        subtotal +=
        producto.precio *
        producto.cantidad;

        cantidadTotal +=
        producto.cantidad;

        lista.innerHTML += `

            <div class="item">

                <img src="${producto.imagen}">

                <div class="info">

                    <h3>${producto.nombre}</h3>

                    <p>
                        S/ ${producto.precio}
                    </p>

                </div>

                <div class="controles">

                    <button onclick="disminuir(${index})">

                        -

                    </button>

                    <span>

                        ${producto.cantidad}

                    </span>

                    <button onclick="aumentar(${index})">

                        +

                    </button>

                    <button onclick="eliminar(${index})">

                        🗑️

                    </button>

                </div>

            </div>

        `;
    });

    const envio =
    carrito.length > 0 ? 15 : 0;

    document.getElementById("cantidad-total")
    .textContent = cantidadTotal;

    document.getElementById("subtotal")
    .textContent = "S/ " + subtotal;

    document.getElementById("total")
    .textContent =
    "S/ " + (subtotal + envio);

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );
}

function aumentar(index){

    carrito[index].cantidad++;

    mostrarCarrito();
}

function disminuir(index){

    if(carrito[index].cantidad > 1){

        carrito[index].cantidad--;

    }else{

        carrito.splice(index,1);
    }

    mostrarCarrito();
}

function eliminar(index){

    carrito.splice(index,1);

    mostrarCarrito();
}

document.getElementById("vaciar")
.addEventListener("click",()=>{

    carrito = [];

    mostrarCarrito();
});

document.getElementById("comprar")
.addEventListener("click",()=>{

    if(carrito.length === 0){

        alert(
            "Tu carrito está vacío."
        );

        return;
    }

    alert(
        "¡Gracias por tu compra!"
    );

    carrito = [];

    mostrarCarrito();
});