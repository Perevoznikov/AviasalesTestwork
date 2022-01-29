import React, {useState} from 'react';
import {createContext} from 'react';

export const ModalContext = createContext({})

export const ModalProvider = ({children}) => {
  const [ModalElements, setModalElements] = useState([])

  const openModal = (modal, content) => {
   const ModalReactElement = React.createElement(
      modal,
      {content: content, key: Date.now(), ...modalVariables},
      null
    )
    setModalElements([...ModalElements, ModalReactElement])
  }

  const closeModal = () => {
    setModalElements([...ModalElements])
  }

  const modalVariables = {openModal, closeModal}

  return (
    <ModalContext.Provider value={modalVariables}>
      {children}
      {ModalElements}
    </ModalContext.Provider>
  );
};