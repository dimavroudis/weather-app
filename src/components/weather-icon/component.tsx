import DayClear from "../../assets/svgs/weather-icons/day-clear.svg?react";
import DayCloudy from "../../assets/svgs/weather-icons/day-cloudy.svg?react";
import DayRainy from "../../assets/svgs/weather-icons/day-rainy.svg?react";
import NightClear from "../../assets/svgs/weather-icons/night-clear.svg?react";
import NightCloudy from "../../assets/svgs/weather-icons/night-cloudy.svg?react";
import NightRainy from "../../assets/svgs/weather-icons/night-rainy.svg?react";

interface WeatherIconProps extends React.SVGProps<SVGSVGElement> {
  weatherId: string;
  timePrefix?: "day" | "night";
  title?: string;
}

const WeatherIcon = ({
  weatherId,
  timePrefix,
  ...restProps
}: WeatherIconProps) => {
  const id = `${timePrefix}-${weatherId}`;

  switch (id) {
    case "day-clear":
      return <DayClear {...restProps} />;
    case "day-rainy":
      return <DayRainy {...restProps} />;
    case "day-cloudy":
      return <DayCloudy {...restProps} />;
    case "night-clear":
      return <NightClear {...restProps} />;
    case "night-cloudy":
      return <NightCloudy {...restProps} />;
    case "night-rainy":
      return <NightRainy {...restProps} />;
    default:
      return <DayClear {...restProps} />;
  }
};

export default WeatherIcon;
