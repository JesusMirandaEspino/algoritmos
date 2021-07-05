
let fecha1 = new Date( 2021, 2, 24 ).getTime();
let fecha2 = new Date( 2021, 2, 22 ).getTime();


let dif = fecha2 - fecha1;

console.log( dif / ( 1000 * 60 * 60 * 24 ));