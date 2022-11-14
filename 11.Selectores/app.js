//Obtener el elemento p identificado con un ID
var parrafo1 = document.getElementById("parrafo1") //seleccionar un elemento a traves de un id y se almacena en la variable
var parrafo2 = document.getElementsByClassName("parrafo2") //seleccionar un elemento a traves de una clase y se almacena en la variable
var parrafo3 = document.getElementsByTagName('p') //seleccionar un elemento a traves del nombre de una etiqueta y se almacena en la variable
parrafo3[2].id = "idprueba" //añadir un id cop estilo al parrafo3

//Aplicar estilo al parrafo3
parrafo3[2].style.backgroundColor = 'yellow' 