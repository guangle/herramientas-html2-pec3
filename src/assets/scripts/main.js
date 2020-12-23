

/** Funcion que se ejecuta en los diferentes test que hay en la web,
 * se encarga, en funcion de si la respuesta es correcta o no, mostrar
 * diferentes animaciones en la tarjeta que contiene la pregunta y colorearla
 * para que el usuario sepa si ha acertado o no
 */

var respuesta = function () {
  var correcta = this.getAttribute("es-correcta");
  const tarjeta = this.parentElement.parentElement;

  tarjeta.classList.remove("shake-horizontal");
  tarjeta.classList.remove("jello-horizontal");
  tarjeta.firstElementChild.classList.remove("bg-color_fest_verde");
  tarjeta.firstElementChild.classList.remove("bg-color_fest_rosa");
  var respuestas = tarjeta.getElementsByClassName("respuesta");
  for (var i = 0; i < respuestas.length; i++) {
    respuestas.item(i).classList.remove("font-weight-bold");
  }

  this.classList.add("font-weight-bold");
  if (correcta == 1) {
    tarjeta.classList.add("jello-horizontal");
    tarjeta.firstElementChild.classList.add("bg-color_fest_verde");
  } else {
    tarjeta.classList.add("shake-horizontal");
    tarjeta.firstElementChild.classList.add("bg-color_fest_rosa");
  }
};

//Aplicamos la función implementada a cada una de las respuestas
var respuestas = document.getElementsByClassName("respuesta");
Array.from(respuestas).forEach(function (r) {
  r.addEventListener("click", respuesta);
});
