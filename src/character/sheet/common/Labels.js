import styled from 'styled-components';

const Labels = styled.div`
  text-align: left;
  padding: 2px 12px 0.5em;
  margin: 0 0 1px;
  height: 0.8em;
  line-height: 0.8em;
  font-size: 8px;
  border-top: 1px solid ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default Labels;
