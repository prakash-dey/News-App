import { DarkModeContext } from '../context/DarkModeContext';
import Clock from './Clock';
import {useContext} from 'react';

function Footer(){

    const {darkMode} = useContext(DarkModeContext);
    return(
        <footer className={
            darkMode ? 
            "footer dark": 
            "footer light"}>
            <div className={
                darkMode ? 
                "container footer-flex" : 
                "container footer-flex footer-light"}>
                <ul className={
                    darkMode ? 
                    "social social-dark" : 
                    "social social-light"}>
                    <li className="social-item"><a href="/">Twitter</a></li>
                    <li className="social-item"><a href="/">LinkedIn</a></li>
                    <li className="social-item"><a href="/">Instagram</a></li>
                </ul>
                <Clock/>
                {/* {toggle ? <Clock/>: ''} */}
                {/* <button onClick={()=>setToggle(!toggle)}>toggle</button> */}
            </div>
            
        </footer>
    );
}

export default Footer;