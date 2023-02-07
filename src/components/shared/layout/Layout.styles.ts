import styled from 'styled-components';

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

  & > a {
    display: flex;
    justify-content: center;
    height: 100%;

    & > svg {
      --logo-height: 16px;

      margin-top: 20px;
      height: var(--logo-height);
      width: calc(var(--logo-height) * 125 / 16);

      & > image {
        height: var(--logo-height);
        width: calc(var(--logo-height) * 125 / 16);
      }
    }
  }
  
  & > .left {
    left: 0;
    margin: 12.5px 8px;
  }

  & > .right {
    right: 0;
    margin: 10px 15px;
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
  position: relative;
  justify-content: center;

  & > div:first-child {
    width: 375px;
  }
`;
