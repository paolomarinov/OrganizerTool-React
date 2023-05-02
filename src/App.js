import React, { useState, useEffect } from 'react';
import './App.css';
import CalendarView from './components/calendarComponent';
import { InputZone } from './components/inputForm';
import moment from 'moment';

const App = () => {
  let nothing;
  const [events, setEvents] = useState([]);

  useEffect(() => {
    updateEvents();
  }, []);

  const updateEvents = () => {
    const newEvents = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("eventObj_")) {
        const evt = JSON.parse(localStorage.getItem(key));
        evt.start = moment(evt.start).toDate();
        evt.end = moment(evt.end).toDate();
        newEvents.push(evt);
      }
    }

    setEvents(newEvents);
  };

  return (
    <div className="App">
      <div className='app-container'>
        <InputZone events={events} onEventAdded={updateEvents} />
        <div className='calendar-container'>
          <CalendarView events={events} updateEvents={updateEvents}/>
        </div>
      </div>
    </div>
  );
};

export default App;
//step one: 
//plan out the UI where the software would work:


//input needed: name of school, name of director, phone number, email to send info, followUp: true/false, followup date, callback time, priority group, account type.
//Calendar //would need to have a property with which i can add the required input. I'm thinking I should organize all the input into an object, and then pass in that object as such
//priority groups of accounts
//daily timestamp with timeblocks



//Every input added should create an instance of the item and save it in storage. It would be like an account, so that we do not have to add all of the input above in every followup.  
//What should the inputs do?
//add item in their respective priority group.
//add item to a calendar (integrate a calendar: either google or PC calendar could work)
//followup of item should be encased in a displayed daily timestamp that goes over an interval of available hours. 
//set up alert() reminders when the item is coming (app should have access to clock and calendar)
//set up a way of telling me the item is late. 
