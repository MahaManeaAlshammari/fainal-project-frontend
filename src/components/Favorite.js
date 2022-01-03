// import React from 'react'
import React, { useEffect ,useState } from 'react'
import axios from "axios";


export default function Favorite({token}) {
  const [favorite, setFvairote] = useState("")

  useEffect(async () => {
    try {
      if (token) {
        const result = await axios.get("http://localhost:5000/Favorite", {
          headers: { authorization: "Bearer " + token },
        });
        setFvairote(result.data);
        // console.log(reult.data,":ff");
      }
    } catch (error) {
      // console.log(error.response.data);
    }
  }, [token]);

  
  return (
    <div>
  {favorite.map((elem,i)=>{
      return(<div>
          <p className="name-css">{elem.description}</p>
      </div>)
  })}
    </div>
  );
}
