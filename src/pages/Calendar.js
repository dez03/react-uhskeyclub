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
      <div className="Calendar_">
        <h6 className="mt-4 px-4">
          Pressing on the events will bring you to them on UHS Key Club Google
          Classroom, you must sign in to your school account to see the event
        </h6>
        <hr />
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
