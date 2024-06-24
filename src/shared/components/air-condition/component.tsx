import { useState } from "react";
import ForecastData from "../../interfaces/forecast";
import Widget from "../widget";
import dayjs from "dayjs";
import formatTemp from "../../utils/formatTemp";
import formatWindSpeed from "../../utils/formatWindSpeed";
import formatPercentage from "../../utils/formatPercentage";
import { ReactSVG } from "react-svg";
import styles from "./styles.module.css";
import DayNav from "../day-nav";

interface AirConditionProps {
  data: ForecastData[];
  className?: string;
}

const findTodayTimestamp = (data: ForecastData[]) => {
  const currentData = data.find((d) =>
    dayjs(d.timestamp).isSame(dayjs(), "day")
  );
  if (!currentData) {
    return;
  }
  return currentData.timestamp;
};

const InfoBlock = ({
  title,
  value,
  icon,
}: {
  title: string;
  value?: string;
  icon: string;
}) => {
  return (
    <div className="flex items-start gap-1">
      <ReactSVG
        src={`/svgs/${icon}.svg`}
        beforeInjection={(svg) => {
          svg.setAttribute("width", "25");
          svg.setAttribute("height", "25"); // Optionally, set the height as well
        }}
      />
      <div className="mt-1">
        <p className="text-xs mb-1">{title}</p>
        <p className="text-base">{value}</p>
      </div>
    </div>
  );
};

const AirCondition = ({ data, className = "" }: AirConditionProps) => {
  const [currentTimestamp, setCurrentTimestamp] = useState<number | undefined>(
    findTodayTimestamp(data)
  );

  const currentData = data.find((d) => d.timestamp === currentTimestamp);
  return (
    <Widget className={`${styles.background} h-full ${className}`}>
      <DayNav
        data={data}
        currentTimestamp={currentTimestamp}
        onDayChange={setCurrentTimestamp}
      />
      <p className="text-center text-base flex justify-center items-center gap-0.5 mt-4 mb-9">
        <ReactSVG
          src="/svgs/clock.svg"
          beforeInjection={(svg) => {
            svg.setAttribute("width", "14");
            svg.setAttribute("height", "14");
          }}
        />
        {dayjs(currentTimestamp).format("H:MM Z")}
      </p>
      <h2 className=" text-sm uppercase font-bold mb-5">Air Conditions</h2>
      <div className="flex flex-col gap-11">
        <InfoBlock
          title="Real Feel"
          value={currentData && formatTemp(currentData.feels_like)}
          icon="real-feel"
        />
        <InfoBlock
          title="Wind"
          value={currentData && formatWindSpeed(currentData.wind_speed)}
          icon="wind"
        />
        <InfoBlock
          title="Chance of rain"
          value={currentData && formatPercentage(currentData.rain_percentage)}
          icon="humidity"
        />
        <InfoBlock
          title="UV Index"
          value={currentData?.uv_index?.toString()}
          icon="uv-index"
        />
      </div>
    </Widget>
  );
};

export default AirCondition;
