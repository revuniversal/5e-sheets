import styled from 'styeld';

const Circle = styled.div`
  display:none;
  &:empty {
    display: block;
    height: .6em;
    width: .6em;
    padding: .1em;
    line-height: .8em;
    border: .1em solid black;
    border-radius: 50%;
  }
`;

export default Circle;