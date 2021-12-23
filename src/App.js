import "./App.css"
import SignUp from "./components/SignUp";
import {Route} from "react-router-dom";
import Login from "./components/Login";
import React,{useState} from "react";
import Navbar from "./components/Navbar";
import Athkar from "./components/Athkar";
import Home from "./components/Home"




  export default function App() { 
    const [token, setToken] = useState("")
    // const [name, setName] = useState("")
    // const [userId, setUserId] = useState("")

  return (
    <div >
        <Navbar token={token} setToken={setToken}/>
        <Route exact path="/login"  render={()=>
           {return <Login setToken={setToken}/> ; }} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path= "/Athkar" render={() => {
        return <Athkar token = {token} setToken = {setToken} userId={"userId"}/> }} />
           <Route exact path= "/home" render={() => (<Home />)}/>

    </div>
  );
}


