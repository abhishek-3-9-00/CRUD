import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function EmpCreate() {
    const [id,idChange] = useState("");
    const [name,nameChange] = useState("");
    const [email,emailChange] = useState("");
    const [phone,phoneChange] = useState("");
    const [active,activeChange] = useState(false);
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();
        const empdata={name,email,phone,active};
       
        fetch("http://localhost:8000/employee",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(empdata)
        }).then((res)=>{
            alert("Saved Successfully")
            navigate('/')
        }).catch((err)=>{
            console.log(err.message)
        })
    }

  return (
    <div>
        <div className='row'>
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handleSubmit}>
                    <div className="card">
                        <div className="card-title">
                            <h2>Employee Create</h2>
                        </div>
                        <div className="card-body"> 
                        <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>ID</label>
                                <input disabled value={id} className='form-control' type="text" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Name</label>
                                <input value={name} required onChange={e=>nameChange(e.target.value)}  className='form-control' type="text" />
                                
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Email</label>
                                <input value={email} required onChange={e=>emailChange(e.target.value)} className='form-control' type="text" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Phone</label>
                                <input value={phone} required onChange={e=>phoneChange(e.target.value)} className='form-control' type="text" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-checkbox">
                                <input checked={active} value={active} onChange={e=>activeChange(e.target.checked)} type='checkbox' className='form-check-input' /><br />
                                <label className='form-check-label' >Is Active</label>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form-checkbox">
                                <button className='btn btn-success' type='submit '>Save</button>
                                <Link to={'/'} className="btn btn-danger mx-md-1">Back</Link>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
