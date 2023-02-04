import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  top: -55px;
  left: 0;
  background-color: #262626;

  .explain {
    margin-top: 94px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
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
  margin-top: 15.5px;

  & > button {
    position: absolute;
    left: 0;
    top: 0;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;

    display: flex;
    align-items: center;
    justify-content: center;

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
    margin-top: 7.5px;
    height: 13px;

    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
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
  margin-top: 32px;


  .reactEasyCrop_CropArea {
    color: #262626;
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
        background-color: #1f1f1f;
      }
    }

    &.save {
      background-color: #FFFFFF;
      color: #262626;

      &:hover {
        background-color: #e5e5e5;
      }
    }
  }


  & > input {
    display: none;
  }
`;
