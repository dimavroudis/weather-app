import isDayOrNight from "./isDayOrNight";
import DayClear from "../assets/svgs/weather-icons/day-clear.svg";
import DayCloudy from "../assets/svgs/weather-icons/day-cloudy.svg";
import DayRainy from "../assets/svgs/weather-icons/day-rainy.svg";
import NightClear from "../assets/svgs/weather-icons/night-clear.svg";
import NightCloudy from "../assets/svgs/weather-icons/night-cloudy.svg";
import NightRainy from "../assets/svgs/weather-icons/night-rainy.svg";

const getWeatherIcon = (weatherId: string, timestamp: number) => {
  const id = `${isDayOrNight(timestamp)}-${weatherId}`;

  switch (id) {
    case "day-clear":
      return DayClear;
    case "day-rainy":
      return DayRainy;
    case "day-cloudy":
      return DayCloudy;
    case "night-clear":
      return NightClear;
    case "night-cloudy":
      return NightCloudy;
    case "night-rainy":
      return NightRainy;
    default:
      return DayClear;
  }
};

export default getWeatherIcon;
