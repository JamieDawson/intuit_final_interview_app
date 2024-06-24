import { useContext, useEffect, useState } from "react";
import CountryContext from "../../CountryContext.js";

const FormToSearchCountry = () => {
  const [searchTriggered, setSearchTriggered] = useState(false);
  const [inputValueCountry, setInputValueCountry] = useState("");
  const { countryData, setCountryData, setEntireJson } =
    useContext(CountryContext);

  useEffect(() => {
    if (searchTriggered) {
      const updateThatCountry = async () => {
        let data = await fetch("https://restcountries.com/v3.1/all");
        let json = await data.json();
        setEntireJson(json);

        const country = json.find(
          (country) =>
            country.name.common.toLowerCase() ===
            inputValueCountry.toLowerCase()
        );
        if (country) {
          setCountryData({
            name: country.name.common,
            flag: country.flags.png,
            population: country.population,
            region: country.region,
            capital: country.capital[0],
          });
        }
      };
      updateThatCountry();
      setSearchTriggered(false); // Reset the trigger
    }
  }, [searchTriggered, inputValueCountry, setEntireJson, setCountryData]);

  const searchThatCountry = (e) => {
    e.preventDefault();
    setSearchTriggered(true);
  };

  return (
    <div>
      <form onSubmit={searchThatCountry}>
        <input
          placeholder="type in country name"
          value={inputValueCountry}
          onChange={(e) => {
            setInputValueCountry(e.target.value);
            console.log(e.target.value); // Log to ensure it's being updated
          }}
        />
        <button type="submit">Search Country</button>
      </form>
    </div>
  );
};

export default FormToSearchCountry;
