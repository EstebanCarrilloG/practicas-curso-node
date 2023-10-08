async function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
    console.log("ordenando:" + producto + "free code camp");
    setTimeout(() => {
      if (producto === "taza") {
        resolve("Ordenando una taza");
      } else {
        reject("Producto no disponible");
      }
    }, 2000);
  });
}

function procesarPedido(respuesta) {
  return new Promise((resolve) => {
    console.log("Procesando respuesta");
    console.log("Respuesta:" + respuesta);
    setTimeout(() => {
      resolve("Gracias por su compra");
    }, 4000);
  });
}

/*ordenarProducto('tazar')
  .then(respuesta => {
    console.log(respuesta);
    return procesarPedido(respuesta);
  })
  .then(respuestaProcesada =>{
    console.log(respuestaProcesada);
  })
  .catch(error=>{
    console.log(error)
  })*/

async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarProducto(producto);
    console.log("Respuesta recibida.");
    console.log(respuesta);
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
  } catch (error) {
    console.log(error);
  }
}

realizarPedido("taza");
