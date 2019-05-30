import React, { useState } from 'react';

import DropdownList from './components/DropdownList';
import DropdownButton from './components/DropdownButton';

import './Dropdown.scss';

const list = [];

for (let i = 0; i < 150; i++) {
  const randWords = ['wolf', 'cat', 'squarrel'];
  const randNum = Math.floor(Math.random() * (3 - 0)) + 0;
  const currWord = randWords[randNum] + String(i);

  list.push(currWord);
}

class Dropdown extends React.PureComponent {
  state = {
    isOpen: false,
    selectedOptions: [],
  }


  selectOption = (option) => {
    const { selectedOptions } = this.state;

    this.setState({ selectedOptions: [...selectedOptions, option] });
  }


  deselectOption = (option) => {
    const { selectedOptions } = this.state;
    const updatedOptions = selectedOptions.filter(o => o !== option);

    this.setState({ selectedOptions: updatedOptions });
  }


  handleListItemClick = (option) => {
    const { selectedOptions } = this.state;

    if (option) {
      if (!selectedOptions.includes(option)) {
        this.selectOption(option);
      } else {
        this.deselectOption(option);
      }
    }
  }

  toggleOpen = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const { selectedOptions, isOpen } = this.state;

    return (
      <div className="dropdown">
        <DropdownButton
          selectedOptions={selectedOptions}
          deselectOption={this.deselectOption}
          btnText="Select an option"
          handleClick={this.toggleOpen}
        />

        {isOpen
          ? <DropdownList list={list} selectedOptions={selectedOptions} handleListItemClick={this.handleListItemClick} />
          : null}
      </div>
    );
  }
}

export default Dropdown;
