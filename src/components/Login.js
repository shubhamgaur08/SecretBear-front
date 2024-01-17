import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import GoogleLogin from './GoogleLogin';
import '../styles/login.css';
const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://secret-bear-backend.vercel.app/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            history("/");
            

        }
        else{
            props.showAlert("Invalid Credentials","danger")
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
      
        
  <div className="container  mt-5" >
    <div className="row  d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10  ">
        <div className="card rounded-3 text-black">
          <div className="row g-0  justify-content-center">
            <div className="col-lg-5 ">
              <div className="card-body  p-md-4 mx-md-4">

                <div className="text-center ">
              
                  <h4 className="title mt-3 mb-3 pb-1">WELCOME TO<span className='title1'>SECRET</span> <span className='title2'>BEAR</span></h4>
                </div>

                <form onSubmit={handleSubmit}>
                  <p>Please login to your account</p>

                  <div className="form-outline mb-4">
                    <input type="email" value={credentials.email} onChange={onChange} id="email" name="email" className="form-control"
                      placeholder="Email address" />
                    <label className="form-label" htmlFor="">Email address</label>
                    
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" value={credentials.password} onChange={onChange} name="password" id="password" className="form-control" placeholder="Password"/>
                    <label className="form-label" htmlFor="form2Example22">Password</label>
                  </div>

                  <div className="text-center pt-1 mb-4 pb-1 ">
                    <button className="btn btn-primary btn-block  gradient-custom-2 mb-20 w-75" type="submit">LOGIN</button>
                
                  </div>  
                   <GoogleLogin/>

                  <div className="d-flex   pb-2 mt-3">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <Link to="/Signup">
                    <button type="button"   className="btn btn-outline-danger btn-sm  " >SIGN UP</button></Link>
                  </div>

                </form>

             

              </div>
            </div>
            {/* <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4">Write your thoughts...</h4>
                
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  </div>

    )
}

export default Login
