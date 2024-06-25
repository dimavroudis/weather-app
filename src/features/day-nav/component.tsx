import { useState } from "react";
import { Carousel } from "@mantine/carousel";
import dayjs from "dayjs";
import ForecastData from "../../types/models/forecast";
import isDayOrNight from "../../utils/isDayOrNight";
import WeatherIcon from "../../components/weather-icon";
import Caret from "../../assets/svgs/caret.svg?react";

import styles from "./styles.module.css";

interface DayNavProps {
  currentTimestamp?: number;
  data: ForecastData[];
  onDayChange?: (timestamp: number) => void;
  className?: string;
}

const getDay = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-US", { weekday: "short" });
};

const DayNav = ({
  data,
  currentTimestamp,
  onDayChange,
  className,
}: DayNavProps) => {
  const defaultActiveSlide = currentTimestamp
    ? data.findIndex((d) => d.timestamp === currentTimestamp)
    : data.findIndex((d) => dayjs(d.timestamp).isSame(dayjs(), "day"));

  const [activeSlide, setActiveSlide] = useState(defaultActiveSlide);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
    if (onDayChange) {
      onDayChange(data[index].timestamp);
    }
  };

  const getStylesBasedOnIndex = (index: number) => {
    const styles = "transition-transform duration-300 ease-in-out";
    if (index === activeSlide) {
      return styles;
    }
    if (activeSlide - index === 1 || activeSlide - index === -1) {
      return styles + " opacity-80 scale-80 ";
    }
    return styles + " opacity-60 scale-60";
  };

  return (
    <div className={className}>
      <Carousel
        slideSize="20%"
        slideGap="md"
        initialSlide={defaultActiveSlide}
        onSlideChange={handleSlideChange}
        nextControlProps={{ "aria-label": "Next day" }}
        nextControlIcon={
          <Caret width="11" height="11" className="text-primary-500" />
        }
        previousControlProps={{ "aria-label": "Previous day" }}
        previousControlIcon={
          <Caret
            width="11"
            height="11"
            className="text-primary-500 rotate-180"
          />
        }
        classNames={{
          controls: styles.controls,
          control: styles.control,
          slide: styles.slide,
        }}
      >
        {data.map((d, index) => (
          <Carousel.Slide key={d.timestamp}>
            <div className={getStylesBasedOnIndex(index)}>
              <span className="text-xl font-normal sca">
                {getDay(d.timestamp)}
              </span>
              <WeatherIcon
                weatherId={d.weather.id}
                timePrefix={isDayOrNight(d.timestamp)}
                title={d.weather.description}
                width="35"
                height="35"
              />
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default DayNav;
