import React, { useState } from 'react'

const DemoCalc = () => {
    let [data,setData] = useState("");

    let handleData = (e)=>{
        setData( data + e.target.innerText);
        console.log(data);
    };
    
  return (
    <>
        <table>
            <tr>
                <td colSpan={4}>
                    <h3>{data}</h3>
                </td>
            </tr>
            <tr>
                <td><button onClick={handleData}>1</button></td>
                <td><button onClick={handleData}>2</button></td>
                <td><button onClick={handleData}>3</button></td>
                <td><button onClick={handleData}>+</button></td>
            </tr>
            <tr>
                <td><button onClick={handleData}>4</button></td>
                <td><button onClick={handleData}>5</button></td>
                <td><button onClick={handleData}>6</button></td>
                <td><button onClick={handleData}>-</button></td>
            </tr>
            <tr>
                <td><button onClick={handleData}>7</button></td>
                <td><button onClick={handleData}>8</button></td>
                <td><button onClick={handleData}>9</button></td>
                <td><button onClick={handleData}>*</button></td>
            </tr>
            <tr>
                <td><button onClick={handleData}>0</button></td>
                <td><button onClick={handleData}>.</button></td>
                <td><button onClick={handleData}>/</button></td>
                <td><button onClick={()=>{
                    let ans = eval(data);
                    setData(ans);
                }}>=</button></td>
            </tr>
        </table>
    </>
  )
}

export default DemoCalc;