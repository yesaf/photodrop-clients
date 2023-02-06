import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: #262626;
  // media background
  //background: rgba(0, 0, 0, 0.95);

  display: flex;
  justify-content: center;

  z-index: 100;
`;

export const Container = styled.div`
  position: relative;
  width: 375px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 15px;

  & > img {
    width: 100%;
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

export const ActionsContainer = styled.div`
  position: absolute;
  bottom: 30px;
  left: 15px;
  right: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > button {
    background: none;
    border: none;
    cursor: pointer;
    
    padding: 0;
  }

  & > button, & > a {
    &:hover {
        opacity: 0.5;
    }
  }
  
  & > .download-btn {
    height: 37px;
    width: 58px;

    & > svg {
      height: 37px;
      width: 58px;

      & > image {
        height: 37px;
        width: 58px;
      }
    }
  }

  & > .share-btn {
    height: 37px;
    width: 32px;

    & > svg {
      height: 37px;
      width: 32px;

      & > image {
        height: 37px;
        width: 32px;
      }
    }
  }
  
    & > .frame-btn {
        height: 50px;
        width: 196px;
      
      border: 1px solid #FFFFFF;
      border-radius: 50px;

      font-weight: 500;
      font-size: 18px;
      line-height: 23px;
      
        color: #FFFFFF;
    }
`;
