//Importar archivo json

//const curso = require("./curso.json");
//console.log(curso.titulo);

let  infoCurso = {
    "titulo": "Aprende node.js",
    "numVistas": 10000,
    "numLikes":233433,
    "temas":[
        "javaScript",
        "node.js"
    ],
    "esPublico": true
}

// Objeto a cadena de caracteres en formato JSON
let infoCursoJson = JSON.stringify(infoCurso);
console.log(infoCursoJson);
console.log(typeof infoCursoJson);

// Cadena de caracteres a objeto de javascript.
let infoCursoObjeto = JSON.parse(infoCursoJson);
console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);
