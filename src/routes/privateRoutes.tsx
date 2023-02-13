import Home from '@/components/pages/home/Home';
import AccountButton from '@/components/shared/accountButton/AccountButton';
import Avatar from '@/components/pages/avatar/Avatar';
import Account from '@/components/pages/account/Account';
import BackButton from '@/components/shared/backButton/BackButton';
import ChangeName from '@/components/pages/changeName/ChangeName';
import Album from '@/components/pages/album/Album';
import SetUserData from '@/components/pages/setUserData/SetUserData';

interface ILayoutProps {
    right?: React.ReactNode;
    left?: React.ReactNode;
    withFooter?: boolean;
}

export interface IPrivateRoute {
    path: string;
    element: React.ReactNode;
    layoutProps?: ILayoutProps;
    noLayout?: boolean;
}

const privateRoutes: IPrivateRoute[] = [
    {
        path: '/',
        element: <Home/>,
        layoutProps: {
            right: <AccountButton/>,
            withFooter: true,
        },
    },
    {
        path: '/avatar',
        element: <Avatar/>,
    },
    {
        path: '/me',
        element: <Account/>,
        layoutProps: {
            left: <BackButton to="/"/>,
        }
    },
    {
        path: '/name',
        element: <ChangeName/>,
        layoutProps: {
            left: <BackButton to="/me"/>,
        }
    },
    {
        path: '/albums/:id',
        element: <Album/>,
        noLayout: true,
    },
    {
        path: '/hello',
        element: <SetUserData/>,
    },

];

export default privateRoutes;
