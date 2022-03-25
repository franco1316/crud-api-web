import React from 'react';
import CreateUser from './CreateUser';
import DeleteUser from './DeleteUser';
import EditUser from './EditUser';

const Module = ({
    title,
    setShow,
    showCreate,
    setShowCreate,
    showEdit,
    setShowEdit,
    showDelete,
    setShowDelete,
    getUsers,
    selectedUser,
    setSelectedUser
}) => {
    return (
        <>
            <div className='bg-window'>
                <div className='window'>
                    <header className='header'>
                        <h2 className='window-title'>
                            <b>{title}</b>
                        </h2>
                        
                    </header>
                    <button className='close'
                        onClick={()=>{
                            setShow(false)
                            setShowCreate(false)
                        }}
                    >
                            X
                    </button>
                    
                    {   
                        showCreate &&
                            <CreateUser
                                getUsers={getUsers} 
                                selectedUser={selectedUser}
                                setSelectedUser={setSelectedUser}
                                setShow={setShow}
                                showCreate={showCreate}
                                setShowCreate={setShowCreate}
                            />
                    }

                    {
                        showEdit &&
                            <EditUser
                                getUsers={getUsers} 
                                selectedUser={selectedUser}
                                setSelectedUser={setSelectedUser}
                                setShow={setShow}
                                showEdit={showEdit}
                                setShowEdit={setShowEdit}
                            />
                    }

                    {
                        showDelete &&
                            <DeleteUser
                                getUsers={getUsers} 
                                selectedUser={selectedUser}
                                setSelectedUser={setSelectedUser}
                                setShow={setShow}
                                showDelete={showDelete}
                                setShowDelete={setShowDelete}
                            />
                    }

                </div>
            </div>
            
        </>
    );
};

export default Module;