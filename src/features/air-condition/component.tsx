import { useState } from "react";
import dayjs from "dayjs";
import ForecastData from "../../types/models/forecast";
import Widget from "../../components/widget";
import formatTemp from "../../utils/formatTemp";
import formatWindSpeed from "../../utils/formatWindSpeed";
import formatPercentage from "../../utils/formatPercentage";
import DayNav from "../day-nav";
import Clock from "../../assets/svgs/clock-2.svg?react";
import RealFeelIcon from "../../assets/svgs/real-feel.svg?react";
import WindIcon from "../../assets/svgs/wind.svg?react";
import HumidityIcon from "../../assets/svgs/humidity.svg?react";
import UVIndexIcon from "../../assets/svgs/uv-index.svg?react";

import styles from "./styles.module.css";

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
  Icon,
}: {
  title: string;
  value?: string;
  Icon: React.ElementType;
}) => {
  return (
    <div className="flex items-start gap-xs">
      <Icon width="25" height="25" />
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
    <Widget className={`h-full px-0 py-0 ${className} ${styles.background}`}>
      <div className="mt-4 mb-9">
        <DayNav
          data={data}
          onDayChange={setCurrentTimestamp}
          className="mb-4"
        />
        <div className="text-center text-base flex justify-center items-center gap-0.5">
          <Clock width="14" height="14" />
          {dayjs(currentTimestamp).format("H:MM Z")}
        </div>
      </div>
      <div className="px-4">
        <h2 className="text-sm uppercase font-bold mb-5">Air Conditions</h2>
        <div className="flex flex-col gap-xl mb-11">
          <InfoBlock
            title="Real Feel"
            value={currentData && formatTemp(currentData.feels_like)}
            Icon={RealFeelIcon}
          />
          <InfoBlock
            title="Wind"
            value={currentData && formatWindSpeed(currentData.wind_speed)}
            Icon={WindIcon}
          />
          <InfoBlock
            title="Chance of rain"
            value={currentData && formatPercentage(currentData.rain_percentage)}
            Icon={HumidityIcon}
          />
          <InfoBlock
            title="UV Index"
            value={currentData?.uv_index?.toString()}
            Icon={UVIndexIcon}
          />
        </div>
      </div>
    </Widget>
  );
};

export default AirCondition;
