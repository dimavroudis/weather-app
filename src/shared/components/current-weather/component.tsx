import { ReactSVG } from "react-svg";
import dayjs from "dayjs";
import getWeatherIcon from "../../utils/getWeatherIcon";
import formatTemp from "../../utils/formatTemp";
import styles from "./styles.module.css";

type CurrentWeatherProps = {
  current: {
    temp: number;
    feels_like: number;
    uv_index: number;
    rain_percentage: number;
    wind_speed: number;
    weather: {
      description: string;
      id: string;
    };
    timestamp: number;
  };
  location: {
    label: string;
  };
};

const getDate = (timestamp: number) => {
  const date = dayjs(timestamp);

  return {
    day: date.format("dddd"),
    date: date.format("DD MMM YYYY"),
  };
};

const CurrentWeather = ({ current, location }: CurrentWeatherProps) => {
  const weatherIcon = getWeatherIcon(current.weather.id, current.timestamp);
  const { day, date } = getDate(current.timestamp);

  return (
    <div
      className={`flex flex-col items-center font-medium gap-10 lg:grid ${styles.layout}`}
    >
      <div
        className={`${styles.location} flex justify-start items-center gap-1`}
      >
        <ReactSVG src={"/svgs/pin.svg"} className="w-4 m-2" />
        <span className="text-xl lg:text-2xl">{location.label}</span>
        <ReactSVG
          src={"/svgs/caret.svg"}
          className="w-2 m-2 rotate-90 lg:rotate-0"
        />
      </div>
      <div className={`${styles.status} text-center lg:text-left`}>
        <span className="text-2xl lg:text-4xl">
          {current.weather.description}
        </span>
      </div>
      <ReactSVG
        src={weatherIcon}
        desc={current.weather.description}
        className={`${styles.icon} max-w-52 lg:max-w-xs flex items-center content-end`}
      />
      <div
        className={`${styles.temprature} flex justify-end flex-col text-center lg:text-left`}
      >
        <p className="text-5xl mb-1">{formatTemp(current.temp)}</p>
        <p className="text-lg font-normal">
          {day} | {date}
        </p>
      </div>
    </div>
  );
};

export default CurrentWeather;
