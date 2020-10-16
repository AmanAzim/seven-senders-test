import React, { useState } from 'react';
import Widget from './components/Widget';
import AddWidgetModal from './components/AddWidgetModal';
import ConfirmModal from './components/ConfirmModal';
import './App.css';

const App = () => {
  const [widgets, addWidget] = useState([]);
  const [toDeleteId, setToDeleteId] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleDiscard = () => {
    setToDeleteId(null);
    setShowConfirmModal(false);
    setShowAddModal(false);
  }

  const handleAddWidget = (widgetObj) => {
    addWidget(prevWidgets => [...prevWidgets, widgetObj]);
    setShowAddModal(false);
  };

  const handleDeleteWidget = (id) => {
    setShowConfirmModal(true);
    setToDeleteId(id);
  };

  const handleConfirm = () => {
    addWidget(prevWidgets => prevWidgets.filter(({ id }) => id !== toDeleteId ));
    handleDiscard();
  };
  
  return (
    <div className="App">
      <h1>Seven Senders Widgets</h1>
      <hr />
      <div className="widgets">
        {widgets.length > 0 ? (
          <>
            {widgets.map((widget) => (
              <Widget key={widget.id} {...widget} onDelete={handleDeleteWidget} />
            ))}
          </>
        ) : <h3>No widgets added</h3>}
      </div>
      <button className="add-btn" onClick={() => setShowAddModal(true)}>Add widget</button>
      {showConfirmModal && <ConfirmModal onConfirm={handleConfirm} onDiscard={handleDiscard} />}
      {showAddModal && <AddWidgetModal onAddWidget={handleAddWidget} onDiscard={handleDiscard} />}
    </div>
  );
};

export default App;
