const mensaje ='hello hello'
function nueva(){
  console.log('Hola mundo')
  console.log(mensaje)
}
nueva()

Suma(2,4) //Agisnamos dos parametros
function Suma(a,b){ //Recoge los parámetros indicados
  var total = a + b //Se suman los valores de los parametros
  console.log(total)
}

function otraNueva(name = 'Valor por defecto'){ //Si a la hora de ejecutar la funcion no se introducen parámetros, cogerá este valor
    console.log(name)
}
otraNueva('Valor asignado') //Coge el valor indicado aqui
otraNueva() //Coge el valor declarado en la funcion


function devuelveHola(texto='Hola'){
    return texto + ' Mundo'
}
devuelveHola() 