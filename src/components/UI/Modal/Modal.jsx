import React, {memo, useState} from 'react';
import cl from './Modal.module.css';

const Modal = ({content, closeModal}) => {
  const [startClosing, setStartClosing] = useState(false)

  const close = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setStartClosing(true)

    setTimeout(() => {
      closeModal()
    }, 300)
  }

  let modalClass = (startClosing) ? `${cl.container} ${cl.containerExiting}` : cl.container
  let modalBodyClass = (startClosing) ? `${cl.body} ${cl.bodyExiting}` : cl.body

  return (
    <div className={modalClass} onClick={close}>
      <div className={modalBodyClass} onClick={(e) => e.stopPropagation()}>
        {content}
      </div>
    </div>
  );
};

export default memo(Modal);