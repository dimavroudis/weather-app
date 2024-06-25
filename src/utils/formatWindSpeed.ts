const WIND_SPEED_UNITS = {
  METRIC: "km/h",
};

const formatWindSpeed = (temp: number | string) => {
  return `${temp} ${WIND_SPEED_UNITS.METRIC} `;
};

export { WIND_SPEED_UNITS };
export default formatWindSpeed;
