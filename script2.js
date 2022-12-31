//color
function myFunctionColor1() {
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

  const barra1 = document.getElementById("barra1");
  barra1.style.background = letras;

  const barra2 = document.getElementById("barra2");
  barra2.style.background = letras;

  const barra3 = document.getElementById("barra3");
  barra3.style.background = letras;
}
