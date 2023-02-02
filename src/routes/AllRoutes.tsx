import { Routes, Route } from 'react-router-dom';

import Layout from '../components/shared/layout/Layout';
import BackButton from '../components/shared/backButton/BackButton';
import AccountButton from '../components/shared/accountButton/AccountButton';

import Login from '../components/pages/login/Login';
import Avatar from '../components/pages/avatar/Avatar';
import Home from '../components/pages/home/Home';

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={
                <Layout right={<AccountButton/>}>
                    <Home/>
                </Layout>
            } />
            <Route path="/auth" element={
                <Layout left={<BackButton to="/auth" refresh/>}>
                    <Login/>
                </Layout>
            } />
            <Route path="/avatar" element={<Layout><Avatar/></Layout>}/>
        </Routes>
    );
}

export default AllRoutes;
