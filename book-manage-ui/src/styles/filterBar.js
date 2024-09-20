import styled from 'styled-components';
import { mobile } from './responsive';

export const Wrapper = styled.div`
  display: flex;
  border-radius: 5px;
  border: 1px solid black;
  padding: 0.5rem;
  width: 100%;
  gap: 5px;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: black;
  flex: 4 1 0;
  &:focus {
    outline: none;
  }
  ${mobile({
    flex: "2 1 0",
  })};
`;

export const Selector = styled.select`
  padding: 0.5rem;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  width: 100%;
  flex: 1 1 0;
  background-color: white;
  ${mobile({
    flex: "2 1 0",
  })};
`;