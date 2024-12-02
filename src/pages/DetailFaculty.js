import React from 'react';
import { Link, useParams } from 'react-router-dom';

const DetailFaculty = () => {
    const students = [
        {
            name:"arjun",
            email:"asdf@asdf.com",
            mobile:123123123,
            spi:1.2,
      image:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/6---28-04-2023-02-06-07.jpg"
        },
        {
            name:"bala",
            email:"bala@asdf.com",
            mobile:3213213123,
            spi:2.3,
      image:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg"
        },
        {
            name:"darshan",
            email:"darshan@asdf.com",
            mobile:345345345345,
            spi:1.8,
      image:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/8---28-04-2023-02-06-25.jpg"
        },
    {
            name:"bala",
            email:"bala@asdf.com",
            mobile:3213213123,
            spi:2.3,
      image:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/3---28-04-2023-02-02-42.jpg"
        },
        {
            name:"darshan",
            email:"darshan@asdf.com",
            mobile:345345345345,
            spi:1.8,
      image:"https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/8---28-04-2023-02-06-25.jpg"
        },
    ];
    const { id } = useParams();
  return (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col-3'>
                    <img className='img-fluid' src={students[id].image} />
                </div>
                <div className='col'>
                    <h1>{students[id].name}</h1>
                    <h2>{students[id].email}</h2>
                    <h3>{students[id].spi}</h3>
                    <Link to="/faculties" className='btn btn-info'>Back</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default DetailFaculty