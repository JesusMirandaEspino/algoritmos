const button = document.querySelector('button');
const arrform = document.querySelector('#res');
const procesar = document.querySelector('#procesar');
const buscarBtn = document.querySelector('#buscar');
const valorBuscar = document.querySelector('#valorb');


const ordenar = (arr) => {

    for( let i = 0; i < arr.length; i++ ){

        let arrtemp = arr[i];
        let tempindex = i;

        for( let j = i + 1; j < arr.length; j++ ){
            
            if( arrtemp > arr[j] ){
                arrtemp =  arr[j];
                tempindex = j;
            }
        }

        if( tempindex != i ){
            arr[tempindex] = arr[i];
            arr[i] = arrtemp;
        }

    }

    console.log( 'Lista ordenada' );
    for( let a of arr ){
        console.log( a );
    }

    return arr;
}


const buscar = (arr) =>{ 
    


    if( isNaN(valorBuscar.value) ){
        console.log(  'No es un numero' );

    }else{


    for( let i = 0; i < arr.length;  i++   ){

        if( arr[i] == valorBuscar.value ){
                const posicion = i;
                const valorEncontrado = arr[i];

                console.log( 'Valor encontrado' );
                console.log( valorEncontrado );
                console.log( 'en la posicion' );
                console.log( posicion );
                return;
            }
    }

    console.log( 'valor no encontrado' );

        
    }

}   


const procesarArreglo = () => {

    const procesar = document.querySelectorAll('.valor');
    const arr = [];

    for( let pro of procesar  ){

        arr.push( pro.value );
    }

    buscarBtn.addEventListener( 'click', (e) => {
        e.preventDefault();
        buscar( ordenar(arr) );
    } );

    


}




button.addEventListener( 'click', (e) => {

    e.preventDefault();

    const datos = document.querySelector('input');
    

    if( isNaN(datos.value) ){
        console.log(  'No es un numero' );

    }else{

        for( let i = 0; i < datos.value ; i++   ){
            arrform.innerHTML += `<input type="text"  class="valor" placeholder="Escriba la cantidad de datos ">` ;
        }


        procesar.addEventListener( 'click', (e) => {
            e.preventDefault();
            procesarArreglo();

            

        } );


    }



}



);

