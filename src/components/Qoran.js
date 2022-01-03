import React, { useEffect ,useState } from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Qoran({token}) {
const [qoran, setQoran] = useState([])
const{name} = useParams()

useEffect(async () => {
    console.log(name);
  const view = await axios.get(`http://localhost:5000/qoran`,{
        headers: { authorization: "Bearer " + token },
      }
    );
    setQoran(view.data);
 
}, []);

    return (
        <div>
       {qoran.map((elem,i)=>{
           return(<div className='q22'>
               <p className='qran'>{elem.description}</p>
               <a className='qran-1' href={elem.url}>انقر هنا للقراءه</a>
           </div>)
       })}  
        </div>

    )
}
