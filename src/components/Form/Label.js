import React from "react";

const Label = (props) => {
  return (
    <div>
      <label className="label" {...props}>
        {props.children}
      </label>
    </div>
  );
};

export default Label;
