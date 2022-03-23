import axios from 'axios';
import React, { useState, useEffect } from 'react';

import '../styles/usersForm.css';
import u from '../utilities/u';

const UsersForm = ({getUsers, selectedUser, setSelectedUser}) => {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState("");

    const user = {
        email,
        password,
        first_name: name,
        last_name: lastName,
        birthday
    }

    
    const empty = () =>{
        setName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setBirthday("")
    }

    useEffect(() => {
        if(selectedUser){
            if(selectedUser[1]==="put"){
                setName(selectedUser[0].first_name)
                setLastName(selectedUser[0].last_name)
                setEmail(selectedUser[0].email)
                setPassword(selectedUser[0].password)
                setBirthday(selectedUser[0].birthday)
            }
            if(selectedUser[1]==="delete"){
                axios.delete(`https://users-crud1.herokuapp.com/users/${selectedUser[0].id}/`, user)
                setSelectedUser([])
                getUsers()
            }
        }
    }, [selectedUser]);

    const submit = (e) => {
        e.preventDefault()
        if(selectedUser){
            if(selectedUser[1]==="put"){
                axios.put(`https://users-crud1.herokuapp.com/users/${selectedUser[0].id}/`, user)
                .then(()=>{
                    getUsers()
                    empty()
                    setSelectedUser([])
                })
            }else{
                axios.post('https://users-crud1.herokuapp.com/users/', user)
                .then(() => {
                    getUsers()
                    empty()
                })}
        }
        }

    
    return (
        <form onSubmit={submit} className="form">

            <div className="input-container">
                <label htmlFor="name">Name</label>
                <input
                    type="text" 
                    id="name"
                    onChange={(e)=>setName(e.target.value)}
                    value={name}
                />
            </div>

            <div className="input-container">
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text" 
                    id="lastName"
                    onChange={(e)=>setLastName(e.target.value)}
                    value={lastName}
                />
            </div>

            <div className="input-container">
                <label htmlFor="email">Email</label>
                <input
                    type="email" 
                    id="email"
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                />
            </div>

            <div className="input-container">
                <label htmlFor="password">Password</label>
                <input
                    type="password" 
                    id="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                />
            </div>

            <div className="input-container">
                <label htmlFor="birthday">Birthday</label>
                <input
                    type="date" 
                    id="birthday"
                    onChange={(e)=>setBirthday(e.target.value)}
                    value={birthday}
                />
            </div>

            <button className='u-flex u-button uf-button-add-new-user'>
                <p className='uf-add-new-user'>Add new user</p>
            </button>

        </form>
    );
};

export default UsersForm;