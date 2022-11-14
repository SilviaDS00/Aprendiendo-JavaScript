const FLIGTH = 100
const HOTEL = 60
const TOUR = 20
const TOTAL = FLIGTH+HOTEL+TOUR
const BUDGET = 250

if(BUDGET>TOTAL){
    console.log("Te puedes ir de viaje")
}else if(BUDGET===TOTAL){
    console.log("Tambien te puedes ir de viaje")
}else{
    console.log("No te puedes ir de viaje")
}

const RESULTADO = BUDGET>=TOTAL ?console.log("Te puedes ir de viaje"):console.log("No te puedes ir")

//---------------DO-WHILE----------------
do{
    console.log("Se va a ejecutar al menos 1 vez y luego se establece la condicion del while")
}while(FLIGTH==90)

//---------------WHILE------------------
while(FLIGTH==90){
    console.log("No se va a ejecutar este bucle porque no se cumple la condicion")
}