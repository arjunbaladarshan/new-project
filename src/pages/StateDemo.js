import { useState } from "react";

function StateDemo(){
    let [count, setCount] = useState(200);
    return(
        <>
            <h1> Current Count = { count } </h1>
            <button className="btn btn-primary" onClick={()=>{
                setCount(count+10);
            }}>Increment</button>

            <button className="btn btn-info" onClick={()=>{
                setCount(count-10);
            }}>Decrement</button>

            <br/>

            <img width={count} src={"https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/8---28-04-2023-02-06-25.jpg"} />

        </>
    );
}

export default StateDemo;