import React from 'react';
import UsersForm from './UsersForm';

const CreateUser = ({getUsers,selectedUser,setSelectedUser}) => {
    return (
        <div>
            <UsersForm 
                getUsers={getUsers} 
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
            />
        </div>
    );
};

export default CreateUser;