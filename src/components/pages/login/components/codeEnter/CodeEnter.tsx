import styled from 'styled-components';
import CodeInput from './components/codeInput/CodeInput';
import { useCallback, useState } from 'react';

interface ICodEnterProps {
    phone: string;
    onCodeEntered: (code: string) => void;
}

function CodeEnter({ phone, onCodeEntered }: ICodEnterProps) {
    const [disableButton, setDisableButton] = useState(true);
    const handleCodeChanged = useCallback((code: string) => {
        setDisableButton(code.length !== 6);
    }, []);

    return (
        <FormContainer>
            <header>What's the code?</header>
            <p>Enter the code sent to <b>{phone}</b></p>
            <CodeInput onCodeEntered={onCodeEntered} onCodeChanged={handleCodeChanged}/>
            <button className="resend-button">Resend</button>
            <button className="next-button" disabled={disableButton}>Next</button>
        </FormContainer>
    );
}

const FormContainer = styled.div`
  margin-top: 106px;
  padding: 0 15px;

  & > header {
    width: 345px;
    height: 17px;

    font-family: termina, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    text-align: center;

    color: #262626;
  }

  & > p {
    width: 345px;
    height: 13px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;

    /* Black - #262626 */

    color: #262626;

    & > b {
      font-weight: 500;
    }
  }

  & > .resend-button {
    width: 345px;
    height: 13px;
    margin-top: 20px;
    background: transparent;
    border: none;
    cursor: pointer;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: center;

    color: #3300CC;
  }

  & > .next-button {
    width: 345px;
    height: 50px;
    margin-top: 19px;

    background: #3300CC;
    border-radius: 50px;
    border: none;
    cursor: pointer;

    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    /* identical to box height */

    text-align: center;

    color: #FFFFFF;
    
    &:disabled {
      opacity: 0.33;
    }
  }
`;

export default CodeEnter;
