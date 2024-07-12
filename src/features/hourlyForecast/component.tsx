import dayjs from "dayjs";
import { useMediaQuery } from "@mantine/hooks";
import Widget from "../../components/widget";
import ForecastData from "../../types/models/forecast";
import Chart from "./chart";
import Clock from "../../assets/svgs/clock.svg?react";

interface ForecastProps {
  title: string;
  data: ForecastData[];
  className?: string;
  footer?: React.ReactNode;
}

const getNextPredictedTemp = (data: ForecastData[]) => {
  const lastTemp = data[data.length - 1].temp;
  const lastLastTemp = data[data.length - 2].temp;
  const diff = lastTemp - lastLastTemp;

  return lastTemp + diff;
};

const getPreviousPredictedTemp = (data: ForecastData[]) => {
  const firstTemp = data[0].temp;
  const firstFirstTemp = data[1].temp;
  const diff = firstTemp - firstFirstTemp;

  return firstTemp + diff;
};

const HourlyForecast = ({
  title,
  data: _data,
  className,
  footer,
}: ForecastProps) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (!_data.length) {
    return null;
  }

  const nextPredictedTemp = getNextPredictedTemp(_data);
  const previousPredictedTemp = getPreviousPredictedTemp(_data);

  const visibleData = isDesktop ? _data.slice(0, 7) : _data.slice(0, 4);

  const data = [
    {
      temp: previousPredictedTemp,
      timestamp: dayjs(visibleData[0].timestamp)
        .subtract(30, "minute")
        .valueOf(),
    },
    ...visibleData,
    {
      temp: nextPredictedTemp,
      timestamp: dayjs(visibleData[visibleData.length - 1].timestamp)
        .add(30, "minute")
        .valueOf(),
    },
  ];

  return (
    <Widget className={`px-0 py-3 ${className}`}>
      <h2 className="flex items-center gap-xs mb-5 text-sm px-3 lg:px-8">
        <Clock className="w-4 flex-shrink-0" />
        {title}
      </h2>
      <div className="h-full flex justify-center items-center">
        <Chart data={data} />
      </div>
      {footer}
    </Widget>
  );
};

export default HourlyForecast;
