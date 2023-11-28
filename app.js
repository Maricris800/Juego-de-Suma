let pregunta = document.querySelector(".pregunta");

let numero1 = document.querySelector("#num1");
let numero2 = document.querySelector("#num2");

const boton = document.querySelectorAll(".boton-respuesta");

const boton1 = document.querySelector("#boton-respuesta1");
const boton2 = document.querySelector("#boton-respuesta2");
const boton3 = document.querySelector("#boton-respuesta3");

let resultadoTexto =document.querySelector(".resultado");

let resultadoMostrarTexto = document.querySelector(".resultado-texto");

let resultado = parseInt(numero1.textContent) + parseInt(numero2.textContent);

for (let i = 0; i < boton.length; i++){
  boton[i].addEventListener("click", () => {
    boton[i].textContent == resultado ? evaluar(true,resultado) : evaluar(false,resultado);
  });
}

function evaluar(a,res) {
  if (a) {
      resultadoTexto.textContent = "CORRECTO";
      resultadoTexto.style = "display:block";
      resultadoTexto.style = "color:green";
      resultadoMostrarTexto.textContent = res;
      setTimeout(nuevaOperacion,2000);
  } else {
      resultadoTexto.textContent = "INTENTA NUEVAMENTE";
      resultadoTexto.style = "display:block";
      resultadoTexto.style = "color:red";
  }
}

function nuevaOperacion(){
  let num1 = Math.floor(Math.random()* 11);
  let num2 = Math.floor(Math.random() * 11);
  resultadoMostrarTexto.textContent="?"
  
  let resultado = 0;
  resultado = num1 + num2;

  numero1.textContent = num1;
  numero2.textContent = num2;
  
  textoBotones(resultado)
}

function textoBotones(resultado) {
  //console.log(resultado)
  num = Math.floor(Math.random()*3);
  if (num === 0) {
    boton1.textContent = resultado;
    boton2.textContent= (resultado - 1);
    boton3.textContent = (resultado + 1);
    boton1.value = resultado;
    boton2.value = (resultado - 1);
    boton3.value = (resultado + 1);
  }
  if (num === 1) {
    boton1.textContent = (resultado - 1);
    boton2.textContent = resultado;
    boton3.textContent = (resultado + 1);
    boton1.value = (resultado - 1);
    boton2.value = resultado;
    boton3.value = (resultado + 1);
  }
  if (num === 2) {
    boton1.textContent = (resultado - 1);
    boton2.textContent = (resultado  + 1);
    boton3.textContent = resultado;
    boton1.value = (resultado - 1);
    boton2.value = (resultado + 1);
    boton3.value = resultado;
  }
}









