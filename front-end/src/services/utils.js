const convertedValue = (value) => new Intl
  .NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
  .format(Number(value));

export default convertedValue;
