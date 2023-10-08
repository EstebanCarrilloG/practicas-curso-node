const estatusPedido = () => {
  return Math.random() < 0.8;
};

const miPedidoDePizza = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (estatusPedido) {
      resolve("Pedido exitoso");
    } else {
      reject("Ocurrio un error..");
    }
  }, 3000);
});

/*const manejarPedido = (mensajeDeConfirmacion) =>{
    console.log(mensajeDeConfirmacion);
}

const rechazarPedido = (mensajeDeError) =>{
    console.log(mensajeDeError);
}*/

//miPedidoDePizza.then(manejarPedido,rechazarPedido);

/*miPedidoDePizza
.then((mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
})
.then(null,(mensajeDeError) => {
    console.log(mensajeDeError);
})*/

/*miPedidoDePizza
    .then((mensajeDeConfirmacion) => {
        console.log(mensajeDeConfirmacion);
    })
    .catch((mensajeDeError) => {
        console.log(mensajeDeError);
    })*/

const manejarPedido = (mensajeDeConfirmacion) => {
  console.log(mensajeDeConfirmacion);
};

const rechazarPedido = (mensajeDeError) => {
  console.log(mensajeDeError);
};

miPedidoDePizza.then(manejarPedido).catch(rechazarPedido);
