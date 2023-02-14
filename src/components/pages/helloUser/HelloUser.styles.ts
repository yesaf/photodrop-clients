import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;
  margin-top: 167px;

  & > h2 {
    font-size: 18px;
    line-height: 22px;
    height: 13px;

  }

  & > input {
    margin-top: 20px;
    width: 100%;
    height: 40px;

    /* Background */

    background: #F4F4F4;
    /* Border */

    border: 1px solid #EEEEEE;
    border-radius: 10px;

    padding: 15px 0 14px 13px;

    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
  }

  & > button {
    margin-top: 21px;
    cursor: pointer;

    width: 100%;
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
    
    &:disabled {
      opacity: 0.33;
    }
  }
`;
