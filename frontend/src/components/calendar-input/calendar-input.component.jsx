import React from 'react';

// styled components
import { CalendarInputContainer } from './calendar-input.styles';

// components
import Modal from '../modal/modal.component';
import CustomCalendar from '../custom-calendar/custom-calendar.component';

class CalendarInput extends React.Component {
  state = {
    modalToggle: false,
  };

  modalHandler = (e) => {
    e.preventDefault();
    this.setState({
      // modalToggle: true
      modalToggle: !this.state.modalToggle,
    });
  };

  render() {
    const { modalToggle } = this.state;
    return (
      <div>
        <CalendarInputContainer onClick={this.modalHandler}>
          <div>
            Select date
          </div>
        </CalendarInputContainer>
        <Modal show={modalToggle} header="Select Date" modalClosed={this.modalHandler}>
          <CustomCalendar />
        </Modal>
      </div>


    )
  }
}

export default CalendarInput;