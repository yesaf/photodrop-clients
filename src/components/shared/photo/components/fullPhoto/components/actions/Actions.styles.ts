import styled from 'styled-components';

export const ActionsContainer = styled.div`
  position: absolute;
  bottom: 30px;
  left: 15px;
  right: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  & > .unlock-btn {
    cursor: pointer;
    background: #FFFFFF;
    border-radius: 50px;
    border: none;
    
    width: 100%;
    height: 50px;
    
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
  }

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
