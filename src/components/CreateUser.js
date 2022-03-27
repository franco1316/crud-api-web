import React from 'react';
import UsersForm from './UsersForm';

const CreateUser = ({
    users,
    getUsers,
    selectedUser,
    setSelectedUser, 
    setShow, 
    showCreate, 
    setShowCreate
}) => {
    return (
        <div>
            <UsersForm 
                setUsers={users}
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