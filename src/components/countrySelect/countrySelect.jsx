import React from "react";
import Select from "react-select";
import { useState, useMemo } from "react";
import countryList from "react-select-country-list";
export default function CountrySelect() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };

  return <Select options={options} value={value} onChange={changeHandler} />;
}
