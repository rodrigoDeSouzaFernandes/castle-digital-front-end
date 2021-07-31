import React, { useContext } from 'react';
import GlobalContext from '../../context';
import Card from '../Card';

function CardList() {
  const { products } = useContext(GlobalContext);
  return (
    <div>
      {products.map((product) => (
        <Card key={product.productName} product={product} />
      ))}
    </div>
  );
}

export default CardList;
