import styled from 'styled-components';
import { mobile, tablet } from './responsive';
export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  height: 70px;
  justify-content: space-between;
  width: 100vw;
  overflow: hidden;
  paddingInline: 100px;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 120;
`;

export const Left = styled.div`
  display: flex;
  margin-left: 2rem;
  align-items: center;
  justify-content: center;
  ${mobile({ 
    marginLeft: "1rem"
  })}
  ${tablet({
    marginLeft: "1rem"
  })}
`;

export const Right = styled.div`
  display: flex;
  gap: 1rem;
  margin-right: 2rem;
  align-items: center;
  justify-content: center;
  ${mobile({ 
    marginLeft: "1rem"
  })}
  ${tablet({
    marginLeft: "1rem"
  })}
`;

export const NavButton = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: white;
  color: black;
  &:focus {
    outline: none;
  }
  ${mobile({ 
    padding: "0.3rem"
  })},
  ${tablet({ 
    padding: "0.3rem"
  })}
`;

