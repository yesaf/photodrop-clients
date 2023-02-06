import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  height: 682px;
  background: #262626;

  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 375px;
  color: #FFFFFF;
  padding: 60px 15px 0 15px;

  & > h2 {
    font-size: 18px;
    line-height: 13px;
    letter-spacing: -0.02em;
  }

  & > .frameology-logo {
    margin-top: 15px;
    width: 150px;
    height: 24.4px;
  }

  & > .info {
    margin: 22.6px 0 0 0;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;
  }

  & > .frame-button {
    margin-top: 39px;
    width: 100%;
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
  }

  & > .contact {
    margin-top: 60px;
    margin-bottom: 0;

    font-weight: 400;
    font-size: 16px;
    line-height: 13px;
  }

  & > .climate-logo {
    margin-top: 30px;
    width: 100px;
    height: 40px;
  }

  & > .copyright {
    margin-top: 30px;
    margin-bottom: 0;

    font-weight: 400;
    font-size: 16px;
    line-height: 13px;

    letter-spacing: -0.02em;
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
  }

  & > .terms {
    margin-top: 19px;
    line-height: 11px;

  }

  & > .privacy {
    margin-top: 20px;
    line-height: 12px;
  }
`;
