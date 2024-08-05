import { assets } from '../../assets/assets';
import './LoginPopup.css';
import { useState } from 'react';

function LoginPopup({setShowLogin}) {


    const [currState, setCurrState] = useState("Sign Up");

    return ( 

        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
            </form>
        </div>
     );
}

export default LoginPopup; 