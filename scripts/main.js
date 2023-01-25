function msjCifrado() {
  //obtener los valores de los campos
  var mensaje = document.getElementById("mensaje").value;
  var mensaje = mensaje.toLowerCase();
  var mensaje = mensaje.replace(/[e]/gi, "enter");
  var mensaje = mensaje.replace(/[i]/gi, "imes");
  var mensaje = mensaje.replace(/[a]/gi, "ai");
  var mensaje = mensaje.replace(/[o]/gi, "ober");
  var mensaje = mensaje.replace(/[u]/gi, "ufat");

  //pasar mensaje de un lado a otro
  document.getElementById("respuesta").innerHTML = mensaje;
}

function msjRevelado() {
  var mensaje = document.getElementById("respuesta").value;
  var mensaje = mensaje.toLowerCase();
  var mensaje = mensaje.replace(/enter/gi, "e");
  var mensaje = mensaje.replace(/imes/gi, "i");
  var mensaje = mensaje.replace(/ai/gi, "a");
  var mensaje = mensaje.replace(/ober/gi, "o");
  var mensaje = mensaje.replace(/ufat/gi, "u");

  //pasar mensaje de un lado a otro
  document.getElementById("respuesta").innerHTML = mensaje;
}

function copy() {
  let texto = document.getElementById("respuesta");
  texto.select();
  document.execCommand("copy");
}
