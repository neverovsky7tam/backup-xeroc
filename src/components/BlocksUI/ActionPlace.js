import React from 'react';

const ActionPlace = ({ icon, func }) => {
  return (
    <div
      className="action-place"
      onClick={func}>
      <div className="icon-holder">{icon}</div>
    </div>
  );
};

export default ActionPlace;