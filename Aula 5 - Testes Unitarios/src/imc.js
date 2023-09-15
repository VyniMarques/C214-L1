function calcularIMC(peso, altura) {
    if (altura === 0) {
      return 'NaN'; 
    }
  
    const alturaMetros = altura / 100; 
    return (peso / (alturaMetros * alturaMetros)).toFixed(2); 
}

function faixaDeIMC(peso, altura) {

    imc = calcularIMC(peso,altura)

    if(imc <= 18.5){
        return "Abaixo do peso";
    }else if( 18.6 <= imc && imc <= 24.9){
        return "Peso ideal"
    }else if( 25 <= imc && imc <= 29.9){
        return "Levemente acima do peso"
    }else if( 30 <= imc && imc <= 34.9){
        return "Obesidade I"
    }else if( 35 <= imc && imc <= 39.9){
        return "Obesidade II"
    }else{
        return "Obesidade III"
    }
}

module.exports = { calcularIMC, faixaDeIMC }; 