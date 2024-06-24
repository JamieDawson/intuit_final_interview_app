import { useContext, useState } from "react";
import CountryContext from "../../CountryContext.js";
import FormToSearchCountry from "../FormToSearchCountry/FormToSearchCountry.jsx";

const Names = () => {
  const { countryNames, entireJson, countryData, setCountryData } =
    useContext(CountryContext); //importing the contenxt state
  const [selectedIndex, setSelectedIndex] = useState(null); //helps me find the index I'm selecting

  // console.log(entireJson);
  const handleChange = (event) => {
    console.log(event.target.value);
    setSelectedIndex(event.target.value);
    // console.log(entireJson[event.target.value].population);
    setCountryData({
      name: entireJson[event.target.value].name.common,
      flag: entireJson[event.target.value].flags.png,
      population: entireJson[event.target.value].population,
      region: entireJson[event.target.value].region,
      capital: entireJson[event.target.value].capital[0],
    });
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value="">Select a country</option>
        {countryNames.map((name, index) => (
          <option key={index} value={index}>
            {name}
          </option>
        ))}
      </select>
      {selectedIndex !== null && (
        <div>
          Selected Country: {countryNames[selectedIndex]} (Index:{" "}
          {selectedIndex})
        </div>
      )}
      <img src={countryData.flag} />
      <h5>Name: {countryData.name}</h5>
      <h5>Population: {countryData.population}</h5>
      <h5>Region: {countryData.region}</h5>
      <h5>Capital: {countryData.capital}</h5>

      <FormToSearchCountry />
    </div>
  );
};

//name, parent
//update index onparent itself on state of parent itself

export default Names;

// name: entireJson[event.target.value].name.common,
// flag: entireJson[event.target.value].flags.png,
// population: entireJson[event.target.value].population,
// region: entireJson[event.target.value].region,
// capital

/*
WORKS WITHOUT CONTEXT OUT


import { useContext, useState } from "react";
import CountryContext from "../../CountryContext.js";

const Names = () => {
  const { countryNames, entireJson } = useContext(CountryContext); //importing the contenxt state
  const [selectedIndex, setSelectedIndex] = useState(null); //helps me find the index I'm selecting

  const [countryData, setCountryData] = useState([
    {
      name: "",
      flag: "",
      population: "",
      region: "",
      capital: "",
    },
  ]);

  const handleChange = (event) => {
    setSelectedIndex(event.target.value);
    console.log(entireJson[event.target.value].population);
    setCountryData({
      name: entireJson[event.target.value].name.common,
      flag: entireJson[event.target.value].flags.png,
      population: entireJson[event.target.value].population,
      region: entireJson[event.target.value].region,
      capital: entireJson[event.target.value].capital[0],
    });

    //name: entireJson[event.target.value].name.common
    //flag:  entireJson[event.target.value].flags.png
    //capital:  entireJson[event.target.value].capital[0]
    //region: entireJson[event.target.value].region
    //capital:  entireJson[event.target.value].capital[0]
    //Create funciton that grabs data for that
    //name, flag, population, region, capital, view more button
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value="">Select a country</option>
        {countryNames.map((name, index) => (
          <option key={index} value={index}>
            {name}
          </option>
        ))}
      </select>
      {selectedIndex !== null && (
        <div>
          Selected Country: {countryNames[selectedIndex]} (Index:{" "}
          {selectedIndex})
        </div>
      )}
      <img src={countryData.flag} />
      <h5>Name: {countryData.name}</h5>

      <h5>Population: {countryData.population}</h5>
      <h5>Region: {countryData.region}</h5>
      <h5>Capital: {countryData.capital}</h5>
    </div>
  );
};

export default Names;

// name: entireJson[event.target.value].name.common,
// flag: entireJson[event.target.value].flags.png,
// population: entireJson[event.target.value].population,
// region: entireJson[event.target.value].region,
// capital


*/
