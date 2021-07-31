import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import GlobalContext from '../../context';
import { calcInstallments, convertPriceToString } from '../../services/convert';
import {
  WhiteHeart, RedHeart, HeartControl, Top, CardBody,
  Image, Bottom, ProductName, OldPrice, Price, Installments, BuyButton, PriceMessage,
} from './styled';

function Card({
  product: {
    id, store, favorite, image, productName, oldPrice, price, installments,
  },
}) {
  const [isFavorite, setIsFavorite] = useState(favorite);

  const { products, setProducts } = useContext(GlobalContext);

  const setProductAsFavorite = (favo) => {
    const updated = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          favorite: favo,
        };
      }
      return product;
    });

    setProducts(updated);
  };

  const handleChange = () => {
    setIsFavorite(!isFavorite);
    setProductAsFavorite(!isFavorite);
  };

  return (
    <CardBody>
      <Top>
        <p>{`${store} store`}</p>
        <label htmlFor="heart-control">
          { isFavorite ? <RedHeart /> : <WhiteHeart /> }
          <HeartControl onClick={handleChange} id="heart-control" type="checkbox" />
        </label>
      </Top>
      <Image src={image} alt={`Imagem de ${productName}`} />
      <Bottom>
        <ProductName>{productName}</ProductName>
        <OldPrice>
          De
          <span>{convertPriceToString(oldPrice)}</span>
        </OldPrice>
        <Price>{convertPriceToString(price)}</Price>
        <Installments>
          <span>{`${installments}x`}</span>
          de
          <span>{calcInstallments(price, installments)}</span>
        </Installments>
        <BuyButton type="button">
          comprar
        </BuyButton>
        <PriceMessage>
          Não sócio
          <span>{convertPriceToString(oldPrice)}</span>
        </PriceMessage>
      </Bottom>
    </CardBody>
  );
}

Card.propTypes = {
  product: PropTypes.objectOf(PropTypes.string, PropTypes.number).isRequired,
};

export default Card;
