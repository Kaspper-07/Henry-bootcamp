'use strict'

function BinarioADecimal(num){
  let sum = 0;
  
  let longitud = num.toString()

  for (let i = 0; i < longitud.length; i++) {
     sum = sum + longitud[i] * Math.pow(2, (longitud.length - 1 - i));
  }
  return sum;
}

function DecimalABinario(num) {
  // tu codigo aca
  let number = num;
  let resultado = (number % 2).toString();
  for (; number > 1; ) {
      number = parseInt(number / 2);
      resultado =  (number % 2) + (resultado);
  }
  return resultado
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}