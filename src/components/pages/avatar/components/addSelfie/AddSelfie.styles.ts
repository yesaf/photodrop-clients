import styled from 'styled-components';
import addIcon from '../../../../../assets/images/icons/add-button.svg';

export const SelfieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 72px;
  position: relative;

  & > h2 {
    font-size: 22px;
    line-height: 26px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #262626;
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


    color: #262626;
  }

  & > .avatar-image {
    margin: 30px 0 0 0;
    width: 181px;
    height: 181px;
    border: 1px solid #CECCB5;
    border-radius: 100px;
  }

  & > #file-input {
    display: none;
  }
`;

export const AddButton = styled.button`
  position: absolute;
  border: none;
  cursor: pointer;

  width: 42px;
  height: 42px;
  border-radius: 100px;

  top: 257px;
  right: 97px;
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
