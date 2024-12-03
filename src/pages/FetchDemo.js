import React from 'react'

const FetchDemo = () => {

    const apiUrl = "https://62d6c51451e6e8f06f12bd5d.mockapi.io/faculties/";
    
    fetch(apiUrl).then(res=>res.json()).then(res=>console.log(res));

    return (
        <>
            Hello world
        </>
    )
}

export default FetchDemo