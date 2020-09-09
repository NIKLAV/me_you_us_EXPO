import React, { useState } from "react";
import { View, Button, Platform, Modal, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export const DatePicker = ({ setDate, date, setShow }) => {
  /* const [date, setDate] = useState(new Date(1598051730000)); */

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <View>
      <DateTimePicker
        testID="dateTimePicker"
        value={date}
        mode="date"
        is24Hour={true}
        display="default"
        onChange={onChange}
        maximumDate={new Date()}
      />
     
    </View>
  );
};

export default DatePicker;
