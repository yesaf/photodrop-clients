import styled from 'styled-components';

export const CustomHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 11px 0 10px 15px;

  width: 100%;
  height: 55px;

  @media screen and (min-width: 1440px) {
    height: 60px;
    justify-content: flex-start;
  }

    & > .back-button-container {
    position: absolute;
    left: 0;
    top: 0;
    margin: 12.5px 4px;
    
    @media screen and (min-width: 1440px) {
      margin: 15.5px 0 14.5px 30px;
    }
  }

  // Button appears on the right side of the header when the screen is wide enough (1440px+)
  & > .unlock-button {
    position: absolute;
    right: 122px;
    
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    
    color: #3300CC;
    
    border: none;
    background: none;
    cursor: pointer;
    
    &:hover {
        text-decoration: underline;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 38px;
  height: 55px;
  width: 375px;
  
  @media screen and (min-width: 1440px) {
    margin-left: 120px;
    width: auto;
    height: 60px;
    flex-direction: row;
    align-items: center;
  }

  & > .title {
    font-size: 18px;
    line-height: 22px;
    height: 18px;
    text-align: start;
    margin-top: 6px;
    
    @media screen and (min-width: 1440px) {
      margin-top: 0;
      font-size: 22px;
      line-height: 1em;
    }
  }

  & > .details {
    font-weight: 400;
    font-size: 14px;
    line-height: 10px;
    margin: 10px 0 0 0;

    & > .photos {
      color: #3300CC;
    }
    
    @media screen and (min-width: 1440px) {
      margin: 0 0 0 38px;
      font-size: 16px;
      line-height: 10px;
    }
  }
`;
