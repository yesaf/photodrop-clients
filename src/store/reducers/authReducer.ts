import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ISelfie, IUser } from '@/api/types/authResponses';

export type Account = {
    user: IUser | undefined;
    selfie: ISelfie | undefined;
    isLoaded: boolean;
};

type AccountState = {
    account: Account;
};

const initialState: AccountState = {
    account: {
        isLoaded: false,
        user: undefined,
        selfie: undefined,
    }
}

export const authSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setAccount(state, action: PayloadAction<Account>) {
            state.account = action.payload;
        }
    }
});

export default authSlice.reducer;
