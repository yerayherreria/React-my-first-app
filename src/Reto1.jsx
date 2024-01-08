import { useState } from "react";

export function Reto1(){
    let [texto,setTexto] = useState("");
    const handleText = () => texto ? setTexto(""):setTexto("Welcome to React Challenges");

    return(
        <>
        <div>
            <button onClick={handleText}>Show / Hide</button>
            <h1>{texto}</h1>
        </div>
        </>
    )
}