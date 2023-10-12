import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Read = () => {
    const [allUsers, setAllUsers] = useState([])
    
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("alluser")) || [];
        if(storedData.length !==0)
        {
          setAllUsers(storedData);
        }
        else(
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
            setAllUsers(res.data) 
            localStorage.setItem('alluser', JSON.stringify(res.data));
        })
        .catch((err) => {
            console.log(err)
        })
        )
    }, [])
    console.log(allUsers, 'api')
    
    const handleDelete =(uId)=>{

        const updatedUser = allUsers.filter((user) => user.id !== uId)        
        setAllUsers(updatedUser);
        localStorage.setItem('alluser', JSON.stringify(updatedUser));
    }


    return (
        <div>
            <Link to={'/create'} type="button" className='btn btn-success'>Add New User</Link>
            {/* {allUsers.length === 0 ? (
                <p>Loading...</p>
            ) :
            ( */}
            <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                {
                    allUsers.map((user, index) => {
                        return (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td><Link className="btn btn-primary" to={`/update/${user.id}`}>Edit</Link></td>
                                <td><button className="btn btn-primary" type="submit" onClick={()=>{handleDelete(user.id)}}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        {/* )} */}
        </div>
    )
}

export default Read