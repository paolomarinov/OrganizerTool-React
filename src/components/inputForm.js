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
  const [priorityGroup, setPriorityGroup] = useState('')
  const [accountType, setAccountType] = useState('')


    function handleSubmit(e){
      //e.preventDefault();
      
      // const formData = {
      //   schoolName,
      //   director,
      //   phoneNumber,
      //   email, 
      //   followupDate,
      //   callbackTime,
      //   priorityGroup,
      //   accountType
      // }

      let dateObj = new Date (new Date(followupDate).toISOString().substring(0, 10));
      const [hours, minutes] = callbackTime.split(":").map(Number)
      dateObj.setHours(hours, minutes)

      let endDateObj = new Date(new Date(followupDate).toISOString().substring(0, 10));
      endDateObj.setHours(hours, (minutes + 15))
        //   //Event object example

    const eventObj = {
      title: schoolName,
      start: dateObj,
      end: endDateObj
    }

      

      const uniqueId = new Date().getTime();
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
          Callback Time
          </label>
          <input type="time" id="callback-time" value={callbackTime} onChange={(e) =>setCallbackTime(e.target.value)}/>

        <label htmlFor="priority-group">
          Priority Group
          </label>
          <input type="text" id="priority-group" value={priorityGroup} onChange={(e) =>setPriorityGroup(e.target.value)}/>

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