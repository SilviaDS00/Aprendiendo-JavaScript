var repetir = "si"
do{
function suma(num1, num2){
    console.log("La suma es: " + (num1+num2)) //Asi concatena, no funcionaria la suma, haremops un parseInt en los dos operadores solicitados
}

function resta(num1, num2){
    console.log("La resta es: " + (num1-num2))
}

function multi(num1, num2){
    console.log("La multiplicacion es: " + (num1*num2))
}

function division(num1, num2){
    console.log("La division es: " + (num1/num2))
}

function resto(num1, num2){
    console.log("El resto es: " + (num1%num2))
}

var operacion = prompt("¿Que operacion desea realizar?")
//Hacemos un parseInt para que en la suma no concatene los dos parametros y haga la operación en sí
var operador1 = parseInt(prompt("Introduce el primer numero"))
var operador2 = parseInt(prompt("Introduce el segundo numero"))
if(operacion=="sumar"){
    suma(operador1,operador2)
}else if(operacion=="restar"){
    resta(operador1,operador2)
}else if(operacion=="multiplicar"){
    multi(operador1,operador2)
}else if(operacion=="dividir"){
    division(operador1,operador2)
}else if(operacion=="resto"){
    resto(operador1,operador2)
}
else{
    console.log("No ha introducido correctamente la operacion")
}
repetir = prompt("¿Desea repetir?")
}while(repetir=="si" || repetir=="Si" || repetir=="Sí" || repetir=="sí")
