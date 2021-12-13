import React, {useContext} from 'react';
import {getFormatPrice} from '../utils';
import TicketField from './TicketField';
import {ModalContext} from '../contexts/ModalContext';
import Modal from './UI/Modal';

const Ticket = ({ticket}) => {
  const [fromField, toField] = ticket.segments

  const {openModal} = useContext(ModalContext)

  return (
    <div className="ticket" onClick={() => {openModal(Modal, <Ticket ticket={ticket} />)}}>
      <div className="ticket__header">
        <div className="ticket__price">{getFormatPrice(ticket.price)}</div>
        <img src={`https://pics.avs.io/99/36/${ticket.carrier}.png`} alt="" className="ticket__company"/>
      </div>
      <TicketField field={fromField} />
      <TicketField field={toField} />
    </div>
  );
};

export default Ticket;