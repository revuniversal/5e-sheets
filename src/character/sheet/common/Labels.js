import styled from 'styled-components';

const Labels = styled.div`
  text-align: left;
  padding: 0 12px 0;
  margin: 3px 0 2px;
  height: 1em;
  line-height: 1em;
  font-size: 8px;
  border-top: 1px solid ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.primary};
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

export default Labels;
