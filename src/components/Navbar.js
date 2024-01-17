import React from 'react'
import {Link,useLocation} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { Button } from '@mui/material';
import './Navbar.css'



const Navbar = () => {
    let location = useLocation();
    let navigate = useNavigate();

    const handleLogout = () =>{
        localStorage.removeItem('token');
        navigate('/login');
    }
    
    // useEffect(() => {
    //     console.log(location.pathname);
    // }, [location]);
    return (
      <nav className="navbar navbar-expand-lg navbar-light "style={{fontWeight:"bold"}}>
      <div className="container-fluid">
          <NavLink activeclassname="active" className="navbar-brand" >SecretBear</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" >
              <ul className="navbar-nav ms-auto">
             {localStorage.getItem('token') ? <li className="nav-item">
                      <Button className="nav-link" aria-current="page" component={NavLink} to="/" variant="text" color="secondary" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.1rem" }}>
                          Home
                      </Button>
                  </li>
                  :<div></div>}
                  
                  {
                      !localStorage.getItem('token') ?
                          <div className="d-flex">
                              <li className="nav-item">
                                  <Button className="nav-link" aria-current="page" component={NavLink} to="/login" variant="text" color="secondary" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.1rem" }}>
                                      Login
                                  </Button>
                              </li>
                              <li>
                                  <Button className="nav-item ms-2" component={NavLink} to="/Signup" variant="outlined" color="secondary" style={{ textTransform: "none", fontFamily: "'Poppins', sans-serif", fontSize: "1.1rem" }}>
                                      SignUp
                                  </Button>
                              </li>
                          </div> :
                          <li>
                              <Button onClick={handleLogout} className="nav-item ms-2" variant="outlined" color="secondary" style={{  fontFamily: "'Poppins', sans-serif", fontSize: "1.1rem" }}>
                                  logout
                              </Button>
                          </li>

                  }
              </ul>
          </div>
      </div>
  </nav>
    )
}

export default Navbar

