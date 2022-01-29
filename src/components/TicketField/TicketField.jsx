import React, {memo} from 'react';
import cl from './TicketField.module.css';
import {getFormatStringDate, minutesInHoursAndMinutes, getTitleFromCountStops} from '../../utils';

const TicketField = ({field}) => {
  let transfersCount = field.stops.length
  let transfersTitle = getTitleFromCountStops(transfersCount)
  return (
    <div className={cl.flight}>
      <div className={cl.field}>
        <div className={cl.title}>{field.origin} – {field.destination}</div>
        <div className={cl.value}>{getFormatStringDate(field.date, field.duration)}</div>
      </div>
      <div className={cl.field}>
        <div className={cl.title}>В пути</div>
        <div className={cl.value}>{minutesInHoursAndMinutes(field.duration)}</div>
      </div>
      <div className={cl.field}>
        <div className={cl.title}>{transfersTitle}</div>
        <div className={cl.value}>{field.stops.join(', ')}</div>
      </div>
    </div>
  );
};

export default memo(TicketField);