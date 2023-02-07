import styled from 'styled-components';
import { ChangeEvent, useEffect, useState } from 'react';

interface ICodeInputProps {
    onCodeEntered: (code: string) => void;
    onCodeChanged: (code: string) => void;
}

function CodeInput({ onCodeEntered, onCodeChanged }: ICodeInputProps) {
    const [code, setCode] = useState<string>('');
    const getCodePart = (index: number) => {
        return code[index] || '';
    };

    useEffect(() => {
        onCodeChanged(code);
    }, [code, onCodeChanged]);

    const handleCodeChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const newCode = code.split('');
        newCode[index] = value;
        setCode(newCode.join(''));

        if (!value && index > 0) {
            const prevInput = document.getElementById(`code-input-${index - 1}`) as HTMLInputElement;
            prevInput.focus();
        }

        if (index < 5 && value) {
            const nextInput = document.getElementById(`code-input-${index+1}`) as HTMLInputElement;
            nextInput.focus();
        }

        if (index === 5) {
            onCodeEntered(code);
        }
    };

    const inputs = Array.from({ length: 6 }, (_, index) => (
        <input
            key={index}
            id={`code-input-${index}`}
            value={getCodePart(index)}
            onChange={handleCodeChange(index)}
            maxLength={1}/>
    ));

    return (
        <InputContainer>
            {inputs}
        </InputContainer>
    );
}

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 19px;
  width: 345px;
  
  @media (min-width: 1440px) {
    width: 420px;
  }

  & > input {
    width: 45px;
    height: 40px;
    text-align: center;
    /* Background */

    background: #F4F4F4;
    /* Border */

    border: 1px solid #EEEEEE;
    border-radius: 10px;
    
    font-size: 20px;
    line-height: 24px;
  }
`;

export default CodeInput;
