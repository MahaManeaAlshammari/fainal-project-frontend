import React from 'react'
import { useHistory } from 'react-router-dom';
import "../App.css"



export default function Home() {
    const hestory = useHistory()
    // const Login=()=>{
        hestory.push("/login")
    // }
    return (
        <div className="Home">
            
            <div className="home">
               <p> اهلا بك   </p>
            </div>
        </div>
    )
}
