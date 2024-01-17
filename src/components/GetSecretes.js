import React, { useState, useEffect } from 'react';
import SecretItem from './SecretItem';

const GetSecrets = () => {
  const [secrets, setSecrets] = useState([]);

  useEffect(() => {
    const fetchSecrets = async () => {
      try {
        const response = await fetch('https://secret-bear-backend.vercel.app/api/Secrets/secrets', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        const arr=json.map((x)=>x.secret);
        setSecrets(arr.reverse());
        
      } catch (error) {
        console.error('Error fetching secrets:', error);
      }
    };

    fetchSecrets();
  }, [secrets]);

  return (
    <div className="grid">
      <h1>People's Secrets</h1>
      
      
        {secrets.map((item, index) => {
          
           return <SecretItem key={index} data={item} />
        })}
      
      
    </div>
  ) 
  
};

export default GetSecrets;

