import logo from '../../../assets/images/photodrop-logo.svg';
import styled from 'styled-components';

interface ILayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
    return (
        <>
            <LayoutHeader>
                <a href="/auth">
                    <svg xmlns="http://www.w3.org/2000/svg">
                        <image href={logo}/>
                    </svg>
                </a>
            </LayoutHeader>
            <LayoutMain>
                {children}
            </LayoutMain>
        </>
    );
}

const LayoutHeader = styled.header`
  background-color: #fff;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: #F1F0EC;

  & > a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    & > svg {
      --logo-height: 24px;
      height: var(--logo-height);
      width: calc(var(--logo-height) * 125 / 17);

      & > image {
        height: var(--logo-height);
        width: calc(var(--logo-height) * 125 / 17);
      }
    }
  }
`;

const LayoutMain = styled.main`
    background-color: #fff;
    width: 100%;
    display: flex;
`;

export default Layout;
