import axios, { AxiosResponse } from 'axios';
import defaultClient from '../http/default';
import { baseUrl } from '../http/default';
import { IAccountResponse, IVerifyResponse } from '../types/authResponses';

class AuthService {
    async sendOtp(countryCode: string, phoneNumber: string) {
        const { data } = await axios.post(baseUrl + '/auth/sign-in/send-otp', {
            countryCode,
            phoneNumber,
        });

        return data;
    }

    async verifyOtp(countryCode: string, phoneNumber: string, otp: string): Promise<IVerifyResponse> {
        const { data } = await axios.post(baseUrl + '/auth/sign-in/verify-otp', {
            countryCode,
            phoneNumber,
            otp,
        }).catch((error) => {
            return error.response;
        });

        if (data.accessToken) {
            localStorage.setItem('token', data.accessToken);
        }

        return data;
    }

    async refreshToken(): Promise<boolean> {
        const { data } = await axios.post(baseUrl + '/auth/refresh')
            .catch((error) => {
                return error.response;
            });

        if (data.accessToken) {
            localStorage.setItem('token', data.accessToken);
        }

        localStorage.removeItem('token');
        window.location.reload();
        return data;
    }

    getMe(): Promise<AxiosResponse<IAccountResponse>> {
        return defaultClient.get('/auth/me').catch((error) => {
            return error.response;
        });
    }
}

export default new AuthService();
