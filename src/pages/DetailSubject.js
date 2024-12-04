import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const DetailSubject = () => {
    const [data,setData] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    const apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties/";
    useEffect(()=>{
        fetch(apiUrl+id, {method:"GET"})
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);
  return (
    <>
        <h1>Name = {data.subjectName}</h1>
        <h1>Code = {data.subjectCode}</h1>
        <h1>Faculty = {data.subjectFaculty}</h1>
        <Link to="/crud" className='btn btn-primary'>Back</Link>
        <button className='btn btn-danger' onClick={()=>{
          fetch(apiUrl+id, {method:"DELETE"})
          .then(res=>res.json())
          .then(res=>{
            navigate("/crud");
          });
          
        }}>
          Delete
        </button>
    </>
  )
}

export default DetailSubject