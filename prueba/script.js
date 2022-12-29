//nombre
function myFunctionN() {
  var palabra = document.getElementById("nombreP").value;
  console.log(palabra);
  var letras;
  letras = palabra;

  const res = document.getElementById("pex");
  res.innerHTML = letras;
  res.style.color = "#fff";
  res.style.fontSize = "1.5rem";
  res.style.marginTop = "20px";
  res.style.textAlign = "center";
  res.style.fontWeight = "600";
  res.style.height = "1.4em";
}
//imagen
/* function myFunctionImag() {
  var palabra = document.getElementById("imagen").value;
  console.log(palabra);
  var letras;
  letras = palabra;

  const res = document.getElementById("im");
  res.src = letras;
} */

function mostrar() {
  var archivo = document.getElementById("file").files[0];
  var reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo);
    reader.onloadend = function () {
      document.getElementById("img").src = reader.result;
    };
  }
}
//telefono
function myFunctionTelefono() {
  var palabra = document.getElementById("telefono").value;
  console.log(palabra);
  var letras;
  letras = palabra;

  const res = document.getElementById("tel");
  res.innerHTML = letras;
  res.style.color = "#fff";
  res.style.fontSize = "16PX";
}

//correo
function myFunctionCorreo() {
  var palabra = document.getElementById("correo").value;
  var letras;
  letras = palabra;

  const res = document.getElementById("corr");
  res.innerHTML = letras;
  res.style.color = "#fff";
  res.style.fontSize = "16PX";
}
//linkedin
function myFunctionLinkedin() {
  var palabra = document.getElementById("linkedin").value;
  var letras;
  letras = palabra;

  const res = document.getElementById("link");
  res.innerHTML = letras;
  res.style.color = "#fff";
  res.style.fontSize = "16PX";
}

//color
function myFunctionColor() {
  var palabra = document.getElementById("color").value;
  console.log(palabra);
  var letras;
  letras = palabra;
  if (
    letras === "#ffffff" &&
    "#F8F8FF" &&
    "#F5F5F5" &&
    "#FEFEFA" &&
    "# F5FEFD" &&
    "# FFFFF0" &&
    "# FFFAF0" &&
    "# FFF5EE" &&
    "# FFF8DC" &&
    "# FDF5E6" &&
    "# FFFDD0" &&
    "# F5F5DC" &&
    "# F1E9D2" &&
    "# FAEBD7" &&
    "# F7E7CE" &&
    "# F0EAD6" &&
    "#EFDFBB" &&
    "# E3DAC9" &&
    "# EDEAE0"
  ) {
    return alert("error");
  }

  const res = document.getElementById("colorrr");
  res.style.background = letras;
  const resT = document.getElementById("colTEX");
  resT.style.color = letras;

  const resT2 = document.getElementById("colTEX2");
  resT2.style.color = letras;

  const resT3 = document.getElementById("colTEX3");
  resT3.style.color = letras;

  const barra11 = document.getElementById("barra11");
  barra11.style.background = letras;

  const barra12 = document.getElementById("barra12");
  barra12.style.background = letras;

  const barra13 = document.getElementById("barra13");
  barra13.style.background = letras;

  const barra14 = document.getElementById("barra14");
  barra14.style.background = letras;

  const barra15 = document.getElementById("barra15");
  barra15.style.background = letras;

  const barra16 = document.getElementById("barra16");
  barra16.style.background = letras;

  const barra17 = document.getElementById("barra17");
  barra17.style.background = letras;

  const barra18 = document.getElementById("barra18");
  barra18.style.background = letras;

  const barra19 = document.getElementById("barra19");
  barra19.style.background = letras;
  const barra20 = document.getElementById("barra20");
  barra20.style.background = letras;
}

//provincia
function myFunctionProv() {
  var palabra = document.getElementById("provincia").value;
  var letras;
  letras = palabra;

  const res = document.getElementById("prov");
  res.innerHTML = letras;
  res.style.color = "#fff";
  res.style.fontSize = "16PX";
}

/* Educacion */

function myFunctionFecha() {
  var palabra = document.getElementById("fecha").value;
  var letras;
  letras = palabra;

  const res = document.getElementById("fech");
  res.innerHTML = letras;
  res.style.color = "#77A7FF";
  res.style.fontWeight = "500";
}

