import styled from 'styled-components';
import { Heart } from '@styled-icons/evil/Heart'
import {Heart as FilledHeart} from '@styled-icons/evaicons-solid/Heart'

export const WhiteHeart = styled(Heart)`
  color: #DC143C;
  width: 30px;
`;

export const RedHeart = styled(FilledHeart)`
  color: #DC143C;
  width: 30px;
`;

export const HeartControl = styled.input`display: none;`;

export const CardBody = styled.div`
  align-items: center;
  background: white;
  border: solid 1px #D3D3D3;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 5px;
  padding: 10px;
  width: 270px;
`;

export const Top = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    background: #DC143C;
    border-radius: 5px;
    color: white;
    font-size: 12px;
    font-weight: 600;
    padding: 3px 10px;
    text-transform: uppercase;
  }
`;

export const Image = styled.img`
  filter: drop-shadow(5px 5px 5px #D3D3D3);
`;

export const Bottom = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.h3`
  border-top: 1px solid #D3D3D3;
  font-size: 15px;
  margin: 0 15px;
  padding: 20px 0;
  text-align: center;
`;

export const OldPrice = styled.p`
  color: #808080;
  font-size: 12px;

  span {
    margin-left: 5px; 
    text-decoration: line-through;
  }
`;

export const Price = styled.p`
  color: #DC143C;
  font-family: 'Lilita One', cursive;
  font-size: 30px;
  position: relative;
  text-align: center;
  width: 100%;

  :before {
    align-items: center;
    background: #DC143C;
    border-radius: 5px;
    color: white;
    content: '* PRIME';
    display: flex;
    font-size: 10px;
    height: 26px;
    justify-content: center;
    left: -17px;
    line-height: 0.7;
    padding: 2px;
    position: absolute;
    top: 5px;
    width: 36px;
    z-index: 1;
  }

  :after {
    align-items: center;
    background: #DC143C;
    border-radius: 3px;
    color: #DC143C;
    content: '-';
    display: flex;
    font-size: 10px;
    height: 20px;
    justify-content: center;
    left: 11px;
    position: absolute;
    top: 10px;
    transform: rotate(45deg);
    width: 20px;
  }
`;

export const Installments = styled.p`
  color: grey;
  font-size: 15px;
  margin: 5px 0 10px;

  span:nth-child(1) {
    color: #00FF00;
    font-weight: 600;
    margin-right: 5px;
  }

  span:nth-child(2) {
    color: black;
    font-weight: 600;
    margin-left: 5px;
  }
`;

export const BuyButton = styled.button`
  background: #00FF00;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  padding: 10px;
  transition: 0.2s;
  width: 80%;

  :hover {
    background-color: #32CD32;
  }
`;

export const PriceMessage = styled.p`
  color: #808080;
  font-size: 15px;
  margin: 3px;

  span {
    color: #696969;
    font-weight: 600;
    margin-left: 5px;
  }
`;