export const convertPriceToString = (price) => `R$ ${price.toFixed(2).replace('.', ',')}`;

export const calcInstallments = (price, installment) => (
  (price / installment).toFixed(2).replace('.', ','));
