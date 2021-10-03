import Banner from "./components/Banner";
import Search from "./components/Search";
import { useEffect, useState } from "react";

const App = () => {
  const [image, setImage] = useState("");
  const [temp, setTemp] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [place, setPlace] = useState("");
  const [weather, setWeather] = useState("");

  const runSearch = (value) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=3ec5439e27b1bdcd71b0298984b97c30`
    )
      .then((res) => res.json())
      .then((data) => {
        setTemp(`${Math.floor(data.main.temp)}°C`);
        setFeelsLike(`${Math.floor(data.main.feels_like)}°C`);
        const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        setImage(icon);
        setPlace(data.name);
        setWeather(data.weather[0].main);
      })
      .catch((err) => alert("Place doesn't exist"));
  };

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Lagos&units=metric&appid=3ec5439e27b1bdcd71b0298984b97c30"
    )
      .then((res) => res.json())
      .then((data) => {
        setTemp(`${Math.floor(data.main.temp)}°C`);
        setFeelsLike(`${Math.floor(data.main.feels_like)}°C`);
        const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        setImage(icon);
        setPlace(data.name);
        setWeather(data.weather[0].main);
      });
  }, []);

  return (
    <div className="App">
      <Search click={() => runSearch(document.getElementById("input").value)} />
      <div className="banner-con">
        <Banner
          image={image}
          temp={temp}
          feelsLike={feelsLike}
          place={place}
          weather={weather}
        />
      </div>
    </div>
  );
};

export default App;
