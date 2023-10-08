const http = require('http');

const servidor = http.createServer((req, res) => {
    /*console.log('===> Request');
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);*/

    console.log('===> Response');
    console.log(res.statusCode);
    res.setHeader('content-type', 'application/json')

    console.log(res.getHeaders())

    res.end('Hola mundos');
});

const puerto = 3000;

servidor.listen(puerto, () => {
    console.log(`El servidor esta escuchando en el puerto: ${puerto}`);
})