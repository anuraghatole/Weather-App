import Temp from "./components/Temp";
import Highlights from "./components/Highlights";
import { useEffect, useState } from "react";

function App() {
  const [city, setCity] = useState("New Delhi");
  const [weatherData, setWeatherData] = useState(null);

  const apiURL = `http://api.weatherapi.com/v1/current.json?key=51bc3bd030ba470da24130556242005&q=${city}&aqi=no`;

  useEffect(() => {
    fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setWeatherData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);

  return (
    <>
      <div className=" bg-[#1F213A]  h-screen flex justify-center">
        <div className="mt-40 w-1/5 h-1/3">
          <Temp
            setCity={setCity}
            states={{
              temp:
                weatherData && weatherData.current
                  ? weatherData.current.temp_c
                  : "",
              condition:
                weatherData && weatherData.current
                  ? weatherData.current.condition.text
                  : "",
              isDay:
                weatherData && weatherData.current
                  ? weatherData.current.is_day
                  : false,
              location:
                weatherData && weatherData.location
                  ? weatherData.location.name
                  : "",
              time:
                weatherData && weatherData.location
                  ? weatherData.location.localtime
                  : "",
            }}
          />
        </div>

        <div className=" mt-40 w-1/3 h-1/3 grid grid-cols-2 gap-6 ">
          <h2 className=" text-slate-200 text-2xl col-span-2">
            Today's Forcast
          </h2>
          {weatherData && (
            <>
              <Highlights
                states={{
                  title: "wind status",
                  value: weatherData.current.wind_mph,
                  unit: "mph",
                  direction: weatherData.current.wind_dir,
                }}
              />
              <Highlights
                states={{
                  title: "Humidity",
                  value: weatherData.current.humidity,
                  unit: "%",
                }}
              />
              <Highlights
                states={{
                  title: "Visibility",
                  value: weatherData.current.vis_miles,
                  unit: "miles",
                }}
              />
              <Highlights
                states={{
                  title: "Air Pressure",
                  value: weatherData.current.pressure_mb,
                  unit: "mb",
                }}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
