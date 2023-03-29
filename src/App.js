import './App.css';
import React, { useState, useEffect } from 'react'


function App() {
  const [user, setUser] = useState([]);

  const Getdata = () => {
    const data = fetch(" https://randomuser.me/api/?results=20");
    data.then((res) => {
      res.json().then((result) => {
        console.log(result.results)
        setUser(result.results)
      })
    })
  }

  useEffect(() => {
    Getdata();
  }, [])

  return (
    <div >
      <h2>user Details</h2>

      <table className='table table-success table-striped w-100 '>
        <thead>
          <tr >
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">City</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item, i) => {
              return (
                  <tr key={i}>
                    <td className='w-25'><img src={item.picture.thumbnail} alt='img' /></td>
                    <td className='w-25'>{item.name.first}</td>
                    <td className='w-25'>{item.email}</td>
                    <td className='w-25'>{item.location.city}</td>
                    <td className='w-25'>{item.gender}</td>
                  </tr>
              )})}
        </tbody>
      </table>

    </div>
  );
}

export default App;
