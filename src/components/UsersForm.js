import axios from 'axios';
import React, { useState, useEffect } from 'react';

import '../styles/usersForm.css';

const UsersForm = ({
    getUsers, 
    selectedUser, 
    setSelectedUser, 
    button, 
    setShow,
    showCreate,
    setShowCreate,
    showEdit,
    setShowEdit,
    showDelete,
    setShowDelete,
    content1,
    content2
}) => {

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
        }
    }, [selectedUser]);

    const submit = (e) => {
        e.preventDefault()
        if(selectedUser){
            if(selectedUser[1]==="put"){
                axios.put(`https://users-crud1.herokuapp.com/users/${selectedUser[0].id}/`, user)
                .then(()=>{
                    empty()
                    setSelectedUser([])
                    setShowEdit(false)
                })
            }else if(selectedUser[1]==="delete"){
                axios.delete(`https://users-crud1.herokuapp.com/users/${selectedUser[0].id}/`, user)
                setSelectedUser([])
                setShowDelete(false)
            }else{
                axios.post('https://users-crud1.herokuapp.com/users/', user)
                .then(() => {
                    empty()
                    setShowCreate(false)
                })}
            getUsers()
            setShow(false)
        }
        }

    
    return (
        <form onSubmit={submit} className="form">

            {
                (showCreate || showEdit) &&
                    <div>
                        <div className="input-container">
                            <label className='field' htmlFor="name">Name</label>
                            <br />
                            <div className="placeholder">
                                <input
                                    className='info'
                                    type="text" 
                                    id="name"
                                    onChange={(e)=>setName(e.target.value)}
                                    value={name}
                                />
                            </div>
                        </div>

                        <div className="input-container">
                            <label className='field' htmlFor="lastName">Last Name</label>
                            <br />
                            <div className="placeholder">
                                <input
                                    className='info'
                                    type="text" 
                                    id="lastName"
                                    onChange={(e)=>setLastName(e.target.value)}
                                    value={lastName}
                                />
                            </div>
                        </div>

                        <div className="input-container">
                            <label className='field' htmlFor="email">Email</label>
                            <br />
                            <div className="placeholder">
                                <input
                                    className='info'
                                    type="email" 
                                    id="email"
                                    onChange={(e)=>setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>
                        </div>

                        <div className="input-container">
                            <label className='field' htmlFor="password">Password</label>
                            <br />
                            <div className="placeholder">
                                <input
                                    className='info'
                                    type="password" 
                                    id="password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                    value={password}
                                />
                            </div>
                        </div>

                        <div className="input-container">
                            <label className='field' htmlFor="birthday">Birthday</label>
                            <br />
                            <div className="placeholder">
                                <input
                                    className='info'
                                    type="date" 
                                    id="birthday"
                                    onChange={(e)=>setBirthday(e.target.value)}
                                    value={birthday}
                                />
                            </div>
                        </div>
                    </div>
            }

            {
                showDelete && 
                    <div>
                        <h3>
                            {content1} {selectedUser[0].first_name} {selectedUser[0].last_name} {content2}
                        </h3>
                    </div>
            }

            <button className='u-flex u-button uf-button-add-new-user'>
                {button}
            </button>

        </form>
    );
};

export default UsersForm;