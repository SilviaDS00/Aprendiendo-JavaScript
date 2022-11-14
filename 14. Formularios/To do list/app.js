/*const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector("ul");

addBtn.addEventListener('click',(e) =>{
    e.preventDefault();

    const text = input.value;

    if(text!==''){
        const li = document.createElement('li');
        const p = document.createElement('p');

        p.textContent = text;
        
        li.appendChild(p);
        li.appendChild(botonDelete());
        ul.appendChild(li);
    
        input.value = "";
    }
});


function botonDelete(){
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = "x";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener('click', (e) =>{
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll('li');

    });
    return deleteBtn;
}

    var list = document.querySelector('ul');

    list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
    }, false);*/


    //Solucion profesor
    window.addEventListener("load", e => {
        const formulario = document.getElementById("formulario");
        const listaTareas = document.getElementById("lista-tareas");
        const input = document.getElementById("input")
        const plantilla = document.getElementById("temp").content;
    
    
        let tareas = {};
        pintarTareas(e);
    
    
    
        formulario.addEventListener("submit", e => {
            e.preventDefault();
            setTarea(e);
        });
    
        listaTareas.addEventListener("click", e => {
            btnAccion(e);
        })
    
        function pintarTareas(e) {
            console.log(tareas);
            const fragment = document.createDocumentFragment();
    
            //esto tampoco lo hice en la clase
            //primero hay qe vaciar completamente listatareas para no aÃ±adir a lo que ya hay
            listaTareas.innerHTML = "";
    
            for (i in tareas) {
                //console.log(tareas[i]);
    
                //el hay que clonar la plantilla en cada iteraciÃ³n del for
                //eso es lo que hice mal en clase, que estaba fuera antes del for la siguiente lÃ­nea:
                const clon = plantilla.cloneNode(true);
    
                //console.log(tareas[i].texto);
                //console.log(clon);
                //console.log(clon.querySelector(".alert p"));
    
    
                //Modificamos la plantilla insertando texto donde corresponda
                clon.querySelector(".alert p").innerHTML = tareas[i].texto;
    
                //guardo el id en el dataset de los elementos i que hacen las veces de botones
                clon.querySelector("i.fa-check-circle").dataset.id = tareas[i].id;
                clon.querySelector("i.fa-times-circle").dataset.id = tareas[i].id;
    
                if (tareas[i].completada) {
                    clon.querySelector(".alert-warning").classList.replace("alert-warning", "alert-success");
                    clon.querySelector(".fa-check-circle").classList.replace("fa-check-circle", "fa-arrow-circle-left");
                    clon.querySelector("p").style.textDecoration = "line-through";
                }
    
    
                //anexamos el clon al fragmento
                fragment.appendChild(clon);
            }
            //anexamos el fragmento al div listatareas
            listaTareas.appendChild(fragment);
    
        }
    
        function setTarea(e) {
            //console.log(input.value.trim());
            if (input.value.trim() === "") {
                console.log("No has introducido nada");
    
            } else {
                const tarea = {
                    id: Date.now(),
                    texto: input.value.trim(),
                    completada: false
                }
                tareas[tarea.id] = tarea;
                input.value = "";
                pintarTareas(e);
            }
    
        }
    
        function btnAccion(e) {
            console.log(e.target);
            const boton = e.target;
            //si es el botÃ³n del check de completar
            if (boton.classList.contains("fa-check-circle")) {
                console.log("hemos pulsado en completar tarea");
                tareas[boton.dataset.id].completada = true;
    
                //si no, si es el botÃ³n de eliminar tarea
            } else if (boton.classList.contains("fa-times-circle")) {
                delete tareas[boton.dataset.id];
    
                //si no, si es el botÃ³n de marcar como no completada (flecha atras)
            } else if (boton.classList.contains("fa-arrow-circle-left")) {
                tareas[boton.dataset.id].completada = false;
            }
    
    
            pintarTareas();
        }
    });
