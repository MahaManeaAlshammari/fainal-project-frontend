import React , {useEffect , useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


export default function ReedAthkar({ token ,Admin }) {
    const [reedThkr, setReedThkr] = useState([])
    const [dataAdmit, setDataAdmit] = useState("")
    const [deletThkr, setDeletThkr] = useState("")
    const [description, setdescription] = useState("")
    const [namee, setnamee] = useState("")

    const [type, settype] = useState("")

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
    const changeAdminN = (e) => {
      setnamee(e.target.value);
    };
    const changeAdminT = (e) => {
      settype(e.target.value);
    };
    
    const addathkar = async (id) => {
      try {
        const result = await axios.post(`http://localhost:5000/athkar`,{namee:name , description ,type },{
            headers: { authorization: "Bearer " + token },
          }
        );
        const copy = [...reedThkr]
        setReedThkr(copy)
        console.log("dataAdmit",result.data);

      } catch (error) {
      }
    };
    // const deleetThkr= async (id, index) => {
    //   const result = await axios.delete(`http://localhost:5000/athkar/${id}`, {
    //     headers: { authorization: "Bearer " + token },
    //   });
    //   console.log("delete" ,result.data);
    //   // setDeletThkr(result.data);
    //   // console.log("id : ",id  ,"token : ",token);
    //   if (deleetThkr.data) {
    //     const copyThker = [...reedThkr];
    //     console.log("ooooooooooooooo");
    //     copyThker.splice(index, 1);
    //     setReedThkr(copyThker);
    //   }
    // }
    


    const deleetThkr = async (id, index) => {
      console.log("jjjjjjjjjjj");
      const deletes = await axios.delete(`http://localhost:5000/athkar/${id}`,{
        headers: { authorization: "Bearer " + token },
  
       });
       console.log("hhhhhh");
      if (deletes.data) {
        const copyThker = [...reedThkr];
        console.log("ooooooooooooooo");
        copyThker.splice(index, 1);
        setReedThkr(copyThker);
      }
    }
      
  


    

    return (
      <div>
        
        {Admin==true ? <>
        <input  onChange={(e) => {changeAdmin(e);}}placeholder="add athkar"/>
        <input  onChange={(e) => {changeAdminN(e);}}placeholder="nn"/>
        <input  onChange={(e) => {changeAdminT(e);}}placeholder="tt"/>

           <p>  <button onClick={()=>{addathkar(reedThkr._id)}}>  اضافه </button> </p>
          

           </> :""}
    {reedThkr.map((elem,i)=>{
        return(<div>
            <p className="name-css">
                
             {Admin==true ? <>
           <button onClick={()=>{deleetThkr(elem._id)}}>  حذف </button> 
           <button onClick={()=>{addathkar(elem._id)}}>  تعديل </button> 

           </> :""}
              
              {elem.description}            
             <button onClick={()=>{addFavorite(elem._id)}}>  📌 </button>  
           
            </p>

        </div>)
    })}
      </div>
    );
  }

