import PhoneEnter from './components/phoneEnter/PhoneEnter';
import { useState } from 'react';
import CodeEnter from './components/codeEnter/CodeEnter';

function Login() {
    const [phone, setPhone] = useState<string | undefined>();
    const [code, setCode] = useState<string | undefined>();

    const handlePhoneEntered = (phone: string) => {
        setPhone(phone);
    }

    const handleCodeEntered = (code: string) => {
        setCode(code);
    }

    return (
        <>
            {
                !phone ?
                    <PhoneEnter onPhoneEntered={handlePhoneEntered}/> :
                    <CodeEnter phone={phone} onCodeEntered={handleCodeEntered}/>
            }
        </>
    );
}

export default Login;
