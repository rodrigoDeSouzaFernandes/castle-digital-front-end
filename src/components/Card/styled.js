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
  display: flex;
  flex-direction: column;
  border: solid 1px #D3D3D3;
  padding: 10px;
  width: 270px;
  border-radius: 10px;
`;

export const Top = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    color: white;
    background: #DC143C;
    padding: 3px 10px;
    text-transform: uppercase;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 600;
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
  text-align: center;
  border-top: 1px solid #D3D3D3;
  padding: 20px 0;
  font-size: 15px;
  margin: 0 15px;
`;

export const OldPrice = styled.p`
  font-size: 12px;
  color: #808080;

  span {
    text-decoration: line-through;
    margin-left: 5px; 
  }
`;

export const Price = styled.p`
  color: #DC143C;
  font-size: 30px;
  position: relative;
  width: 100%;
  text-align: center;
  font-family: 'Lilita One', cursive;

  :before {
    font-size: 10px;
    padding: 2px;
    border-radius: 5px;
    z-index: 1;
    content: '* PRIME';
    position: absolute;
    left: -17px;
    top: 5px;
    width: 36px;
    height: 26px;
    background: #DC143C;
    font-size: 10px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 0.7;
  }

  :after {
    border-radius: 3px;
    content: '-';
    position: absolute;
    left: 11px;
    top: 10px;
    width: 20px;
    height: 20px;
    background: #DC143C;
    font-size: 10px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(45deg);
    color: #DC143C;
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
  width: 80%;
  padding: 10px;
  background: #00FF00;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;

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