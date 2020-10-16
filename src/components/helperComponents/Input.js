import React from 'react';

const Input = ({ value, label, name, placeholder, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value, name);
  };

  return (
    <div className="input">
      <label className="label" htmlFor={name}>{label}</label>
      <input type="text" value={value} placeholder={placeholder} name={name} onChange={handleChange} />
    </div>
  );
};

export default Input;
