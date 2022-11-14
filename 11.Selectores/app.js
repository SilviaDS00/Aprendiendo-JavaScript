//Obtener el elemento p identificado con un ID
var parrafo1 = document.getElementById("parrafo1") //seleccionar un elemento a traves de un id y se almacena en la variable
var parrafo2 = document.getElementsByClassName("parrafo2") //seleccionar un elemento a traves de una clase y se almacena en la variable
var parrafo3 = document.getElementsByTagName('p') //seleccionar un elemento a traves del nombre de una etiqueta y se almacena en la variable
parrafo3[2].id = "idprueba" //añadir un id cop estilo al parrafo3

//Aplicar estilo al parrafo3
parrafo3[2].style.backgroundColor = 'yellow' 


//------------OpenWebinars--------------------------------------------------->
let especial = document.getElementById("especial") //Selecciono del elemento con ese id y se guarda en una variable
especial.style.color="red" //Cambio el color de ese elemento a rojo

let noElement = document.getElementById("noExisto") //La variable se quedaría vacia porque no hay ningun elemento con ese id
if(!noElement){
    alert("No hay ningun elemento con el ID noExisto")
}

let lista = document.querySelectorAll("li") //Selecciono todos los elementos con esa etiqueta
console.log(lista)

//Recorrer elementos cuando se seleccionan varios:
//Con el for tipico
for(let i=0;i<lista.length;i++){
    lista[i].style.fontSize="2rem" //Le cambio el tamaño uno por uno a todos los elementos de la lista
}
//Con for of
for(const item of lista){
    item.style.fontSize="2.3rem"
}
//Con forEach
lista.forEach(item=>{
    item.style.fontSize="3rem"
})