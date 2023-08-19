/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (obj) => {
  const consumption = [];

  function fetchMenu() {
    return obj;
  }

  function order(string) {
    // console.log(Object.keys(obj.food));
    if (Object.keys(obj.food).includes(string) || Object.keys(obj.drinks).includes(string)) {
      consumption.push(string);
      return consumption;
    } 
    return 'Item indisponivel';
  }
  
  function pay() {
    let sum = 0;
    for (let index = 0; index < consumption.length; index += 1) {
      if (obj.drinks[`${consumption[index]}`]) {
        sum += obj.drinks[`${consumption[index]}`];
      } else if (obj.food[`${consumption[index]}`]) {
        sum += obj.food[`${consumption[index]}`];
      }
    }
    const sumWithPercentual = parseFloat(sum.toFixed(2)) + (sum * 0.1);
    return sumWithPercentual;
  }

  return {
    fetchMenu,
    consumption,
    order,
    pay,
  };
};

module.exports = createMenu;
