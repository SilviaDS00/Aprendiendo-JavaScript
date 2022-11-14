/*
    Propiedades: son las características del objeto
    Métodos: qué puede hacer el objeto
    A la hora de instanciar objetos, cada uno tiene sus características (asignadas por ti) y todos tendrán los mismos métodos
*/

//Declaración de variable de tipo Objeto vacío
var coche = {}

/////////////////////////////////////////////////////////////////

//Objeto literal o declarativo
var usuario = {
    nombre:'Felipe',
    edad:43,
    saludo:function(){
        console.log(`Hola soy ${this.nombre}`);
    },
};
//Info extra de ejecucion de funciones
console.log(usuario.saludo) //Esto muestra info de que es una funcion, no ejecuta la funcion
console.log(usuario.saludo()) //Tenemos que poner los parentesis pasa ejecutar la funcion
usuario.saludo() //O podemos ejecutar directamente la funcion
//this. contiene el valor de nuestro objeto

/////////////////////////////////////////////////////////////////

//Objeto construido (funcion que se va a comportar como objeto)
function persona(nombre, edad){
    this.nombre=nombre
    this.edad=edad
    this.saludar=function(){
        console.log(`Hola soy ${this.nombre}`)
    }
}
var profesor = new persona("Maria",21)

/////////////////////////////////////////////////////////////////

//Creacion de Objeto con new Object
var persona1 = new Object({
    nombre:'Silvia',
    edad:21,
    saludar:function(){
        console.log(`Hola soy ${this.nombre}`) 
    }
})

/////////////////////////////////////////////////////////////////

const myCar = new Object()
myCar.make='Ford'
myCar.model='Puma'
myCar.year=2020

/////////////////////////////////////////////////////////////////

//Creacion de Objeto mediante una clase
class Persona2{
//Constructor
    constructor(nombre,apellidos,year){
        this._nombre=nombre
        this._apellidos=apellidos
        this._year=year
    }
//Getter y setter solo de año
    get year(){
        return this._year
    }
    
    set year(anio){
        this._year=anio
    }
}

/////////////////////////////////////////////////////////////////

//Objeto DATE
var fecha = new Date() //Asignamos la fecha del sistema
//Inicializacion y obtencion de los parametros
var YEAR = fecha.getFullYear()
var MES = fecha.getMonth()
var DIA = fecha.getDay()

/////////////////////////////////////////////////////////////////

//Objeto MATH
var pi = Math.PI //Almacena el numero PI
console.log(Math.round(4.4)) //Redondea 4.4 en este caso hacia abajo, mostrará 4
console.log(Math.round(4.6)) //Redondea 4.6 en este caso hacia arriba, mostrará 5
console.log(Math.floor(4.8)) //Redondea 4.8 hacia abajo, mostrara 4
console.log(Math.ceil(4.3)) //Redondea hacia arriba, mostrara 5
console.log(Math.min(4,5,-3,2,0)) //Muestra el numero mas pequeño de esa cadena de numeros
console.log(Math.max(3,5,2,9,7)) //Muestra el numero mas grande de esa cadena de numeros
console.log(Math.random()) //Num aleatorio entre 0 y 1
console.log(Math.random()*10) //Num aleatorio entre 0 y 10

function generarNumero (numMax){
    return Math.round((Math.random()*numMax))
}
generarNumero(20)

/////////////////////////////////////////////////////////////////

//Objeto ARRAY, MAP y SET
//ARRAY
const a = ["Rojo","Amarillo","Verde"] //Declarar array de una forma mas corta
console.log(a[1]) //Muestra Amarillo

const a1 = new Array("Rojo","Amarillo","Verde") //Declarar array con new array
console.log(a1[2]) //Muestra Verde
a1[2] = "Rosa" //Cambia el valor de Verde a Rosa
console.log(a1[3]) //UNDEFINED
a1.push("negro") //Agrega un elemento más al final del array
console.log(a1) //Mostramos todo el contenido del array, mostraria el color negro
a1.pop()//quita el ultimo elemento del array
console.log(a1) //Aqui no mostraria el color negro

const a2 = new Array(4) //Declarar array diciendo la longitud sin datos
//Crear array a partir de una cadena
const a3 = Array.from('Silvia Donaire')//En la posicion 0 estaría la "S", en la 1 la "i" y asi sucesivamente

//RECORRER ARRAY
var colores=["Rojo","Azul","Amarillo","Verde"]

for(var i=0; i<colores.length; i+=1){
    console.log(colores[i])
}


//SET
const set = new Set(['foo','bar','bar','foo']) //No permite tener elementos duplicados, "quitando" éstos al mostrarlo
console.log(Array.from(set))
//MAP
const map = new Map([[1,2],[2,4],[4,8]])
console.log(Array.from(map))

const mapper = new Map([['1','a'],['2','b']])
const a6 = Array.from(mapper.values())
const a7 = Array.from(mapper.keys())

let a8 = Array.from([1,2,3], x=>x+x)//Crea un array cuyo contenido es la suma del primero, el segundo la suma del segundo

let a9 = Array.from({length:5},(v,i)=>i)
console.log(a9)

console.log(Array.isArray(a9))