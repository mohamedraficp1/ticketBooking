import React, { useState } from "react";

const ToggleButton = () => {
  const [checked, setChecked] = useState(true);
  const handleCheck = () => setChecked((prev) => !prev);
  return (
    <div>
      <label className="switch">
        <input type="checkbox" checked={checked} onChange={handleCheck} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleButton;
