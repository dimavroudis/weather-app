import ForecastData from "../../../types/models/forecast";

type ForecastChartData = Partial<Omit<ForecastData, "temp" | "timestamp">> &
  Pick<ForecastData, "temp" | "timestamp">;

export default ForecastChartData;
