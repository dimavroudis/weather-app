const isDayOrNight = (timestamp: number) => {
  // Create a Date object from the timestamp
  const date = new Date(timestamp);

  // Get the hour from the Date object
  const hour = date.getHours();

  // Define day and night hours
  const dayStart = 6; // 6 AM
  const dayEnd = 18; // 6 PM

  // Determine if it's day or night
  if (hour >= dayStart && hour < dayEnd) {
    return "day";
  } else {
    return "night";
  }
};

export default isDayOrNight;
