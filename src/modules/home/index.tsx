import { useState } from "react";
import { Container, Stack } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import CurrentWeather from "../../shared/components/current-weather";
import Activities from "../../shared/components/activities";
import AirCondition from "../../shared/components/air-condition";
import HourlyForecast from "../../shared/components/hourlyForecast";
import Menu from "../../shared/components/menu";
import WeatherReport from "../../shared/interfaces/weatherReport";
import { DATA } from "./data";

import styles from "./styles.module.css";

const getBackground = (id: string) => {
  return `/weather-bgs/${id}.jpg`;
};

const Home = () => {
  const isMobile = useMediaQuery("(min-width: 1024px)");
  const [data] = useState<WeatherReport>(DATA);

  const backgroundImage = getBackground(data.current.weather.id);

  return (
    <Container
      fluid
      px={{ base: "md", lg: "lg" }}
      py="lg"
      className="min-h-screen bg-blue-200 text-white bg-cover md:grid grid-rows-min"
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    >
      <div className={`lg:px-14 lg:pt-9 lg:mb-6 mb-8`}>
        <CurrentWeather current={data.current} location={data.location} />
      </div>

      <div
        className={`flex flex-col gap-7 lg:grid ${styles.container} lg:gap-5 `}
      >
        {isMobile ? (
          <div className={`${styles.menu}`}>
            <Menu />
          </div>
        ) : null}
        <div className={`${styles.main}`}>
          <Stack gap="lg">
            <HourlyForecast
              title={"24-hour forecast"}
              data={data.hourly_forecast}
              className="lg:order-2"
            />
            <Activities activities={data.activities} className="lg:order-1" />
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
