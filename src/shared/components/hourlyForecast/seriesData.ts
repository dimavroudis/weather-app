import ForecastData from "../../interfaces/forecast";

type SeriesData = Partial<Omit<ForecastData, "temp">> &
  Pick<ForecastData, "temp">;

export default SeriesData;
