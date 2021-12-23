import React from 'react'
import "../App.css"
import {useHistory} from "react-router-dom";



export default function Athkar(token ) {
    const history = useHistory()

   

    const bage = async(id)=>{
        history.push(`/ReedAthkar/ ${id}`)
      }

    return (
        <div className='all-btn'>
            <h1>اذكار</h1>
            <button className='btn-2' >العداد</button>
            <button className='btn-2'>اسماء الله الحسنى</button>
            <button className='btn-2'>من دعاء الرسول</button>
            <button className='btn-2'>ادعيه من القران</button>

            <hr></hr>
          <div className='all-btn-1'> 
            <button onClick={(elem)=>{bage (elem._id)}}  className='btn-1'>اذكار الصباح</button>
            <button onClick={(elem)=>{bage (elem._id)}} className='btn-1'>اذكار المساء</button>
            <button onClick={(elem)=>{bage (elem._id)}} className='btn-1'>اذكار النوم</button>
            <button onClick={(elem)=>{bage (elem._id)}} className='btn-1'>اذكار الاستيقاظ</button>
            <button onClick={(elem)=>{bage (elem._id)}} className='btn-1'>الورد اليومي</button>
            <button onClick={(elem)=>{bage (elem._id)}} className='btn-1'>اذكار الصلاة</button>
            </div>

        </div>
    )
}
