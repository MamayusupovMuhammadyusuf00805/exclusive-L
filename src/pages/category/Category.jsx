import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { filterCategory } from '../../services/App'

function Category() {
    const {id}=useParams()
    const[filterdata,setfilterdata]=useState()
    useEffect(()=>{
            filterCategory(id).then((info)=>{
                    setfilterdata(info);
                    
            })
    },[id])
  return (
    <div className='categorypage'>
            <div className="container">
                <p><home /></p>
                
            </div>
    </div>
  )
}

export default Category