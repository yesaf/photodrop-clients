import PhoneEnter from './components/phoneEnter/PhoneEnter';
import { useState } from 'react';
import CodeEnter from './components/codeEnter/CodeEnter';

function Login() {
    const [phone, setPhone] = useState<string | undefined>();

    const handlePhoneEntered = (phone: string) => {
        setPhone(phone);
    }

    return (
        <>
            {
                !phone ?
                    <PhoneEnter onPhoneEntered={handlePhoneEntered}/> :
                    <CodeEnter phone={phone}/>
            }
        </>
    );
}

export default Login;
