import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./InputCidade.css";

const InputCidade = ({ setUrl }) => {
  const [city, setCity] = useState("");
  const apiKey = "567edaa71d2fb6ca67661ce9def1f89c";

  const handleClick = (e) => {
    e.preventDefault();
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    setUrl(apiWeatherURL);
    setCity("");
  };

  return (
    <form onSubmit={handleClick} className="form">
      <h3>Confira o clima de uma cidade:</h3>
      <input
        type="text "
        value={city}
        placeholder="Digite o nome da cidade"
        onChange={(inp) => setCity(inp.target.value)}
      />
      <button type="submit" id="search">
        <FaSearch />
      </button>
    </form>
  );
};

export default InputCidade;
