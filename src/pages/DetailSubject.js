import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const DetailSubject = () => {
    const [data,setData] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        fetch("https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties/"+id)
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);
  return (
    <>
        <h1>Name = {data.subjectName}</h1>
        <h1>Code = {data.subjectCode}</h1>
        <h1>Faculty = {data.subjectFaculty}</h1>
    </>
  )
}

export default DetailSubject