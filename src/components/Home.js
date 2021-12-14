import React from 'react'
import { useHistory } from 'react-router-dom';
// import { Stack } from 'react-bootstrap';



export default function Home() {
    const hestory = useHistory()
    const Login=()=>{
        hestory.push("/login")
    }
    return (
        <div>
            
            <div className="home">
               <p> اهلا بك   </p>
            </div>
        </div>
    )
}
