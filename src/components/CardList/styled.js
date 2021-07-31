import styled, { keyframes } from 'styled-components';

const colors = keyframes`
  50% {
    background-position: 100vw 100vh;
  }

  100% {
    background-position: 0 200vh;
  }
`;

const CardListBody = styled.main`
  align-items: center;
  animation: ${colors} 20s linear infinite;
  background: linear-gradient(45deg, #F1ECC3, #C9D8B6, #57837B, #515E63);
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

export default CardListBody;
