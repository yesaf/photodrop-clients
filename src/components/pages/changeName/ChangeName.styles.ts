import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
  margin-top: 167px;

  @media screen and (min-width: 1440px) {
    margin-top: 255px;
    padding: 0;
  }

  & > h2 {
    font-size: 18px;
    line-height: 13px;
    @media screen and (min-width: 1440px) {
      font-size: 22px;
      line-height: 18px;
    }
  }

  & > input {
    margin-top: 20px;
    width: 345px;
    height: 40px;

    /* Background */

    background: #F4F4F4;
    /* Border */

    border: 1px solid #EEEEEE;
    border-radius: 10px;

    padding: 15px 0 14px 13px;

    font-weight: 400;
    font-size: 16px;
    line-height: 11px;

    @media screen and (min-width: 1440px) {
      width: 420px;
      font-size: 18px;
      margin-top: 30px;
    }
  }

  & > button {
    margin-top: 21px;
    cursor: pointer;

    width: 345px;
    height: 50px;

    background: #3300CC;
    border-radius: 50px;
    border: none;

    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    /* identical to box height */

    color: #FFFFFF;

    &:hover {
      // dark on hover
      background: #2A00A6;
    }

    @media screen and (min-width: 1440px) {
      width: 420px;
      font-size: 22px;
      line-height: 15px;
      margin-top: 20px;
    }
  }
`;
