const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // Verifica se a função createMenu() retorna um objeto que possui a chave fetchMenu 
    expect(createMenu({nome: 'Matheus'})).toHaveProperty('fetchMenu');
    // Verifica se o valor da chave fetchMenu do objeto retornado pela função createMenu() é uma função
    expect(typeof createMenu({nome: 'Matheus'}).fetchMenu).toBe('function');
    // Verifica se o objeto retornado pela função createMenu({ food: {}, drinks: {} }).fetchMenu() retorna um objeto cujas chaves são somente food e drinks
    expect(Object.keys(createMenu({ food: {}, drinks: {} }).fetchMenu())).toEqual([ 'food', 'drinks' ]);
    // Verifica se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função createMenu({ food: {}, drinks: {} }).fetchMenu()
    expect(createMenu({ food: {}, drinks: {} }).fetchMenu()).toEqual({ food: {}, drinks: {} });
    // Verifica se a propriedade consumption do objeto retornado pela função createMenu({ food: {}, drinks: {} }), após a criação do menu, retorna um array vazio
    expect(createMenu({ food: {}, drinks: {} }).consumption).toEqual([]);
    // Verificação pesaaada!
    const objetoRetornadoCreateMenu = createMenu(
      {food: {coxinha: 3.90, sanduiche: 9.90},
      drinks: {agua: 3.90, cerveja: 6.90}});
     expect(objetoRetornadoCreateMenu.order('coxinha')).toEqual(['coxinha']);
     expect(objetoRetornadoCreateMenu.consumption).toEqual(['coxinha']);  
     
     expect(objetoRetornadoCreateMenu.order('picanha')).toEqual('Item indisponivel');
     
     objetoRetornadoCreateMenu.order('agua');
     objetoRetornadoCreateMenu.order('cerveja');
    
     expect(objetoRetornadoCreateMenu.consumption).toEqual([ 'coxinha', 'agua', 'cerveja' ]);

     objetoRetornadoCreateMenu.order('agua');

     expect(objetoRetornadoCreateMenu.consumption).toEqual([ 'coxinha', 'agua', 'cerveja', 'agua' ]);
     expect(objetoRetornadoCreateMenu.pay()).toEqual(20.46)

  });
});
