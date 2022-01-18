import React , {useEffect , useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../style/ReedAthkar.css"


export default function ReedAthkar({ token ,Admin }) {
    const [reedThkr, setReedThkr] = useState([])
    const [dataAdmit, setDataAdmit] = useState("")
    const [deletThkr, setDeletThkr] = useState("")
    const [description, setdescription] = useState("")
    const [namee, setnamee] = useState("")
    const [type, settype] = useState("")
    const [updateathkarr, setupdateathkarr] = useState("")

    // عرفت ستيت تخزن قيمه البيانات اللي جت من المونقو
    const{name} = useParams()

    useEffect(async () => {
        console.log(name);
      try { const reed = await axios.get(`http://localhost:5000/ReedAthkar/${name}`,{
            headers: { authorization: "Bearer " + token },
            // عرفت كونست يربط الفرونت مع المونقو
          }
        );
        setReedThkr(reed.data);
        // السيت كل مره تتحدث حسب 
        console.log("ReedThkr",reedThkr);
      } catch (error) {
        console.log(error);
      }
    }, []);
    ////////////////////////// اللايك /////////////////////////////////

    const addFavorite = async (id) => {
      try {
        const result = await axios.post(`http://localhost:5000/Favorite/${id}`,{},{
            headers: { authorization: "Bearer " + token },
          }
        );
         console.log(result.data);
      } catch (error) {
       console.log(error.response.data);
      }
    };
    ///////////////////////admin/////////////////////////////
    const changeAdmin = (e) => {
      setdescription(e.target.value);
    };
    const changeAdmiName = (e) => {
      setnamee(e.target.value);
    };
    const changeAdmiType = (e) => {
      settype(e.target.value);
    };
    
    const addathkar = async (id) => {
      try {
        const result = await axios.post(`http://localhost:5000/athkar`,{namee:name , description ,type },{
            headers: { authorization: "Bearer " + token },
          }
        );
        
        setReedThkr(result.data)
        console.log("dataAdmit",result.data);

      } catch (error) {
      }
    };
    
    const deleetThkr = async (id, index) => {
      console.log("nnnnn");
      const deletes = await axios.delete(`http://localhost:5000/athkar/${id}`,{
        headers: { authorization: "Bearer " + token },
  
       });
       console.log("hhhhhh");
      if (deletes.data) {
        const copyThker = [...reedThkr];
        console.log("oohhhh");
        copyThker.splice(index, 1);
        setReedThkr(copyThker);
      }
    }
      
    const changupdate = (e) => {
      setupdateathkarr(e.target.value);
    };
  //   للتعديل  
    const updateathkarar = async (id)=>{
      try {
        const thkrUpdate = await axios.put(`http://localhost:5000/athkar/${id}`,{
          description:updateathkarr
        },{
          headers:{authorization:"Bearer " + token},
        },);
        //console.log("iiui",thkrUpdate);
        setReedThkr(thkrUpdate.data)
      } catch (error) {
        console.log("erorr");
      }
    };



    return (
      <div className="admin">
        
        {Admin==true ? <>
       <p> <input className="nn-input" onChange={(e) => {changeAdmin(e);}}placeholder="add athkar"/></p>
       <p> <input className="nn-input" onChange={(e) => {changeAdmiName(e);}}placeholder="name"/></p>
       <p> <input className="nn-input" onChange={(e) => {changeAdmiType(e);}}placeholder="type"/></p>

       <p>  <button onClick={()=>{addathkar(reedThkr._id)}}>  اضافه </button> </p>
          

           </> :""}
    {reedThkr.map((elem,i)=>{
        return(<div className="RR">
            <p className="name-css">
                
             {Admin==true ? <>
         <p> <button onClick={()=>{deleetThkr(elem._id)}}> 🗑 حذف </button> 
           <button onClick={()=>{updateathkarar(elem._id)}}> 📝 تعديل </button> 
           <input onChange={(e)=>{changupdate(e);}}placeholder="update"/></p> 

           </> :""}
              
              {elem.description}            
             <button onClick={()=>{addFavorite(elem._id)}}>  📌 </button>  
           
            </p>

        </div>)
    })}
      </div>
    );
  }

