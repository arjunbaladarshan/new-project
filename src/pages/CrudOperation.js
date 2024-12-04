import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const CrudOperation = () => {

    const [data,setData] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);
   
   
    useEffect(()=>{
        setInterval(()=>{
            console.log("State Changed");
            setIsUpdated(!isUpdated);
        },10000);
    },[]);

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
            <h1>Data = {isUpdated}</h1>
            <table>
                <tr>    
                    <td>Enter Subject Name</td>
                    <td>:</td>
                    <td><input type='text' value={subject.subjectName} onChange={(e)=>{
                        setSubject({...subject, subjectName:e.target.value});
                    }} /></td>
                </tr>
                <tr>    
                    <td>Enter Subject Code</td>
                    <td>:</td>
                    <td><input type='text' value={subject.subjectCode} onChange={(e)=>{
                        setSubject({...subject, subjectCode:e.target.value});
                    }}/></td>
                </tr>
                <tr>    
                    <td>Enter Subject Faculty</td>
                    <td>:</td>
                    <td><input type='text' value={subject.subjectFaculty} onChange={(e)=>{
                        setSubject({...subject, subjectFaculty:e.target.value});
                    }}/></td>
                </tr>
                <tr>
                    <td colSpan={3} align='center'>
                        <button onClick={()=>{
                           
                            setData([...data,subject]);
                            setSubject({
                                subjectCode:"",
                                subjectName:"",
                                subjectFaculty:""
                            })
                        }}>Add</button>
                    </td>
                </tr>
            </table>

            <table className='table'>
                {subjectFormated}
            </table>
        </>
    );
  
}

export default CrudOperation