import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function EmpListing() {
    const [empdata,empDataChange] = useState(null);
    const navigate = useNavigate();

    const loadDetail=(id)=>{
        navigate("/employee/detail/"+id)
        
    }
    const loadEdit=(id)=>{
        navigate("/employee/edit/"+id)

    }
    const RemoveFunc=(id)=>{
        if(window.confirm("Do You Want to Remove?")){
            fetch("http://localhost:8000/employee/"+id,{
            method:"DELETE"
            
        }).then((res)=>{
            
            // window.location.reload();
        }).catch((err)=>{
            console.log(err.message)
        })
        }
    }

    useEffect(() => {
    fetch("http://localhost:8000/employee")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empDataChange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

  return (
    <div className="container">
      <div className="card">
        <div className="card-title text-center">
          <h2>Employee Listing</h2>
        </div>
        <div className="card-body">
        <div><Link to={'/employee/create'} className="btn btn-success">Add New (+)</Link></div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Active</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
                {empdata &&
                    empdata.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                            <td>{item.active.toString()}</td>
                            <td><a className="btn btn-success" onClick={()=>{loadEdit(item.id)}}>Edit</a>
                            <a className="btn btn-danger" onClick={()=>{RemoveFunc(item.id)}}>Remove</a>
                            <a className="btn btn-primary" onClick={()=>{loadDetail(item.id)}} >Details</a></td>
                        </tr>
                    ))
                }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
