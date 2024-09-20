import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 90%;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  outline: 1px solid black;
`;

export const FormInput = styled.input`
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

export const FormButton = styled.button`
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

export const InnerFormWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 90%;
`;

