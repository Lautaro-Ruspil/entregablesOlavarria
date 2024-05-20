
let arregloNumero : number[] = [4 , 7 , 9 , 3 , 1 , 45 , 67 , 23 , 29 , 78 , 11 , 16];
let numeroMasGrande : number = arregloNumero[0]
let indice : number;
let posicion: number = 0;
for(indice = 0 ; indice < arregloNumero.length ; indice++){
    if(arregloNumero[indice] > numeroMasGrande){
        numeroMasGrande = arregloNumero[indice]
        posicion =+ indice;
    }
}
console.log(`El numero mas grande del arreglo es: ${numeroMasGrande} en la posicion: ${posicion}`);
let resultado : string = parImpar(numeroMasGrande);
    console.log(`El numero: ${numeroMasGrande} ${resultado}`);

function parImpar(numeroMasGrande : number) : string {
    if(numeroMasGrande % 2 == 0){
        return 'es par'
    }else{
        return 'es impar'
    }
}
