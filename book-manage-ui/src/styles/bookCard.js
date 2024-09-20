import styled from "styled-components";
import { mobile, tablet } from "./responsive";

export const BookCardWrapper = styled.div`
  display: none;
  flex-direction: column;
  gap: 1rem;
  width: clamp(200px, 50%, 300px);
  padding: 1rem;
  border-radius: 5px;
  ${mobile({
    display: "flex",
  })};
  ${tablet({
    display: "flex",
  })};
`;

export const BookCardInput = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: black;
  &:focus {
    outline: none;
  }
  width: 100%;
`;

export const BookCardButton = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: black;
  &:focus {
    outline: none;
  }
  width: 90%;
`;

export const BookCardInnerWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 90%;
`;
