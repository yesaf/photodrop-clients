import styled from 'styled-components';
import addIcon from '../../../../../assets/images/icons/add-button.svg';

export const SelfieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 72px;
  position: relative;
  
  @media (min-width: 1440px) {
    margin-top: 178px;

  }

  & > h2 {
    font-size: 22px;
    line-height: 17px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #262626;
    
    @media (min-width: 1440px) {
      font-size: 30px;
      line-height: 22px;
    }
  }

  & > .text-explain {
    margin: 14px 0 0 0;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: center;
    
    width: 345px;

    color: #262626;
    
    @media (min-width: 1440px) {
      margin: 29px 0 0 0;
      font-size: 18px;
      line-height: 16px;

      width: 420px;
    }
  }

  & > .avatar-image {
    
    border: 1px solid #CECCB5;
    border-radius: 100px;
  }

  & > .selfie-input-container {
    position: relative;
    margin: 30px 0 0 0;
    width: 181px;
    height: 181px;
    
    & > #file-input {
      display: none;
    }
    
    @media (min-width: 1440px) {
        margin: 28px 0 0 0;
    }
  }
`;

export const AddButton = styled.button`
  position: absolute;
  border: none;
  cursor: pointer;

  width: 42px;
  height: 42px;
  border-radius: 100px;

  bottom: 0;
    right: 0;
  background-color: black;

  &:before {
    content: ' ';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    background-image: url(${addIcon});
    width: 42px;
    height: 42px;
  }

  &:hover {
    &:before {
      opacity: 0.85;
    }
  }
`;
