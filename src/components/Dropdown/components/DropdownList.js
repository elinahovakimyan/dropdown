import React from 'react';

import ListItem from './ListItem';


function DropdownList({ list, selectedOptions, handleListItemClick }) {

  const renderList = () => {
    return list.map(option => {
      const isChecked = selectedOptions.includes(option);

      return (
        <ListItem
          key={option}
          isChecked={isChecked}
          option={option}
          selectedOptions={selectedOptions}
          handleClick={() => handleListItemClick(option)}
        />
      );
    });
  }

  return (
    <div className="dropdown-list">
      {renderList()}
    </div>
  );
}

export default React.memo(DropdownList);
