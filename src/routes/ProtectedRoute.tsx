import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import tokenExists from '@/utils/tokenExists';

import Loader from '@/components/shared/loader/Loader';
import Layout from '@/components/shared/layout/Layout';

import { useDispatch, useSelector } from 'react-redux';
import { setAccountAction } from '@/store/actions/authActions';
import { Account } from '@/store/reducers/authReducer';
import { accountSelector } from '@/store/selectors/authSelectors';
import authService from '@/api/services/auth';


function ProtectedRoute() {
    const account: Account = useSelector(accountSelector);
    const location = useLocation();
    const dispatch = useDispatch();

    if (!tokenExists()) {
        return <Navigate to="/auth"/>;
    }

    useEffect(() => {
        if (!account.isLoaded) {
            authService.getMe()
                .then((res) => res.data)
                .then((res) => {
                    dispatch(setAccountAction({
                        user: res.user,
                        selfie: res.selfie,
                        isLoaded: true,
                    }));
                })
                .catch(() => {
                    dispatch(setAccountAction({
                        user: undefined,
                        selfie: undefined,
                        isLoaded: true,
                    }));
                });
        }
    }, []);

    if (!account.isLoaded) {
        return <Layout><Loader/></Layout>;
    }

    if (!account.user) {
        return <Navigate to="/auth"/>;
    }

    if (location.pathname !== '/avatar' && !account.user.selfieId) {
        return <Navigate to="/avatar"/>;
    }

    return (
        <Outlet/>
    );
}

export default ProtectedRoute;
