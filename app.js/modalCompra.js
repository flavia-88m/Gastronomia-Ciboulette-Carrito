//Se declaran las variables del modal del carrito de compras

let abrirCarrito = document.getElementById('boton-carrito');
let modalContenedor = document.getElementsByClassName('modal-contenedor')[0]; //Al ser una clase se le indica que debe tomar el índice 0 indicando que queremos trabajar el primer elemento que tenga esa clase
let cerrarCarrito = document.getElementById('cerrar-carrito');
let modalCarrito = document.getElementsByClassName('modal-carrito')[0];

//Con estas arrow function se indica que cada vez que se haga click en los elementos llamados, se añada la clase active

abrirCarrito.addEventListener('click', () => {
   modalContenedor.classList.toggle('modal-active')
});

cerrarCarrito.addEventListener('click', () => {
  modalContenedor.classList.toggle('modal-active')
});

modalContenedor.addEventListener('click', () => {
  modalContenedor.classList.toggle('modal-active')
});


//Evito que se cierre el modal al hacer click inlcuso dentro de él

modalCarrito.addEventListener('click', (Event) => {
  Event.stopPropagation()
});