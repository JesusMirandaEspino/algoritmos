
const ordenar = ( a, b, c ) =>{

    const arr = [];
    const arr1 = [];
    let temporal;

    arr[0] = a;
    arr[1] = b;
    arr[2] = c;

    arr1[0] = a;
    arr1[1] = b;
    arr1[2] = c;

    for( let  ar of arr ){
        console.log( ar );
    }

    for( let i = 0; i < arr1.length; i++ ){

        let arrtemp = arr1[i];
        let tempindex = i;

        for( let j = i + 1; j < arr1.length; j++ ){
            
            if( arrtemp > arr1[j] ){
                arrtemp =  arr1[j];
                tempindex = j;
            }
        }

        if( tempindex != i ){
            arr1[tempindex] = arr1[i];
            arr1[i] = arrtemp;
        }

    }

    console.log( '======================' );

    for( let  ar of arr1 ){
        console.log( ar );
    }

    console.log( '======================' );

    if( arr[0] > arr[1] ){
        temporal =  arr[1];
        arr[1] = arr[0];
        arr[0] = temporal;
    }

    if( arr[1] > arr[2] ){
        temporal =  arr[2];
        arr[2] = arr[1];
        arr[1] = temporal;
    }

    if( arr[0] > arr[1] ){
        temporal =  arr[1];
        arr[1] = arr[0];
        arr[0] = temporal;
    }

    console.log( '======================' );

        for( let  ar of arr ){
        console.log( ar );
    }

}


ordenar( 7,5,1 );