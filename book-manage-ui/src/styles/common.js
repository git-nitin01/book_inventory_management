import styled from "styled-components";
import { mobile, tablet } from "./responsive";

export const BodyWrapper = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
  color: black;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-top: 70px;
  gap: 1rem;
  ${mobile({
    alignItems: "center",
    width: "80%",
    padding: "0.5rem",
    marginInline: "10px",
  })};
  ${tablet({
    alignItems: "center",
    width: "80%",
    padding: "0.5rem",
    marginInline: "10px",
  })};
`;

export const AppHeader = styled.h1`
  color: black;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  ${mobile({
    fontSize: "1rem",
  })}
  ${tablet({
    fontSize: "1rem",
  })}
`;

export const ErrorBox = styled.div`
  background-color: rgba(255, 0, 0, 0.5);
  color: black;
  padding: 1rem;
  border-radius: 5px;
`;

export const PopUpWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 5px;
  z-index: 100;
  color: black;
  display: flex;
  width: fit-content;
  flex-direction: column;
`;

export const Button = styled.button`
  padding: 5px;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.color || 'black'};
  color: white;
  &:focus {
    outline: none;
  }
  width: ${props => props.width || '50%'};
`;