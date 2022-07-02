// import React from "react";
// import FullCalendar from "@fullcalendar/react"; // must go before plugins
// import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

// export default class DemoApp extends React.Component {
//   render() {
//     return (
//       <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
//     );
//   }
// }
// <FullCalendar
//   plugins={[dayGridPlugin]}
//   initialView="dayGridMonth"
//   weekends={false}
//   events={[
//     { title: "event 1 sddsaf", date: "2022-02-07" },
//     { title: "event 2 sdfasdfasdfa", date: "2022-07-02" },
//   ]}
// />;




// import React, { useState } from "react";
// import Calendar from "react-calendar";


// function MyApp() {
//   const [value, onChange] = useState(new Date());

//   return (
//     <div>
//       <Calendar onChange={onChange} value={value} />
//     </div>
//   );
// }

// export default MyApp;







// import React, { useState } from "react";
// import { render } from "react-dom";
// import "react-calendar/dist/Calendar.css";
// import Calendar from "react-calendar";

// const ReactCalendar = () => {
//   const [date, setDate] = useState(new Date());

//   const onChange = (date) => {
//     setDate(date);
//   };

//   return (
//     <div>
//       <Calendar showWeekNumbers onChange={onChange} value={date} />
//       {console.log(date)}
//       {date.toString()}
//     </div>
//   );
// };

// render(<ReactCalendar />, document.querySelector("#root"));

// export default Calendar






import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";

import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import "../styles/Calendar.css";

import events from "../components/Events";

export default function App() {
  return (
    <div className="App">
      <FullCalendar
        defaultView="dayGridMonth"
        // themeSystem="Simplex"
        // header={{
        //   left: "prev,next",
        //   center: "title",
        //   right: "dayGridMonth,timeGridWeek,timeGridDay",
        // }}
        plugins={[dayGridPlugin]}
        events={events}
        displayEventEnd="true"
        eventColor={"#EFD071"}
        
      />
    </div>
  );
}
