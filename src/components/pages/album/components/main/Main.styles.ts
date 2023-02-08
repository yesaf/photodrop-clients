import styled from 'styled-components';

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .photos-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    width: 375px;

    @media screen and (min-width: 1440px) {
      width: 1200px;
    }
  }

  & > .unlock-button {
    margin: 40px 0;
    width: 345px;
    height: 50px;
    cursor: pointer;

    background: #3300CC;
    border-radius: 50px;
    border: none;

    font-weight: 500;
    font-size: 18px;
    line-height: 23px;

    color: #FFFFFF;

    &:hover {
      background: #2A00A6;
    }

    @media screen and (min-width: 1440px) {
      margin: 100px 0;
      width: 300px;
      font-size: 22px;
      line-height: 15px;
    }
  }
`;
