import styled from "styled-components";
import { mobile, tablet } from "./responsive";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 80vh;
  width: 100%;
  overflow-y: scroll;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  ${mobile({
    display: "none",
  })}
  ${tablet({
    display: "none",
  })}
`;

export const ListHeaderItem = styled.p`
  font-weight: bold;
  width: 100px;
  text-align: center;
  ${mobile({
    width: "200px",
  })};
`;

export const ListText = styled.p`
  font-size: 0.8rem;
  width: 100px;
  text-align: center;
  ${mobile({
    width: "200px",
    textAlign: "left",
  })};
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 0;
  width: 100px;
  justify-content: center;
  align-items: center;
`;

export const StyledInput = styled.textarea`
  text-align: center;
  font-size: 0.8rem;
  border: none;
  background-color: white;
  color: black;
  &:focus {
    outline: none;
  }
  resize: none;
  width: 100%;
  height: fit-content;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100px;
`;

