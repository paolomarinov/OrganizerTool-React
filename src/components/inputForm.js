import React from "react";
import { useState } from "react";

export function InputZone(props){
  const [schoolName, setSchoolName] = useState('');
  const [director, setDirector] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('')
  const [followup, setFollowup] = useState('');
  const [followupDate, setFollowupDate] = useState('')
  const [callbackTime, setCallbackTime] = useState('');
  const [notes, setNotes] = useState('')
  const [accountType, setAccountType] = useState('')
  // const [eventToHandle, setEventToHandle] = useState(null)


    function handleSubmit(e){
      e.preventDefault()


      const timezone = "America/New_York";
      const dateInTimezone = new Date(followupDate).toLocaleString("en-US", {
        timeZone: timezone,
      });

      let dateObj = new Date(`${followupDate}T${callbackTime}`)
      let endDateObj = new Date(`${followupDate}T${callbackTime}`)
      endDateObj.setMinutes(endDateObj.getMinutes() + 15);

      const uniqueId = new Date().getTime();
      
    const eventObj = {
      uniqueId: uniqueId,
      title: schoolName,
      start: dateObj,
      end: endDateObj,
      formData: {
        schoolName,
        director,
        phoneNumber,
        email,
        followupDate,
        callbackTime,
        notes,
        accountType
      }      
    }

      localStorage.setItem(`eventObj_${uniqueId}`, JSON.stringify(eventObj));
props.onEventAdded();
    }

    return (
        <div className='input'>
        <form onSubmit={handleSubmit}>

        <label htmlFor="school-name">
          School name 
        </label>
        <input type="text" id="school-name" value={schoolName} onChange={(e) =>setSchoolName(e.target.value)}/>

        <label htmlFor="director">
          director
        </label>
        <input type="text" id="director" value={director} onChange={(e) =>setDirector(e.target.value)}/>

        <label htmlFor="phone-number">
          Phone number
        </label>
        <input type="tel" id="phone-number" value={phoneNumber} onChange={(e) =>setPhoneNumber(e.target.value)}/>

        <label htmlFor="email">
          Email to send info  
        </label>
        <input type="text" id="email" value={email} onChange={(e) =>setEmail(e.target.value)}/>

        <label htmlFor="followup-date">
          Followup Date
          </label>
          <input type="date" id="followup-date" value={followupDate} onChange={(e) =>{console.log(e.target.value); setFollowupDate(e.target.value)}}/>
          <br />
        <label htmlFor="callback-time">
          Time
          </label>
          <input type="time" id="callback-time" value={callbackTime} onChange={(e) =>setCallbackTime(e.target.value)}/>
          <br/>
        <label htmlFor="notes">
          notes
          </label>
          <textarea type="text" id="notes" value={notes} onChange={(e) =>setNotes(e.target.value)}/>

        <label htmlFor="account-type">
          Account Type  
          </label>
          <input type="text" id="account-type" value={accountType} onChange={(e) =>setAccountType(e.target.value)}/>
        
        <button type="submit">Submit</button>
        </form>
      </div>
    )
}

//This function needs to return an array