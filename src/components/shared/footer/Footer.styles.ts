import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  height: 682px;
  background: #262626;

  display: flex;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    height: auto;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  box-sizing: content-box;

  width: 375px;
  color: #FFFFFF;
  padding: 60px 15px 0 15px;
  

  @media screen and (min-width: 1440px) {
    width: 791px;
    height: 323px;
    padding: 60px 0 40px 0;
    column-gap: 60px;
  }

  & > h2 {
    font-size: 18px;
    line-height: 13px;
    letter-spacing: -0.02em;

    @media screen and (min-width: 1440px) {
      font-size: 22px;
      line-height: 17px;
      width: 420px;
    }
  }

  & > .frameology-logo {
    --size-width: 150px;
    --size-height: 24.4px;
    margin-top: 15px;

    @media screen and (min-width: 1440px) {
      margin-top: 19px;
      --size-width: 185px;
      --size-height: 30px;
    }

    width: var(--size-width);
    height: var(--size-height);

    & > image {
      width: var(--size-width);
      height: var(--size-height);
    }
  }

  & > .info {
    margin: 22.6px 0 0 0;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;

    @media screen and (min-width: 1440px) {
      margin: 21px 0 0 0;
      width: 420px;
      font-size: 18px;
      line-height: 20.75px;
    }
  }

  & > .frame-button {
    margin-top: 39px;
    width: 345px;
    height: 50px;
    cursor: pointer;

    border: 1px solid #FFFFFF;
    border-radius: 50px;

    background: transparent;

    font-weight: 500;
    font-size: 18px;
    line-height: 23px;

    color: #FFFFFF;

    &:hover {
      opacity: 0.5;
    }

    @media screen and (min-width: 1440px) {
      margin-top: 29px;
      width: 300px;
      font-size: 22px;
      line-height: 15px;
    }
  }

  & > .contact {
    margin-top: 60px;
    margin-bottom: 0;

    font-weight: 400;
    font-size: 16px;
    line-height: 13px;
    letter-spacing: -0.02em;

    @media screen and (min-width: 1440px) {
      margin-top: 0;
      font-size: 18px;
      line-height: 12px;
    }
  }

  & > .climate-logo {
    margin-top: 30px;
    width: 100px;
    height: 40px;

    @media screen and (min-width: 1440px) {
      margin-top: 20px;
    }
  }

  & > .copyright {
    margin-top: 30px;
    margin-bottom: 0;

    font-weight: 400;
    font-size: 16px;
    line-height: 13px;

    letter-spacing: -0.02em;

    @media screen and (min-width: 1440px) {
      margin-top: 60px;
      font-size: 18px;
      line-height: 14px;
    }
  }

  & > a {
    display: block;

    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.02em;
    text-decoration: none;

    color: #FFFFFF;

    &:hover {
      text-decoration: underline;
    }

    @media screen and (min-width: 1440px) {
      font-size: 18px;
    }
  }

  & > .terms {
    margin-top: 19px;
    line-height: 11px;

    @media screen and (min-width: 1440px) {
      margin-top: 13px;
      line-height: 14px;
    }
  }

  & > .privacy {
    margin-top: 20px;
    line-height: 12px;

    @media screen and (min-width: 1440px) {
      margin-top: 19px;
    }
  }
`;
