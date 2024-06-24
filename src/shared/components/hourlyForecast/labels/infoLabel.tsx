import { LabelProps } from "recharts";
import dayjs from "dayjs";
import getWeatherIcon from "../../../utils/getWeatherIcon";
import SeriesData from "../seriesData";
import formatWindSpeed from "../../../utils/formatWindSpeed";

const InfoLabel = (props: LabelProps, data: SeriesData[]) => {
  const { x, y, index, stroke } = props;

  if (
    typeof index === "undefined" ||
    index === 0 ||
    index === data.length - 1
  ) {
    return null;
  }

  const newY = Number(y) + 60;
  const { weather, wind_speed, timestamp } = data[index];
  if (!weather || !timestamp || !wind_speed) {
    return null;
  }

  return (
    <g>
      <image
        fill={stroke}
        href={getWeatherIcon(weather.id, timestamp)} // Use href for SVG <image> elements
        x={Number(x) - 10} // Adjust position as needed
        y={newY - 40} // Adjust position as needed
        height="24px"
        width="24px"
      />
      <text
        x={x}
        y={newY}
        dy={-4}
        fill={stroke}
        fontSize={8}
        textAnchor="middle"
      >
        {formatWindSpeed(wind_speed)}
      </text>
      <text
        x={x}
        y={newY + 16}
        dy={-4}
        fill={stroke}
        fontSize={8}
        textAnchor="middle"
      >
        {dayjs(timestamp).format("HH:mm")}
      </text>
    </g>
  );
};

export default InfoLabel;
