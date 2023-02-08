import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 15px;
  width: 375px;
  
  @media screen and (min-width: 1440px) {
    width: 1200px;
    padding: 0;
  }

  & > header {
    margin-top: 15px;

    font-weight: 500;
    font-size: 14px;
    line-height: 10px;

    text-align: start;
    
    @media screen and (min-width: 1440px) {
        margin-top: 40px;
      font-size: 16px;
      line-height: 13px;
    }
  }
  
  & > .albums-container {
    width: 100%;
    
    display: flex;
    flex-direction: row;
    overflow-x: auto;

    margin-top: 10px;

    &::-webkit-scrollbar {
      display: none;
    }
    
    @media screen and (min-width: 1440px) {
        margin-top: 19px;
    }
  }
`;

export const Album = styled(Link)`
  margin-right: 5px;
  overflow: hidden;
  position: relative;
  box-sizing: content-box;

  width: 110px;
  height: 140px;
  
  flex: 0 0 auto;

  display: flex;
  justify-content: center;
  border-radius: 20px;
  
  @media screen and (min-width: 1440px) {
    width: 200px;
    height: 255px;
  }
  
  & > .name {
    width: 100%;
    position: absolute;
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;

    bottom: 20px;
    padding: 0 5px;

    font-weight: 450;
    font-size: 12px;
    line-height: 15px;

    color: #FFFFFF;
    
    @media screen and (min-width: 1440px) {
      font-size: 14px;
    }
  }
`;
