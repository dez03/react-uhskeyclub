// const events = [
//   { title: "Park Clean Up", start: "2022-06-01" },
//   {
//     title: "Long Event",
//     start: getDate("YEAR-MONTH-07"),
//     end: getDate("YEAR-MONTH-10"),
//   },
//   {
//     groupId: "999",
//     title: "Repeating Event",
//     start: getDate("YEAR-MONTH-09T16:00:00+00:00"),
//   },
//   {
//     groupId: "999",
//     title: "Repeating Event",
//     start: getDate("YEAR-MONTH-16T16:00:00+00:00"),
//   },
//   {
//     title: "Conference",
//     start: "YEAR-MONTH-17",
//     end: getDate("YEAR-MONTH-19"),
//   },
//   {
//     title: "Meeting",
//     start: getDate("YEAR-MONTH-18T10:30:00+00:00"),
//     end: getDate("YEAR-MONTH-18T12:30:00+00:00"),
//   },
//   { title: "Lunch", start: getDate("YEAR-MONTH-18T12:00:00+00:00") },
//   { title: "Birthday Party", start: getDate("YEAR-MONTH-19T07:00:00+00:00") },
//   { title: "Meeting", start: getDate("YEAR-MONTH-18T14:30:00+00:00") },
//   { title: "Happy Hour", start: getDate("YEAR-MONTH-18T17:30:00+00:00") },
//   { title: "Dinner", start: getDate("YEAR-MONTH-18T20:00:00+00:00") },
// ];

// function getDate(dayString) {
//   const today = new Date();
//   const year = today.getFullYear().toString();
//   let month = (today.getMonth() + 1).toString();

//   if (month.length === 1) {
//     month = "0" + month;
//   }

//   return dayString.replace("YEAR", year).replace("MONTH", month);
// }

// export default events;


import "bootstrap/dist/css/bootstrap.min.css";

const events = [
  {
    title: "Clark Nursing Home Summer Cards",
    start: getDate("YEAR-06-19"),
    end: getDate("YEAR-06-28"),
  },
  {
    title: "Pride Party Cleanup",
    start: "2022-06-12",
  },
  {
    title: "CNH Bingo Event",
    start: "2022-07-10",
    url: "https://classroom.google.com/u/1/c/NDg3MjgzMjE4ODQz/m/NTI1NTY4MTEyNzMy/details",
  },
  {
    title: "Girls Night Out",
    start: "2022-08-12",
    url: "https://classroom.google.com/c/NDg3MjgzMjE4ODQz/m/NTM4MzAzMzEyOTc3/details",
  },
  {
    title: "Garden Work Party",
    start: "2022-08-13",
    url: "https://classroom.google.com/c/NDg3MjgzMjE4ODQz/m/NTM4MzAzMjA5Nzgx/details",
  },
  {
    title: "CNH Bingo Event",
    start: "2022-08-14",
    url: "https://classroom.google.com/c/NDg3MjgzMjE4ODQz/m/NTM4Mjc2Mzk5NzAx/details",
  },
  {
    title: "Food Pantry",
    start: "2022-08-20",
    url: "https://classroom.google.com/c/NDg3MjgzMjE4ODQz/m/NTM4OTAyOTUxOTg4/details",
  },
  {
    title: "CNH Bingo Event",
    start: "2022-08-21",
    url: "https://classroom.google.com/c/NDg3MjgzMjE4ODQz/m/NTM4Mjc2Mzk5NzAx/details",
  },
  {
    title: "Movie Under The Stars",
    start: "2022-09-09",
    url: "https://classroom.google.com/c/NDg3MjgzMjE4ODQz/m/NTQ1MjE0ODI1MDU4/details",
  },
  {
    title: "Operation Clean Sweep",
    start: "2022-09-10",
    url: "https://classroom.google.com/c/NDg3MjgzMjE4ODQz/m/NTQ0NjU0MDM2MzU4/details",
  },
  {
    title: "Six Flags Fall Rally",
    start: "2022-10-09",
    url: "https://classroom.google.com/c/NDg3MjgzMjE4ODQz/m/NTQ1MjQ4MjYwNjgz/details",
  },
  {
    title: "T-Shirt Design Contest",
    start: "2022-09-24",
    url: "https://classroom.google.com/c/NDg3MjgzMjE4ODQz/m/NTQ1MjIwMzU2OTE1/details",
  },
  {
    title: "Football Concession Stands",
    start: "2022-09-16",
    url: "https://classroom.google.com/c/NDg3MjgzMjE4ODQz/m/NTQ1NDYxODc3MDMy/details",
  },
  {
    title: "Football Concession Stands",
    start: "2022-10-07",
    url: "https://classroom.google.com/c/NDg3MjgzMjE4ODQz/m/NTQ1NDYxODc3MDMy/details",
  },
  {
    title: "Football Concession Stands",
    start: "2022-10-21",
    url: "https://classroom.google.com/c/NDg3MjgzMjE4ODQz/m/NTQ1NDYxODc3MDMy/details",
  },
  {
    title: "Mayor's 5K Run/Walk",
    start: "2022-09-25",
    url: "https://classroom.google.com/c/NDg3MjgzMjE4ODQz/m/NTQ2MDA3ODMyOTA1/details",
  },
  {
    title: "Battle Hill Clothing Drive",
    start: "2022-09-24",
    url: "https://classroom.google.com/c/NDg3MjgzMjE4ODQz/m/NTQ4MzY1OTIxODYx/details",
  },
];

function getDate(dayString) {
  const today = new Date();
  const year = today.getFullYear().toString();
  let month = (today.getMonth() + 1).toString();

  if (month.length === 1) {
    month = "0" + month;
  }

  return dayString.replace("YEAR", year).replace("MONTH", month);
}

export default events;
