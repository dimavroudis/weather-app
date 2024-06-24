import { useState } from "react";
import { Container, Grid, Stack } from "@mantine/core";
import CurrentWeather from "../../shared/components/current-weather";
import Activities from "../../shared/components/activities";
import AirCondition from "../../shared/components/air-condition";
import HourlyForecast from "../../shared/components/hourlyForecast";
import Menu from "../../shared/components/menu";
import dayjs from "dayjs";
import WeatherReport from "../../shared/interfaces/weatherReport";

const DATA = {
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

const getBackground = (id: string) => {
  return `/weather-bgs/${id}.jpg`;
};

const Home = () => {
  const [data] = useState<WeatherReport>(DATA);

  const backgroundImage = getBackground(data.current.weather.id);

  return (
    <Container
      fluid
      px="lg"
      py="lg"
      className=" min-h-screen bg-blue-200 text-white bg-cover md:grid grid-rows-min"
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    >
      <div className="lg:px-14 lg:pt-9 lg:mb-6 mb-8">
        <CurrentWeather current={data.current} location={data.location} />
      </div>

      <div className="flex w-full gap-x-8">
        <Menu className="w-24 h-full hidden lg:flex" />
        <Container fluid px="0" className="w-full">
          <Grid gutter="md">
            <Grid.Col span="auto">
              <Stack gap="lg">
                <HourlyForecast
                  title={"24-hour forecast"}
                  data={data.hourly_forecast}
                  className="lg:order-2"
                />
                <Activities
                  activities={data.activities}
                  className="lg:order-1"
                />
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 3 }}>
              <AirCondition data={data.daily_forecast} />
            </Grid.Col>
          </Grid>
        </Container>
      </div>
    </Container>
  );
};

export default Home;
