import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor="props.input.id" className="me-2 font-bold text-lg">
        {props.label}
      </label>
      <input
        ref={ref}
        {...props.input}
        className="border border-indigo-600  rounded-md pl-2"
      />
    </div>
  );
});

export default Input;
