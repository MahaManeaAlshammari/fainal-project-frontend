import React from 'react'
import { useHistory } from 'react-router-dom';
import "../style/Home.css"




export default function Home() {
   
    const hestory = useHistory()

    const login = () => {
        hestory.push("/login")
    }
  


    return (
            <div className="Home">
                <div className="home-1">
                    <br/>
                    <br/>
                    <p className='hom4'> الا بذكر الله تطمئن القلوب   </p>
                    
                </div>
     
            </div>
    )

}
