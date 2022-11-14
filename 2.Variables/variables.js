/*
var: variable global, puede ser reasignada y actualizarse, puedes utilizarla antes de declararla
let: Variable global o local, dependiendo del bloque en el que fue declarado,
    se puede reasignar y no puedes utilizarla antes de ser declarada
const: Variable global o local, dependiendo del bloque en el que fue declarado, 
    no puede ser redeclarar, su valor no puede ser modificado
*/
//----------------Var-------------------
console.log(mensaje) //Se puede utilizar antes de declararla
var mensaje="Hola"; //String
console.log(mensaje);
var telefono='666666666'; //numerico
console.log(telefono);

//----------------Let-------------------
//Con let no se permite utilizarla antes de definirla
//console.log(nombre); //No funcionaría
let nombre="Silvia";
console.log(nombre);

//----------------Const-------------------
//Variables constantes, no se pueden modificar
const apellido="Donaire";
console.log(apellido);
//apellido="Serrano"; //No funcionaria

///////////////////////////////////////////////////////////////////////////////
//Las variables let y const solo son visibles en el bloque en el que se haya declarado
//pero var es visible en todo el codigo
if(true){
    const varLocal="variable const local";
    var meVesFuera="variable var declarada dentro de un bloque pero ejecutada fuera";
}
//console.log(varLocal); //no funcionaria
console.log(meVesFuera)

//Dentro si lo ve (hay que llamar a la funcion)
function sayHello(){
    const varLocal="variable const declarada dentro del bloque";
    console.log(varLocal);
}
sayHello()