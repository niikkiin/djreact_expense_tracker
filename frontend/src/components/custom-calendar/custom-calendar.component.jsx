import React from 'react';

// calendar
import moment from 'moment';

// styled components
import {
  TableContainer,
  SelectMonthContainer,
  PreviousMonthContainer,
  ThisMonthContainer,
  NextMonthContainer,
  MonthPickerContainer,
  SelectYearContainer,
  YearPickerContainer,
  ThisYearContainer
} from './custom-calendar.styles';

class CustomCalendar extends React.Component {
  weekdayshort = moment.weekdaysShort();

  state = {
    showMonthTable: false,
    showYearTable: false,
    showDateTable: true,
    dateObject: moment(),
    allmonths: moment.months(),
    selectedDay: null,
    modalClose: false,
    hello: 'hello'
  }

  firstDayOfMonth = () => {
    let dateObject = this.state.dateObject;
    let firstDay = moment(dateObject)
                  .startOf("month")
                  .format("d")
    return firstDay;
  }

  daysInMonth = () => {
    return this.state.dateObject.daysInMonth();
  };

  year = () => {
    return this.state.dateObject.format("Y");
  };

  currentDay = () => {
    return this.state.dateObject.format("D");
  };

  // to insert month picker
  month = () => {
    return this.state.dateObject.format("MMMM");
  };

  // change month
  setMonth = month => {
    let monthNo = this.state.allmonths.indexOf(month);// get month number 
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("month", monthNo); // change month value
    this.setState({
      dateObject: dateObject, // add to state
      showMonthTable: !this.state.showMonthTable,
      showDateTable: !this.state.showDateTable
    });
  };

  // show selection when current month is clicked
  showMonth = (e, month) => {   
    this.setState({  
      showMonthTable: !this.state.showMonthTable,   
      showDateTable: !this.state.showDateTable
    });
  };

  // to handle the months
  MonthList = props => {
    let months = [];
    props.data.map(data => {
      months.push(
        <td
          key={data}
          onClick={e => {
            this.setMonth(data);
          }}
        >
          <span>{data}</span>
        </td>
      );
    });

    let rows = [];
    let cells = [];

    months.forEach((row, i) => { 
      if (i % 3 !== 0 || i == 0) { // except zero index 
          cells.push(row); 
      } else { 
          rows.push(cells); 
          cells = [];
          cells.push(row); 
      }
    });
    rows.push(cells); // add last row

    let monthlist = rows.map((d, i) => {
      return <tr>{d}</tr>;
    });

    return (
      <table className="calendar-month">
        <thead>
          <tr>
            <th colSpan="4">Select a Month</th>
          </tr>
        </thead>
        <tbody>{monthlist}</tbody>
      </table>
    );
  }

  showYear = () => {
    this.setState({
      showYearTable: !this.state.showYearTable,
      showDateTable: !this.state.showDateTable
    });
  };

  // STUB PREVIOUS AND NEXT BUTTONS
  onPrev = () => {
    let curr = "";
    if (this.state.showYearTable == true) {
      curr = "year";
    } else {
      curr = "month";
    }
    this.setState({
      dateObject: this.state.dateObject.subtract(1, curr)
    });
  };
  
  onNext = () => {
    let curr = "";
    if (this.state.showYearTable == true) {
      curr = "year";
    } else {
      curr = "month";
    }
    this.setState({
      dateObject: this.state.dateObject.add(1, curr)
    });
  };

  
  // changing the year
  setYear = year => {
    // alert(year)
    let dateObject = Object.assign({}, this.state.dateObject);
    dateObject = moment(dateObject).set("year", year);
    this.setState({
      dateObject: dateObject,
      showMonthTable: !this.state.showMonthTable,
      showYearTable: !this.state.showYearTable
    });
  };

