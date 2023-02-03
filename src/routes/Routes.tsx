import { Routes as ReactRoutes, Route } from 'react-router-dom';

import Layout from '../components/shared/layout/Layout';
import BackButton from '../components/shared/backButton/BackButton';
import AccountButton from '../components/shared/accountButton/AccountButton';

import Login from '../components/pages/login/Login';
import Avatar from '../components/pages/avatar/Avatar';
import Home from '../components/pages/home/Home';
import Account from '../components/pages/account/Account';
import ChangeName from '../components/pages/changeName/ChangeName';

function Routes() {
    return (
        <ReactRoutes>
            <Route path="/" element={
                <Layout right={<AccountButton/>}>
                    <Home/>
                </Layout>
            }/>
            <Route path="/auth" element={
                <Layout left={<BackButton to="/auth" refresh/>}>
                    <Login/>
                </Layout>
            }/>
            <Route path="/avatar" element={<Layout><Avatar/></Layout>}/>
            <Route path="/me" element={
                <Layout left={<BackButton to="/"/>}>
                    <Account/>
                </Layout>
            }/>
            <Route path="/name" element={
                <Layout left={<BackButton to="/me"/>}>
                    <ChangeName/>
                </Layout>
            }/>
        </ReactRoutes>
    );
}

export default Routes;
