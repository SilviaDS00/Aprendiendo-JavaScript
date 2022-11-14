//Operadores aritméticos
console.log(2+2)
console.log(4-2)
console.log(2*3)
console.log(10/2) //Devuelve el resultado de la division
console.log(10%3) //Devuelve el resto de la division

//Operadores de comparación, devuelve valores booleanos
console.log(4>2)
console.log(4>=5)
console.log(4<2)
console.log(4<=5)
console.log(4==4)
console.log(7=='7')
console.log(7==='7')//Compara si son iguales y del mismo tipo, uno es numérico y el otro String
console.log(4!=3)
console.log(4!=='4')

//Saber el tipo de las variables
let num = 8
console.log(typeof num) //devuelve number

let nombre = "Silvia" 
console.log(typeof nombre) //devuelve String

//Dice si es un numero o no (ambos lo son)
console.log(isNaN('2')) //devuelve false porque SI es un numero
console.log(isNaN(2)) //devuelve false porque SI es un numero

console.log(isNaN('Nombre')) //devuelve true porque NO es un numero

const numero = 2+"Carlitos" //Se concatena un numero con un String
console.log(typeof(numero)) //Y devuelve true porque NO es un número despues de concatenarlo

console.log(isNaN(num.toString)) //pasamos de numero a un String y devuelve true porque se convierte en un String

let num2 = 6
console.log(num2.toFixed()) //Lo convierte a entero
console.log(num2.toFixed(2)) //Añade dos decimales = 6.00

let decimal = 12.2354534
console.log(decimal.toFixed(2)) //Te muestra dos decimales redondeando hacia abajo si es menor que 5
                                //y hacia arriba si es mayor o igual que 5
console.log(decimal.toFixed(3)) //Te muestra tres decimales redondeando igual que antes
