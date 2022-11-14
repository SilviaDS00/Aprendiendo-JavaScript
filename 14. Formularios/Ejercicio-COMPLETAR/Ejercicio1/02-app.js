window.addEventListener("load", e => {

    //vamos a cambiar el estilo del elemento con clase navbar-brand 
    const brand = document.getElementsByClassName("navbar-brand");
    console.log(brand);
    brand[0].getElementsByClassName.color="red";

    //seleccionamos el elemento a dentro de div.jumbotron
    const divjumbo = document.querySelector(".jumbotron a.btn-primary")

   //Le quitamos y le ponemos una clase 
    divjumbo.classList.remove("jumbotron");
    divjumbo.classList.add("colorRojo");

    //Seleccionamos todos los elementos a con clase btn-secondary dentro de elementos de la
    //clase .col-md-6
    const btnCols = document.querySelectorAll("col-md-6 a.btn-secondary");
    
    //si queremos hacer algo con todos los elementos de la colección habría que recorrerlos.
    btnCols.forEach(element => {
        //Quitar la clase btn-secondary
        element.classList.remove("btn-secondary");
        //Añadir la clase btn-danger
        element.classList.add("btn-danger");
    });

    //Seleccionar todos los elementos con la clase col-md-6 
    const cols = document.querySelectorAll(".col-md-6")

    //accedo al tercer elemento y le cambio el estilo a mano
    cols[4].style.backgroundColor="#FE9";
    cols[5].style.backgroundColor="#FE9";

    //recorremos todos los elementos
    cols.forEach(element => {
        //le asignamos un evento click a cada uno de ellos
        element.addEventListener("click", function (e) {
            element.classList.toggle("marcar");
        });

    });

});