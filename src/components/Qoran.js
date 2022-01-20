import React, { useEffect ,useState } from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";
import "../style/qoran.css"

export default function Qoran({token}) {
const [qoran, setQoran] = useState([])
const{name} = useParams()

useEffect(async () => {
    console.log(name);
  const view = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/qoran`,{
        headers: { authorization: "Bearer " + token },
      }
    );
    setQoran(view.data);
 
   }, []);

    return (
        <div className='qq'>
       {qoran.map((elem,i)=>{
           return(<div className='q22'>
               <p className='qran'>{elem.description}
               <br/>

               <a target={"_blank"} href={elem.url}>انقر هنا للقراءه</a></p>
           </div>)
       })}  
        </div>

    )
}
