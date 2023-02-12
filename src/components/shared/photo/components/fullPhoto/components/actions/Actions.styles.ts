import styled from 'styled-components';

export const ActionsContainer = styled.div`
  position: absolute;
  bottom: 30px;
  left: 15px;
  right: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 1440px) {
    bottom: 30px;
    right: 40px;
    left: auto;
    gap: 30px;

    &.locked {
      left: 40px;
      width: calc(100% - 80px);
      justify-content: center;
    }
  }


  & > button {
    background: none;
    border: none;
    cursor: pointer;

    padding: 0;
  }

  & > .unlock-btn {
    background: #FFFFFF;
    border-radius: 50px;

    width: 100%;
    height: 50px;

    font-weight: 500;
    font-size: 18px;
    line-height: 23px;

    @media screen and (min-width: 1440px) {
      width: 200px;

      font-size: 22px;
      line-height: 28px;
    }
  }

  & > button, & > a {
    &:hover {
      opacity: 0.5;
    }
  }

  & > .download-btn {
    height: 37px;
    width: 58px;

    & > svg {
      height: 37px;
      width: 58px;

      & > image {
        height: 37px;
        width: 58px;
      }
    }
  }

  & > .share-btn {
    height: 37px;
    width: 32px;

    & > svg {
      height: 37px;
      width: 32px;

      & > image {
        height: 37px;
        width: 32px;
      }
    }

    @media screen and (min-width: 1440px) {
      display: none;
    }
  }

  & > .frame-btn {
    height: 50px;
    width: 196px;

    border: 1px solid #FFFFFF;
    border-radius: 50px;

    font-weight: 500;
    font-size: 18px;
    line-height: 23px;

    color: #FFFFFF;

    @media screen and (min-width: 1440px) {
      width: 200px;

      font-size: 22px;
      line-height: 28px;
    }
  }
`;
