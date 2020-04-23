import React from 'react';

// styled components
import {
  CardGoalsContainer,
  ContainerOne,
  ContainerTwo,
  GoalsContainer,
  GoalTitle,
  TaskNumber,
  DateContainer
} from './card-goals.styles';

// components
import PriorityBox from '../priority-box/priority-box.component';
import ProgressBar from '../progress-bar/progress-bar.component';

// NOTE: components to be broken down
const CardGoals = () => (
  <CardGoalsContainer>
    <ContainerOne>
      <PriorityBox />
      <GoalsContainer>
        {/* TODO pass in a state */}
        <GoalTitle>
          Complete Room 1
        </GoalTitle>
        <TaskNumber>
          Task: 2/3
        </TaskNumber>
      </GoalsContainer>

    </ContainerOne>
    <ContainerTwo>
      <DateContainer>
        Due Date: 04-21-2020
      </DateContainer>
      <ProgressBar />
    </ContainerTwo>
  </CardGoalsContainer>
)

export default CardGoals;