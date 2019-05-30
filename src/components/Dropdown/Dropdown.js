import React, { useState } from 'react';

import posed, { PoseGroup } from 'react-pose';

import DropdownList from './components/DropdownList';
import OptionTags from './components/OptionTags';
import DropdownButton from './components/DropdownButton';

import './Dropdown.scss';


const list = [];

for (let i = 0; i < 150; i++) {
  const randWords = ['wolf', 'cat', 'squarrel'];
  const randNum = Math.floor(Math.random() * (3 - 0)) + 0;
  const currWord = randWords[randNum] + String(i);

  list.push(currWord);
}



const AnimationWrapper = posed.div({
  enter: { opacity: 1, transition: { duration: 1000 } },
  exit: { opacity: 0, transition: { duration: 800 } }
});



function Dropdown() {
  const [isOpen, toggleOpen] = useState(false);
  const [selectedOptions, updateSelectedOptions] = useState([]);
  const [searchValue, updateSearch] = useState([]);


  const selectOption = (option) => {
    updateSelectedOptions([...selectedOptions, option]);
  }


  const deselectOption = (option) => {
    const updatedOptions = selectedOptions.filter(o => o !== option);
    updateSelectedOptions(updatedOptions);
  }


  const handleListItemClick = (option) => {
    if (option) {
      if (!selectedOptions.includes(option)) {
        selectOption(option);
      } else {
        deselectOption(option);
      }
    }
  }

  const filteredList = list.filter(item => item.includes(searchValue));

  return (
    <div className="dropdown">

      <OptionTags
        selectedOptions={selectedOptions}
        deselectOption={deselectOption}
      />


      <DropdownButton
        searchValue={searchValue}
        handleChange={(e) => updateSearch(e.target.value)}
        handleClick={() => toggleOpen(!isOpen)}
      />


      <PoseGroup>
        {isOpen
          ? (
            <AnimationWrapper className="animated-box" key="list">
              <DropdownList
                list={filteredList}
                selectedOptions={selectedOptions}
                handleListItemClick={handleListItemClick} />
            </AnimationWrapper>)
          : null}
      </PoseGroup>

    </div>
  );
}


export default React.memo(Dropdown);
