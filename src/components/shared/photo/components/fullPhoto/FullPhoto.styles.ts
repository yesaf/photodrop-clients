import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: #262626;

  display: flex;
  justify-content: center;

  z-index: 100;
  
  @media screen and (min-width: 1440px) {
    background: rgba(0, 0, 0, 0.95);
  }
`;

export const Container = styled.div`
  position: relative;
  width: 375px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 15px;

  @media screen and (min-width: 1440px) {
    padding: 0;
    width: 100%;
  }
  
  & > img {
    width: 100%;
    
    @media screen and (min-width: 1440px) {
      width: auto;
      height: 100%;
    }
  }

`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15.5px;
  left: 7px;

  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  
  border-radius: 50%;
  
  @media screen and (min-width: 1440px) {
    top: 23px;
    left: 32px;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  & > svg {
    width: 15px;
    height: 15px;

    & > image {
      width: 15px;
      height: 15px;
    }
  }
`;
