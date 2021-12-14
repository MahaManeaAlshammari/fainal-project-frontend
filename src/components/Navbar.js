import React from 'react'
import { Link } from "react-router-dom";
import "../App.css"


export default function Navbar({token , setToken , setName  , setUserId}) {

    const logout = ()=>{
        setToken("")
        setUserId("")
         localStorage.setItem("token" , JSON.stringify(""))
        //  localStorage.setItem("userId" , JSON.stringify(""))
        setName("")
    }

    const checkToken = ()=> {

        if (token) {
            return <>

            <ul>
                <Link id = "link-nav" to="/Home">الرئيسية</Link>
            </ul>
            <ul>
                <Link id = "link-nav" to="/Athkar">اذكار اليوم والليله</Link>
            </ul>
            <ul>
                <Link id = "link-nav" to="/book">مفضلاتي</Link>
            </ul>
            <ul>
                <Link onClick={()=>{logout()}} id = "link-nav" to="/login">تسجيل خروج</Link>
            </ul>
            
            </>
        }else{
            return <>
            <ul>
                <Link id = "link-nav" to="/Home">الرئيسيه</Link>
            </ul>
            <ul>
                <Link id = "link-nav" to="/login">تسجيل دخول</Link>
            </ul>
            <ul>
                <Link id = "link-nav" to="/signup">تسجيل</Link>
            </ul>
            </>
        }
    }
    return (
        <div className='navbar'>
            <div className="all-navbar">
            {checkToken()}
            </div>
        </div>
    )
}

