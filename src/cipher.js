window.cipher = {
  encode: (textusuario, numusuario) => {
    let cipEncode = "";
    for (let i = 0; i < textusuario.length; i++) {

      let txt = textusuario.charCodeAt(i);
      if (65 <= txt && txt <= 90) {

        cipEncode += String.fromCharCode(
          ((txt - 65 + parseInt(numusuario)) % 26) + 65
        );
      } else if (97 <= txt && txt <= 122) {

        cipEncode += String.fromCharCode(
          ((txt - 97 + parseInt(numusuario)) % 26) + 97
        );
      } else {
        cipEncode += textusuario.charAt(i);
      }
    }
    return cipEncode;
  },

  decode: (textusuario, numusuario) => {
    let cipDecode = "";
    for (let i = 0; i < textusuario.length; i++) {

      let txt = textusuario.charCodeAt(i);
      if (65 <= txt && txt <= 90) {

        cipDecode += String.fromCharCode(
          ((txt + 65 - parseInt(numusuario)) % 26) + 65
        );
      } else if (97 <= txt && txt <= 122) {

        cipDecode += String.fromCharCode(
          ((txt - 97 - parseInt(numusuario) + 52) % 26) + 97
        );
      } else {
        cipDecode += textusuario.charAt(i);
      }
    }
    return cipDecode;
  }
};