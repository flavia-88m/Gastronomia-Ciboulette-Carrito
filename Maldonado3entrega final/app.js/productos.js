/* Creo un nuevo elemento con un mensaje de bienvenida 

let newElement = document.createElement("p");
let newElement2 = document.createElement("p");
let newElement3 = document.createElement("p");

newElement.innerHTML = "<h1> Bienvenida/o a Gastonomía Ciboulette, somos especialistas en pastas artesanales <h1>";
newElement2.innerHTML = "<h2> Todas nuestas pastas son 100% artesanales, nos destacamos por nuestros sabrosos sorrentinos, además de Tallarines y Ravioles.<h2>"
newElement3.innerHTML = "<h3> Las variedades y precios son:<h3>"*/


// Se lo agrego al id p Con jQuery

let mensajeBienvenida = $("#welcome")

mensajeBienvenida.append("<h1> Bienvenida/o a Gastonomía Ciboulette, somos especialistas en pastas artesanales <h1>");
mensajeBienvenida.append("<h2> Todas nuestas pastas son 100% artesanales, nos destacamos por nuestros sabrosos sorrentinos, además de Tallarines y Ravioles.<h2>");
mensajeBienvenida.append("<h3> Las variedades y precios son:<h3>");

// Con la animación hide escondo el mensaje de bienvenida

mensajeBienvenida.hide(1500);

// y luego lo muestro con show

$("#welcome").show(1500);

//Y lo concateno con slideUp y slideDown

$("#welcome").css("color","green")
      .slideUp(2000)
      .slideDown(2000);


// Cuando el usuario ingresa el password por la etiqueta input 

let password = $("#password").val;
console.log(password)


// Creo los objetos de mi carrito
class ProductosCibu {
  constructor(id, name, Variedad, price, imagen) {
      this.id = id;
      this.name = name;
      this.Variedad = Variedad;
      this.price = price;
      this.imagen = imagen;
   }
  productosCarrito() {
      return `Los ${this.id} ${this.name} de ${this.Variedad} cuestan ${this.price}`
      }
  };

  //Se crean los productos de mi carrito que se instancian en la class Producto con el constructor y vuelvo a crear los objetos con la palabra new

let newObject1 = {id: 1, name:"Sorrentinos", Variedad: "Jamon ricota y muzza", price: 350, imagen:"http://d3ugyf2ht6aenh.cloudfront.net/stores/099/082/products/sorrentinos2-generico-ciudadmadre1-ce043e156bcd8c9b7715132736013212-640-0.jpg" };
let myNewsProducts1 = new ProductosCibu( newObject1.id, newObject1.name, newObject1.Variedad, newObject1.price, newObject1.imagen);

let newObject2 = {id:2, name:"Sorrentinos", Variedad: "Pollo y verdura", price: 380, imagen:"http://www.polidoripastas.com.ar/media/productos/frescas-sorrentinos-espinaca-mozzarella-pollo.jpg" };
let myNewsProducts2 = new ProductosCibu( newObject2.id, newObject2.name, newObject2.Variedad, newObject2.price, newObject2.imagen);

let newObject3 = {id:3, name:"Sorrentinos", Variedad: "Calabaza ricota y muzza", price: 380, imagen:"https://i.pinimg.com/originals/6f/f5/cc/6ff5cce6aba7b313186a54531b201fb4.jpg"};
let myNewsProducts3 = new ProductosCibu( newObject3.id, newObject3.name, newObject3.Variedad, newObject3.price, newObject3.imagen);

let newObject4 = {id:4, name:"Sorrentinos", Variedad: "Espinaca ricota y muzza", price: 380, imagen: "https://i.pinimg.com/564x/e5/88/15/e58815cbbb32214eb7154669e9d19f7e.jpg" };
let myNewsProducts4 = new ProductosCibu( newObject4.id, newObject4.name, newObject4.Variedad, newObject4.price, newObject4.imagen);

let newObject5 = {id:5, name:"Sorrentinos", Variedad: "Jamon ricota muzza y nuez", price: 380, imagen:"http://www.polidoripastas.com.ar/media/productos/frescas-sorrentinos-jamon-mozzarella-albahaca.jpg" };
let myNewsProducts5 = new ProductosCibu( newObject5.id, newObject5.name, newObject5.Variedad, newObject5.price, newObject5.imagen);

let newObject6 = {id:6, name:"Ravioles", Variedad: "Ricota y muzza", price: 250, imagen:"https://images.rappi.com.ar/products/94308060-ab3f-4334-9ab0-82bc13afb814-1601668414149.jpeg?d=128x90"};
let myNewsProducts6 = new ProductosCibu( newObject6.id, newObject6.name, newObject6.Variedad, newObject6.price, newObject6.imagen);

let newObject7 = {id:7, name:"Ravioles", Variedad: "Carne y verdura", price: 300, imagen:"http://www.polidoripastas.com.ar/media/productos/frescas-ravioles-espinaca-carne-ternera.jpg" };
let myNewsProducts7 = new ProductosCibu( newObject7.id, newObject7.name, newObject7.Variedad, newObject7.price, newObject7.imagen);

let newObject8 = {id:8, name:"Tallarines", Variedad: "Al huevo", price: 250, imagen:"https://st.depositphotos.com/1177973/4796/i/600/depositphotos_47960177-stock-photo-still-life-with-raw-homemade.jpg" };
let myNewsProducts8 = new ProductosCibu( newObject8.id, newObject8.name, newObject8.Variedad, newObject8.price, newObject8.imagen);

let newObject9 = {id:9, name:"Tallarines", Variedad: "Espinaca", price: 300, imagen:"https://cuk-it.com/wp-content/uploads/2020/10/thumb02-7-1024x576.jpg" };
let myNewsProducts9 = new ProductosCibu( newObject9.id, newObject9.name, newObject9.Variedad, newObject9.price, newObject9.imagen);

let  productosDeMiCarrito = [];

productosDeMiCarrito.push(myNewsProducts1);
productosDeMiCarrito.push(myNewsProducts2);
productosDeMiCarrito.push(myNewsProducts3);
productosDeMiCarrito.push(myNewsProducts4);
productosDeMiCarrito.push(myNewsProducts5);
productosDeMiCarrito.push(myNewsProducts6);
productosDeMiCarrito.push(myNewsProducts7);
productosDeMiCarrito.push(myNewsProducts8);
productosDeMiCarrito.push(myNewsProducts9);

 
//Por medio de esta función instancio los objetos creados arriba con los nodos del DOM 

let agregarCarrito = document.getElementById("agregar");

function estructuraDeMiCarrito() {
  let aux = '';
  productosDeMiCarrito.forEach((info) => {
    aux += `
    <div class="col" id='${info.id}'>
      <div class="card">
        <img
          src="${info.imagen}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">${info.name}</h5>
          <p class="card-text">
            ${info.Variedad} ${'$'} ${info.price}
          </p>
          <button type="button" class="agregarCarrito btn btn-success">Agregar al carrito</button>
        </div>
      </div>
    </div>    
    ` 
 })
  return aux;
};

//Le agrego animación al footer 
$("strong").append('<p><h4>Seguinos en nuestras redes y enterate de todas las promos que tenemos:</h4></p>');

$("#texto02").animate({
               left:"300px",
               with:"150px",
               height:"100"
          },
 "slow",
 () => {
   console.log();
});




