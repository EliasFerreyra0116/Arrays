const productos = [
    { nombre : " Zapatillas " , precio : 20000 } ,
    { nombre : " Buzos " , precio : 7000 },
    { nombre : " Conjuntos " , precio : 12000 },
   ];

   let carrito = []

   let seleccion = prompt ( " Bienvenido a nuestra TiendaOnline , Desea continuar?" )

    while( seleccion != "si" && seleccion != "no" ) {
    alert ("por favor ingresa si o no" )
    seleccion = prompt (" Bienvenido a nuestra TiendaOnline , Desea continuar")
   }
   if (seleccion == "si") {
    alert ( " A continuación nuestra lista de prodcutos " )
     console.log( productos )
     let todoslosProductos = productos.map(
        (productos) => productos.nombre + " " + productos.precio + "$"
     );
     
    }