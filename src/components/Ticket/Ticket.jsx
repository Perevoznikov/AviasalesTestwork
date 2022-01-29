import React, {memo} from 'react';
import cl from './Ticket.module.css';
import './Ticket.animate.css';
import {getFormatPrice} from '../../utils';
import TicketField from '../TicketField/TicketField';

const Ticket = ({ticket, ...props}) => {
  const [fromField, toField] = ticket.segments

  return (
    <div className={cl.container} {...props}>
      <div className={cl.header}>
        <div className={cl.price}>{getFormatPrice(ticket.price)}</div>
        <img src={`https://pics.avs.io/99/36/${ticket.carrier}.png`} alt="" className={cl.company}/>
      </div>
      <TicketField field={fromField} />
      <TicketField field={toField} />
    </div>
  );
};

export default memo(Ticket);