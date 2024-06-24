import { Carousel } from "@mantine/carousel";
import ForecastData from "../../interfaces/forecast";
import { ReactSVG } from "react-svg";
import getWeatherIcon from "../../utils/getWeatherIcon";
import styles from "./styles.module.css";

interface DayNavProps {
  currentTimestamp?: number;
  data: ForecastData[];
  onDayChange?: (timestamp: number) => void;
}

const getDay = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-US", { weekday: "short" });
};

const DayNav = ({ data, currentTimestamp, onDayChange }: DayNavProps) => {
  const activeSlide = data.findIndex((d) => d.timestamp === currentTimestamp);

  const handleSlideChange = (index: number) => {
    if (onDayChange) {
      onDayChange(data[index].timestamp);
    }
  };

  const getStylesBasedOnIndex = (index: number) => {
    if (index === activeSlide) {
      return;
    }
    if (activeSlide - index === 1 || activeSlide - index === -1) {
      return "opacity-80 scale-80";
    }
    return "opacity-60 scale-60";
  };

  return (
    <Carousel
      slideSize="20%"
      slideGap="md"
      initialSlide={activeSlide}
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
      classNames={{ control: styles.control, slide: styles.slide }}
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
  );
};

export default DayNav;
