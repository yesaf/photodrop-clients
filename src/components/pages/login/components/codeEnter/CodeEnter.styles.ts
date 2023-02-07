import styled from 'styled-components';

export const FormContainer = styled.div`
  margin-top: 106px;
  padding: 0 15px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1440px) {
    margin-top: 178px;
  }

  & > h2 {
    font-size: 22px;
    line-height: 17px;
    text-align: center;

    color: #262626;

    @media (min-width: 1440px) {
      font-size: 30px;
      line-height: 22px;
    }
  }

  & > p {
    width: 345px;
    height: 13px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    margin-top: 14px;
    margin-bottom: 19px;

    /* Black - #262626 */

    color: #262626;

    & > b {
      font-weight: 500;
    }

    @media (min-width: 1440px) {
      width: 420px;
      margin-top: 29px;
      font-size: 18px;
      line-height: 16px;
    }
  }

  & > button {
    padding: 0;
  }

  & > .resend-button {
    width: 345px;
    margin-top: 20px;
    background: transparent;
    border: none;
    cursor: pointer;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 13px;
    display: flex;
    align-items: center;

    color: #3300CC;

    @media (min-width: 1440px) {
      font-size: 18px;
      line-height: 13px;
        width: 420px;
    }
  }

  & > .next-button {
    width: 345px;
    height: 50px;
    margin-top: 19px;

    background: #3300CC;
    border-radius: 50px;
    border: none;
    cursor: pointer;

    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    /* identical to box height */

    text-align: center;

    color: #FFFFFF;

    &:disabled {
      opacity: 0.33;
    }

    @media (min-width: 1440px) {
      width: 420px;
      font-size: 22px;
      line-height: 28px;
    }
  }
`;
