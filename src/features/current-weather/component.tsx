import { Link } from "react-router-dom";
import dayjs from "dayjs";
import isDayOrNight from "../../utils/isDayOrNight";
import formatTemp from "../../utils/formatTemp";
import WeatherIcon from "../../components/weather-icon";
import Pin from "../../assets/svgs/pin.svg?react";
import Caret from "../../assets/svgs/caret.svg?react";

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
  const { temp, weather, timestamp } = current || {};
  const { description, id } = weather || {};

  const { day, date } = getDate(timestamp);

  return (
    <div
      className={`flex flex-col items-center font-medium gap-xl lg:grid ${styles.layout}`}
    >
      <div className={`flex w-full justify-between items-center gap-xs`}>
        <div
          className={`${styles.location} flex justify-start items-center gap-xs`}
          role="button"
        >
          <Pin className="w-4 m-2" />
          <span className="text-xl lg:text-2xl">{location.label || "..."}</span>
          <Caret className="w-2 m-2 rotate-90 lg:rotate-0" />
        </div>
        <Link to="profile">
          <img
            src="/avatar.png"
            className="rounded-full w-8 lg:hidden"
            alt="User"
          />
        </Link>
      </div>
      <div className={`${styles.status} text-center lg:text-left`}>
        <span className="text-2xl lg:text-4xl">{description || "..."}</span>
      </div>
      <WeatherIcon
        weatherId={id}
        timePrefix={isDayOrNight(timestamp)}
        title={description}
        className={`${styles.icon} max-w-52 lg:max-w-xs flex items-center content-end`}
      />
      <div
        className={`${styles.temprature} flex justify-end flex-col text-center lg:text-left`}
      >
        <p className="text-5xl mb-1">{temp ? formatTemp(temp) : "..."}</p>
        <p className="text-lg font-normal">
          {day} | {date}
        </p>
      </div>
    </div>
  );
};

export default CurrentWeather;