function myFunctionInstituto() {
  var palabra = document.getElementById("instituto").value;
  var letras;
  letras = palabra;

  const res = document.getElementById("instituto0");
  res.innerHTML = letras;
  res.style.color = "#FFFF";
  res.style.fontWeight = "300";
}

function myFunctionNombre() {
  var palabra = document.getElementById("nombre").value;
  var letras;
  letras = palabra;

  const res = document.getElementById("nombre0");
  res.innerHTML = letras;
  res.style.color = "#FFFF";
  res.style.fontWeight = "300";
}

/* cursos */

function myFunctionCursosFech() {
  var palabra = document.getElementById("cursosF").value;
  var letras;
  letras = palabra;

  const res = document.getElementById("curFecha");
  res.innerHTML = letras;
  res.style.color = "#77A7FF";
  res.style.fontWeight = "500";
}

function myFunctionCursos1() {
  var palabra = document.getElementById("cursosF1").value;
  var letras;
  letras = palabra.substr(0, 10);

  const res = document.getElementById("c1");
  res.innerHTML = letras;
  res.style.color = "#FFFF";
  res.style.fontWeight = "300";
}
function myFunctionCursos2() {
  var palabra = document.getElementById("cursosF2").value;
  var letras;
  letras = palabra.substr(0, 10);

  const res = document.getElementById("c2");
  res.innerHTML = letras;
  res.style.color = "#FFFF";
  res.style.fontWeight = "300";
}
function myFunctionCursos3() {
  var palabra = document.getElementById("cursosF3").value;
  var letras;
  letras = palabra.substr(0, 10);

  const res = document.getElementById("c3");
  res.innerHTML = letras;
  res.style.color = "#FFFF";
  res.style.fontWeight = "300";
}

/* /////////////////Perfil */

function myFunctionPerfil() {
  var palabra = document.getElementById("perfil").value;
  var letras;
  letras = palabra.substr(0, 480);

  const res = document.getElementById("pe");
  res.innerHTML = letras;

  res.style.color = "black";
  res.style.fontSize = "1rem";
  res.style.fontWeight = "600";
  res.style.height = "1em";
}

//Experiencia

function myFunctionFechaExp() {
  var palabra = document.getElementById("expF").value;
  var letras;
  letras = palabra;

  const res = document.getElementById("expFecha");
  res.innerHTML = letras.substr(0, 9);
  res.style.color = "#77A7FF";
  res.style.fontWeight = "500";
}

function myFunctionExperiencia() {
  var palabra = document.getElementById("expDes").value;
  var letras;
  letras = palabra.substr(0, 40);

  const res = document.getElementById("objet");
  res.innerHTML = letras;
  res.style.color = "black";
  res.style.fontWeight = "300";
}

function myFunctionExperienciaL1() {
  var palabra = document.getElementById("expDes1").value;
  var letras;
  letras = palabra.substr(0, 200);

  const res = document.getElementById("exp1");
  res.innerHTML = letras;

  res.style.color = "black";
  res.style.fontSize = "1rem";
  res.style.fontWeight = "600";
  res.style.height = "1em";
}

/* ///// */

function myFunctionFechaExp2() {
  var palabra = document.getElementById("expF2").value;
  var letras;
  letras = palabra;

  const res = document.getElementById("expFecha2");
  res.innerHTML = letras.substr(0, 9);
  res.style.color = "#77A7FF";
  res.style.fontWeight = "500";
}

function myFunctionExperiencia2() {
  var palabra = document.getElementById("expDes2").value;
  var letras;
  letras = palabra.substr(0, 40);

  const res = document.getElementById("objet2");
  res.innerHTML = letras;
  res.style.color = "black";
  res.style.fontWeight = "300";
}

function myFunctionExperienciaL12() {
  var palabra = document.getElementById("expDes12").value;
  var letras;
  letras = palabra.substr(0, 200);

  const res = document.getElementById("exp12");
  res.innerHTML = letras;

  res.style.color = "black";
  res.style.fontSize = "1rem";
  res.style.fontWeight = "600";
  res.style.height = "1em";
}

