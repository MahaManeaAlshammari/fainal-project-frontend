import "./App.css"
import SignUp from "./components/SignUp";
import {Route} from "react-router-dom";
import Login from "./components/Login";
import React,{useState} from "react";
import Navbar from "./components/Navbar";
import Athkar from "./components/Athkar";
import Home from "./components/Home";
import ReedAthkar from "./components/ReedAthkar";
import Counter from "./components/Counter";
import Qoran from "./components/Qoran";
import Favorite from"./components/Favorite";
import NameAllah from "./components/NameAllah";
import DuaaRasol from "./components/DuaaRasol";
import DuaaQoran from "./components/DuaaQoran";
import"./style/navbar.css"
require("dotenv").config();




  export default function App() { 
    const [token, setToken] = useState("")
    const [Admin, setAdmin] = useState("")
    console.log("ghj :",process.env.REACT_APP_BACKEND_URL);


  return (
    <div >
      
        <Navbar token={token} setToken={setToken}/>
        <Route exact path="/login"  render={()=>
           {return <Login setToken={setToken} setAdmin={setAdmin} /> ; }} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path= "/Athkar" render={() => {
        return <Athkar token = {token} setToken = {setToken} userId={"userId"}/> }} />
           <Route exact path= "/home" render={() => (<Home />)}/>

           <Route exact path= "/ReedAthkar/:name" render={() => {
        return <ReedAthkar token = {token} Admin ={Admin}/> }} />

      <Route exact path="/Counter" render={() => {
        return <Counter token = {token}/> }} />

       <Route exact path="/qoran" render={() => {
        return <Qoran token = {token}/> }} />


       <Route exact path="/Favorite" render={() => {
        return <Favorite token = {token}/> }} />


<Route exact path="/NameAllah" render={() => {
        return <NameAllah token = {token}/> }} />

<Route exact path="/DuaaRasol" render={() => {
        return <DuaaRasol token = {token}/> }} />

<Route exact path="/DuaaQoran" render={() => {
        return <DuaaQoran token = {token}/> }} /> 
    </div>
  );
}


