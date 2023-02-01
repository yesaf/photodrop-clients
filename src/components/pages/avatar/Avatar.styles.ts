import styled from 'styled-components';
import addIcon from '../../../assets/images/icons/add-button.svg';

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 72px;
  position: relative;

  & > header {
    font-family: termina, sans-serif;
    font-style: normal;
    font-weight: 700;
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

    //background-image: url(${addIcon});
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

export const DropDownMenu = styled.div`
  position: absolute;
  top: 279px;

  width: 226px;
  height: 119px;

  background: #F5F4F2;
  border-radius: 11px;

  & > button {
    width: 100%;
    border-width: 0 0 1px 0;
    border-radius: 0;
    cursor: pointer;

    display: flex;
    justify-content: space-between;

    font-family: 'Helvetica', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    /* identical to box height, or 133% */

    letter-spacing: 0.015em;

    color: #000000;

    &:hover {
      background: #E5E5E5;
    }

    &:first-child {
      border-top-left-radius: 11px;
      border-top-right-radius: 11px;
    }

    &:last-child {
      border-width: 0;
      border-bottom-left-radius: 11px;
      border-bottom-right-radius: 11px;
    }
  }

  & > .library-button {
    padding: 6px 9px 6px 14px;

    & > span {
      margin-top: 4px;
    }

    & > .icon {
      width: 33px;
      height: 27px;
    }
  }

  & > .photo-button {
    padding: 6px 9px 9px 14px;

    & > span {
      margin-top: 5px;
    }

    & > .icon {
      width: 33px;
      height: 25px;
    }
  }

  & > .file-button {
    padding: 11px 9px 9px 14px;

    & > .icon {
      width: 33px;
      height: 20px;
    }
  }
`;
