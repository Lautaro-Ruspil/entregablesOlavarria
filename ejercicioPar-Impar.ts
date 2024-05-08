
// Pseudocódigo: 
// variable numero : number = rlsQuestion('Ingresar Numero a comprobar:);
//si (variable numero == 0){
    //mostrar por consola: ('el numero ingresado' + numero + 'es igual a 0');
//}sino{
    //si (variable numero % 2 = 0){
      //mostrar por consola: ('el numero ingresado' + numero + 'es par');
 //}sino{
      //mostrar por consola: ('el numero ingresado' + numero + 'es par');
 //}

 import * as rls from 'readline-sync';
 let numero : number =rls.questionInt('Ingrese el número que desea comprobar si es Par o Impar: ');
 if(numero == 0){
    console.log('El número ingresado ' + numero + ' es igual a 0');
}else{
  if(numero % 2 == 0){
    console.log('El número ingresado ' + numero + ' es par');
}else{
    console.log('El número ingresado ' + numero + ' es impar');
    }   
}
//Prueba de Escritorio
//Datos de Entrada: números: 45 ; 88 ; 31 ; 14 ; 73 ; 0
//Salida Deseada: El número 45 es impar 
                //El número 88 es par
                //El número 31 es impar
                //El número 14 es par
                //El número 73 es impar
                //El número 0 es igual a 0