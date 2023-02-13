import { Outlet, Navigate } from 'react-router-dom';
import React from 'react';
import useAccount, { IAccount } from '@/components/hooks/useAccount';
import Loader from '@/components/shared/loader/Loader';
import Layout from '@/components/shared/layout/Layout';
import tokenExists from '@/utils/tokenExists';

export const AuthContext = React.createContext<IAccount>({} as IAccount);

function ProtectedRoute() {
    const account = useAccount();

    if (!tokenExists()) {
        return <Navigate to="/auth"/>;
    }

    if (!account.isLoaded) {
        return <Layout><Loader/></Layout>;
    }

    if (!account.user) {
        return <Navigate to="/auth"/>;
    }

    if (!account.user.selfieId) {
        return <Navigate to="/avatar"/>;
    }

    return (
        <AuthContext.Provider value={account}>
            <Outlet/>
        </AuthContext.Provider>
    );
}

export default ProtectedRoute;
