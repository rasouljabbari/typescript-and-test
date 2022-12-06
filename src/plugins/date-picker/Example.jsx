import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import transition from "react-element-popper/animations/transition"
import opacity from "react-element-popper/animations/opacity"

function Example(props) {

  const [value, setValue] = useState(new Date());

  return <DatePicker
    value={value}
    onChange={setValue}
    multiple={false}
    // range
    // onlyMonthPicker
    // onlyYearPicker
    format="YYYY-MM-DD / HH:mm:ss"
    animations={[
      opacity(),
      transition({ from: 35, duration: 800 })
    ]}
    calendar={persian}
    locale={persian_fa}
    calendarPosition="bottom-right"
    plugins={[
      <TimePicker />
    ]}
    mapDays={({ date }) => {
      let isWeekend = [0, 6].includes(date.weekDay.index)

      if (isWeekend) return {
        disabled: true,
        style: { color: "#ccc" },
        onClick: () => alert("آخر هفته ها غیر فعال هستند")
      }}}
  />;
}

export default Example;