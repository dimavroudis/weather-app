const daily =
  "https://502f4630-f860-48f8-b49a-664d840c2eae.mock.pstmn.io/hourly";
const hourly =
  "https://502f4630-f860-48f8-b49a-664d840c2eae.mock.pstmn.io/daily";

interface Weather {
  chanceOfRain: number;
  condition: string;
  date: string;
  realFeel: number;
  temperature: number;
  uvIndex: number;
  windSpeed: number;
}

export const api = {
  getDaily: async () => {
    return fetch(daily)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data.map((item: Weather) => {
          return {
            timestamp: new Date(item.date).getTime(),
            temp: item.temperature,
            feels_like: item.realFeel,
            uv_index: item.uvIndex,
            rain_percentage: item.chanceOfRain,
            wind_speed: item.windSpeed,
            weather: {
              description: item.condition,
              id: item.condition,
            },
          };
        });
      });
  },
  getHourly: async () => {
    return fetch(hourly)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return data.map((item: Weather) => {
          return {
            timestamp: new Date(item.date).getTime(),
            temp: item.temperature,
            feels_like: item.realFeel,
            uv_index: item.uvIndex,
            rain_percentage: item.chanceOfRain,
            wind_speed: item.windSpeed,
            weather: {
              description: item.condition,
              id: item.condition,
            },
          };
        });
      });
  },
};
