import { useEffect, useState } from "react";
import { Button, Container, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import CurrentWeather from "../../features/current-weather";
import Activities from "../../features/activities";
import AirCondition from "../../features/air-condition";
import HourlyForecast from "../../features/hourlyForecast";
import Menu from "./menu";
import DayNav from "../../features/day-nav";
import ForecastData from "../../types/models/forecast";
import { api } from "../../api/api";
import getWeatherBg from "../../utils/getWeatherBg";

import { DATA } from "./data";

import styles from "./styles.module.css";

const Home = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const location = {
    label: "New York",
  };
  const activities = DATA.activities;

  const [dailyData, setDailyData] = useState<ForecastData[]>([]);
  const [hourlyData, setHourlyData] = useState<ForecastData[]>([]);
  const [currentData, setCurrentData] = useState<ForecastData>();

  useEffect(() => {
    api.getDaily().then((data) => {
      setDailyData(data);
    });
    api.getHourly().then((data) => {
      setHourlyData(data);
      setCurrentData(data[0]);
    });
  }, []);

  const backgroundImage = getWeatherBg(currentData?.weather.id);

  return (
    <Container
      fluid
      px={{ base: "md", lg: "lg" }}
      className="min-h-screen bg-blue-200 text-white bg-cover md:grid grid-rows-min lg:pt-14 pt-9 pb-lg"
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    >
      <div className="lg:px-14 mb-8 lg:mb-sm ">
        <CurrentWeather current={hourlyData[0]} location={location} />
      </div>

      {isDesktop ? null : (
        <div className="mb-8">{<DayNav data={dailyData} />}</div>
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
            <Activities
              activities={activities}
              className="lg:order-1 flex-shrink-0"
            />
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
