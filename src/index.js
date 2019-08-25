let botonUno = document.getElementById("botonUno");
botonUno.addEventListener("click", () => {

  let textusuario = document.getElementById("ingText").value;
  let numusuario = document.getElementById("ingNum").value;
  window.cipher.encode(textusuario, numusuario);
  document.getElementById("textoFinal").innerHTML = window.cipher.encode(textusuario, numusuario);

});

let botonDos = document.getElementById("botonDos");
botonDos.addEventListener("click", () => {

  let textusuario = document.getElementById("ingText").value;
  let numusuario = document.getElementById("ingNum").value;
  window.cipher.encode(textusuario, numusuario);
  document.getElementById("textoFinal").innerHTML = window.cipher.decode(textusuario, numusuario);

});
