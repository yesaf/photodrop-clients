import logo from '../../../assets/images/photodrop-logo.svg';
import { LayoutHeader, LayoutMain, HeaderButtonContainer, HeaderLink } from './Layout.styles';
import Footer from '../footer/Footer';

interface ILayoutProps {
    children: React.ReactNode;
    right?: React.ReactNode;
    left?: React.ReactNode;
    withFooter?: boolean;
}

function Layout({ children, left, right, withFooter }: ILayoutProps) {
    return (
        <>
            <LayoutHeader>
                <HeaderButtonContainer className="left" isShown={!!left}>
                    {left}
                </HeaderButtonContainer>
                <HeaderLink to="/">
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
            {
                withFooter &&
                <Footer/>
            }
        </>
    );
}


export default Layout;
