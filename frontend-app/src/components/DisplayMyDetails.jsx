import {useState} from "react";
const DisplayMyDetails=(props)=>{

    let [count, setCount]=useState(0);
   
    return(
        <>
        <h4>MyDetails: </h4>
            <h3>College Name:{props.clgname},</h3>
            <h3>Name: {props.FullDetails}, </h3>
            <h3>Course:{props.course}, </h3>
            <h3>RollNo:{props.rollno} </h3>
        <h3> <u>Function based component</u></h3>
        <h1>count:{count}</h1>
        <button onClick={()=>{setCount(count+1)}}>increement++</button>
        <button onClick={()=>{setCount(0)}}>reset</button>
        <button onClick={()=>{setCount(count-1)}}>decreement--</button>
        </>
    )
}
export default DisplayMyDetails;