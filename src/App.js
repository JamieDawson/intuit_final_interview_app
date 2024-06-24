//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CountryProvider } from "./CountryContext.js";
import CountryContext from "./CountryContext.js";
import Names from "./Components/Names/names.component.jsx";
import FormToSearchCountry from "./Components/FormToSearchCountry/FormToSearchCountry.jsx";

import "./App.css";
import { useContext } from "react";

function App() {
  return (
    <CountryProvider>
      <div>Country app</div>
      <Names />
      {/* <FormToSearchCountry /> */}
    </CountryProvider>
  );
}

export default App;
