import axios from "axios";
import "./App.css"
import Athkar from "./components/Athkar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar"
import {Route} from "react-router-dom";
import  {useEffect , useState} from "react";
import Home from "./components/Home"
// import BookSelect from "./components/BookSelect";
// import Book from "./Book";
// import "bootstrap/dist/css/bootstrap.css"

function App() {

  const [token, setToken] = useState("")
  const [userId, setUserId] = useState("")
  const [name , setName] = useState("")
  
  useEffect(() => { 
      if (!token) {
          const mytoken = JSON.parse(localStorage.getItem("token"))
          const myuserId = JSON.parse(localStorage.getItem("userId"))
          setToken(mytoken)
          setUserId(myuserId)
      }
  }, [])
 
  
  return (
    <div >

      <Navbar token={token} setToken={setToken} setName = {setName} name = {name} setUserId = {setUserId}></Navbar>

      <Route exact path= "/Athkar" render={() => {
        return <Athkar token = {token} setToken = {setToken} userId={userId}/> }} />

    
      <Route exact path= "/login" render={() => (
        <Login token = {token} setToken = {setToken} setName={setName} setUserId={setUserId} />)}/>
      <Route exact path= "/SignUp" render={() => (
        <SignUp token = {token} setToken = {setToken} />)}/>

      {/* <Route exact path= "/book/:id" render={() => (
        <BookSelect token = {token} userId={userId} />)}/>

      <Route exact path= "/book" render={() => (
        <Book token={token} userId={userId}/>)}/> */}

      <Route exact path= "/home" render={() => (<Home />)}/>
      
       {token}
    </div>
  );
}

export default App;
