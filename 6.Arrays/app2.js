//Mostrar el contenido del array en una tabla
//Array multidimensional
var palabras_espana = new Array('facebook','tuenti','youtube','hotmail','marca');
var palabras_suiza = new Array('facebook','youtube','hotmail','google','blick');
var palabras_portugal = new Array('facebook','youtube','hotmail','jogos','download');
var palabras_mas_buscadas = new Array(palabras_espana,palabras_portugal,palabras_suiza);

document.write("<table border=1>");

//Recorrer array multidimensional
for(var i=0; i<palabras_mas_buscadas.length; i++){
    document.write("<tr>")
    document.write("<td><b>Estado " + i + "</b></td>")
    for(var j=0; j<palabras_mas_buscadas[i].length; j++){
        document.write("<td>" + palabras_mas_buscadas [i][j] + "</td>")
    }
    document.write("</td>")
}
document.write("</table>")