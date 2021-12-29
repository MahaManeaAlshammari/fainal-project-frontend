import React from 'react'
import "../App.css"
import {useHistory} from "react-router-dom";


export default function Athkar() {
    const history = useHistory()
   
    const bage = async(name)=>{
        history.push(`/ReedAthkar/${name}`)
      }
      const bage2 = async(name)=>{
        history.push(`/${name}`)
      }

 
    return (
        <div className='all-btn'>
            <h1>اذكار</h1>
            <button onClick={()=>{bage2 ("Counter")}} className='btn-2' >العداد</button>
            <button className='btn-2'>اسماء الله الحسنى</button>
            <button className='btn-2'>من دعاء الرسول</button>
            <button className='btn-2'>ادعيه من القران</button>

            <div className='all-btn-1'>
              <br></br>
              <hr></hr> 
            <button onClick={()=>{bage ("morning")}}  className='btn-1'>اذكار الصباح</button>
            <button onClick={()=>{bage ("evining")}} className='btn-1'>اذكار المساء</button>
            <button onClick={()=>{bage ("sleep")}} className='btn-1'>اذكار النوم</button>
            <button onClick={()=>{bage ("wakingup")}} className='btn-1'>اذكار الاستيقاظ</button>
            <button onClick={()=>{bage ("daily")}} className='btn-1'>الورد اليومي</button>
            <button onClick={()=>{bage ("Prayer")}} className='btn-1'>اذكار الصلاة</button>
            </div>
           </div>    
      )}