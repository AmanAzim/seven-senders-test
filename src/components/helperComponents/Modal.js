import React from 'react';

const Modal = ({ children, className = '' }) => (
  <div className="modal fill">
    <div className={`modal-body${className}`}>
      <div className="task-container fill">
        {children}
      </div>
    </div>
  </div>
);

export default Modal;
