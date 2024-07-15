import Clear from "../assets/images/weather-bgs/clear.jpg";
import Rainy from "../assets/images/weather-bgs/rainy.jpg";
import Cloudy from "../assets/images/weather-bgs/cloudy.jpg";

const getWeatherBg = (id?: string) => {
  switch (id) {
    case "clear":
      return Clear;
    case "rainy":
      return Rainy;
    case "cloudy":
      return Cloudy;
    default:
      return Clear;
  }
};

export default getWeatherBg;
