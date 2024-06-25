import dayjs from "dayjs";

export const DATA = {
  location: {
    label: "New York",
  },
  current: {
    temp: 36,
    feels_like: 36,
    uv_index: 4,
    rain_percentage: 0.02,
    wind_speed: 0.8,
    weather: {
      description: "Cloudy",
      id: "cloudy",
    },
    timestamp: dayjs().valueOf(),
  },
  activities: [
    {
      title: "2km away",
      image: "/activities-1.png",
    },
    {
      title: "1.5km away",
      image: "/activities-2.png",
    },
    {
      title: "3km away",
      image: "/activities-3.png",
    },
    {
      title: "500m away",
      image: "/activities-4.png",
    },
  ],
  hourly_forecast: [
    {
      timestamp: dayjs().startOf("hour").add(1, "hour").valueOf(),
      temp: 36,
      feels_like: 36,
      uv_index: 4,
      rain_percentage: 0.02,
      wind_speed: 0.8,
      weather: {
        description: "Clear",
        id: "clear",
      },
    },
    {
      timestamp: dayjs().startOf("hour").add(2, "hour").valueOf(),
      temp: 20,
      feels_like: 20,
      uv_index: 4,
      rain_percentage: 0.02,
      wind_speed: 0.8,
      weather: {
        description: "Rainy",
        id: "rainy",
      },
    },
    {
      timestamp: dayjs().startOf("hour").add(3, "hour").valueOf(),
      temp: 25,
      feels_like: 25,
      uv_index: 4,
      rain_percentage: 0.02,
      wind_speed: 0.8,
      weather: {
        description: "Cloudy",
        id: "cloudy",
      },
    },
    {
      timestamp: dayjs().startOf("hour").add(4, "hour").valueOf(),
      temp: 30,
      feels_like: 30,
      uv_index: 4,
      rain_percentage: 0.02,
      wind_speed: 0.8,
      weather: {
        description: "Clear",
        id: "clear",
      },
    },
    {
      timestamp: dayjs().startOf("hour").add(5, "hour").valueOf(),
      temp: 36,
      feels_like: 36,
      uv_index: 4,
      rain_percentage: 0.02,
      wind_speed: 0.8,
      weather: {
        description: "Clear",
        id: "clear",
      },
    },
    {
      timestamp: dayjs().startOf("hour").add(6, "hour").valueOf(),
      temp: 20,
      feels_like: 20,
      uv_index: 4,
      rain_percentage: 0.02,
      wind_speed: 0.8,
      weather: {
        description: "Rainy",
        id: "rainy",
      },
    },
    {
      timestamp: dayjs().startOf("hour").add(7, "hour").valueOf(),
      temp: 25,
      feels_like: 25,
      uv_index: 4,
      rain_percentage: 0.02,
      wind_speed: 0.8,
      weather: {
        description: "Cloudy",
        id: "cloudy",
      },
    },
    {
      timestamp: dayjs().startOf("hour").add(8, "hour").valueOf(),
      temp: 30,
      feels_like: 30,
      uv_index: 4,
      rain_percentage: 0.02,
      wind_speed: 0.8,
      weather: {
        description: "Clear",
        id: "clear",
      },
    },
  ],
  daily_forecast: [
    {
      temp: 36,
      feels_like: 36,
      uv_index: 4,
      rain_percentage: 0.02,
      wind_speed: 1.8,
      weather: {
        description: "Clear",
        id: "clear",
      },
      timestamp: dayjs().startOf("day").subtract(2, "day").valueOf(),
    },
    {
      temp: 20,
      feels_like: 20,
      uv_index: 1,
      rain_percentage: 0.12,
      wind_speed: 0.8,
      weather: {
        description: "Rainy",
        id: "rainy",
      },
      timestamp: dayjs().startOf("day").subtract(1, "day").valueOf(),
    },
    {
      temp: 25,
      feels_like: 25,
      uv_index: 4,
      rain_percentage: 0.23,
      wind_speed: 3.3,
      weather: {
        description: "Cloudy",
        id: "cloudy",
      },
      timestamp: dayjs().startOf("day").valueOf(),
    },
    {
      temp: 30,
      feels_like: 30,
      uv_index: 4,
      rain_percentage: 0.01,
      wind_speed: 4,
      weather: {
        description: "Clear",
        id: "clear",
      },
      timestamp: dayjs().startOf("day").add(1, "day").valueOf(),
    },
    {
      temp: 36,
      feels_like: 36,
      uv_index: 8,
      rain_percentage: 0.0,
      wind_speed: 5.6,
      weather: {
        description: "Clear",
        id: "clear",
      },
      timestamp: dayjs().startOf("day").add(2, "day").valueOf(),
    },
    {
      temp: 20,
      feels_like: 20,
      uv_index: 0,
      rain_percentage: 0.62,
      wind_speed: 1.8,
      weather: {
        description: "Rainy",
        id: "rainy",
      },
      timestamp: dayjs().startOf("day").add(3, "day").valueOf(),
    },
    {
      temp: 25,
      feels_like: 25,
      uv_index: 5,
      rain_percentage: 1.0,
      wind_speed: 4.8,
      weather: {
        description: "Cloudy",
        id: "cloudy",
      },
      timestamp: dayjs().startOf("day").add(4, "day").valueOf(),
    },
  ],
};
