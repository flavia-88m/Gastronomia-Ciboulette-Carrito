

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


// Funcion para actualizar lo del carrito, sumar lo que el usuario eligió y lo muestre en el modal

function actualizarElCarrito() {

let contenedorCarrito = document.getElementById('contenedor-carrito');
let botonEliminar = document.getElementsByClassName('boton-eliminar');
let precioTotal = document.getElementById('precio-total');
let precioApagar = document.getElementById('precio-pagar');
let contadorCarrito = document.getElementById('contador-carrito');


contenedorCarrito.innerHTML='';

productosCarrito.forEach((info) => {
 contenedorCarrito.innerHTML += `
 <div class="modal-body">
 <p>${info.name}</p> 
 <p>${info.Variedad}</p> 
 <p>Precio:$ ${info.price}</p>
</div>
<div class="modal-footer"></div>
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

// Cuando se hace click en el boton pagar

function irApagar () {
  let botonpagar = document.getElementsByClassName('Pagar');
if(("¿Está seguro de que desea pagar?")) {
  alert("¡Gracias por su compra!Su pedido está siendo procesado, un representante de Ciboulette se pondrá en contacto con Ud. a la brevedad ")
 }
}



