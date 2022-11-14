document.addEventListener("DOMContentLoaded", function(evento){
    const email = document.getElementById("email")
    const codpostal = document.getElementById("cp")
    const form = document.querySelector("form")

    form.addEventListener('submit', validarFormulario)

    email.addEventListener("keyup", function(e){
        if(this.value){
            this.setCustomValidity("")
        }else{
            this.setCustomValidity("Campo vacío")
        }
    })

    codpostal.addEventListener("keyup", function(e){
        if(this.value){
            this.setCustomValidity("")
        }else{
            this.setCustomValidity("Campo vacío")
        }
    })

    function validarFormulario(evento){
        evento.preventDefault()
        evento.stopPropagation()
        
        let valido = true

        if(!email.value){
            email.setCustomValidity("Campo vacío")
            valido = false
        }else{
            email.setCustomValidity("")
        }

        if(codpostal.value.length!=5){
            codpostal.setCustomValidity("Tiene que tener 5 numeros")
            valido = false
        }else{
            codpostal.setCustomValidity("")
        }

        if(valido){
            this.submit
        }else{
            email.setCustomValidity("")
        }
    }
})