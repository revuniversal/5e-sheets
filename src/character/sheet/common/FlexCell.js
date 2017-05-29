import styled from 'styled-components';

/**
 * Represents a cell in a 12-column row
 * @prop {number} columns - number of columns occupied by this cell
 */
const FlexCell = styled.div`
  margin: 0;
  padding: 0;
  width: ${p => p.columns / 12 * 100}%;
`;

export default FlexCell;
