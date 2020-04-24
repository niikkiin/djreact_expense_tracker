import styled, { css } from 'styled-components';

const tableLineColor = '#F3F3F3';
const primaryColor = '#303778';
const secondaryColor = '#EE3F5F';
const secondaryTint = '#F6B7CE';
const primaryTint = '#4F78E0';

const defaultStyles = css`
	transform: scale(1);
	transition: all 0.3s ease;
	text-transform: capitalize;
`;

const hoverEffectStyles = css`
	background-color: ${secondaryColor};
	color: #fff;
	cursor: pointer;
	transform: scale(1.1);
`;

export const TableContainer = styled.table`
	width: 100%;
	border-collapse: collapse;

	th,
	td {
		border: 2px solid ${tableLineColor};
		padding: 1rem;
		font-size: 1.6rem;
		${defaultStyles};
	}

  td:hover,
  th:hover {
		${hoverEffectStyles};
  }
  
  td.today {
    background-color: ${secondaryTint};
    color: #fff;

    &:hover {
      background-color: ${secondaryColor};
    }
  }
`;

export const TableHeadingContainer = styled.thead``;

export const SelectMonthContainer = styled.div`
	font-size: 1.8rem;
	padding: 1rem 0;

	display: flex;
	text-align: center;
`;

const monthSelectorStyles = css`
	flex-grow: 1;
	padding: 1.2rem;
  ${defaultStyles};
  background-color: ${primaryTint};
  color: #fff;

	&:hover {
    transform: scale(1.1);
    cursor: pointer;
		border: none;
	}
`;
export const PreviousMonthContainer = styled.div`
	${monthSelectorStyles};
`;

const middleStyles = css`
  cursor: pointer;
  font-size: 2rem;
  font-weight: 800;
  transition: all 0.3s ease;
  padding: 1.2rem;
  background-color: ${primaryColor};
  color: #fff;

  &:hover {
    background-color: ${primaryTint};
    
  }
`;

export const ThisMonthContainer = styled.div`
  ${middleStyles};
	flex-grow: 4;

`;

export const ThisYearContainer = styled.div`
  flex-grow: 1;
  ${middleStyles};
`;

export const NextMonthContainer = styled.div`
	${monthSelectorStyles};
`;

export const MonthPickerContainer = styled.div`
  font-size: 1.6rem;
  margin: 0 0 1.3rem 0;

  .calendar-month {
    border-collapse: collapse;
    width: 100%;
    transition: transform 3000ms cubic-bezier(0.17, 0.04, 0.03, 0.94);

    td,
    th {
      padding: 0.8rem;
      border: 2px solid ${tableLineColor};
    }

    td {
      ${defaultStyles};
      
      &:hover {
        ${hoverEffectStyles};
      }
    }
  }
`;

export const SelectYearContainer = styled.div`
  border: 2px solid ${tableLineColor};

  display: flex;
  justify-content: center;

  padding: 1rem;
  font-size: 2.5rem;
  font-weight: 800;
  transition: all 0.3s ease;
  transform: scale(1);
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    background-color: ${secondaryColor};
    color: #fff;
    border: none;
  }
`;

export const YearPickerContainer = styled.div`
  font-size: 1.6rem;
  margin: 1.4rem 0 0.5rem 0;


  .calendar-month {

    border-collapse: collapse;
    width: 100%;
    transition: transform 3000ms cubic-bezier(0.17, 0.04, 0.03, 0.94);

    td,
    th {
      padding: 0.8rem;
      border: 2px solid ${tableLineColor};
    }

    td {
      ${defaultStyles};
      
      &:hover {
        ${hoverEffectStyles};
      }
    }
  }
`;