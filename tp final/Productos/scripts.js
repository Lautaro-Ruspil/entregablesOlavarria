'use strict';

// Arreglo Productos, Precios , Cantidad //
let arrayProducts = ["Harina" , "CocaCola" ,  "Sprite"  ,  "Azucar"  , "GalletitasCriollitas"  ,  "Fideos"  ,   "Cerveza"   ,  "GalletitasOpera"  ,  "purePapa"  , "quesoCremon"   ,  "quesoRallado"   ,  "manteca"  ,  "salsaPizza"  ,   "cafeCortado"  ,  "dulceDeLeche"  ,  "arvejas"  ,  "choclo"   ,  "lecheDescremada"   ,   "lecheEntera"  , "yerbaUnion" ]
let arrayPrice =    [  1500   ,    2550    ,    2300    ,    1900    ,          2100           ,    2200    ,     1500      ,        1000         ,     1800     ,      1500       ,       1600        ,    1350     ,      1250      ,       1450       ,       1320       ,    1100     ,    1120     ,       1000           ,        1000      ,     1800     ]
let arrayQuantity = [  100    ,    100     ,    100     ,    100     ,          100            ,    100     ,      100      ,        100          ,     100      ,      100        ,        100        ,     100     ,       100      ,        100       ,       100        ,     100     ,     100     ,        100           ,        100       ,      100     ]                                

//Selecciona todas las tarjetas (articles)
document.querySelectorAll(".article").forEach(article => {
    //añadir escuchador de evento click a cada tarjeta ( for each por cada tarjeta(article) )
    article.querySelector("button").addEventListener('click' , () => {
        let productsIndex = article.getAttribute("data-index");
        let cantidad = article.querySelector("input").value;
        cantidad = Number(cantidad);

        if(cantidad > 0 && (arrayQuantity[productsIndex] - cantidad) >= 0){
            comprar(productsIndex , cantidad);
        }else{
            alert("Ingrese una cantidad mayor a 0 o no hay suficiente Stock (Stock máximo: 100)");
        }
    });
});

function comprar(productsIndex , cantidad) {
    arrayQuantity[productsIndex] -= cantidad;
    let totalElements = document.querySelector(".resultado");
    let total = Number(totalElements.innerHTML.replace('Total: ', '')) || 0;
    total += cantidad * arrayPrice[productsIndex];
    totalElements.innerHTML = `Total: ${total} Stock Restante de ${arrayProducts[productsIndex]} : ${arrayQuantity[productsIndex]}`;
}



