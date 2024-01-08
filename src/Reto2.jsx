import { useState } from "react";

export function Reto2(){
    let [time,setTime] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    function start(){
        if(!intervalId){
            const intervalId = setInterval(() => {
                setTime(time++);
            }, 1000);
            setIntervalId(intervalId);
        }
    }

    function stop(){
        clearInterval(intervalId);
        setIntervalId(null);
    }

    function reset(){
        setCont(0);
        clearInterval(intervalId);
        setIntervalId(null);
    }

    return(
        <>
        <h1>Timer</h1>
        <h2>{Math.floor(time/60)} mins {time%60} secs</h2>
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
        </>
    )
}