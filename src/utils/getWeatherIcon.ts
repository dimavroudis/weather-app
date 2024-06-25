import isDayOrNight from "./isDayOrNight";

const getWeatherIcon = (id: string, timestamp: number) => {
  const prefix = isDayOrNight(timestamp);
  return `/weather-icons/${prefix}-${id}.svg`;
};

export default getWeatherIcon;
