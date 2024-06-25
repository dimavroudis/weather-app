import Activity from "./activity";
import ForecastData from "./forecast";
import Location from "./location";

export default interface WeatherReport {
  location: Location;
  current: ForecastData;
  activities: Activity[];
  hourly_forecast: ForecastData[];
  daily_forecast: ForecastData[];
}
