import React from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

import "./styles.css";

const RadioButton = ({ controlProps, size, sx, label, checked, onChange }) => {
  return (
    <>
      <FormControlLabel
        control={<Radio {...controlProps} size={size} sx={sx} />}
        label={label}
        checked={checked}
        onChange={onChange}
      />
    </>
  );
};

export default RadioButton;
