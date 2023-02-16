import CodeInput from './components/codeInput/CodeInput';
import { useCallback, useState } from 'react';
import { FormContainer} from './CodeEnter.styles';

interface ICodEnterProps {
    phone: string;
    onCodeEntered: (code: string) => void;
    resendCode: () => void;
    error: string | undefined;
}

function CodeEnter({ phone, onCodeEntered, resendCode, error }: ICodEnterProps) {
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
            <button className="resend-button"
                onClick={resendCode}>
                Resend
            </button>
            <button className="next-button"
                    disabled={disableButton}
                    onClick={() => onCodeEntered(code)}>
                Next
            </button>
            {
                error &&
                    <span className="code-error">{error}</span>
            }
        </FormContainer>
    );
}



export default CodeEnter;
