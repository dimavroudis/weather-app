export default interface ForecastData {
  temp: number;
  feels_like: number;
  uv_index: number;
  rain_percentage: number;
  wind_speed: number;
  weather: {
    description: string;
    id: string;
  };
  timestamp: number;
}
