// import React from 'react'
import { useHistory } from 'react-router-dom';
import "../App.css"
import React ,{useState,useEffect} from 'react'
import axios from "axios";


export default function Home() {
    const hestory = useHistory()
    const [result , setResult] = useState("");
    const [filter ,setFilter] = useState([]);
    const [data ,setData] = useState([]);
    const [athkaaar, setAthkaaar] = useState([])
    const history = useHistory();


    const login=()=>{
        hestory.push("/login")
    }
    useEffect(()=>{ 
        const axiosData = async ()=> {
                    const res = await axios.get('http://localhost:5000/ReedAthkar');
                    setFilter(res.data);
        };
        axiosData();
    },[])

    useEffect(()=> {
        const results = filter.filter(res =>  result && res.name.toLowerCase().includes(result)
        ); 
        setData(results)
    } ,[result])
    const onChange =(elem)=> {
        setResult(elem.target.value);
    }  
useEffect(async() => {
   const result = await axios.get("http://localhost:5000/ReedAthkar");
   setAthkaaar(result.data);
},[])
const bage3 =(name) => {
    history.push(`/ReedAthkar/${name}`)
  }

    return (
        <div className="Home"> 
            <div className="home-1">
               <p> اهلا بك   </p>
               </div>

            <div>
          <input className="ptn-inpt" placeholder="search here .." value={result} onChange={onChange}/>
        </div>
        {data.map((thkr,i)=> (   
                <div key={i} className="searchThkr">
                <h3>{thkr.name}</h3>
                <hr/>
                 </div>)
            ) }
                  <button className="ptn-inpt" onClick={() => {bage3("ReedAthkar");}}>ابحث</button>                
               </div>
    )
    
}
