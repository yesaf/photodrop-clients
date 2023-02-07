import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100vw;
  top: -55px;
  left: calc(-50vw + 50%);
  background-color: #fff;
  z-index: 1;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 375px;
  padding: 0;

  font-family: 'Halvetica', sans-serif;
  
  @media (min-width: 1440px) {
    width: 600px;
  }

  & > .search-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;

    & > .search-input {
      width: 100%;
      border-radius: 5px;
      padding: 5px 10px;
      outline: 1px solid #000;
      border: none;

      @media (min-width: 1440px) {
        font-size: 20px;
      }
    }
  }
`;

export const SelectHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 30px;
  margin: 5px 0;

  @media (min-width: 1440px) {
    height: 40px;
  }

  & > .title {
    font-size: 16px;
    line-height: 20px;
    font-weight: 550;
    color: #262626;
    
    @media (min-width: 1440px) {
      font-size: 22px;
    }
  }

  & > .close-button {
    position: absolute;
    right: 0;
    font-size: 16px;
    line-height: 20px;
    border: none;
    background-color: transparent;
    color: #262626;
    cursor: pointer;

    @media (min-width: 1440px) {
      font-size: 20px;
    }
  }
`;

export const CustomSelect = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  flex: 1;
  overflow-y: auto;
  margin: 10px 0 0 0;
  padding: 0;

  & > li {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    cursor: pointer;
    border-bottom: 1px solid #eee;
    
    @media (min-width: 1440px) {
      font-size: 20px;
    }

    & > .country-flag {
      width: 18px;
      height: 12px;
      margin-right: 10px;
    }
  }

`;
