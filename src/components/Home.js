
import React, {  useEffect  } from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import noteImg from '../images/BearNote.svg';
import SubmitSecret from "./Secrets";
import GetSecrets from "./GetSecretes";
import { useNavigate } from 'react-router-dom';
export default function Home(props) {
  let navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('token')==undefined){
      navigate('/login')
      console.log(localStorage.getItem('token'))
    
    }
  
  // eslint-disable-next-line
}, []);
  
  return (
    <div className="container-fluid" >
    <div className="row">
        <div className="col-md-5">
            <h1 className="display-1 pt-5 ps-5 respo"><span style={{ color: "#9C27B0" }}>Secret</span>bear</h1>
            <p className="ps-5 respo" style={{ fontSize: "1.7rem", fontWeight: "bold" }}>Share your secrets with everyone</p>
            
            
        </div>
        
    </div>

    <SubmitSecret />
    <GetSecrets />

</div>
  );
}

