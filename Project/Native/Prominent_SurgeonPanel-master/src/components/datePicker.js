import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import React, { useState } from "react";

const AppDatePicker = ({ className, label ,reportStartDate, setReportStartDate}) => {
  const currentDate = new Date();
  const [startDate, setStartDate] = useState(currentDate);
  const handleDatePick = (date)=>{
      setStartDate(date)
      setReportStartDate(date)
  }
  return (
    <div className={className || ""}>
      <div className="date-picker-label">{label}</div>
      <DatePicker
        minDate={reportStartDate}
        maxDate={currentDate}
        selected={startDate}
        onChange={handleDatePick}
        className="app-date-picker-container"
      />
    </div>
  );
};
export default AppDatePicker;
