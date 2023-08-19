const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => { 
    const pd = productDetails('Alcool gel', 'Máscara');
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um objeto
    // expect(typeof pd).toBe('object');
    expect(Array.isArray(pd)).toBeTruthy();
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(Object.keys(pd).length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof pd[0]).toBe('object');
    expect(typeof pd[1]).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(pd[0].name === pd[1].name).toBeFalsy();
    // Teste se os dois productIds terminam com 123.
    function check123() {
      const pd = productDetails('Alcool gel', 'Máscara');
      for (let index = 0; index < pd.length; index += 1) {
        const test = pd[index].details.productId.indexOf('123');
        if (test < 0) {
         return false; 
        }
      }
      return true;
    }

    expect(check123()).toBeTruthy();
  });
});
