const EventEmitter = require("events");

const emisorProductos = new EventEmitter();

// eventHandlers
emisorProductos.on("compra", (total, numProductos) => {
  console.log("Se realizo una compra por:" + total);
  console.log("Numero de productos:" + numProductos);
});

emisorProductos.on("venta", (total, numProductos) => {
  console.log("Se realizo una venta por:" + total);
  console.log("Numero de productos:" + numProductos);
});

emisorProductos.emit("compra", "$50", 10);
emisorProductos.emit("venta", "$500", 50);
