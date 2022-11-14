var cifra = "";
var acumulado=0;
var sumar = false;
var restar = false;

//Establecemos el valor 0 cuando cargue el documento html
document.getElementById("display").value=0;

//Con esta funcion podremos escribir numeros y se van concatenando almacenandose en la variable cifra y estableciendo ese valor en el input.display para que se muestre en pantalla
function displayNumero(num){
    document.getElementById("display").value = cifra+num; //establecemos el valor de input.display la concatenacion de los numeros que se van pulsando
    cifra=document.getElementById("display").value; //Almacenamos en la variable cifra el valor que contenga el input.display
}

function suma(){
    acumulado = acumulado+(parseInt(cifra)); //Almaceno la suma de lo que haya almacenado con el valor de cifra, para poder sumar multiples numeros
    document.getElementById("display").value = acumulado; //establecemos el valor de input.display el valor de acumulado
    cifra = ""; //Reseteamos el valor de cifra para poder seguir sumando numeros
    sumar = true;
    restar = false;
}

function resta(){
    if(sumar){
        acumulado = acumulado+(parseInt(cifra));
        document.getElementById("display").value = acumulado;
    }else{
        acumulado = acumulado-(parseInt(cifra)); //Almaceno la resta de lo que haya almacenado con el valor de cifra, para poder sumar multiples numeros
        document.getElementById("display").value = acumulado; //establecemos el valor de input.display el valor de acumulado
    }
    cifra = ""; //Reseteamos el valor de cifra para poder seguir sumando numeros
    suma = false;
    restar = true;
}

//Funcion que detecta la operacion que hemos pulsado
function resultado(){
    if(sumar){
        document.getElementById("display").value = acumulado+(parseInt(cifra));
    }else if(restar){
        document.getElementById("display").value = acumulado-(parseInt(cifra));
    }
    acumulado = parseInt(document.getElementById("display").value);
}