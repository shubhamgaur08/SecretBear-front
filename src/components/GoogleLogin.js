import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyBxBpvKzSYMskC_AEn09YV4b86kGNME9xc",

  authDomain: "bearcap.firebaseapp.com",

  projectId: "bearcap",

  storageBucket: "bearcap.appspot.com",

  messagingSenderId: "609158212817",

  appId: "1:609158212817:web:85709bb8027cfe23c5e9f0",

  measurementId: "G-HSFRED6RXN"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const GoogleLogin = (props) => {
  const txt=props.txt;
  let navigate = useNavigate();

  const login = async (name, email, uid) => {
    const response = await fetch("https://secret-bear-backend.vercel.app/api/GoogleAuth/login", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        uid,
        
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
    const json = await response.json()
        
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            navigate("/");
            

        }
      
  };
  

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user= await result.user;

      const token = await result.user.getIdToken();
      localStorage.setItem('token', token);
      await login(
        user.displayName,
        user.email,
        user.uid,
        
      );
      // console.log(localStorage.getItem('token'));
      
     
    } catch (error) {
      console.error(error);
      
    }
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem('token');
      navigate('/login');
      props.showAlert('Logged out successfully', 'success');
    }).catch((error) => {
      console.error(error);
      props.showAlert('Failed to log out', 'danger');
    });
  };

  return (
    <div>
      <button className="btn btn-primary btn-block  gradient-custom-1 mb-20 " onClick={handleGoogleLogin}>{txt?txt:"Login with Google"}</button>
      {/* <button className="btn btn-primary" onClick={handleLogout}>Logout</button> */}
    </div>
  );
};

export default GoogleLogin;

