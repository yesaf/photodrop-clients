import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  height: calc(100vh - 55px);
  overflow-y: auto;
  padding-bottom: 80px;
  
  @media screen and (min-width: 1440px) {
    height: auto;
  }
  
  &::-webkit-scrollbar {
    display: none;
  }

  & > .unlock-button {
    position: fixed;
    margin: 0 15px;
    bottom: 17px;
    cursor: pointer;

    height: 50px;
    width: 345px;
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
      position: static;
      margin-top: 117px;
      margin-bottom: 118px;
      height: 50px;
      width: 300px;
      font-size: 22px;
    }
  }
`;
