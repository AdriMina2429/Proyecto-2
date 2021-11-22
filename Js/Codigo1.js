
document.getElementById("btn-cambiar").addEventListener("click",function(){
    var mensaje = document.getElementById("msj").value;
    var nuevoMensaje = "";
    for(i=0;i<mensaje.length ;i++){
        var codMsj = mensaje[i].charCodeAt();
        var codNuevo = codMsj + 2;
        nuevoMensaje += String.fromCharCode(codNuevo);
    }
    document.getElementById("new_msj").innerHTML = nuevoMensaje;
   })
   document.getElementById("btn-cambiar").addEventListener("click",function(){
    var mensaje = document.getElementById("msj").value;
    var nuevoMensaje = "";
    for(i=0;i<mensaje.length ;i++){
        var codMsj = mensaje[i].charCodeAt();
        var codNuevo = codMsj + 2;
        nuevoMensaje += String.fromCharCode(codNuevo);
    }
    document.getElementById("new_msj").innerHTML = nuevoMensaje;
   })

function bnt(){
    var continuar = document.getElementById("ctnr").value;

    alert("¡Bienvenid@ al lugar secreto de los teletubies!");
}
function enviar(){
    var enviar = document.getElementById("enviar").value;
    
    alert("Gracias por pertenecer a la familia Teletubie <3");
}
