

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs').argv;

console.clear();
console.log( process.argv );
console.log( argv );

console.log('base yargs:', argv.base);


// const num = 15;


// crearArchivo( num )
//     .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch( err => console.log( err ));

