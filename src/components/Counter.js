import React, { useState } from "react";

export default function Counter () {
  const [counter, setCounter] = useState(0);

  const add = () => {
    setCounter(counter + 1);
  };
  const agin = () => {
    setCounter(0);
  };

  return (
    <div className="counter">
        <h1>اذكر الله</h1>
      <div className="buttons"> 
        <div><button className="counter" onClick={()=>{add()}}> {counter} </button>
       <h4 className="count-" onClick={()=>{agin()}}>  🔁 </h4></div></div>

    </div>
  );
};