import styled from 'styled-components';

const tableLineColor = '#F3F3F3';
const primaryColor = '#303778';
const secondaryColor = '#EE3F5F';

export const TableWrapper = styled.div`
  border: 3px solid ${tableLineColor};
  border-radius: 1rem;
`;

export const TableContainer = styled.table`
  color: #323232;
  border-collapse: collapse;
  border-style: hidden;
  width: 100%;
  text-align: left;
  
  span {
    color: ${secondaryColor};
  }
  
  th, td {
    border: 2px solid ${tableLineColor};
    padding: 1rem;
    text-transform: capitalize;
  }
`;

export const TableHeadContainer = styled.thead`
  font-size: 1.6rem;

  th {
    
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
  }
`;
  
export const TableBodyContainer = styled.tbody`
  font-size: 1.4rem;
  color: ${primaryColor};
`;