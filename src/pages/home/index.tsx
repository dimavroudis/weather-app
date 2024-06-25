import { useState } from "react";
import { Button, Container, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import CurrentWeather from "../../features/current-weather";
import Activities from "../../features/activities";
import AirCondition from "../../features/air-condition";
import HourlyForecast from "../../features/hourlyForecast";
import Menu from "./menu";
import WeatherReport from "../../types/models/weatherReport";
import { DATA } from "./data";

import styles from "./styles.module.css";
import DayNav from "../../features/day-nav";

const getBackground = (id: string) => {
  return `/weather-bgs/${id}.jpg`;
};

const Home = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [data] = useState<WeatherReport>(DATA);

  const backgroundImage = getBackground(data.current.weather.id);

  return (
    <Container
      fluid
      px={{ base: "md", lg: "lg" }}
      className="min-h-screen bg-blue-200 text-white bg-cover md:grid grid-rows-min lg:pt-14 pt-9 pb-lg"
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    >
      <div className="lg:px-14 mb-8 lg:mb-sm ">
        <CurrentWeather current={data.current} location={data.location} />
      </div>

      {isDesktop ? null : (
        <div className="mb-8">
          <DayNav data={data.daily_forecast} />
        </div>
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
              data={data.hourly_forecast}
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
              activities={data.activities}
              className="lg:order-1 flex-shrink-0"
            />
          </Stack>
        </div>
        <div className={`${styles.side}`}>
          <AirCondition data={data.daily_forecast} />
        </div>
      </div>
    </Container>
  );
};

export default Home;
