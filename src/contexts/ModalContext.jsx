import React, {useState} from 'react';
import {createContext} from 'react';

export const ModalContext = createContext({})

export const ModalProvider = ({children}) => {
  const [ModalElement, setModalElement] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const openModal = (modal, content) => {
   const ModalReactElement = React.createElement(
      modal,
      {content: content, ...modalVariables},
      null
    )
    setModalElement(ModalReactElement)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const modalVariables = {openModal, closeModal}

  return (
    <ModalContext.Provider value={modalVariables}>
      {children}
      {(isOpen)?ModalElement:null}
    </ModalContext.Provider>
  );
};