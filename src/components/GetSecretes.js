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
        setSecrets(arr);
        console.log(arr);
      } catch (error) {
        console.error('Error fetching secrets:', error);
      }
    };

    fetchSecrets();
  }, []);

  return (
    <div className="row">
      <h1>People's Secrets</h1>
      
        {secrets.map((item, index) => {
          console.log(item);
           return <SecretItem key={index} data={item} />
        })}
      
    </div>
  ) 
  
};

export default GetSecrets;

