let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

const printMessage = (characterInfo) => {
  if (typeof characterInfo !== 'object') {
    throw new Error('teste');
  } else {
    let result = `Boas vindas, ${characterInfo.personagem}`;
    return result;
  }
};

// console.log(printMessage(2));

module.exports = { info, printMessage };