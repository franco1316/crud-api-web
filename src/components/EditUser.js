import React from 'react';
import UsersForm from './UsersForm';

const EditUser = ({getUsers,selectedUser,setSelectedUser}) => {
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

export default EditUser;