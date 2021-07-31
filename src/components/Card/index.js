import React, { useState } from 'react';

import {
  WhiteHeart, RedHeart, HeartControl, Top, CardBody,
  Image, Bottom, ProductName, OldPrice, Price, Installments, BuyButton,
} from './styled';

import camisa from '../../images/camiseta-frente-09.png';

function Card() {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleChange = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <CardBody>
      <Top>
        <p>02 Store</p>
        <label htmlFor="heart-control">
          { isFavorite ? <RedHeart /> : <WhiteHeart /> }
          <HeartControl onClick={handleChange} id="heart-control" type="checkbox" />
        </label>
      </Top>
      <Image src={camisa} alt="imagem de camisa" />
      <Bottom>
        <ProductName>Camiseta Manga Longa Night Run Hip Hop</ProductName>
        <OldPrice>
          De
          <span>R$ 49,90</span>
        </OldPrice>
        <Price>R$ 19,90</Price>
        <Installments>
          <span>1x</span>
          de
          <span>19,90</span>
        </Installments>
        <BuyButton type="button">
          comprar
        </BuyButton>
        <p>
          Não sócio
          <span>49,90</span>
        </p>
      </Bottom>
    </CardBody>
  );
}

export default Card;
