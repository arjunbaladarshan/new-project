import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const CrudOperation = () => {

    const [data,setData] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);
   


    useEffect(()=>{
        console.log("API Called");
        fetch("https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties")
        .then(res=>res.json())
        .then(res=>setData(res));
    },[isUpdated]);
    const apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties/";
    const navigate = useNavigate();
    const [subject, setSubject] = useState({
        subjectName:"",
        subjectCode:"",
        subjectFaculty:""
    })

    const subjectFormated = data.map((sub)=>{
        return(
            <>
                <tr>
                    <td>{sub.subjectName}</td>
                    <td><Link to={"/subject/"+sub.id} className='btn btn-primary'>Detail</Link></td>
                    <td>
                    <button className='btn btn-danger' onClick={()=>{
                        fetch(apiUrl+sub.id, {method:"DELETE"})
                        .then(res=>res.json())
                        .then(res=>{
                            setIsUpdated(!isUpdated);
                        });
                        
                        }}>
                        Delete
                        </button>
                    </td>
                </tr>
            </>
        );
    })

    return(
        <>
            <table>
                <tr>
                    <td>Enter Subject Name</td>
                    <td><input value={subject.subjectName} type='text' onChange={(e)=>{
                        setSubject({...subject, subjectName:e.target.value});
                    }} /></td>
                </tr>
                <tr>
                    <td>Enter Subject Code</td>
                    <td><input value={subject.subjectCode} type='text' onChange={(e)=>{
                        setSubject({...subject, subjectCode:e.target.value});
                    }} /></td>
                </tr>
                <tr>
                    <td>Enter Subject Fac</td>
                    <td><input value={subject.subjectFaculty} type='text' onChange={(e)=>{
                        setSubject({...subject, subjectFaculty:e.target.value});
                    }} /></td>
                </tr>
                <tr>
                    <td colSpan={2}><button className='btn btn-primary' onClick={()=>{
                        fetch(apiUrl,{
                            method:"POST",
                            body:JSON.stringify(subject),
                            headers:{
                              "Content-Type":"application/json"  
                            }
                        })
                        .then(res=>res.json())
                        .then(res=>{
                            setIsUpdated(!isUpdated);
                            setSubject({subjectCode:"",subjectName:"",subjectFaculty:""})
                        });
                    }}>Add</button></td>
                </tr>
            </table>
            <table className='table'>
                {subjectFormated}
            </table>
        </>
    );
  
}

export default CrudOperation