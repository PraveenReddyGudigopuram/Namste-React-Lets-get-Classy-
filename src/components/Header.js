import { useState } from 'react';
import {LOGO_URL} from '../utils/Constants';
import { Link } from 'react-router-dom';

const Header = () =>{
    const [loginBtn, setLoginBtn] = useState("Login");
    const btnChange = () =>{
        loginBtn==="Login"?setLoginBtn("Logout"):setLoginBtn("Login");
    }
    return (
        <div className="header">
            <div className='logo-container'>
                <img className='logo' width={"100px"} src={LOGO_URL} alt='logo'/>
            </div>
            <div className='nav-items-container'>
                <ul className='nav-items'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <li><button onClick={btnChange}>{loginBtn}</button></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;