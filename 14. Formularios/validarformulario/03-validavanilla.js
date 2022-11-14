window.addEventListener("load", function(){
    //Capturamos los elementos del formulario
    const formulario = this.document.querySelector("#formulario")
    const usuario = this.document.querySelector("#user")
    const passwd = this.document.querySelector("#passwd")
    const newpasswd = this.document.querySelector("#newpasswd")
    const fechanacimiento = this.document.querySelector("#fechanacimiento")
    const condiciones = this.document.querySelector("#condiciones")

    //Funcion de validacion del formulario asociada al boton submit
    formulario.addEventListener("submit", evento =>{
        //Prevenir el comportamiento por defecto
        evento.preventDefault();
        evento.stopPropagation();

        //Usaremos la variable valido y comienza con el valor true, en el caso de que haya 
        let valido = true;
    })

    if(!valiUser(usuario)){
        valido = false
    }

    if(!validaPass(passwd)){
        valido = false
    }

    if(!validaPass2(newpasswd,passwd)){
        valido = false
    }

    if(!validaFecha(fechanacimiento)){
        valido = false
    }

    if(!validaEdad(edad)){
        valido = false
    }

    if(!validaCheck(condiciones)){
        valido = false
    }

    //------------Funciones de validacion-----------------
    //Validamos el ususario y recibimos el unout no el valor del input
    function valiUser(el){
        if(!el.value){
            el.parentNode.querySelector("p").textContent=""
            el.parentNode.classList.add("error")
            return false;
        }else{
            el.parentNode.querySelector("p").textContent=""
            el.parentNode.classList.remove("error")
            return true;
        }
    }

    function validaPass(el){
        if(el.value.length<7){
            marcaError(el, "El password debe tener al menos 7 caracteres")
            return false;
        }else{
            marcaValido(el)
            return true;
        }
    }

    //validar password

    function validaPass2(newpasswd, oldpass){
        if(newpasswd===oldpass){
            newpasswd.parentNode.querySelector(".error-feedback").textContent=""
            return false;
        }else{
            newpasswd.parentNode.querySelector(".error-feedback").textContent="Los password deben coincidir"
            return true;
        }
    }

    //validar fecha
    function validaFecha(el){
        if(el.value){
            el.parentNode.querySelector(".error-feedback").textContent=""
            return true
        }else{
            el.parentNode.querySelector(".error-feedback").textContent="Debe seleccionar una fecha"
            return false
        }
    }

    //validar checkbox
    function validaCheck(el){
        if(el.checked){
            el.parentNode.querySelector(".error-feedback").textContent=""
            return true
        }else{
            el.parentNode.querySelector(".error-feedback").textContent="Tiene que marcar la casilla"
            return false
        }
    }

    function validaEdad(el){
        if(el.value<120){
            el.parentNode.querySelector(".error-feedback").textContent=""
            return true
        }else{
            el.parentNode.querySelector(".error-feedback").textContent="Edad no valida"
        return false
        }
    }

    //----------funcion de utilidad------------
    function marcaError(el, mensaje){
        el.parentNode.querySelector(".error-feedback").textContent=mensaje
        el.parentNode.classList.add("error")
    }

    function marcaValido(el){
        el.parentNode.querySelector(".error-feedback").textContent=""
        el.parentNode.classList.add("remove")
    }
})

window.addEventListener("reset", function(){
    
})