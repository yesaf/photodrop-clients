import styled from 'styled-components';
import { useState } from 'react';

import 'react-phone-number-input/style.css';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import CountryButton from './components/countryButton/CountryButton';

interface IPhoneEnterProps {
    onPhoneEntered: (phone: string) => void;
}

function PhoneEnter({ onPhoneEntered }: IPhoneEnterProps) {
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>('');

    const handlePhoneEntered = () => {
        if (phoneNumber && isValidPhoneNumber(phoneNumber)) {
            onPhoneEntered(phoneNumber);
        }
    };

    return (
        <FormContainer>
            <header>Let's get started</header>
            <span className="enter-phone-text">Enter your phone number</span>
            <PhoneInput
                international
                defaultCountry={'UA'}
                value={phoneNumber}
                addInternationalOption={false}
                onCountryChange={country => console.log(country)}
                countrySelectComponent={CountryButton}
                style={{
                    marginTop: '19px',
                }}
                onChange={setPhoneNumber}
            />
            <button
                className="create-button"
                onClick={handlePhoneEntered}>
                Create account
            </button>
            <p className="message">
                By proceeding, you consent to get WhatsApp or SMS messages, from PhotoDrop and its affiliates to the
                number provided. Text “STOP” to 89203 to opt out.
            </p>
            <p className="policy">
                By continuing, you indicate that you have read and agree to our <u>Terms of Use</u> & <u>Privacy
                Policy</u>
            </p>
        </FormContainer>
    );
}


const FormContainer = styled.div`
  display: block;
  margin-top: 136px;
  padding: 0 15px;

  & > header {
    -webkit-font-smoothing: antialiased;
    margin: 0 auto 14px;
    font-family: termina, sans-serif;
    font-weight: 700;
    font-size: 22px;
    line-height: 17px;
    text-align: center;
    color: #262626;
  }

  & > .enter-phone-text {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    display: flex;
    align-items: center;

    color: #262626;
  }

  & > .PhoneInput > input {
    box-sizing: border-box;
    width: 265px;
    height: 40px;
    margin-left: 10px;

    /* Background */

    background: #F4F4F4;
    /* Border */

    border: 1px solid #EEEEEE;
    border-radius: 10px;

    padding: 13px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    display: flex;
    align-items: center;

    color: #262626;
  }

  & > .create-button {
    margin-top: 20px;
    width: 345px;
    height: 50px;

    background: #3300CC;
    border: 0;
    border-radius: 50px;

    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    /* identical to box height */

    text-align: center;

    color: #FFFFFF;

    cursor: pointer;

    &:hover {
      background: #4D00E6;
    }
  }

  & > p.message {
    margin: 20px 1px 0 0;
    width: 340px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: center;

    color: #6D6D6D;
  }

  & > p.policy {
    width: 345px;
    margin-top: 38px;

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    align-items: center;
    letter-spacing: -0.02em;

    /* Dark Grey - #6D6D6D */

    color: #6D6D6D;
  }
`;

export default PhoneEnter;
