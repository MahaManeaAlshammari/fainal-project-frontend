import React , {useEffect , useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


export default function ReedAthkar({ token }) {
    const [reedThkr, setReedThkr] = useState([])

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

    

    return (
      <div>
    {reedThkr.map((elem,i)=>{
        return(<div>
            <p className="name-css">{elem.description}
             <button onClick={()=>{addFavorite(elem._id)}}>  ⭐ </button> </p>

        </div>)
    })}
      </div>
    );
  }