  // get dates of the year
  getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
      dateArray.push(moment(currentDate).format("YYYY"));
      currentDate = moment(currentDate).add(1, "year");
    }
    return dateArray;
  }

  // STUB YEAR TABLE
  YearTable = props => {
    let months = [];
    let nextten = moment()
      .set("year", props)
      .add("year", 12)
      .format("Y");

    let tenyear = this.getDates(props, nextten);

    tenyear.map(data => {
      months.push(
        <td
          key={data}
          className="calendar-month"
          onClick={e => {
            this.setYear(data);
          }}
        >
          <span>{data}</span>
        </td>
      );
    });

    let rows = [];
    let cells = [];

    months.forEach((row, i) => {
      if (i % 3 !== 0 || i == 0) {
        cells.push(row);
      } else {
        rows.push(cells);
        cells = [];
        cells.push(row);
      }
    });

    rows.push(cells);
    let yearlist = rows.map((d, i) => {
      return <tr>{d}</tr>;
    });

    return (
      <table className="calendar-month">
        <thead>
          <tr>
            <th colSpan="4">Select a Year</th>
          </tr>
        </thead>
        <tbody>{yearlist}</tbody>
      </table>
    );

  }

  // on day click, console log the value
  onDayClick = (e, d) => { 
      this.setState({
        selectedDay: d,
        modalClose: !this.state.modalClose
      },
      () => {
        console.log("SELECTED DAY: ", this.state.selectedDay);
      }
    );
  };

	render() {
    let weekdayshortname = this.weekdayshort.map(day => {
      return <th key={day}>{day}</th>;
    });

    // generate first day of month
    let blanks = [];
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push(
        <td className="calendar-day empty">{""}</td>
      );
    }

    // generate </td> of date in the month
    let daysInMonth = [];
    for (let d = 1; d <= this.daysInMonth(); d++) {
      let currentDay = d == this.currentDay() ? "today" : "";
        daysInMonth.push(
          <td key={d} className={`calendar-day ${currentDay}`}>
            <div
                onClick={e => { 
                  this.onDayClick(e, d);
                }}>
              {d}
            </div>
          </td>
      );
    }

    // define variables for table
    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    // get calendar structure of the week
    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row); // if index not equal 7 that means not go to next week
      } else {
        rows.push(cells); // when reach next week we contain all td in last week to rows 
        cells = []; // empty container 
        cells.push(row); // in current loop we still push current row to new container
      }
      if (i === totalSlots.length - 1) { // when end loop we add remain date
        rows.push(cells);
      }
    });

    // wrap all rows in td
    let daysinmonth = rows.map((d, i) => {
      return <tr>{d}</tr>;
    });



		return (
      <div>
        

        {/* <YearPickerContainer>
        <this.YearTable props={this.year()} />
          {this.state.showMonthTable && (
            <this.MonthList data={moment.months()} />
          )}
        </YearPickerContainer> */}
        
        
        <SelectMonthContainer>
          <PreviousMonthContainer
              onClick={e => {
                this.onPrev();
              }}
          > &#60; </PreviousMonthContainer>
          <ThisMonthContainer 
              onClick={e => {
                this.showMonth();
              }}>
            {this.month()}
          </ThisMonthContainer>
          <ThisYearContainer
              onClick={(e)=>{
                this.showYear()
              }}>
            {this.year()}
          </ThisYearContainer>
          <NextMonthContainer
              onClick={e => {
                this.onNext();
              }}
          > &#62; </NextMonthContainer>

        </SelectMonthContainer>
        
        <MonthPickerContainer>
          {
            this.state.showYearTable && 
            <this.YearTable props={this.year()} />
          }
          {
            this.state.showMonthTable &&  
            <this.MonthList data = {moment.months()} />
          }
        </MonthPickerContainer>

        {
          !this.state.showMonthTable && (
            <TableContainer className='calendar-day'>
              <thead>
                <tr>
                  {weekdayshortname}
                </tr>
              </thead>
              <tbody>
                {daysinmonth}
              </tbody>
            </TableContainer>
          )
        }
      </div>
    );
	}
}

export default CustomCalendar;
