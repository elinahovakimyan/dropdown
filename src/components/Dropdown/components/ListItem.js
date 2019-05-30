import React from 'react';


function ListItem({ option, isChecked, handleClick }) {
  const tickSrc = require('../../../assets/tick.jpg')

  return (
    <div className="list-item-container flex-space-between" onClick={handleClick}>
      <p className="list-item">{option}</p>

      {isChecked
        ? <img src={tickSrc} alt="checked" />
        : null}

    </div>
  );
}

export default React.memo(ListItem);