/* porcentaje */

function myFunctionPrcentaje() {
  var palabra = document.getElementById("porc").value;
  var letras;
  letras = palabra;
  Number(letras);

  const res = document.getElementById("barra1");
  /*  res.innerHTML = letras; */

  const pepe = (res.style.width = letras + "%");
  pepe.innerHTML;
}

function myFunctionPrcentaje2() {
  var palabra = document.getElementById("porc2").value;
  var letras;
  letras = palabra;
  Number(letras);

  const res = document.getElementById("barra2");
  /*  res.innerHTML = letras; */

  const pepe = (res.style.width = letras + "%");
  pepe.innerHTML;
}
function myFunctionPrcentaje3() {
  var palabra = document.getElementById("porc3").value;
  var letras;
  letras = palabra;
  Number(letras);

  const res = document.getElementById("barra3");
  /*  res.innerHTML = letras; */

  const pepe = (res.style.width = letras + "%");
  pepe.innerHTML;
}
/* /////////////////////////////////////// */

function myFunctionPrcentaje11() {
  var palabra = document.getElementById("porc11").value;
  var letras;
  letras = palabra;
  Number(letras);

  const res = document.getElementById("barra11");
  /*  res.innerHTML = letras; */

  const pepe = (res.style.width = letras + "%");
  pepe.innerHTML;
}

function myFunctionPrcentaje12() {
  var palabra = document.getElementById("porc12").value;
  var letras;
  letras = palabra;
  Number(letras);

  const res = document.getElementById("barra12");
  /*  res.innerHTML = letras; */

  const pepe = (res.style.width = letras + "%");
  pepe.innerHTML;
}
function myFunctionPrcentaje13() {
  var palabra = document.getElementById("porc13").value;
  var letras;
  letras = palabra;
  Number(letras);

  const res = document.getElementById("barra13");
  /*  res.innerHTML = letras; */

  const pepe = (res.style.width = letras + "%");
  pepe.innerHTML;
}
function myFunctionPrcentaje14() {
  var palabra = document.getElementById("porc14").value;
  var letras;
  letras = palabra;
  Number(letras);

  const res = document.getElementById("barra14");
  /*  res.innerHTML = letras; */

  const pepe = (res.style.width = letras + "%");
  pepe.innerHTML;
}
function myFunctionPrcentaje15() {
  var palabra = document.getElementById("porc15").value;
  var letras;
  letras = palabra;
  Number(letras);

  const res = document.getElementById("barra15");
  /*  res.innerHTML = letras; */

  const pepe = (res.style.width = letras + "%");
  pepe.innerHTML;
}
function myFunctionPrcentaje16() {
  var palabra = document.getElementById("porc16").value;
  var letras;
  letras = palabra;
  Number(letras);

  const res = document.getElementById("barra16");
  /*  res.innerHTML = letras; */

  const pepe = (res.style.width = letras + "%");
  pepe.innerHTML;
}
function myFunctionPrcentaje17() {
  var palabra = document.getElementById("porc17").value;
  var letras;
  letras = palabra;
  Number(letras);

  const res = document.getElementById("barra17");
  /*  res.innerHTML = letras; */

  const pepe = (res.style.width = letras + "%");
  pepe.innerHTML;
}

function myFunctionPrcentaje18() {
  var palabra = document.getElementById("porc18").value;
  var letras;
  letras = palabra;
  Number(letras);

  const res = document.getElementById("barra18");
  /*  res.innerHTML = letras; */

  const pepe = (res.style.width = letras + "%");
  pepe.innerHTML;
}
function myFunctionPrcentaje19() {
  var palabra = document.getElementById("porc19").value;
  var letras;
  letras = palabra;
  Number(letras);

  const res = document.getElementById("barra19");
  /*  res.innerHTML = letras; */

  const pepe = (res.style.width = letras + "%");
  pepe.innerHTML;
}


//ingles

function myFunctionPrcentajeIngles() {
  var palabra = document.getElementById("porcIng").value;
  var letras;
  letras = palabra;
  Number(letras);

  const res = document.getElementById("barraIng");
  /*  res.innerHTML = letras; */

  const pepe = (res.style.width = letras + "%");
  pepe.innerHTML;
}