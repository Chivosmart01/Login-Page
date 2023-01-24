import React, { useRef } from "react";

import classes from "./InputComponent.module.css"

const InputComponent = (props) => {
  const inputRef = useRef();

  const activate = () => {
     
  }


  return (
    <React.Fragment>
      <div
        className={`${classes.control} ${
          props.isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor={props.id}>{props.label}</label>
        <input
        ref={inputRef}
          type={props.type}
          id={props.id}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
        />
      </div>
    </React.Fragment>
  );
};

export default InputComponent;
