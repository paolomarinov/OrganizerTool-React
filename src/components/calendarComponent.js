import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { InputZone } from './inputForm';
import { useState, useEffect } from 'react';

const localizer = momentLocalizer(moment);

const CalendarView = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const newEvents = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("formData_")) {
        const evt = JSON.parse(localStorage.getItem(key));
        evt.start = moment(evt.start).toDate();
        evt.end = moment(evt.end).toDate();
        newEvents.push(evt);
      }
    }

    setEvents(newEvents);
  }, []);
    //loop through the items in local storage and access them to be created in the calendar section.

    //Event object example

  // for(let i=0; i<localStorage.length; i++){
  //   const key = localStorage.key(i)
  //   if(key.startsWith("formData_")){
  //     storageObj = JSON.parse(localStorage.getItem(key))
  //   }

  //   //loop through the items in local storage and access them to be created in the calendar section.
    
  //   //Event object example
  //   // {
  //   //   title: 'Appointment Call',
  //   //   start: new Date(2023, 5, 12, 9, 15),
  //   //   end: new Date(2023, 5, 12, 10, 0),
  //   // },
  //   //events.push(eventObj)
 
  
  
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