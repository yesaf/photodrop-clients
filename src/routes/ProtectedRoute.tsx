import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import tokenExists from '@/utils/tokenExists';

import useAccount from '@/components/hooks/useAccount';
import Loader from '@/components/shared/loader/Loader';
import Layout from '@/components/shared/layout/Layout';

import { useDispatch } from 'react-redux';
import { setAccountAction } from '@/store/actions/authActions';
import { Account } from '@/store/reducers/authReducer';


function ProtectedRoute() {
    const account: Account = useAccount();
    const location = useLocation();
    const dispatch = useDispatch();

    if (!tokenExists()) {
        return <Navigate to="/auth"/>;
    }

    useEffect(() => {
        if (account.isLoaded) {
            dispatch(setAccountAction(account));
        }
    }, [account]);

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
