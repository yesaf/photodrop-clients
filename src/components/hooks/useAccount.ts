import { useEffect, useState } from 'react';
import authService from '@/api/services/auth';
import { Account } from '@/store/reducers/authReducer';

export default function useAccount(): Account {
    const [account, setAccount] = useState<Account>({
        isLoaded: false,
        user: undefined,
        selfie: undefined,
    });

    useEffect(() => {
        authService.getMe()
            .then((res) => res.data)
            .then((res) => {
                setAccount({
                    user: res.user,
                    selfie: res.selfie,
                    isLoaded: true,
                });
            })
            .catch(() => {
                setAccount({
                    user: undefined,
                    selfie: undefined,
                    isLoaded: true,
                });
            });
    }, []);

    return account;
}
