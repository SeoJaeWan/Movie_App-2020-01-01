import React from "react";
import { Bar } from "../../styles/select/SelectBarStyle";

const SelectBar = () => {
  return (
    <Bar>
      <select name="degree">
        <option>극영화</option>
        <option>애니메이션</option>
      </select>
    </Bar>
  );
};

export default SelectBar;
