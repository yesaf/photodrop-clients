import { useState } from 'react';
import arrowDown from '../../../../../../../assets/images/icons/arrow-down.svg';
import styled from 'styled-components';
import CountrySelect from '../countrySelect/CountrySelect';

interface ICustomSelectProps {
    value: string;
    onChange: (value: string) => void;
}

function CountryButton({ value, onChange }: ICustomSelectProps) {
    const [showCountrySelect, setShowCountrySelect] = useState<boolean>(false);

    const handleChooseCountry = (country: string) => {
        onChange(country);
        setShowCountrySelect(false);
    };

    return (
        <Container onClick={() => setShowCountrySelect(!showCountrySelect)}>
            <img
                className="country-flag"
                src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${value}.svg`}
                alt={value}/>
            <svg xmlns="http://www.w3.org/2000/svg">
                <image href={arrowDown}/>
            </svg>
            {
                showCountrySelect &&
                <CountrySelect onCountryClick={handleChooseCountry}/>
            }
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;

  width: 70px;
  height: 40px;

  cursor: pointer;

  /* Background */

  background: #F4F4F4;
  /* Border */

  border: 1px solid #EEEEEE;
  border-radius: 10px;

  &:hover {
    background: #EAEAEA;
  }

  & > .country-flag {
    margin-left: 8px;
    width: 30px;
    height: 25px;
  }

  & > svg {
    margin-left: 8px;
    width: 13.5px;
    height: 6.5px;

    & > image {
      width: 13.5px;
      height: 6.5px;
    }
  }
`;

export default CountryButton;
