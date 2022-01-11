import React from 'react'
import { useHistory } from 'react-router-dom';
import "../App.css"



export default function Home() {
    const hestory = useHistory()
    const [searchArr, setSearchArr] = ("");
    const [tkr, settkr] = ("")

 
    const login=()=>{
        hestory.push("/login")
    }

    const searchTarget = (e) => {
        setSearchArr(e.target.value);
      };
      const search = () => {
        const search1 = tkr.filter((elm) => {
          if (elm.name.toLowerCase().includes(searchArr.toLocaleLowerCase())) {
            return elm;
          }
              });
              settkr(search1)
      };


    return (
        <div className="Home"> 
            <div className="home-1">
               <p> اهلا بك   </p>
               </div>

               <input type="text" onChange={(e)=>{searchTarget(e)}} />
          <button onClick={()=>{search()}}>بحث</button>
            
               </div>
    )
    
}
