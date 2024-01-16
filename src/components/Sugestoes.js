import "./Sugestoes.css";



const Sugestoes = ({sugestao, setUrl}) => {

    const apiKey = "567edaa71d2fb6ca67661ce9def1f89c";


   const handleSugestao = ()=>{
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${sugestao.cidade}&units=metric&appid=${apiKey}&lang=pt_br`;
   setUrl(apiWeatherURL);
   }
   
  return (
    <button className="sugestoes" onClick={handleSugestao}>
      {sugestao.cidade}
      <img
        id="country"
        src={`https://flagsapi.com/${sugestao.country}/shiny/64.png`}
      ></img>
    </button>
  );
};

export default Sugestoes;
