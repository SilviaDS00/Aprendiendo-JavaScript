// propiedad  innerHTML..modificamos contenido 
let inner=document.getElementById("inner")
inner.innerHTML="hola a <b>todosss</b>"

//Modificamos el contenido y el propio elemento
let outer=document.getElementById("outer")
outer.outerHTML="<ul><li>A</li><li>B</li></<ul>"

//modificamos contenido de un elemento, no distingue las entidades html
//Muestra lo del interior de la etiqueta, la etiqueta b no funcionaria
let text= document.getElementById("text")
text.innerText="<b>Adios a todos</b>" //Se escribiria en texto plano, no funcionaria las etiquetas b

//establezco un titulo
inner.title ="mensaje al pasar el raton"
inner.id="NO"