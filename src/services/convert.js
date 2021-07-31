export const convertPriceToString = (price) => `R$ ${price.toFixed(2).replace('.', ',')}`;

export const calcInstallments = (price, installment) => {
  console.log(price, installment, price / installment);
  return (price / installment).toFixed(2).replace('.', ',');
};
