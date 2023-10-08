//Leer contenido de archivos
const { error } = require('console');
const fs = require('fs');

/*fs.readFile('index.html','utf-8', (err,contenido) => {
  if(err){
    throw error
  }
  console.log(contenido);
});*/

//Cambiar de nombre a un documento

/* fs.rename('main.html', 'index.html',(err)=>{
    if(err){
        throw error;
    }
    console.log('Nombre cambiado exitosamente')

}) */

// Agregar un archivo al final de un archivo

/*fs.appendFile('index.html','<p>Hola</p>',(err) =>{
    if(err){
        throw error;
    }
    console.log('Archivo actualizado exitosamente.')
})*/

//Remplazar todo el contenido del archivo

/*fs.writeFile('index.html', 'Contenido nuevo',(err)=>{
    if(err){
        throw error;
    }
    console.log('Contenido remplazado exitosamente.');
});*/
// Eliminar 

fs.unlink('main.html',(err)=>{
    if(err){
        throw error;
    }
    console.log('Archivo eliminado');
});




