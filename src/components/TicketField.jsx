import React from 'react';
import {getFormatStringDate, minutesInHoursAndMinutes, getTitleFromCountStops} from '../utils';

const TicketField = ({field}) => {
  let transfersCount = field.stops.length
  let transfersTitle = getTitleFromCountStops(transfersCount)
  return (
    <div className="ticket__flight">
      <div className="ticket__field ticket__city">
        <div className="ticket__title">{field.origin} – {field.destination}</div>
        <div className="ticket__value">{getFormatStringDate(field.date, field.duration)}</div>
      </div>
      <div className="ticket__field ticket__time">
        <div className="ticket__title">В пути</div>
        <div className="ticket__value">{minutesInHoursAndMinutes(field.duration)}</div>
      </div>
      <div className="ticket__field ticket__transfer">
        <div className="ticket__title">{transfersTitle}</div>
        <div className="ticket__value">{field.stops.join(', ')}</div>
      </div>
    </div>
  );
};

export default TicketField;