import {
  LineChart,
  Line,
  LabelList,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";
import InfoLabel from "./infoLabel";
import TempLabel from "./tempLabel";
import ForecastChartData from "./forecastChartData";
import CustomCursor from "./customCursot";

interface ChartProps {
  data: ForecastChartData[];
}

const chartMargins = { top: 30, right: 0, bottom: 65, left: 0 };

const Chart = ({ data }: ChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data} margin={chartMargins}>
        <XAxis
          dataKey="timestamp"
          type="number"
          domain={["dataMin", "dataMax"]}
          tickLine={false}
          axisLine={false}
          tick={false}
        />
        <Tooltip content={() => null} cursor={<CustomCursor />} />
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
  );
};

export default Chart;
