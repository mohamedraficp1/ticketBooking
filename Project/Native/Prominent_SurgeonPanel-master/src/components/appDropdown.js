import React, { useState } from "react";
import Select from "react-select";

const customStyles = {
  control: (base) => ({
    ...base,
    border: 0,
    boxShadow: "none",
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";
    return { ...provided, opacity, transition };
  },
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    backgroundColor: state.isSelected && "#0a0758",
  }),
};

export default function AppDropDown({
  data = {},
  placeholder,
  labelName = "value",
  valueName = "value",
  className,
}) {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className={className || ""}>
      <Select
        className="input-dropdown"
        styles={customStyles}
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={data}
        placeholder={placeholder}
        getOptionLabel={(option) => option[labelName]}
        getOptionValue={(option) => option[valueName]}
      />
    </div>
  );
}
