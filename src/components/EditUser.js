import React from 'react';
import UsersForm from './UsersForm';

const EditUser = ({
    users,
    getUsers,
    selectedUser,
    setSelectedUser, 
    setShow, 
    showEdit, 
    setShowEdit
}) => {
    return (
        <div>
            <UsersForm 
                setUsers={users}
                getUsers={getUsers} 
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
                button={"Save changes"}
                setShow={setShow}
                showEdit={showEdit}
                setShowEdit={setShowEdit}
            />
        </div>
    );
};

export default EditUser;