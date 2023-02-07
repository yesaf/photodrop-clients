import PhoneEnter from './components/phoneEnter/PhoneEnter';
import { useState } from 'react';
import CodeEnter from './components/codeEnter/CodeEnter';
import { isValidPhoneNumber } from 'react-phone-number-input';
import BackButton from '@/components/shared/backButton/BackButton';
import styled from 'styled-components';

function Login() {
    const [phone, setPhone] = useState<string | undefined>();
    const [code, setCode] = useState<string | undefined>();

    const handlePhoneEntered = (phone: string) => {
        if (isValidPhoneNumber(phone)) {
            setPhone(phone);
        }
    };

    const handleCodeEntered = (code: string) => {
        setCode(code);
    };

    return (
        <>
            {
                !phone ?
                    <PhoneEnter onPhoneEntered={handlePhoneEntered}/> :
                    <>
                        <ReturnContainer>
                            <BackButton to="." onClick={() => setPhone(undefined)}/>
                        </ReturnContainer>
                        <CodeEnter phone={phone} onCodeEntered={handleCodeEntered}/>
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
