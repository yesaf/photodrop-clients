import { getCountries, getCountryCallingCode } from 'react-phone-number-input/input';
import en from 'react-phone-number-input/locale/en.json';
import styled from 'styled-components';
import { useMemo, useState } from 'react';

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

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100vw;
  top: -55px;
  left: calc(-50vw + 50%);
  background-color: #fff;
  z-index: 1;
`;

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 375px;
  padding: 0;

  font-family: 'Halvetica', sans-serif;

  & > .search-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;

    & > .search-input {
      width: 100%;
      border-radius: 5px;
      padding: 5px 10px;
      outline: 1px solid #000;
      border: none;
    }
  }
`;

const SelectHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 30px;
  margin: 5px 0;

  & > .title {
    font-size: 16px;
    line-height: 20px;
    font-weight: 550;
    color: #262626;
  }

  & > .close-button {
    position: absolute;
    right: 0;
    font-size: 16px;
    line-height: 20px;
    border: none;
    background-color: transparent;
    color: #262626;
    cursor: pointer;
  }
`;

const CustomSelect = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  flex: 1;
  overflow-y: auto;
  margin: 10px 0 0 0;
  padding: 0;

  & > li {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    cursor: pointer;
    border-bottom: 1px solid #eee;

    & > .country-flag {
      width: 18px;
      height: 12px;
      margin-right: 10px;
    }
  }

`;

export default CountrySelect;
