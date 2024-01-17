import React, {useState } from "react";
import { useNavigate } from 'react-router-dom';
import GoogleLogin from './GoogleLogin';
const Signup = (props) => {
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({name:"",email:"",password:"",cpassword:""})

    const onChange = (e) =>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }

    const handleSubmit = async (e)=>{
        let host = "https://secret-bear-backend.vercel.app";
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/createuser`,{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({name: credentials.name,email: credentials.email,password: credentials.password}),
        })

        const json = await response.json();
        console.log(json)
        if(json.success){
            // redirect
            localStorage.setItem('token',json.authtoken);
            console.log(localStorage.getItem('token'))
            navigate("/")
            props.showAlert("Account Created successfully","success")
        }else{
            props.showAlert("Invalid Credentials","danger")
        }
    }
    return (
//             
<div className="container h-100 mt-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" >
          <div className="card-body ">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-2 mx-1 mx-md-4 ">Sign up</p>

                <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c"  value={credentials.name} onChange={onChange} name="name" className="form-control" required minLength={5}/>
                      <label className="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c"  value={credentials.email} onChange={onChange} name="email" className="form-control" />
                      <label className="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c"  value={credentials.password} name="password" onChange={onChange} className="form-control" required minLength={5} />
                      <label className="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                          <input type="cpassword" value={credentials.cpassword} onChange={onChange} className="form-control" id="cpassword" name="cpassword" required minLength={5}/>
                      <label className="form-label" for="form3Example4cd">Confirm your password</label>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center  mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn   gradient-custom-2 btn-lg">SignUp</button>
                  </div>

                </form>
                <GoogleLogin txt={"Sign up with Google"}/>

              </div>
              
            </div>
          </div>
        </div >
      </div>
    </div>
  </div>
    )
}

export default Signup
