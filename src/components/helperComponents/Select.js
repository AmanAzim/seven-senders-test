import React from 'react';

const Select = ({ value, label, name, options, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value, name);
  };

  return (
    <div className="select">
      <label className="label" htmlFor={name}>{label}</label>
      <select
        name={name}
        value={value}
        onChange={handleChange}
      > 
        <option value="">-</option>
        {options.map(({ value }) => (
          <option key={value} value={value}>{value}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
