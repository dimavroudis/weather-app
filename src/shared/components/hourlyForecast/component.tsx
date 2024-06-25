import Widget from "../widget";
import ForecastData from "../../interfaces/forecast";
import dayjs from "dayjs";
import { ReactSVG } from "react-svg";
import Chart from "./chart";

interface ForecastProps {
  title: string;
  data: ForecastData[];
  className?: string;
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

const HourlyForecast = ({ title, data: _data, className }: ForecastProps) => {
  const nextPredictedTemp = getNextPredictedTemp(_data);
  const previousPredictedTemp = getPreviousPredictedTemp(_data);

  const data = [
    {
      temp: previousPredictedTemp,
      timestamp: dayjs(_data[0].timestamp).subtract(30, "minute").valueOf(),
    },
    ..._data,
    {
      temp: nextPredictedTemp,
      timestamp: dayjs(_data[_data.length - 1].timestamp)
        .add(30, "minute")
        .valueOf(),
    },
  ];

  return (
    <Widget px="0" className={className}>
      <h2 className="flex items-center gap-1 mb-9 text-sm px-8">
        <ReactSVG src={"/svgs/clock.svg"} className="w-4 flex-shrink-0" />
        {title}
      </h2>
      <Chart data={data} />
    </Widget>
  );
};

export default HourlyForecast;
