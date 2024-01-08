import { useState } from "react"

export function Reto3(){
    const [word,setWord] = useState("");
    let [words,setWords] = useState([]);
    let [liWords,setLiWords] = useState([]); 

    function handleWord(e){
        setWord(e.target.value)
    }

    function addWord(){
        setWords([...words, word]);
        setLiWords([...liWords,<li key={words.length}>{word}<button onClick={removeWord}>X</button></li>])
    }

    function removeWord(e){
        liWords.filter(li => li.textContent !== e.target.parentNode.textContent);
        setLiWords(liWords)
    }
    return(
        <>
            <input type="text" id="word" onChange={handleWord}/>
            <button id="add" onClick={addWord}>Add</button>
            <ul>
                {liWords}
            </ul>
        </>
    )
}