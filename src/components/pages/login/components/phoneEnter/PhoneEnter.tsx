import { useState } from 'react';

import 'react-phone-number-input/style.css';
import { isValidPhoneNumber } from 'react-phone-number-input';
import CountryButton from './components/countryButton/CountryButton';

import { FormContainer, FormHeader, StyledPhoneInput, CreateButton } from './PhoneEnter.styles';

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
            <FormHeader>Let's get started</FormHeader>
            <span className="enter-phone-text">Enter your phone number</span>
            <StyledPhoneInput
                international
                defaultCountry={'UA'}
                value={phoneNumber}
                addInternationalOption={false}
                countrySelectComponent={CountryButton}
                onChange={setPhoneNumber}
            />
            <CreateButton
                onClick={handlePhoneEntered}>
                Create account
            </CreateButton>
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




export default PhoneEnter;
