import React, { useEffect, useState } from 'react'

const EffectDemo = () => {
    const [count, setCount]= useState(0);
    const [tmp,setTmp] = useState(false);
    useEffect(()=>{
        setInterval(()=>{
            console.log("Hello world")
        },1000)
    },[tmp])

    return (
        <>
            Hiiii
            <h1>Count = {count}</h1>
            <button onClick={()=>{
                setCount(count+1);
            }}>Click</button>
            <button onClick={()=>{
                setTmp(!tmp);
            }}>Tmp</button>
        </>
    )
}

export default EffectDemo