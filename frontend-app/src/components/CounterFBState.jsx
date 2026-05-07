import {useState} from "react";
const CounterFBC=(props)=>{

    let [count, setCount]=useState(0);
   
    return(
        <>
        <h4>props data: {props.role}, {props.FullDetails} </h4>
        <h3> <u>Function based component</u></h3>
        <h1>count:{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>increement++</button>
        <button onClick={()=>{setCount(0)}}>reset</button>
        <button onClick={()=>{setCount(count-1)}}>decreement--</button>
        </>
    )
}
export default CounterFBC;