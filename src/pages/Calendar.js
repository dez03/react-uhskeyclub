import React, { useState } from "react";
import CalendarCal from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Calendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <CalendarCal onChange={onChange} value={value} />
    </div>
  );
}

export default Calendar;
