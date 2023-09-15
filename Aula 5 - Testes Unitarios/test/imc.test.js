const { expect } = require('chai');
const { calcularIMC } = require('../src/imc');
const { faixaDeIMC } = require('../src/imc');

describe('Calculadora de IMC', () => {

  it('Calculadora deve rodar tranquilo', () => {
    const peso = 80; // 80 kg
    const altura = 180; // 180 cm

    const IMEsperado = (peso / Math.pow(altura / 100, 2)).toFixed(2);
    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal(IMEsperado);
  });

  it('Altura = 0, entrada inadequada', () => {
    const peso = 70; // 70 kg
    const altura = 0; // 0 cm

    const IMCCalculado = calcularIMC(peso, altura);

    expect(IMCCalculado).to.equal('NaN');
  });

  it('teste para levemente acima do peso', () => {
    const peso = 90; // 90 kg
    const altura = 180; // 180 cm

    const faixa = faixaDeIMC(peso, altura)
    expect(faixa).to.equal('Levemente acima do peso');
  })

  it('teste para obesidade III', () => {
    const peso = 120; // 120 kg
    const altura = 160; // 160 cm

    const faixa = faixaDeIMC(peso, altura)
    expect(faixa).to.equal('Obesidade III');
  })

  it('teste para abaixo do peso', () => {
    const peso = 60; // 60 kg
    const altura = 200; // 200 cm

    const faixa = faixaDeIMC(peso, altura)
    expect(faixa).to.equal('Abaixo do peso');
  })



});