import ReactDOM from 'react-dom';
import { useRef, useEffect } from 'react';
import { PopUpWrapper, Button } from '../styles/common';

const PopUp = ({ children, onClose }) => {
  const modalRoot = document.body;
  const el = useRef(document.createElement('div'));
  useEffect(() => {
    const container = el.current;
    modalRoot.appendChild(container);
    return () => {
      modalRoot.removeChild(container);
    };
  }, [modalRoot]);
  return ReactDOM.createPortal(
    <PopUpWrapper>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '0.5rem 0',
        width: '100%',
      }}>
        <Button onClick={onClose}>X</Button>
      </div>
      {children}
    </PopUpWrapper>
  , el.current);
}

export default PopUp;
