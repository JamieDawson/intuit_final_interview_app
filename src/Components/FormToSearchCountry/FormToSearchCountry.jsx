import { useContext, useEffect, useState } from "react";
import CountryContext from "../../CountryContext.js";

const FormToSearchCountry = () => {
  const [warningMessage, setWarningMessage] = useState("");
  const [searchTriggered, setSearchTriggered] = useState(false);
  const [inputValueCountry, setInputValueCountry] = useState("");
  const {
    countryData,
    countryNames,
    setCountryData,
    entireJson,
    setEntireJson,
  } = useContext(CountryContext);

  useEffect(() => {
    if (searchTriggered) {
      const updateThatCountry = async () => {
        // let data = await fetch(
        //   "https://restcountries.com/v3.1/" + inputValueCountry
        // );
        //  let json = await data.json();
        //  console.log(entireJson);

        // let findCountryName = entireJson.map((country) => country.name.common);

        // const found = entireJson.find((input) =>
        //   console.log(input.name.common)
        // );
        const found = entireJson.find(
          (input) =>
            input.name.common.toLowerCase() === inputValueCountry.toLowerCase()
        );
        // console.log(findCountryName);

        console.log(found);
        if (!found) {
          setWarningMessage(
            "Country not found. Please try searching with a correct country name."
          );
        }

        //found.name.commmon
        //already have country names.
        //what index in country name this name exist.

        if (found) {
          setCountryData({
            name: found.name.common,
            flag: found.flags.png,
            population: found.population,
            region: found.region,
            capital: found.capital[0],
          });
          setWarningMessage("");
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
          }}
        />
        <button type="submit">Search Country</button>
      </form>
      {warningMessage}
    </div>
  );
};

export default FormToSearchCountry;
