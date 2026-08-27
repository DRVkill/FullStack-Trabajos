console.log("hola");
var productos = [
    {
        "titulo" :"Teclado", 
        "img":"img/teclado.jpg",
        "precio":"3000" 

    },
    {
        "titulo":"GPU",
        "img":"img/gpu.jpg",
        "precio":1500
    }
];

const section = document.getElementById("productos");
console.log(section);

const contenedorCards = document.createElement("div");
contenedorCards.className = "contenedor-cards";

section.appendChild(contenedorCards);
for (const i of productos) {
    const card = document.createElement("div");
    card.className = "card";
    contenedorCards.appendChild(card);

    const tituloProducto = document.createElement("h3");
    tituloProducto.textContent = i.titulo;
    card.appendChild(tituloProducto);

    const imgProdcuto = document.createElement("img");
    imgProdcuto.src = i.img;
    imgProdcuto.className = "imagen-producto";
    card.appendChild(imgProdcuto);

    const precioProducto = document.createElement("p");
    precioProducto.className = "precio-producto";
    precioProducto.textContent = i.precio;
    card.appendChild(precioProducto);

    const contenedorbtn = document.createElement("div");
    contenedorbtn.className = "contenedor-btn";
    card.appendChild(contenedorbtn);

    const btnAgregarCarro = document.createElement("button");
    btnAgregarCarro.textContent = "Agregar al carrito";
    btnAgregarCarro.className = "btn btn-primary";
    btnAgregarCarro.addEventListener("click", function(){
        guardar(i);
    })
    contenedorbtn.appendChild(btnAgregarCarro);

}

const llave = "carrito"

function guardar(producto){
    var storageActual = localStorage.getItem(llave);
    var lista = [];
    if( storageActual != null){
        var storageParse = JSON.parse(storageActual);
        storageParse.push(producto);
        localStorage.setItem(llave, JSON.stringify(storageParse));
    }else{
        lista.push(producto);
        localStorage.setItem(llave, JSON.stringify(lista));

    }
}