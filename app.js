

const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require( 'colors' );


console.clear();
// console.log( process.argv );
// console.log( argv );


crearArchivo( argv.b , argv.l, argv.h )
    .then( nombreArchivo => console.log( colors.bold(nombreArchivo), colors.bold.green.underline( 'creado')))
    .catch( err => console.log(err));


