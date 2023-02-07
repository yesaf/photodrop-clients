import logo from '../../../assets/images/photodrop-logo.svg';
import { LayoutHeader, LayoutMain, HeaderButtonContainer } from './Layout.styles';
import { Link } from 'react-router-dom';

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
                <Link to="/auth">
                    <svg>
                        <image href={logo}/>
                    </svg>
                </Link>
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
