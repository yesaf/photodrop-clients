import styled from 'styled-components';
import PhoneInput from 'react-phone-number-input';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 136px;
  padding: 0 15px;

  & > .enter-phone-text {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-align: start;

    margin-top: 14px;

    width: 345px;

    color: #262626;

    @media (min-width: 1440px) {
      width: 420px;
      margin-top: 29px;
    }
  }

  & > p.message {
    margin: 20px 0 0 0;
    width: 340px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;

    color: #6D6D6D;

    @media (min-width: 1440px) {
      width: 420px;
      font-size: 16px;
      line-height: 19px;
    }
  }

  & > p.policy {
    width: 345px;
    margin-top: 38px;

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    align-items: center;
    letter-spacing: -0.02em;

    /* Dark Grey - #6D6D6D */

    color: #6D6D6D;

    @media (min-width: 1440px) {
      display: none;
    }
  }
`;

export const FormHeader = styled.h2`
  -webkit-font-smoothing: antialiased;
  font-size: 22px;
  line-height: 17px;
  text-align: center;
  color: #262626;

  @media (min-width: 1440px) {
    font-size: 30px;
    line-height: 36px;
  }
`;

export const StyledPhoneInput = styled(PhoneInput)`
  margin-top: 19px;

  @media (min-width: 1440px) {
    width: 420px;
    margin-top: 18px;
  }

  & > input {
    box-sizing: border-box;
    width: 265px;
    height: 40px;
    margin-left: 10px;

    /* Background */

    background: #F4F4F4;
    /* Border */

    border: 1px solid #EEEEEE;
    border-radius: 10px;

    padding: 13px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: center;

    color: #262626;

    @media (min-width: 1440px) {
      width: 341px;
      font-size: 18px;
      line-height: 23px;
    }
  }
`;

export const CreateButton = styled.button`
  margin-top: 20px;
  width: 345px;
  height: 50px;

  background: #3300CC;
  border: 0;
  border-radius: 50px;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height */

  text-align: center;

  color: #FFFFFF;

  cursor: pointer;

  &:hover {
    background: #4D00E6;
  }

  @media (min-width: 1440px) {
    width: 420px;
  }
`;
