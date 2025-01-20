function findHourDifference(date) {
  const hourDifference = (new Date() - new Date(date)) / 1000 / 3600;
  return `${hourDifference} - hour ago`;
}

const result = findHourDifference("2025-01-15");
console.log(result);


// Section 2 Select OBJ ID 



