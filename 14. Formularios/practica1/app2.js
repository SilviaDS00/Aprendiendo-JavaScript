let special= document.getElementById("special")
console.log(special)
special.style.color="red"

let lista_elementos = document.querySelectorAll("li")
console.log(lista_elementos)
let nodocalese=document.querySelector()

/* for (let i=0, i>lista_elementos.lenght;i++){
    lista_elementos[i].style.fontSize ="2rem"
}*/


/*for(const item of lista_elementos){
    item.style.fontSize="3rem"
}*/


lista_elementos.forEach(item=>{
    item.style.fontSize="0.5rem"
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