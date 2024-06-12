import fs from 'node:fs';
/*
const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];
en un archivo “precios.txt” y “productos.txt”
respectivamente.
Luego recupera la información en forma de
array nuevamente y mostrala por consola */
//Entradas
const precios: number[] = [525, 3500, 400, 1999];
const productos: string[] = ["Leche", "Galletitas", "Harina", "Queso"];
let arrayPreciosSeparado : string = "";
let arrayProductosSeparado : string = "";
//Procesos
//Separar arreglo de precios
for(let i = 0 ; i < precios.length ; i++){
    arrayPreciosSeparado += `${precios[i]} `;
}
//Separar arreglo de productos
for(let i = 0 ; i < productos.length ; i++){
    arrayProductosSeparado += `${productos[i]} `;
}
//Guardar informacion
fs.writeFileSync('./precios.txt' , arrayPreciosSeparado);
fs.writeFileSync('./productos.txt' , arrayProductosSeparado);
//Leer informacion
let datosPrecios = fs.readFileSync('./precios.txt' , "utf8");
let datosProductos = fs.readFileSync('./productos.txt' , "utf8");
//Salidas
//Mostrar nuevo arreglo Precios 
let datos2Precios : string = datosPrecios.trim();
//Mostrar nuevo arreglo Productos
let datos2Productos : string = datosProductos.trim();
let nuevoArregloPrecios : string[] = (datos2Precios.split(" "));
let nuevoArregloProductos : string[] = (datos2Productos.split(" "));
console.log(nuevoArregloPrecios);
console.log(nuevoArregloProductos);
