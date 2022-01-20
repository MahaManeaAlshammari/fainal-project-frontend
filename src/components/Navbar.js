import React from 'react'
import { Link } from "react-router-dom";
// import "../App.css"
import "../style/navbar.css"

export default function Navbar({token , setToken , }) {

    const logout = ()=>{
        setToken("")
    }
    const checkToken = ()=> {
        if (token) {
            return <div>
                <ul className='ul'>
            <li className='li'><Link  to="/Home">الرئيسية</Link></li>
            <li className='li'><Link  to="/Athkar">اذكار اليوم والليله</Link></li>
            <li className='li'><Link  to="/Favorite">مفضلاتي</Link></li>
            
            <li className='li'><Link  onClick={()=>{logout()}}  to="/login">تسجيل خروج</Link></li>
            </ul>
            </div>
        }else{
            return < >
            <ul><Link className='nav-ptn' to="/login">تسجيل دخول</Link></ul>
            <ul><Link className='nav-ptn' to="/signup">تسجيل</Link></ul>
            {/* <ul><Link className='nav-ptn' to="/">ADMEN</Link></ul> */}

            </>
        }
    }
    return (
        <div className='navbar'>
            {checkToken()}
            </div>
            
    )
    
}
