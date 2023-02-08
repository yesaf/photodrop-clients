import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h2 {
    margin-top: 20px;
    font-size: 18px;
    line-height: 13px;

    @media screen and (min-width: 1440px) {
      margin-top: 40px;
      font-size: 30px;
      line-height: 22px;
    }
  }

  & > p {
    margin: 16px 0 0 0;
    font-size: 16px;
    letter-spacing: -0.02em;

    @media screen and (min-width: 1440px) {
      margin: 15px 0 0 0;
      font-size: 18px;
      width: 700px;
    }
  }
`;
