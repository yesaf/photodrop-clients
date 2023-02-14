import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store';

const authFilter = (state: RootState) => state.auth;
export const accountSelector = createSelector(authFilter, (auth) => auth.account);
