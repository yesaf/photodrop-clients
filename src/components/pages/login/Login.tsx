import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

import PhoneEnter from './components/phoneEnter/PhoneEnter';
import CodeEnter from './components/codeEnter/CodeEnter';
import { isValidPhoneNumber, parsePhoneNumber } from 'react-phone-number-input';
import BackButton from '@/components/shared/backButton/BackButton';
import styled from 'styled-components';

import authService from '@/api/services/auth';
import tokenExists from '@/utils/tokenExists';
import Loader from '@/components/shared/loader/Loader';

function Login() {
    const [phone, setPhone] = useState<string | undefined>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>();
    const navigate = useNavigate();

    if (tokenExists()) {
        return <Navigate to="/"/>;
    }

    const handlePhoneEntered = (phone: string) => {
        if (isValidPhoneNumber(phone)) {
            const phoneData = parsePhoneNumber(phone);
            if (phoneData) {
                setIsLoading(true);
                authService.sendOtp(phoneData.countryCallingCode, phoneData.nationalNumber)
                    .then(() => {
                        setPhone(phone);
                        setIsLoading(false);
                    });
            }
        }
    };

    const resendCode = () => {
        const phoneData = parsePhoneNumber(phone!);
        setError(undefined);
        if (phoneData)
            authService.sendOtp(
                phoneData.countryCallingCode, phoneData.nationalNumber
            );
    }

    const handleCodeEntered = (code: string) => {
        const phoneData = parsePhoneNumber(phone as string);
        if (phoneData) {
            setIsLoading(true)
            authService.verifyOtp(phoneData.countryCallingCode, phoneData.nationalNumber, code)
                .then((res) => {
                    if (!res.user) {
                        setError('Wrong code')
                        setIsLoading(false);
                    } else if (res.user.selfieId) {
                        navigate('/');
                    } else {
                        navigate('/avatar');
                    }
                });
        }

    };

    if (isLoading) return <Loader/>;

    return (
        <>
            {
                !phone ?
                    <PhoneEnter onPhoneEntered={handlePhoneEntered}/> :
                    <>
                        <CodeEnter phone={phone}
                                   onCodeEntered={handleCodeEntered}
                                   resendCode={resendCode}
                                   error={error}/>
                        <ReturnContainer>
                            <BackButton to="." onClick={() => setPhone(undefined)}/>
                        </ReturnContainer>
                    </>
            }
        </>
    );
}

const ReturnContainer = styled.div`
  position: fixed;
  top: 12.5px;
  left: 4px;
`;


export default Login;
