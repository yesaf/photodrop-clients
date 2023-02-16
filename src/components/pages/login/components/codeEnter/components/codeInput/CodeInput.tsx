import styled from 'styled-components';
import { ChangeEvent, useEffect, useState, KeyboardEvent } from 'react';

interface ICodeInputProps {
    onCodeChanged: (code: string) => void;
}

function CodeInput({ onCodeChanged }: ICodeInputProps) {
    const [code, setCode] = useState<string>('');

    const getCodePart = (index: number) => {
        return code[index] || '';
    };

    useEffect(() => {
        onCodeChanged(code);
    }, [code, onCodeChanged]);

    const handleKeyboard = (index: number) => (e: KeyboardEvent<HTMLInputElement>) => {
        const forbidden = /^[e.+-]$/i;
        if (forbidden.test(e.key)) {
            e.preventDefault()
        }
        if (index > 0 && e.key === 'Backspace'
            && code && !getCodePart(index)) {
            const prevInput = document.getElementById(`code-input-${code.length - 1}`) as HTMLInputElement;
            prevInput.focus();
        }
    }

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
    };

    const inputs = Array.from({ length: 6 }, (_, index) => (
        <input
            key={index}
            id={`code-input-${index}`}
            value={getCodePart(index)}
            type="number"
            onChange={handleCodeChange(index)}
            onKeyDown={handleKeyboard(index)}
            autoComplete='off'
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

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    &[type=number] {
      -moz-appearance: textfield;
    }
  }
`;

export default CodeInput;
