import React, { useContext } from 'react';
import GlobalContext from '../../context';
import Card from '../Card';

import CardListBody from './styled';

function CardList() {
  const { products } = useContext(GlobalContext);
  return (
    <CardListBody>
      {products.map((product) => (
        <Card key={product.productName} product={product} />
      ))}
    </CardListBody>
  );
}

export default CardList;
