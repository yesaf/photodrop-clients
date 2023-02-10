import { ISelfie, IUser } from '@/api/types/authResponses';
import { useEffect, useState } from 'react';
import authService from '@/api/services/auth';

export interface IAccount {
    user: IUser | undefined;
    selfie?: ISelfie;
    isLoaded: boolean;
}

export default function useAccount() {
    const [account, setAccount] = useState<IAccount>({
        user: undefined,
        isLoaded: false,
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
            .catch((error) => {
                console.log(error);
                setAccount({
                    user: undefined,
                    isLoaded: true,
                });
            });
    }, []);

    return account;
}
