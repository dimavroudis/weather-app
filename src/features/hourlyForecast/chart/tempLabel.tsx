import { LabelProps } from "recharts";
import formatTemp from "../../../utils/formatTemp";
import ForecastChartData from "./forecastChartData";

const TempLabel = (props: LabelProps, data: ForecastChartData[]) => {
  const { x, y, value, index, stroke } = props;

  const newY = y ? Number(y) - 6 : -6;
  if (
    typeof value === "undefined" ||
    index === 0 ||
    index === data.length - 1
  ) {
    return null;
  }

  return (
    <text
      x={x}
      y={newY}
      dy={-4}
      fill={stroke}
      fontSize={14}
      textAnchor="middle"
    >
      {formatTemp(value)}
    </text>
  );
};

export default TempLabel;
