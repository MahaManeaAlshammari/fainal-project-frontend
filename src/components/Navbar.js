import React from 'react'
import { Link } from "react-router-dom";
import "../App.css"


export default function Navbar({token , setToken }) {

    
    const logout = ()=>{
        setToken("")
    }
    const checkToken = ()=> {
        if (token) {
            return <>
            <ul><Link className='nav-ptn' to="/Home">الرئيسية</Link></ul>
            <ul><Link className='nav-ptn' to="/Athkar">اذكار اليوم والليله</Link></ul>
            <ul><Link className='nav-ptn' to="/book">مفضلاتي</Link></ul>
            <ul></ul>
            <ul><Link className='nav-ptn' onClick={()=>{logout()}}  to="/login">تسجيل خروج</Link></ul>
            </>
        }else{
            return <>
            <ul><Link className='nav-ptn' to="/login">تسجيل دخول</Link></ul>
            <ul><Link className='nav-ptn' to="/signup">تسجيل</Link></ul>
            <ul><Link className='nav-ptn' to="/">ADMEN</Link></ul>

            </>
        }
    }
    return (
        <div className='navbar'>
            {checkToken()}
            </div>
    )
}
