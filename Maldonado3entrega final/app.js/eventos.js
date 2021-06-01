
// Se incluyó Jquery
//A través de este evento se va a ejecutar la función cuando se haga click en los button 

let logIn = $("button"); //document.getElementsByTagName("button");


function clickButton() {
    console.log("Boton de click")
}; 

/*Y con for of los incorporo a todos los button con JQUERY

for (const button of logIn) {
    $(button).on("click", clickButton)
     //button.addEventListener("click", clickButton);  
};*/

// Con onclick limpio el carrito

/*let limpiarCarrito = document.getElementById("clean");

limpiarCarrito.onclick = () => {
    let lista = document.getElementById("Productos")
   lista.parentNode.removeChild(lista)
   console.log("Limpiar el carrito")
}; */

/*let agregarCarrito = document.getElementById("agregar");

agregarCarrito.onclick = () => {
    let lista2 = document.getElementById("Productos")
    console.log("Agregar al carrito")
};*/


//Para capturar el input del usuario y determinar el caracter que ingreso 

let userInput = $("password") //document.getElementById("password");
let userInput2 = $("password2") //document.getElementById("password2");

userInput.onkeydown = (evento) => {
    console.log(`Tecla presionada: ${evento.key}`);
}
userInput.onkeyup = () => console.log("La tecla se dejó de presionar");

userInput.onkeydown = (evento2) => {
    console.log(`Tecla presionada: ${evento2.key}`);
}
userInput.onkeyup = () => console.log("La tecla se dejó de presionar");

