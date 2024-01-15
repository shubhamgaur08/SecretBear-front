

import "../styles/home.css";
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import noteImg from '../images/BearNote.svg';
import SubmitSecret from "./Secrets";
import GetSecrets from "./GetSecretes";
export default function Home(props) {
  
  return (
    <div className="container-fluid" >
    <div className="row">
        <div className="col-md-5">
            <h1 className="display-1 pt-5 ps-5 respo"><span style={{ color: "#9C27B0" }}>B</span>earNote</h1>
            <p className="ps-5 respo" style={{ fontSize: "1.7rem", fontWeight: "bold" }}>Your notebook on cloud - safe and secure</p>
            
            
        </div>
        {/* <div className="col-md-7 d-flex flex-column align-items-center">
            <img className="img-fluid" style={{width: "75%"}} src={noteImg} alt="BearNote" />
        </div> */}
    </div>

    <SubmitSecret />
    <GetSecrets />

</div>
  );
}

