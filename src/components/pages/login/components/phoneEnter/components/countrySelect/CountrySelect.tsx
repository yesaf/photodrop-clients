import { getCountries, getCountryCallingCode } from 'react-phone-number-input/input';
import en from 'react-phone-number-input/locale/en.json';
import styled from 'styled-components';
import { useMemo, useState } from 'react';

interface ICountrySelectProps {
    onCountryClick: (country: string) => void;
}

function CountrySelect({ onCountryClick }: ICountrySelectProps) {
    const [search, setSearch] = useState<string>('');

    const countries = useMemo(() => {
        let countries = getCountries();
        if (search) {
            countries = countries.filter(country => en[country].toLowerCase().includes(search.toLowerCase()));
        }

        return countries
            .map((country, index) => (
                <li
                    key={index} onClick={() => onCountryClick(country)}>
                    <img
                        className="country-flag"
                        src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`}
                        alt=""/>
                    <span className="country-text">{en[country]} (+{getCountryCallingCode(country)})</span>
                </li>
            ));
    }, [search]);

    return (
        <SelectContainer>
            <div className="search-container">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}/>
            </div>

            <CustomSelect>
                {countries}
            </CustomSelect>
        </SelectContainer>
    );
}

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #fff;
  height: 100vh;
  width: 375px;
  top: -65px;
  padding: 0;

  & > .search-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;

    & > .search-input {
      width: 100%;
    }
  }
`;

const CustomSelect = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  flex: 1;
  overflow-y: auto;

  & > li {
    display: flex;
    align-items: center;

    & > .country-flag {
      width: 18px;
      height: 12px;
    }
  }

`;

export default CountrySelect;
