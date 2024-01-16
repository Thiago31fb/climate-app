import { useEffect, useState } from "react";
import InputCidade from "../components/InputCidade";
import useFetch from "../useFetch";

import "./Home.css";

import DetalhesCidade from "../components/DetalhesCidade";
import Sugestoes from "../components/Sugestoes";
const Home = () => {
  const [url, setUrl] = useState(
    "https://api.openweathermap.org/data/2.5/weather?q=Sao%20paulo&units=metric&appid=567edaa71d2fb6ca67661ce9def1f89c&lang=pt_br"
  );

  const { data: climate, isPending, error } = useFetch(url);
  // console.log(climate);

  const [sugest, setSugest] = useState([
    { cidade: "São Paulo", country: "BR" },
    { cidade: "New York", country: "US" },
    { cidade: "Mumbai", country: "IN" },
    { cidade: "Shanghai", country: "CN" },
    { cidade: "Moscow", country: "RU" },
    { cidade: "Tokyo", country: "JP" },
    { cidade: "Berlin", country: "DE" },
    { cidade: "Paris", country: "FR" },
    { cidade: "London", country: "GB" },
    { cidade: "Toronto", country: "CA" },
    { cidade: "Sydney", country: "AU" },
  ]);

const addSugest = (newSugest) => {
  if (!sugest.some((s) => s.cidade === newSugest.cidade)) {
    setSugest((prevSugest) => [...prevSugest, newSugest]);
  }
};

useEffect(() => {
  if (climate && climate.name) {
    addSugest({ cidade: climate.name, country: climate.sys.country });
  }
}, [addSugest, climate]);

  return (
    <div className="container">
      <InputCidade setUrl={setUrl} />

      {isPending && <p>Carregando...</p>}

      {error && <p className="erro">{error}</p>}

      {climate && <DetalhesCidade cidade={climate} addSugest={addSugest} />}

      <h3 className="titleSugestoes">Sugestões</h3>
      <div className="sugestoesContainer">
        {sugest.map((sugestao, index) => (
          <Sugestoes key={index} sugestao={sugestao} setUrl={setUrl} />
        ))}
      </div>
    </div>
  );
};

export default Home;
