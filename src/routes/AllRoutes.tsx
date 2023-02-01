import { Routes, Route } from 'react-router-dom';
import Layout from '../components/shared/layout/Layout';
import Login from '../components/pages/login/Login';
import Avatar from '../components/pages/avatar/Avatar';
import Home from '../components/pages/home/Home';

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout><Home/></Layout>} />
            <Route path="/auth" element={<Layout><Login/></Layout>} />
            <Route path="/avatar" element={<Layout><Avatar/></Layout>}/>
        </Routes>
    );
}

export default AllRoutes;
