import React, { useState } from "react";
 import  "../style/Login.css"
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function Login({setToken , setAdmin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const history = useHistory();
//   تخدمت يوزهيستوري عشان ياخذ القيمه اللي بالانبوت ويمررها 
  // وتارقت دوت فاليو عشان يغير القيمه وهو يكتب بالانبوت

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };


  const onclickLogin = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {
        email , password
         // اقدر احط القيمه حقت الكي بدون الكي نفسه اذا كان الكي
        // والقميه نفس بعض
      });
console.log(response.data)
      setToken(response.data.token);
      setAdmin(response.data.data.Admin)


      // if (response.data.data.Admin==true) {
      //  history.push("/admin") 
        
      // }
      // setToken(response.data.Admin);
    //   التوكن عشان ياخذ بيانات المستخدم ويحفظها داخل التوكن
    // بعد ماكانت قيمه التوكن فاضيه
    
    history.push("/Home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signup">
    <div className='dd'> 
     
      <input className="ptn-inpt" onChange={(e) => {changeEmail(e);}}placeholder="add email"/>
      <input className="ptn-inpt" onChange={(e) => {changePassword(e);}} placeholder="add password"/>
      <button className="ptn-inpt" onClick={() => {onclickLogin();}}>تسجيل الدخول</button>
      </div>
    </div>
  );
}

