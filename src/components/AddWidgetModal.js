import React, { useState } from 'react';
import Modal from './helperComponents/Modal';
import Select from './helperComponents/Select';
import Input from './helperComponents/Input';

const languageOptions = [
  {
    value: 'English'
  },
  {
    value: 'German'
  }
];
const LAN_ERR = 'Please, select a language';
const NAME_ERR = 'Please, give a name';

const AddWidgetModal = ({ onAddWidget, onDiscard }) => {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const [language, setLanguage] = useState('');
  const [showAddName, setShowAddName] = useState(false);

  const handleChange = (value, name) => {
    if (+value !== 0) {
      setError(null);
    }
    name === 'select' ? setLanguage(value) : setName(value);
  };

  const handleAdd = () => {
    if (showAddName) {
      if (+name !== 0) {
        const widgetObj = {
          id: Math.random(),
          name,
          language
        };

        onAddWidget(widgetObj);
      } else {
        setError(NAME_ERR);
      }
    } else {
      if (+language !== 0) {
        setShowAddName(true);
      } else {
        setError(LAN_ERR);
      }
    }
  };

  return (
    <Modal>
      <div className="err-container">
        {error && <p className="err-warning">{error}</p>}
      </div>
      {showAddName ? <Input label="Name" name="input" placeholder="Widget name" value={name} onChange={handleChange} />
        :<Select label="Select language" name="select" value={language}  options={languageOptions} onChange={handleChange} />}
      <div className="btn-container">
        <button disabled={error} onClick={handleAdd}>{showAddName ? 'Add' : 'Next'}</button>
        <button onClick={onDiscard}>Cancel</button>
      </div>
    </Modal>
  );
}

export default AddWidgetModal;
