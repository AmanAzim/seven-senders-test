import React from 'react';
import Modal from './helperComponents/Modal';

const ConfirmModal = ({ onConfirm, onDiscard }) => (
  <Modal className=" warning">
    <h3>Please confirm delete</h3>
    <div className="btn-container">
      <button onClick={onConfirm}>Confirm</button>
      <button onClick={onDiscard}>Cancel</button>
    </div>
  </Modal>
);

export default ConfirmModal;
