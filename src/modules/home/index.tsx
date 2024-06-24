import { useState } from "react";
import { Container, Grid, Stack } from "@mantine/core";
import CurrentWeather from "../../shared/components/current-weather";
import Activities from "../../shared/components/activities";
import AirCondition from "../../shared/components/air-condition";
import HourlyForecast from "../../shared/components/hourlyForecast";
import Menu from "../../shared/components/menu";
import WeatherReport from "../../shared/interfaces/weatherReport";
import { DATA } from "./data";

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
      className="min-h-screen bg-blue-200 text-white bg-cover md:grid grid-rows-min"
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
