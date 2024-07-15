import ForecastData from "../types/models/forecast";

const daily = "https://test.dev.datawise.ai/daily";
const hourly = "https://test.dev.datawise.ai/hourly";

interface Weather {
  chanceOfRain: number;
  condition: string;
  date: string;
  realFeel: number;
  temperature: number;
  uvIndex: number;
  windSpeed: number;
}

const convertToForecastData = (item: Weather): ForecastData => {
  return {
    timestamp: new Date(item.date).getTime(),
    temp: item.temperature,
    feels_like: item.realFeel,
    uv_index: item.uvIndex,
    rain_percentage: item.chanceOfRain / 100,
    wind_speed: item.windSpeed,
    weather: {
      description: item.condition,
      id: item.condition.toLowerCase().replace(" ", "-"),
    },
  };
};

const sorForecastDatatAsc = (a: ForecastData, b: ForecastData) =>
  a.timestamp - b.timestamp;

const fetchWeatherData = async (url: string) => {
  try {
    const response = await fetch(url);
    const data = (await response.json()) as Weather[];
    return data.map(convertToForecastData).sort(sorForecastDatatAsc);
  } catch (error) {
    return [];
  }
};

export const api = {
  getDaily: async () => fetchWeatherData(daily),
  getHourly: async () => fetchWeatherData(hourly),
};
