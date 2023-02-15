import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1440px) {
    margin-top: 40px;
  }

  & > h2 {
    font-size: 18px;
    line-height: 13px;

    @media screen and (min-width: 1440px) {
      font-size: 30px;
      line-height: 22px;
    }
  }

  & > span {
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    width: 345px;

    @media screen and (min-width: 1440px) {
      width: 420px;
      font-size: 22px;
      line-height: 23px;
    }

    &.album-unlocked {
      margin-top: 20px;
    }

    &.user-can {
      margin-top: 19px;
    }
  }
  
  & > .details {
    // Only not mobile span styles
    margin-top: 19px;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
  }
`;

export const AlbumCoverContainer = styled.div`
  margin-top: 20px;
  width: 345px;
  height: 200px;
  border-radius: 20px;
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    width: 420px;
    height: 250px;
    margin-top: 39px;
  }

  & > img {
    width: 100%;
  }
`;

export const SeePhotosButton = styled(Link)`
  margin-top: 30px;
  width: 345px;
  height: 50px;

  background: #3300CC;

  border-radius: 50px;

  text-align: center;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 50px;
  color: #FFFFFF;

  &:hover {
    // darker on hover
    background: #2d00b3;
  }

  @media screen and (min-width: 1440px) {
    width: 350px;
    margin-top: 40px;
    font-size: 22px;
  }
`;
