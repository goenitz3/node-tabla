const fs = require( 'fs' );
const colors = require( 'colors' );

const crearArchivo = async ( num = 5,  l = false , h = 10 ) => {

    try{            
        let salida = '';
        let consola = ''; 

        for( let i = 1; i <= h; i++) {       
            consola += num + colors.bold.red(' x ') + i + colors.bold.blue(" = ") + colors.brightMagenta(num * i) + "\n";
            salida += num + ' x ' + i + " = " + num * i + "\n";
        }
     
    if ( l ){  
        // const encabezado = `===================\n   Tabla del ${num}\n==================\n`;
        console.log( colors.rainbow('===================') );
        console.log( colors.green(`    Tabla del ${num}`) );
        console.log( colors.america('===================') );
        console.log( consola ); 
      }    
    
    fs.writeFileSync( `./salida/tabla-${num}.txt`, salida);
    
    return `tabla-${ num }.txt`;


    }catch( err ){

        throw err;

    }

}

module.exports = {
    // crearArchivo: crearArchivo //Una propiedad cuyo valor tiene el mismo nombre, es redundante
    crearArchivo
} 