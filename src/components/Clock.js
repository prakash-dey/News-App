import { DarkModeContext } from '../context/DarkModeContext';
import React, {useState, useEffect, useContext} from 'react';


function Clock (){

    const{darkMode} = useContext(DarkModeContext)

    const [date, setDate] = useState(new Date());

    function refreshClock(){
        setDate(new Date());
    }

    useEffect(()=> {
        setInterval(refreshClock, 1000);
        // console.log('useEffect')
        return function cleanup(){
            clearInterval();
        };
    });

        return(
            <div className={darkMode ? "dark" : "light"}>{date.toLocaleTimeString()}</div>
        )
    }


export default Clock;