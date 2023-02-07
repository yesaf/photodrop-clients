import logo from '../../../assets/images/photodrop-logo.svg';
import { LayoutHeader, LayoutMain, HeaderButtonContainer, HeaderLink } from './Layout.styles';

interface ILayoutProps {
    children: React.ReactNode;
    right?: React.ReactNode;
    left?: React.ReactNode;
}

function Layout({ children, left, right }: ILayoutProps) {
    return (
        <>
            <LayoutHeader>
                <HeaderButtonContainer className="left" isShown={!!left}>
                    {left}
                </HeaderButtonContainer>
                <HeaderLink to="/auth">
                    <svg>
                        <image href={logo}/>
                    </svg>
                </HeaderLink>
                <HeaderButtonContainer className="right" isShown={!!right}>
                    {right}
                </HeaderButtonContainer>
            </LayoutHeader>
            <LayoutMain>
                {children}
            </LayoutMain>
        </>
    );
}



export default Layout;
