import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const CrudOperation = () => {

    let [data,setData] = useState([
        {subjectName:"React", subjectCode:101, subjectFaculty:"asdf"},
        {subjectName:"OS", subjectCode:102, subjectFaculty: "asdf"},
        {subjectName:".Net", subjectCode:103, subjectFaculty:"gsfdfg"}
    ]);

    useEffect(()=>{
        fetch("https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties")
        .then(res=>res.json())
        .then(res=>setData(res));
    },[]);

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
                </tr>
            </>
        );
    })

    return(
        <>
           
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