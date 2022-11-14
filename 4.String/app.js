
console.log("Hola " + "mundo") //Muestra Hola mundo
const nombre = "Roberto"
console.log("Hola " + nombre) //Muestra Hola Roberto

//Otra forma de introducir una variable en una cadena:
console.log(`Hola ${nombre} que tal`)

//Dice el numero de caracteres que contiene el String
console.log(nombre.length)

//Indica si se incluye esos caracteres
console.log(nombre.includes('Ro')) //devuelve true

//(la cadena empieza por la posicion 0)
//Es como un substring, muestra los caracteres que hay entre esos valores:
console.log(nombre.slice(2,5)) //devuelve ber

//Reemplaza los caracteres Ro por Al
console.log(nombre.replace('Ro','Al')) //Devuelve Alberto

const texto = '       kdkdkdkdkdk       '
//Quita los espacios en blanco al principio y al final de la cadena
console.log(texto.trim())

//Crea un array que almacena en cada coma en una posicion
const calle = "Bravo Murillo, holi, 28"
console.log(calle.split(','))

var trozos=calle.split(',')
console.log(trozos[1]) //devuelve lo que haya en la posicion 1, en este caso holi