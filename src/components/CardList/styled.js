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
  background: linear-gradient(45deg, #E6DDC6, #C2B8A3, #A19882);
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

export default CardListBody;
