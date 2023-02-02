import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'

export default function EmpDetails() {
  const{empid}=useParams();
  const [empdata,empDataChange] = useState({})
  useEffect(()=>{
    fetch("http://localhost:8000/employee/"+empid).then((res)=>{
            return res.json();
        }).then((resp)=>{
          empDataChange(resp)
        }).catch((err)=>{
            console.log(err.message)
        })
  },[])
  return (
    <div className='text-center'>
    <hr />
    <h2>The Employee Name is : {empdata.name}</h2>
    <hr />
    <h2>Contact Details</h2>
    <h5><b>Email</b>: {empdata.email}</h5>
    <h5><b>Phone No.</b> : {empdata.phone}</h5> 
    <h5><b>Is Active</b> : {empdata.active.toString()}</h5> 
    <br />
    <hr />
    <br />
    <Link to={'/'} className="btn btn-danger" >Back</Link>
      
    </div>
  )
}
