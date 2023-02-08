import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LayoutHeader = styled.header`
  background-color: #fff;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: #F1F0EC;

  & > .left {
    left: 0;
    margin: 12.5px 8px;
  }

  & > .right {
    right: 0;
    margin: 10px 15px;
  }

  @media (min-width: 1440px) {
    height: 60px
  }
`;

export const HeaderLink = styled(Link)`
  display: flex;
  justify-content: center;
  height: 100%;

  & > svg {
    --logo-height: 16px;
    --logo-width: 125px;
    margin-top: 20px;

    @media (min-width: 1440px) {
      --logo-height: 22px;
      --logo-width: 179px;
      margin-top: 19px;
    }

    height: var(--logo-height);
    width: var(--logo-width);

    & > image {
      height: var(--logo-height);
      width: var(--logo-width);
    }
  }
`;

interface IHButtonProps {
    isShown?: boolean;
}

export const HeaderButtonContainer = styled.div.attrs<IHButtonProps>(({ isShown }) => ({
    style: {
        display: isShown ? 'flex' : 'none',
    },
}))<IHButtonProps>`
  position: absolute;
  top: 0;
`;

export const LayoutMain = styled.main`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;

  & > div:first-child {
    width: 375px;

    @media (min-width: 1440px) {
      width: 1200px
    }
  }
`;
