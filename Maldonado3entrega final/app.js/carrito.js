
// Mostrar los productos en el index que van a conformar mi carrito

function mostrarProductos(){
    let productosContainer = document.getElementById('container');
    productosContainer.innerHTML = estructuraDeMiCarrito();
    let agregarCarrito = document.getElementsByClassName('agregarCarrito');
    console.log(agregarCarrito);
      for (boton of agregarCarrito){
        boton.addEventListener('click', agregarProductoAlCarrito);
      }         
  }
  
  estructuraDeMiCarrito();
  mostrarProductos();

  
//Guardamos el carrito en el localStorage

let carritoLS = JSON.parse(localStorage.getItem('productosCarrito'));
let productosCarrito = [];

if(carritoLS) {
    productosCarrito = carritoLS;
    actualizarElCarrito()
};
   
//Funcion para agregar productos al carrito

function agregarProductoAlCarrito(evento3) {
  console.log(evento3.target.parentNode.parentNode.parentNode.getAttribute('id'));
  let IdProducto = evento3.target.parentNode.parentNode.parentNode.getAttribute('id');
  productosDeMiCarrito.forEach((producto) =>{
    if(producto.id == IdProducto){
      productosCarrito.push(producto);
      console.log(productosCarrito);
      actualizarElCarrito()
    }

    localStorage.setItem('productosCarrito', JSON.stringify(productosCarrito));
  })
};

//Funcion para eliminar productos del carrito

function eliminarProductosCarrito(evento3) {
  console.log(evento3.target.parentNode.parentNode.parentNode.removeChild('id'));
  let idProduct = evento3.target.parentNode.parentNode.parentNode.removeChild('id');
  productosDeMiCarrito.forEach((productoE) =>{
      if(productoE.id == idProduct) {
         productosCarrito.splice(productosCarrito);
         console.log(productosCarrito);
  };
  localStorage.setItem('productosCarrito', JSON.stringify(productosCarrito));
  actualizarElCarrito()
});
};


// Funcion para actualizar lo del carrito, sumar lo que el usuario eligió y lo muestre en el modal

function actualizarElCarrito() {

let contenedorCarrito = document.getElementById('contenedor-carrito');

let precioTotal = document.getElementById('precio-total');
let precioApagar = document.getElementById('precio-pagar');
let contadorCarrito = document.getElementById('contador-carrito');

contenedorCarrito.innerHTML= '';

productosCarrito.forEach((info) => {
 contenedorCarrito.innerHTML += `
 <div class="modal-body">
 <p>${info.name}</p> 
 <p>${info.Variedad}</p> 
 <p>Precio:$ ${info.price}</p>
</div>
<div class="modal-footer">
 <button onclick=eliminarProductosCarrito(${info.id}) class="boton-eliminar"><span class="iconify" data-icon="bx:bxs-trash" data-inline="false"></span></button>
</div>
 `
});

let sumarProductos = productosCarrito.reduce((acumulador, valorActual) => acumulador += valorActual.price, 0);

precioTotal.innerText = sumarProductos.toFixed();
precioApagar.innerText = sumarProductos.toFixed();
localStorage.setItem('sumarProductos', JSON.stringify(productosCarrito.length));

contadorCarrito.innerText= productosCarrito.length;
localStorage.setItem('contadorCarrito', JSON.stringify(productosCarrito.length));


};

//Funcion para eliminar todos productos del carrito del LocalStorage

function eliminarTodo() {
 localStorage.clear(productosCarrito);
 productosCarrito=[];
 console.log(productosCarrito);
 actualizarElCarrito();
};



//Funcion para eliminar cada uno de los productos del carrito, esto es cuando en el boton MI COMPRA figure cada item y lo pueda eliminar uno por uno

/*function limpiarEstructuraDeMiCarrito() {
   let limpiar ='';   
   productosCarrito.forEach((info) => { 
    limpiar += `
    <button onclick=eliminarProductosCarrito(${info.id}) type="button" id="clean" class="Textos4 btn btn-success">Vaciar carrito</button>
    `
    });
  return limpiar;
};


function vaciarCarrito() {
    let productosCleanButton = document.getElementById('cleanButton')
    productosCleanButton.innerHTML = limpiarEstructuraDeMiCarrito();
    let clean = document.getElementsByClassName('clean');
    console.log(clean);
      for (boton of clean){
        boton.removeEventListener('click',  eliminarProductosCarrito);
      };
};

limpiarEstructuraDeMiCarrito();
vaciarCarrito();     
  
function eliminarProductosCarrito(evento3) {
    console.log(evento3.target.parentNode.parentNode.parentNode.removeChild('id'));
    let idProduct = evento3.target.parentNode.parentNode.parentNode.removeChild('id');
    productosDeMiCarrito.forEach((productoE) =>{
        if(productoE.id == idProduct) {
           productosCarrito.splice(productosCarrito);
           console.log(productosCarrito);
    };
    localStorage.setItem('productosCarrito', JSON.stringify(productosCarrito));
});
};*/

// Con onclick limpio el carrito

/*let limpiarCarrito = document.getElementById('clean');

limpiarCarrito.onclick = () => {
    let lista = document.getElementById("Productos")
   lista.parentNode.removeChild(lista)
   console.log("Limpiar el carrito")
};*/

