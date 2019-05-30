import React from 'react';


function DropdownButton({ handleClick, searchValue, handleChange }) {
  const arrowSrc = require('../../../assets/down-arrow.png');

  return (
    <div className="dropdown-header flex-space-between" onClick={handleClick}>

      <input value={searchValue} onChange={handleChange} placeholder="Select an option" />

      <img className="dropdown-arrow-img" src={arrowSrc} alt="dropdown arrow" />

    </div>
  );
}

export default React.memo(DropdownButton);
