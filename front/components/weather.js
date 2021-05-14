import { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=90bf45a96231791fe3a76311cc0ee35f`;
  const [weather, setWeather] = useState({});
  useEffect(() => {
    axios.get(url).then((response) => {
      setWeather({
        temparature: (response.data.main.temp - 273.15).toFixed(1), //켈빈 -> 섭씨
      });
    });
  }, []);
  return <>{weather.temparature}</>;
};

export default Weather;
