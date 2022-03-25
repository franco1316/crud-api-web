import React from 'react';
import UsersForm from './UsersForm';

const CreateUser = ({getUsers,selectedUser,setSelectedUser, setShow, showCreate, setShowCreate}) => {
    return (
        <div>
            <UsersForm 
                getUsers={getUsers} 
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
                button={"Add new user"}
                setShow={setShow}
                showCreate={showCreate}
                setShowCreate={setShowCreate}
            />
        </div>
    );
};

export default CreateUser;