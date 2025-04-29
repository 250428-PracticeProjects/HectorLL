import React, { useEffect, useState } from 'react'
import { createUser, deleteUser, getUsersDB } from '../Services/User';
import { User } from '../Models/User';
import { Link, useNavigate } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

export const Users = () => {

  const navigate = useNavigate();
  const [user,setUser] = useState<User[]>([]);
  const [name,setName] = useState<string>('');
  const [lastName,setLasname] = useState<string>('');
  const [age,setAge] = useState<string>('');
  

  useEffect(() => {
    getUsers();
  },[])

  const getUsers = async () => {
    try{
    const response = await getUsersDB();
     const usersList =  await response.json();
     setUser(usersList);
    }
    catch(error){
      console.error('Error fetching users:', error);
    }
  }

  const handleClickDelete = async (id: number) => {
    try{
      const deletefech = await deleteUser(id);
      const deletedUser = await deletefech.json();
      if(deletefech.ok){
        alert("User deleted successfully");
        getUsers();
        // navigate("/");
      }else{
        alert("Error deleting user");
      }
    }catch(error){
  console.error("Error deleting user "+error);
    }

  }

  const handleClickCreateUser = async () => {
    try{
      const newUser:User={
        name:name,
        lastName:lastName,
        age:Number(age)
      }
      const response = await createUser(newUser);
      if (response.ok){
        alert("User created successfully");
        getUsers();
        // navigate("/");
      }else{
        alert("Error creating user");
      }
    }
    catch(error){
      alert("Error creating user"+error);
    }
  }

  const handleOnNameChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setName(event.target.value);
  }

  const handleLastNameChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setLasname(event.target.value);
  }

  const handleAgeChange = (even:React.ChangeEvent<HTMLInputElement>)=>{
    setAge(even.target.value);
  }

  return (
    <>
        <h2>Users</h2>
        <hr />
        <h3>create user</h3>
      <table className='table table-striped'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last nane</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="text" className='form-control'placeholder='name' onChange={handleOnNameChange}/></td>
              <td><input type="text" className='form-control'placeholder='last name'onChange={handleLastNameChange}/></td>
              <td><input type="text" className='form-control'placeholder='age' onChange={handleAgeChange}/></td>
            </tr>
          </tbody>
        </table>
        <button className='btn btn-primary' onClick={handleClickCreateUser}>Add</button>
        <br />
        <hr />
      <table className='table table-striped'>
        <thead>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>
        </thead>
        <tbody >
        {user.map((user) => (
            <tr>
              <td>{user.idUser}</td>
              <td>{user.name}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
                <td><Link to={`editusers/${user.idUser}`} className='btn btn-primary'>Edit</Link></td>
                <td><button onClick={ () => handleClickDelete(user.idUser)} className='btn btn-danger'>Delete</button></td>
            </tr>
            ))}
        </tbody>
    </table>
    </>
  )
}
