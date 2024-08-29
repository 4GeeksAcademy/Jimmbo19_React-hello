//import react into the bundle
import React, { useState, useEffect } from "react";

const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return { hours, minutes, seconds };
}
const Reloj = ({initialSeconds}) =>{
    
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect(() => {
        
        const tick = () => setSeconds(prevSeconds => prevSeconds + 1);

        
        const intervalId = setInterval(tick, 1000);

        
        return () => clearInterval(intervalId);
    }, []); 
    const { hours, minutes, seconds: sec } = formatTime(seconds);

    return (
        <div>
            <h1>
                {hours}h {minutes}m {sec}s
            </h1>
        </div>
    )
}
export default Reloj