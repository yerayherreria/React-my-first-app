import { useState } from "react";

export function Reto5(){
    const [person, setPerson] = useState({ username: null, fullName: null, age: null });
    const [status, setStatus] = useState(false);

    function handleData(e){
        setPerson({...person,[e.target.name]:e.target.value});
    }
    function handleStatus(e){
        setStatus(true);
    }
    function ShowData(){
        return (
        <div>
            <h1>Request Sent to DB with below request data</h1>
            <ul>
                <li>UserName: {person.username}</li>
                <li>FullName: {person.fullName}</li>
                <li>Age: {person.age}</li>
            </ul>
        </div>
        )
     }
    return (
        <>
            
                <div>
                    <label htmlFor="username">
                        Username:<br />
                        <input type="text" name="username" onChange={handleData} />
                    </label>
                </div>
                <div>
                    <label htmlFor="fullName">
                        FullName:<br />
                        <input type="text" name="fullName" onChange={handleData} />
                    </label>
                </div>
                <div>
                    <label htmlFor="age">
                        Age:<br />
                        <input type="number" name="age" onChange={handleData} />
                    </label>
                </div>
                <br />
                <div>
                    <button type="submit" onClick={handleStatus}>Submit</button>
                </div>
            

            {status && <ShowData />}

        </>
    )
}