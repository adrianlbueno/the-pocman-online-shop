import { forwardRef } from 'react';

const Input = forwardRef(function Input(
  { type = 'text', name = '', ...props },
  ref
) {
  return (
    <>
      <input
        placeholder=" "
        className="txt-input"
        type={type}
        ref={ref}
        {...props}
      />
      {name && (
        <label className="label-placeholder">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </label>
      )}
    </>
  );
});

export default Input;
