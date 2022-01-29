import React, {useContext} from 'react';
import cl from './ListTickets.module.css';
import Ticket from '../Ticket/Ticket';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {ModalContext} from '../../contexts/ModalContext';
import Modal from '../UI/Modal/Modal';

const ListTickets = ({tickets}) => {
  const {openModal} = useContext(ModalContext)

  return (
      <TransitionGroup className={cl.container}>
        {tickets.map((ticket) => {
          return <CSSTransition key={ticket.price + ticket.carrier} timeout={300}>
            <Ticket ticket={ticket} onClick={() => {openModal(Modal, <Ticket ticket={ticket} />)}} />
          </CSSTransition>
        })}
      </TransitionGroup>
  );
};

export default ListTickets;