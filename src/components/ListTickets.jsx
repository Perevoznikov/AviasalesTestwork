import React from 'react';
import Ticket from './Ticket';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

const ListTickets = ({tickets}) => {
  return (
      <TransitionGroup className='tickets'>
        {tickets.map((ticket) => {
          return <CSSTransition key={ticket.price + ticket.carrier} timeout={300}>
            <Ticket ticket={ticket} />
          </CSSTransition>
        })}
      </TransitionGroup>
  );
};

export default ListTickets;