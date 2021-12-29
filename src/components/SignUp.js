import React, {useState}from 'react'
import axios from "axios";
import {useHistory} from "react-router-dom"


export default function Signup() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
// استخدمت يوزهيستوري عشان ياخذ القيمه اللي بالانبوت ويمررها 
// وتارقت دوت فاليو عشان يغير القيمه وهو يكتب بالانبوت
    const history = useHistory();
    const changName = (e) => {
      setName(e.target.value);
    };
    const changEmail = (e) => {
      setEmail(e.target.value);
    };
    const changPassword = (e) => {
      setPassword(e.target.value);
    };
  
   
    const onclickSignup = async()=>{
        const res= await axios.post("http://localhost:5000/signUp", {
        name , email ,  password
        // اقدر احط القيمه حقت الكي بدون الكي نفسه اذا كان الكي
        // والقميه نفس بعض
      });
   // سويت شرط انو اذا كان ادخال البيانات صحيح انقل المستخدم الى صفحه اللوق ان
      if (res.status === 201){
          history.push("/login")
      }
    }
    return (

        <div  className='signup'>
          <div className='dd'>  
        <input className="ptn-inpt" onChange={(e)=>{changName(e)}} placeholder='add name' />  
        <input className="ptn-inpt" onChange={(e)=>{changEmail(e)}} placeholder='add email' />
        <input className="ptn-inpt" onChange={(e)=>{changPassword(e)}} placeholder='add password'/>
        <button className="ptn-inpt" onClick={()=> {onclickSignup()}}>سجل الان</button>
        </div>
  
        </div> 
    )
}
