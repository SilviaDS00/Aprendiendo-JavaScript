//Formas de declarar arrays y asignar valores
var persona = ['Silvia',21,'España',true]

var persona1 = new Array(3)
persona1 = ['Silvia',21,'España',true]

var persona2 = new Array("Silvia",21,"España",true)

var persona3 = [] //Array vacío

console.log(persona[0]) //Mostramos el valor que hay en la posicion 0 del array
console.log(persona1[1]) //Mostramos el valor que hay en la posicion 1 del array

persona[0]='Silvi' //Cambiamos el valor que haya en la posicion 0 por Silvi

persona.pop()//quita el ultimo elemento del array
persona.push("Programador")//Agrega un elemento más al final del array
persona.unshift("Zirbi") //Agrega un elemento al principio del array

//MOSTRAR array:
console.log(persona) //Aqui mostraria Zirbi al principio del array y luego el resto de elementos que había
console.log(persona1)
console.log(persona2)

//RECORRER array:
var colores=["Rojo","Azul","Amarillo","Verde"]
for(var i=0; i<colores.length; i+=1){
    console.log(colores[i])
}

//-----------Otros ejemplos--------------
//Objeto ARRAY, MAP y SET
//ARRAY
const a = ["Rojo","Amarillo","Verde"] //Declarar array asignando valores
console.log(a[1]) //Muestra Amarillo

const a1 = new Array("Rojo","Amarillo","Verde") //Declarar array con new array
console.log(a1[2]) //Muestra Verde
a1[2] = "Rosa" //Cambia el valor de Verde a Rosa
console.log(a1[3]) //UNDEFINED porque no exixte ningun valor en la posicion 3
a1.push("negro") //Agrega un elemento más al final del array
console.log(a1) //Mostramos todo el contenido del array, mostraria el color negro
a1.pop()//quita el ultimo elemento del array
console.log(a1) //Aqui no mostraria el color negro

const a2 = new Array(4) //Declarar array diciendo la longitud sin datos
//Crear array a partir de una cadena
const a3 = Array.from('Silvia Donaire')//En la posicion 0 estaría la "S", en la 1 la "i" y asi sucesivamente

//-----------SET--------------
const set = new Set(['foo','bar','bar','foo']) //No permite tener elementos duplicados, "quitando" éstos al mostrarlo
console.log(Array.from(set))

set.has('bar') //Comprobar si contiene ese elemento
set.add('oli') //Añade un nuevo elemento
set.delete('oli') //Borra un elemento

const newObject = {}
set.add(newObject) //Añade un objeto

//-----------MAP--------------
//Almacena por cada elemento una serie de propiedades los cuales se pueden manipular:
const mapEjemplo = new Map([['a', 1], ['b', 2]]) //Se almacena {a:1, b: 2}
mapEjemplo.has('a') //Comprueba que tiene el elemento a
mapEjemplo.set('c', 5) //Se almacena {a:1, b: 2, c: 3}
mapEjemplo.get('c') //Muestra el contenido de c, que es 3
mapEjemplo.delete('c') //Borra el elemento c con su valor
console.log(mapEjemplo.size)

mapEjemplo.set(newObject, 5) // {a:1, b: 2, ref: 5} 
mapEjemplo.delete(newObject) //Para borrar el objeto añadido

//-------Mas ejemplos con Map---------
const map = new Map([[1,2],[2,4],[4,8]])
console.log(Array.from(map))

const mapper = new Map([['1','a'],['2','b']])
const a6 = Array.from(mapper.values()) //Creamos un array con los elementos numericos de ese array (en este caso, solo para entender cuales son los values)
const a7 = Array.from(mapper.keys()) //Creamos un array con los elementos String de ese array (en este caso, solo para entender cuales son los keys)

let a8 = Array.from([1,2,3], x => x+x)//Crea un array cuyo contenido es la suma del primero, el segundo la suma del segundo, hecho con la funcion x

let a9 = Array.from({length:5},(v,i)=>i)
console.log(a9)

console.log(Array.isArray(a9))