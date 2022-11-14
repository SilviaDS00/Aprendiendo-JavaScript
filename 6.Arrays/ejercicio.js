//Mostrar los numeros pares del array
var arr = [0,1,2,3,4,5,6,7,8,9]

for(var i=0; i<arr.length; i++){
    if(arr[i]%2===0){
    console.log(arr[i]);
    }
}

//Mostrar la suma de todos los numeros almacenados en el array e ir mostrando los resultados
var total = 0 //Declarar la variable fuera del bucle!! sino se reinicia a 0 todo el rato!!
for(var i=0; i<arr.length; i++){
    total += arr[i]
    console.log(total)
}
console.log("La suma de todos los numeros es: " + total)
