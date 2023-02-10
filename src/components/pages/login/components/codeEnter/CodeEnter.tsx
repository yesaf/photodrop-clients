import CodeInput from './components/codeInput/CodeInput';
import { useCallback, useState } from 'react';
import { FormContainer} from './CodeEnter.styles';

interface ICodEnterProps {
    phone: string;
    onCodeEntered: (code: string) => void;
}

function CodeEnter({ phone, onCodeEntered }: ICodEnterProps) {
    const [code, setCode] = useState<string>('');
    const [disableButton, setDisableButton] = useState(true);
    const handleCodeChanged = useCallback((code: string) => {
        setCode(code);
        setDisableButton(code.length !== 6);
    }, []);

    return (
        <FormContainer>
            <h2>What's the code?</h2>
            <p>Enter the code sent to <b>{phone}</b></p>
            <CodeInput onCodeChanged={handleCodeChanged}/>
            <button className="resend-button">Resend</button>
            <button className="next-button"
                    disabled={disableButton}
                    onClick={() => onCodeEntered(code)}>
                Next
            </button>
        </FormContainer>
    );
}



export default CodeEnter;
