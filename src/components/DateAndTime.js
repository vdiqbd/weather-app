import { useState } from "react";

const DateandTime = () => {
  const today = new Date();
  const dateNow = today.toLocaleDateString("en-us", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
  const timeNow = today.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const [date, setDate] = useState(dateNow);
  const [time, setTime] = useState(timeNow);

  const update = () => {
    const today = new Date();
    const dateNow = today.toLocaleDateString("en-us", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });

    const timeNow = today.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    setDate(dateNow);
    setTime(timeNow);
  };
  setInterval(update, 1000);

  return (
    <div className="date-time-con">
      <div className="date">{date}</div>
      <div className="time">{time}</div>
    </div>
  );
};

export default DateandTime;
