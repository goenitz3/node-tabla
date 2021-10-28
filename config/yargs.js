const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type:'number',
        demandOption: true,
        describe: 'Base de tabla de multiplicar'
    })
    .option( 'l', {
        alias: 'listar',
        type: 'boolean',
        dafault: false,
        describe: 'Lista la tabla en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Este número será hasta el cual llegaran las multiplicaciones de la base'
    })
    .check( (argv, options) => {
        if ( isNaN( argv.b) ) {
            throw 'La base tiene que ser un número';
        }
        return true;
    } )
    .argv;


    module.exports = argv;