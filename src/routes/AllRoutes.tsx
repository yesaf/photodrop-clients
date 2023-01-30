import { Routes, Route } from 'react-router-dom';
import Layout from '../components/shared/layout/Layout';
import Login from '../components/pages/login/Login';

function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout>Running</Layout>} />
            <Route path="/auth" element={<Layout><Login/></Layout>} />
        </Routes>
    );
}

export default AllRoutes;
