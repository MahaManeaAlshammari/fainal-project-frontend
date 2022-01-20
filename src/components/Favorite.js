import React, { useEffect ,useState } from 'react'
import axios from "axios";
import "../style/Favorite.css"


export default function Favorite({token}) {
  const [favorite, setFvairote] = useState([])

  useEffect(async () => {
    try {
      if (token) {
        const result = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/Favorite`, {
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
  const res = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/Favorite/${id}`, {
    headers: { authorization: "Bearer " + token },
  });
  setFvairote(res.data);
}
  return (
    <div>
{      console.log("favorite",favorite)
}  {favorite.map((elem,i)=>{
      return(<div>
          <p className="name1-css">{elem.description}
           <a onClick={()=>{deletFavorite(elem._id)}}>  🤍 </a>  </p>
      </div>)
  })}
    </div>
  );
}
