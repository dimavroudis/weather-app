import { Carousel } from "@mantine/carousel";
import dayjs from "dayjs";
import { ReactSVG } from "react-svg";
import ForecastData from "../../interfaces/forecast";
import getWeatherIcon from "../../utils/getWeatherIcon";
import styles from "./styles.module.css";
import { useState } from "react";

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
          <ReactSVG
            src={"/svgs/caret-right-yellow.svg"}
            beforeInjection={(svg) => {
              svg.setAttribute("width", "11");
            }}
          />
        }
        previousControlProps={{ "aria-label": "Previous day" }}
        previousControlIcon={
          <ReactSVG
            src={"/svgs/caret-left-yellow.svg"}
            beforeInjection={(svg) => {
              svg.setAttribute("width", "11");
            }}
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
              <ReactSVG
                src={getWeatherIcon(d.weather.id, d.timestamp)}
                beforeInjection={(svg) => {
                  svg.setAttribute("width", "35");
                  svg.setAttribute("height", "35");
                }}
              />
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default DayNav;
