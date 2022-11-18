let special= document.getElementById("special")
console.log(special)
special.style.color="red" //Se añade el estilo inline
special.classList.add("estilocss") //Se añade el estilo a traves del css asignando el nombre de la clase creada

let lista_elementos = document.querySelectorAll("li")
console.log(lista_elementos)

//Formas de recorrer los elementos
/* for (let i=0, i>lista_elementos.lenght;i++){
    lista_elementos[i].style.fontSize ="2rem"
}*/

/*for(const item of lista_elementos){
    item.style.fontSize="3rem"
}*/

lista_elementos.forEach(item=>{
    item.style.fontSize="3rem"
    special.classList.add("estilodecss")
})


//hemos dado teoria... objetos del modelo -> constantes de Node
/*
propiedades como nodeName
                nodeValue
                node.element_node
                .firstChild/lastChild
                .childNodes (#text lo entiende como sifuesen espacios en blanco)
                for (let i = 0; i < nodeList.length; i++) {
                text += nodeList[i].nodeName + "<br>";

                .previousSiblings
                appendChildeNode

                ACCESO AL DOCUMENTO DESDE CÓDIGO
                DOMContentLoaded
                hasta que no este plenamente cargado el dom no va a poder trabajar

}

*/