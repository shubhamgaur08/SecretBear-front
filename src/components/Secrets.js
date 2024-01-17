import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Secrets.css';

const SubmitSecret = () => {
  const [inputText, setInputText] = useState('');

 

  

  const sendToServer = async () => {
    const response = await fetch('https://secret-bear-backend.vercel.app/api/secrets/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ secret: inputText })
    });
    const data = await response.json();
    setInputText(''); // Clear the input field
    // if (data !== undefined) {
    //   window.location.reload();
    // }
    
  };
 
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendToServer();
  };
  
  return (
    
    <div className="header">
      
      <form onSubmit={handleSubmit} className="form">
        <h2 id="title">Share Your Secrets</h2>
           
    
         <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleInputChange} placeholder='Type Your Secret Here..' value={inputText}  rows="2" ></textarea>
        <Button type="submit" variant="contained">SHARE</Button>
       </form>
      </div>
  );
};

export default SubmitSecret;
