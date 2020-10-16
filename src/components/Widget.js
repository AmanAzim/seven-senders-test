import React from 'react';

const Widget = ({ id, name, language, onDelete }) => (
  <div className="widget">
    <div className="widget-body fill">
      <div className="widget-body-info">
        <h3>{name}</h3>
        <h5>Language: {language}</h5>
      </div>
      <button className="delete-btn" onClick={() => onDelete(id)}>Delete</button>
    </div>
  </div>
);

export default Widget;
