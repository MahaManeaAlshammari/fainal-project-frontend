import React, { useEffect ,useState } from 'react'
import axios from "axios";
import "../style/Favorite.css"


export default function Favorite({token}) {
  const [favorite, setFvairote] = useState([])

  useEffect(async () => {
    try {
      if (token) {
        const result = await axios.get("http://localhost:5000/Favorite", {
          headers: { authorization: "Bearer " + token },
        });
        console.log(result.data,"res");
        setFvairote(result.data);
      }
    } catch (error) {
    }
  }, [token]);
//////////////////////// un laik//////////////////////////////
const deletFavorite = async (id) => {
  const res = await axios.delete(`http://localhost:5000/Favorite/${id}`, {
    headers: { authorization: "Bearer " + token },
  });
  setFvairote(res.data);
}
  return (
    <div>
{      console.log("favorite",favorite)
}  {favorite.map((elem,i)=>{
      return(<div>
          <p className="name-css">{elem.description}
           <button onClick={()=>{deletFavorite(elem._id)}}>  ❌ </button>  </p>
      </div>)
  })}
    </div>
  );
}
