import React from 'react';

import './OptionTag.scss';


function Tag({ option, handleDelete }) {
  const closeSrc = require('../../../assets/close.png')

  return (
    <div className="option-tag">
      {option}
      <img src={closeSrc} alt="checked" onClick={handleDelete} />
    </div>
  );
}

const OptionTag = React.memo(Tag);

export { OptionTag };