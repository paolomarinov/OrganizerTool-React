import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { InputZone } from './inputForm';
import { useState, useEffect } from 'react';

const localizer = momentLocalizer(moment);

const CalendarView = (props) => {
  const { events } = props;



  //   //Event object example
  //   // {
  //   //   title: 'Appointment Call',
  //   //   start: new Date(2023, 5, 12, 9, 15),
  //   //   end: new Date(2023, 5, 12, 10, 0),
  //   // },
  //   //events.push(eventObj)
 
  
  console.log('Events:', events);
  return (
    <div style={{ height: '600px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
};

export default CalendarView;