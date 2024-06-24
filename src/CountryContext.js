import { createContext, useEffect, useState } from "react";

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [countryNames, setCountryNames] = useState([]);
  const [entireJson, setEntireJson] = useState([]);
  const [countryData, setCountryData] = useState({
    name: "",
    flag: "",
    population: "",
    region: "",
    capital: "",
  });

  useEffect(() => {
    const countriesOnLoad = async () => {
      console.log("useEffect onMount for countries");
      let data = await fetch("https://restcountries.com/v3.1/all");
      let json = await data.json();

      // Extract the names of all countries
      let countryNamesArray = json.map((country) => country.name.common);

      // Set the state with all country names at once
      setCountryNames(countryNamesArray);
      setEntireJson(json);
    };

    countriesOnLoad().catch(console.error);
  }, []);

  return (
    <CountryContext.Provider
      value={{
        countryNames,
        setCountryNames,
        countryData,
        setCountryData,
        entireJson,
        setEntireJson,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContext;
