import React from 'react';

// styled components
import {
  ProgressBarContainer,
  FillerContainer,
  PercentageContainer
} from './progress-bar.styles';

const Filler = ({ percentage }) => (
  <FillerContainer style={{width: `${percentage}%`}}>
    <PercentageContainer>{percentage}%</PercentageContainer>
  </FillerContainer>
)

const ProgressBarComplete = ({ percentage }) => (
  <ProgressBarContainer>
    <Filler percentage={percentage} />
  </ProgressBarContainer>
);

class ProgressBar extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      percentage: 63
    }
  }

  render(){
    const { percentage } = this.state;
    return (
      <ProgressBarComplete percentage={percentage} />
    );
  }
  
}


export default ProgressBar;