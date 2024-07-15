const formatPercentage = (value: number | string) => {
  if (isNaN(Number(value))) {
    return "N/A";
  }
  return `${(Number(value) * 100).toLocaleString("en-US", {
    maximumFractionDigits: 2,
  })}%`;
};

export default formatPercentage;
