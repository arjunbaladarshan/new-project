import React, { useState } from 'react'

const CrudOperation = () => {
    let [subjects, setSubjects] = useState(["OS",".net"]);
    const [data,setData] = useState("");

    let foramtedSubjects = subjects.map((sub, id)=>{
        return (
            <>
                <tr><td>{sub}</td> <td> <button className='btn btn-danger' onClick={()=>{
                    subjects.splice(id,1)
                    setSubjects([...subjects]);
                }}>Delete</button></td></tr>
            </>
        );
    })


    return(
        <>
            Enter Name: 
            <input type='text' value={data} onChange={(e=>{
                setData(e.target.value);
            })} />
            <button onClick={()=>{
                setSubjects([...subjects, data]);
                setData("");
            }}>
                Add
            </button>
            <table>
                {foramtedSubjects}
            </table>
        </>
    );
  
}

export default CrudOperation