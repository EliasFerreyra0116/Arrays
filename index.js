const productos = [
    { nombre : "zapatillas", precio : 20000 } ,
    { nombre : "buzos", precio : 7000 },
    { nombre : "conjuntos", precio : 12000 },
   ];

   let carrito = []

   let seleccion = prompt ( " Bienvenido a nuestra TiendaOnline , Desea continuar?" )

    while( seleccion != "si" && seleccion != "no" ) {
    alert ("Por favor ingresa SI o NO" )
    seleccion = prompt (" Bienvenido a nuestra TiendaOnline , Desea continuar?")
   }

   if (seleccion == "si") {
    alert ( " A continuación le mostraremos nuestra lista de productos " )
     let todoslosProductos = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "$"
     );

     alert(todoslosProductos.join(" - "))
     }
     else if (seleccion == "no"){
      alert("Gracias por vicitarnos!") }


while (seleccion != "no"){
   let producto = prompt ("Agrega un Accesorio")
   let precio = 0

   if(producto == "zapatillas" || producto=="buzos" || producto=="conjuntos"){
      switch(producto){
      case "zapatillas":
      precio = 20000;
      break;
      case "buzos":
      precio = 7000;
      break;
      case "conjuntos":
      precio = 12000;
      break;
      default:
      break;
      }

      let unidades = parseInt(prompt("Cantidad de unidades que desea"))

      carrito.push({producto, unidades, precio});
      console.log(carrito);
                        
   }
   else {
      alert("Producto inexistente")
   }

   seleccion = prompt("Desea seguir comprando?")

   while(seleccion == "no"){
      alert("Gracias por su compra. Hasta pronto!")
      carrito.forEach((carritoFinal) => {
         console.log ( `producto : ${carritoFinal.producto} , unidades: ${carritoFinal.unidades},
         Total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)

      })
      break;
   }

}

const total= carrito.reduce((acc,el) => acc + el.precio * el.unidades ,0)
console.log(`El total a pagar es:${total}`) 


    