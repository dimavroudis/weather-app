import {
  LineChart,
  Line,
  LabelList,
  ResponsiveContainer,
  XAxis,
} from "recharts";
import Widget from "../widget";
import InfoLabel from "./labels/infoLabel";
import TempLabel from "./labels/tempLabel";
import ForecastData from "../../interfaces/forecast";
import SeriesData from "./seriesData";
import dayjs from "dayjs";
import { ReactSVG } from "react-svg";

interface ForecastProps {
  title: string;
  data: (Partial<Omit<ForecastData, "temp">> & Pick<ForecastData, "temp">)[];
  className?: string;
}

const chartMargins = { top: 60, right: 0, bottom: 60, left: 0 };

const getNextPredictedTemp = (data: SeriesData[]) => {
  const lastTemp = data[data.length - 1].temp;
  const lastLastTemp = data[data.length - 2].temp;
  const diff = lastTemp - lastLastTemp;

  return lastTemp + diff;
};

const getPreviousPredictedTemp = (data: SeriesData[]) => {
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
        <ReactSVG src={"/svgs/clock.svg"} className="w-4" />
        {title}
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={chartMargins}>
          <XAxis
            dataKey="timestamp"
            type="number"
            domain={["dataMin", "dataMax"]}
            tickLine={false}
            axisLine={false}
            tick={false}
          />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#EACA8F"
            strokeWidth="2"
            dot={false}
            activeDot={{
              r: 5,
              fill: "white",
              stroke: "white",
              strokeWidth: 0,
            }}
          >
            <LabelList
              stroke="#fff"
              content={(props) => TempLabel(props, data)}
            />
            <LabelList
              stroke="#fff"
              content={(props) => InfoLabel(props, data)}
            />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </Widget>
  );
};

export default HourlyForecast;
