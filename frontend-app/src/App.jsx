import React from "react";


//import { Counter } from "./components/Counter.jsx";
//import CounterFBC from "./components/CounterFBState.jsx";
import DisplayMyDetails from "./components/DisplayMyDetails.jsx";
const App = ()=>{
  // let details=["nikki","23NR501"];
  // let Role="developer";
  let name="nikitha";
  let CollegeName="baba";
  let Course="cse";
  let Rollno="23NR1A0501";
return(
  <p>
    

    {/* <Counter />
    <Counter />
    <CounterFBC FullDetails={details} role={Role}/>  */}
  
    <DisplayMyDetails FullDetails={name} clgname={CollegeName} course={Course} rollno={Rollno} />
  </p>
);
};
export default App;