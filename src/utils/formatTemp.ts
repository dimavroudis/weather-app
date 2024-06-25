const TEMP_UNITS = {
  CELCIUS: "°C",
  FAHRENHEIT: "°F",
};

const formatTemp = (temp: number | string) => {
  return `${temp} ${TEMP_UNITS.CELCIUS}`;
};

export { TEMP_UNITS };
export default formatTemp;
