const formatPercentage = (value: number | string) => {
  if (isNaN(Number(value))) {
    return "N/A";
  }
  return `${Number(value) * 100}%`;
};

export default formatPercentage;
