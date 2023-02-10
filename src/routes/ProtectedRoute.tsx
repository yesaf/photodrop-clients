import { Outlet, Navigate } from 'react-router-dom';
import React from 'react';
import useAccount, { IAccount } from '@/components/hooks/useAccount';
import Loader from '@/components/shared/loader/Loader';

export const AuthContext = React.createContext<IAccount>({} as IAccount);

function ProtectedRoute() {
    const account = useAccount();

    if (!account.isLoaded) {
        return <Loader/>;
    }

    if (!account.user) {
        return <Navigate to="/auth"/>;
    }

    return (
        <AuthContext.Provider value={account}>
            <Outlet/>
        </AuthContext.Provider>
    );
}

export default ProtectedRoute;
