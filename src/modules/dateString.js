export const dateString = (date) => {
  var dateSplited = date.split("/");
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${dateSplited[0]} ${monthNames[dateSplited[1] - 1]}, ${
    dateSplited[2]
  }`;
};
