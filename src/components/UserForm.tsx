import React, { useState } from 'react';
import { FormEvent } from 'react';
import { Routes, Route,useNavigate } from "react-router-dom"
import JavaScript from './JavaScript';
import Java from './Java';

import Reactjs from './Reactjs';

interface ContactInfo {
  language: string;
  name: string;
  email: string;
  phoneNumber: string;
}


const UserForm = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    language: '',
    name: '',
    email: '',
    phoneNumber: '',
  });
  let navigate=useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if(contactInfo.language==='JavaScript'){
      navigate('/JavaScript',{ state: {contactInfo}})
    }
    if(contactInfo.language==='Reactjs'){
      navigate('/Reactjs',{ state: {contactInfo}})
    }
    if(contactInfo.language==='JAVA'){
      navigate('/Java',{ state: {contactInfo}})
    }
    if(contactInfo.language==='C++'){
      navigate('/Cplusplus',{ state: {contactInfo}})
    }
    
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="language">Language:</label>
        <select value={contactInfo.language} onChange={(e)=> setContactInfo({...contactInfo,language:e.target.value})}  name="Selection_Options" id="cars">
          <option value=''>Selected Language</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Reactjs">Reactjs</option>
          <option value="JAVA">JAVA</option>
        </select>
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={contactInfo.name}
          onChange={(e) =>
            setContactInfo({ ...contactInfo, name: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={contactInfo.email}
          onChange={(e) =>
            setContactInfo({ ...contactInfo, email: e.target.value })
          }
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={contactInfo.phoneNumber}
          onChange={(e) =>
            setContactInfo({ ...contactInfo, phoneNumber: e.target.value })
          }
        />
      </div>
      <button disabled={contactInfo.language==='' || contactInfo.name==='' || contactInfo.email==='' || contactInfo.phoneNumber===''} type="submit">Submit</button>
    </form>
    <button onClick={handleSubmit}  disabled={contactInfo.language==='' || contactInfo.name==='' || contactInfo.email==='' || contactInfo.phoneNumber===''} >
      Start The Test 
    </button>
          
    </div>
  );
  
}

export default UserForm