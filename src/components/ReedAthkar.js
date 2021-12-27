import React , {useEffect , useState } from "react";
// import "./App.css"
import axios from "axios";
import { useParams } from "react-router-dom";


export default function ReedAthkar({ token }) {
    const [reedThkr, setReedThkr] = useState("")
    const{name} = useParams()

    useEffect(async () => {
        console.log(name);
      try { const reed = await axios.get(`http://localhost:5000/ReedAthkar/${name}`,{
            headers: { authorization: "Bearer " + token },
          }
        );
        setReedThkr(reed.data);
        console.log("ReedThkr",reedThkr);
      } catch (error) {
        console.log(error);
      }
    }, []);
    return (
      <div>
    {reedThkr.map((elem,i)=>{
        return(<div>
            <h2>{elem.name}</h2>
        </div>)
    })}
      </div>
    );
  }

