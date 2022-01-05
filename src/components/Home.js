import React from 'react'
import { useHistory } from 'react-router-dom';
import "../App.css"
// import React ,{useState,useEffect} from 'react'
// import axios from "axios";


export default function Home() {
    const hestory = useHistory()
    const [searchArr, setSearchArr] = ("");
    const [tkr, settkr] = ("")

    // const [result , setResult] = useState("");
    // const [filter ,setFilter] = useState([]);
    // const [data ,setData] = useState([]);
    // const [athkaaar, setAthkaaar] = useState([])
    // const history = useHistory();
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

    // useEffect(()=>{ 
    //     const axiosData = async ()=> {
    //                 const res = await axios.get('http://localhost:5000/athkar');
    //                 setFilter(res.data);
    //     };
    //     axiosData();
    // },[])

    // useEffect(()=> {
    //     const results = filter.filter(res =>  result && res.name.includes(result)
    //     ); 
    // console.log(results,"hhhhiiiiii")
    //     setData(results)
    // } ,[])
    // const onChange =(elem)=> {
    //     setResult(elem.target.value);
    // }  
// useEffect(async() => {
//    const result = await axios.get("http://localhost:5000/ReedAthkar");
//    setAthkaaar(result.data);
// },[])
// const bage3 =(elem) => {
//     history.push(`/${elem}`)
//   }

    return (
        <div className="Home"> 
            <div className="home-1">
               <p> اهلا بك   </p>
               </div>

               <input type="text" onChange={(e)=>{searchTarget(e)}} />
          <button onClick={()=>{search()}}>search</button>
            {/* <div >
          <input className="ptn-inpt" placeholder="search here .." value={result} onChange={onChange}/>
        </div>
        
        {data.map((elem,i)=> (   
                <div key={elem} className="searchThkr">
                <h3>{elem.name}</h3>
                
                 </div>)
            ) }
        <h1 className="ptn-inpt" onClick={() => {bage3("athkar");}}>🔎</h1>  */}
               </div>
    )
    
}
