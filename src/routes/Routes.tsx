import { Routes as ReactRoutes, Route } from 'react-router-dom';

import Layout from '../components/shared/layout/Layout';

import ProtectedRoute from './ProtectedRoute';
import privateRoutes, { IPrivateRoute } from './privateRoutes';

import Login from '../components/pages/login/Login';
import Terms from '../components/pages/legalInfo/Terms';

function getPrivateRoute(route: IPrivateRoute) {
    const routeElement = route.noLayout ?
        route.element :
        <Layout {...route.layoutProps}>
            {route.element}
        </Layout>;

    return (
        <Route key={route.path} path={route.path} element={<ProtectedRoute/>}>
            <Route path={route.path} element={routeElement}/>
        </Route>
    );
}

function Routes() {
    return (
        <ReactRoutes>
            <Route path="/auth" element={
                <Layout>
                    <Login/>
                </Layout>
            }/>

            {
                privateRoutes.map(getPrivateRoute)
            }

            <Route path="/terms" element={<Layout><Terms/></Layout>}/>

        </ReactRoutes>
    );
}

export default Routes;
