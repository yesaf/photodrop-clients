import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  background-color: #262626;

  @media (min-width: 1440px) {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 375px;

  @media (min-width: 1440px) {
    width: 379px;
    height: 653px;
    background-color: #262626;
    border-radius: 20px;
    
    margin-top: 97px;
  }

  .explain {
    margin-top: 94px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 11px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
  }
`;

export const CropHeader = styled.header`
  width: 375px;
  position: relative;
  display: flex;
  justify-content: center;
  
  @media (min-width: 1440px) {
    width: 379px;
  }

  & > .close {
    position: absolute;
    left: 0;
    top: 0;
    width: 30px;
    height: 30px;
    
    padding: 0;
    
    margin-top: 15.5px;
    margin-left: 15px;

    background-color: transparent;
    border: none;
    border-radius: 50%;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }

    & > svg {
      width: 15px;
      height: 15px;

      & > image {
        width: 15px;
        height: 15px;
      }
    }
  }

  & > span {
    margin-top: 23px;

    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 13px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;
  }
`;

export const CropContainer = styled.div`
  position: relative;
  width: 285px;
  height: 285px;
  margin-top: 42px;
  overflow: hidden;

  border-radius: 50%;
  
  .reactEasyCrop_CropArea {
    color: #262626;
    border: 1px solid #CECCB5;
    border-radius: 50%;
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  width: 375px;
  margin-top: 57.75px;

  & > button {
    width: 170px;
    height: 50px;
    border-radius: 50px;
    cursor: pointer;

    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;

    &.retake {
      border: 1px solid #FFFFFF;
      background-color: transparent;
      color: #FFFFFF;

      &:hover {
        opacity: 0.5;
      }
    }

    &.save {
      background-color: #FFFFFF;
      color: #262626;

      &:hover {
        opacity: 0.5;

      }
    }
  }


  & > input {
    display: none;
  }
`;
