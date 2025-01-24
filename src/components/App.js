import React,{useState} from 'react';
import lady from '../assets/lady.jpg';
import '../index.css'


export default function App(){

    const [counter, setCounter]= useState(0);

    const handleClick= ()=>{
        alert ('You clicked this button')
        setCounter(counter + 1); //increments the counter
    };

    return(
        <div className="App">
            <h1>Cheerful lady</h1>
            <img src={lady} alt= "pretty lady"/>
            <p> I love creating fashion.</p>
            <button onClick={handleClick}>Click Me</button>
            <p>“You clicked this button {counter} times”</p>
        </div>

    )
}