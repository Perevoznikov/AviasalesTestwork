import React, {useState} from 'react';

const Modal = ({content, closeModal}) => {
  const [startClosing, setStartClosing] = useState(false)

  const close = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setStartClosing(true)

    const timer = setTimeout(() => {
      closeModal()
      clearTimeout(timer)
    }, 300)
  }

  let modalClass = (startClosing) ? 'modal modal-exiting' : 'modal'
  let modalBodyClass = (startClosing) ? 'modal__body modal__body-exiting' : 'modal__body'

  return (
    <div className={modalClass} onClick={close}>
      <div className={modalBodyClass} onClick={(e) => e.stopPropagation()}>
        {content}
      </div>
    </div>
  );
};

export default Modal;