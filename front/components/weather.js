import { useEffect } from "react";
import axios from "axios";

const url =
  "http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=90bf45a96231791fe3a76311cc0ee35f";

const Weather = () => {
  const [weather, setWeather] = useState({});
  useEffect(() => {
    axios
      .get(url)
      .then((response) => response.json())
      .then((result) => {
        console.log(result.main.temp);
        setWeather({
          temparature: result.main.temp,
        });
      });
  });
};

export default Weather;
