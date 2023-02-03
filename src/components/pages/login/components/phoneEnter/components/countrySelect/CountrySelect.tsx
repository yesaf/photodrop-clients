import { getCountries, getCountryCallingCode } from 'react-phone-number-input/input';
import en from 'react-phone-number-input/locale/en.json';

import { useMemo, useState } from 'react';

import { Container, SelectContainer, SelectHeader, CustomSelect } from './CountrySelect.styles';

interface ICountrySelectProps {
    onClose: () => void;
    onCountryClick: (country: string) => void;
}

function CountrySelect({ onCountryClick, onClose }: ICountrySelectProps) {
    const [search, setSearch] = useState<string>('');

    const countries = useMemo(() => {
        let countries = getCountries();
        if (search) {
            countries = countries
                .filter(country =>
                    en[country].toLowerCase().includes(search.toLowerCase()) ||
                    country.toLowerCase().includes(search.toLowerCase()),
                );
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
        <Container>
            <SelectContainer>
                <SelectHeader>
                    <span className="title">Select Country</span>
                    <button className="close-button" onClick={onClose}>Close</button>
                </SelectHeader>
                <div className="search-container">
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={e => setSearch(e.target.value)}/>
                </div>

                <CustomSelect>
                    {
                        countries.length > 0 ?
                            countries :
                            <li className="no-results">No results</li>
                    }
                </CustomSelect>
            </SelectContainer>
        </Container>
    );
}

export default CountrySelect;
