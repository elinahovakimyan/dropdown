import React from 'react';
import posed, { PoseGroup } from 'react-pose';

import { OptionTag } from '../../../core/components';

const AnimationWrapper = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: 'spring', stiffness: 1000, damping: 15 },
      default: { duration: 300 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
});

function OptionTags({ selectedOptions, deselectOption }) {

  const renderSelectedOptions = () => {
    return selectedOptions.map(option => (
      <PoseGroup key={option}>
        <AnimationWrapper className="animated-tag" key={`tag+${option}`}>
          <OptionTag option={option} handleDelete={() => deselectOption(option)} />
        </AnimationWrapper>
      </PoseGroup>
    ))
  }

  return selectedOptions && selectedOptions.length
    ? renderSelectedOptions()
    : null
}

export default React.memo(OptionTags);
