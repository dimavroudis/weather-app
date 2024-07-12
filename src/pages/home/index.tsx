import { useCallback, useEffect, useState } from "react";
import { Button, Container, Stack } from "@mantine/core";
// import { useMediaQuery } from "@mantine/hooks";
import CurrentWeather from "../../features/current-weather";
import Activities from "../../features/activities";
import AirCondition from "../../features/air-condition";
import HourlyForecast from "../../features/hourlyForecast";
import Menu from "./menu";
import WeatherReport from "../../types/models/weatherReport";

import styles from "./styles.module.css";
import DayNav from "../../features/day-nav";
import { api } from "../../api/api";
import ForecastData from "../../types/models/forecast";

const getBackground = (id: string) => {
  return `/weather-bgs/${id}.jpg`;
};

const isDesktop = true;

const Home = () => {
  // const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [data, setData] = useState<WeatherReport>({
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
      timestamp: 0,
    },
    hourly_forecast: [],
    daily_forecast: [],
    activities: [],
  });

  const [dailyData, setDailyData] = useState<ForecastData[]>([]);
  const [hourlyData, setHourlyData] = useState<ForecastData[]>([]);

  const getData = useCallback(() => {
    Promise.all([api.getDaily(), api.getHourly()]).then(([daily, hourly]) => {
      setDailyData(daily);
      setHourlyData(hourly);
    });
  }, []);

  useEffect(() => {
    getData();
  });

  const backgroundImage = getBackground(data.current.weather.id);

  return (
    <Container
      fluid
      px={{ base: "md", lg: "lg" }}
      className="min-h-screen bg-blue-200 text-white bg-cover md:grid grid-rows-min lg:pt-14 pt-9 pb-lg"
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    >
      <div className="lg:px-14 mb-8 lg:mb-sm ">
        {hourlyData.length ? (
          <CurrentWeather current={hourlyData[0]} location={data.location} />
        ) : null}
      </div>

      {isDesktop ? null : (
        <div className="mb-8">{/* <DayNav data={dailyData} /> */}</div>
      )}

      <div
        className={`flex flex-col gap-lg lg:grid ${styles.container} lg:gap-md `}
      >
        {isDesktop ? (
          <div className={`${styles.menu}`}>
            <Menu />
          </div>
        ) : null}
        <div className={`${styles.main}`}>
          <Stack gap="lg" className="lg:h-full">
            <HourlyForecast
              title={"24-hour forecast"}
              data={hourlyData}
              className="lg:order-2 lg:h-full"
              footer={
                isDesktop ? null : (
                  <div className="flex justify-center">
                    <Button
                      variant="filled"
                      className="lg:hidden"
                      color="#EACA8F"
                      radius="lg"
                    >
                      5 day forecast
                    </Button>
                  </div>
                )
              }
            />
            {/* <Activities
              activities={data.activities}
              className="lg:order-1 flex-shrink-0"
            /> */}
          </Stack>
        </div>
        <div className={`${styles.side}`}>
          <AirCondition data={dailyData} />
        </div>
      </div>
    </Container>
  );
};

export default Home;
